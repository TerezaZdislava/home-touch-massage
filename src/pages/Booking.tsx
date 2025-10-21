import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react";

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
  });

  const services = [
    "Sports Massage - $80 (60 min)",
    "Anti-Stress Massage - $75 (60 min)",
    "Custom Massage - $85 (60 min)",
    "Couples Massage - $120 (60 min each)",
    "Deep Tissue Regeneration - $110 (90 min)",
    "Aroma Relax Massage - $80 (60 min)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create email body with booking details
    const emailSubject = encodeURIComponent(`Booking Request - ${formData.service}`);
    const emailBody = encodeURIComponent(
      `New Booking Request\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Address: ${formData.address}\n` +
      `Notes: ${formData.notes || "None"}\n`
    );

    // Open email client with pre-filled booking details
    window.location.href = `mailto:terezka.6@seznam.cz?subject=${emailSubject}&body=${emailBody}`;
    
    toast.success("Opening your email client with booking details!");
    
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
    });
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

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Booking Request
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
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={new URL('../assets/service-area-map.jpg', import.meta.url).href}
                  alt="Service area map showing 30-mile radius coverage"
                  className="w-full h-auto"
                />
                <div className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg text-foreground leading-relaxed">
                    I serve the greater metropolitan area and surrounding communities. Contact me to confirm I serve your location!
                  </p>
                </div>
              </div>
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