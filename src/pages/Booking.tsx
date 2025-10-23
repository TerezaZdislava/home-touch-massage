import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react";

// TypeScript declaration for Google reCAPTCHA
declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
    notes: "",
    honeypot: "", // Honeypot field for spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================================
  // CONFIGURATION: Replace with your Google reCAPTCHA v3 site key
  // Get your site key from: https://www.google.com/recaptcha/admin
  // Choose reCAPTCHA v3 for invisible protection
  // ============================================================
  const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY_HERE";

  // Load reCAPTCHA script when component mounts
  useEffect(() => {
    // Only load if site key is configured
    if (RECAPTCHA_SITE_KEY !== "YOUR_RECAPTCHA_SITE_KEY_HERE") {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        // Cleanup script on unmount
        document.head.removeChild(script);
      };
    }
  }, []);

  const services = [
    "Sports Massage - $80 (60 min)",
    "Anti-Stress Massage - $75 (60 min)",
    "Custom Massage - $85 (60 min)",
    "Couples Massage - $120 (60 min each)",
    "Deep Tissue Regeneration - $110 (90 min)",
    "Aroma Relax Massage - $80 (60 min)",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field - if filled, it's a bot
    if (formData.honeypot) {
      toast.error("Spam detected. Please try again.");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // ============================================================
      // CONFIGURATION: Replace with your Web3Forms access key
      // Get your free access key from: https://web3forms.com
      // ============================================================
      const WEB3FORMS_ACCESS_KEY = "ad3f057d-f739-4286-8775-08238380f147";

      // Get reCAPTCHA token (if configured)
      let recaptchaToken = "";
      if (window.grecaptcha && RECAPTCHA_SITE_KEY !== "YOUR_RECAPTCHA_SITE_KEY_HERE") {
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
      }

      // Prepare form data for Web3Forms
      const submitData = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Booking Request - ${formData.service}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        address: formData.address,
        notes: formData.notes || "None",
        "g-recaptcha-response": recaptchaToken, // reCAPTCHA token
      };

      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you! Your booking request has been sent successfully. We'll confirm within 24 hours.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          address: "",
          notes: "",
          honeypot: "",
        });
      } else {
        throw new Error(result.message || "Failed to send booking request");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send booking request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Session
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and I'll confirm your appointment within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Booking Form */}
            <Card className="lg:col-span-2 border-border shadow-lg">
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a massage service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Preferred Time *
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Your Address *
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="123 Main Street, Apt 4B, City, State, ZIP"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific concerns, preferences, or special requests..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                    />
                  </div>

                  {/* Honeypot field - hidden from users, only bots will fill this */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Booking Request"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. I'll confirm availability via email within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-border shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>✓ I bring all equipment (table, towels, oils)</p>
                  <p>✓ Please provide a quiet, private space</p>
                  <p>✓ Room should be warm and comfortable</p>
                  <p>✓ Allow 10 minutes for setup before session</p>
                </CardContent>
              </Card>


              <Card className="border-border shadow-md bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Have questions? Feel free to call or email:</p>
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-primary hover:underline">
                    <Phone className="w-4 h-4" />
                    +1 (234) 567-890
                  </a>
                  <a href="mailto:info@mobilemassage.com" className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="w-4 h-4" />
                    info@mobilemassage.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Policy Section */}
          <section className="py-16 bg-secondary mt-12 rounded-2xl">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-8 text-center">
                Booking Policy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background border-none shadow-sm">
                  <CardContent className="p-6">
                    <Calendar className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-garamond font-semibold mb-3">Scheduling</h3>
                    <p className="text-foreground leading-relaxed">
                      Book at least 24 hours in advance. Same-day appointments may be available upon request.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-sm">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-garamond font-semibold mb-3">Cancellations</h3>
                    <p className="text-foreground leading-relaxed">
                      Please provide 24-hour notice for cancellations to avoid a 50% cancellation fee.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Service Area Section */}
          <section className="py-16 bg-background">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-6">
                Service Area
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I proudly serve the greater metropolitan area and surrounding communities within a 30-mile radius. 
                Not sure if you're in the service area? Contact me and I'll let you know!
              </p>
              <p className="text-muted-foreground italic">
                Travel fees may apply for locations beyond 20 miles from downtown.
              </p>
            </div>
          </section>

          {/* Service Area Map Section */}
          <section className="py-16 bg-card">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-8 text-center">
                Service Area Map
              </h2>
              <ServiceAreaMap />
            </div>
          </section>

          {/* Quick Response Guarantee Section */}
          <section className="py-16 bg-background">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-garamond font-bold text-foreground mb-6">
                Quick Response Guarantee
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                I respond to all inquiries within 24 hours, usually much faster. Your wellness is my priority!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
