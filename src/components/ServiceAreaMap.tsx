import { MapPin } from "lucide-react";

// Using OpenStreetMap iframe embed as a free alternative
const ServiceAreaMap = () => {
  // Center coordinates for Rotterdam city center, Netherlands
  const centerLat = 51.9225;
  const centerLng = 4.47917;
  
  // Create a static Google Maps embed URL as a free alternative
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${centerLng-0.5},${centerLat-0.5},${centerLng+0.5},${centerLat+0.5}&layer=mapnik&marker=${centerLat},${centerLng}`;

  return (
    <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full h-[500px] relative">
        <iframe
          src={mapUrl}
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            borderRadius: '1rem 1rem 0 0'
          }}
          title="Service Area Map"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(139, 115, 85, 0.1) 100%)',
          }}
        />
      </div>
      
      <div className="p-8 text-center">
        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
        <p className="text-lg text-foreground leading-relaxed mb-4">
          I serve Rotterdam city center and surrounding neighborhoods within a 30 km radius.
        </p>
        <p className="text-sm text-muted-foreground">
          Neem contact op om te bevestigen dat ik uw locatie bedien!
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
