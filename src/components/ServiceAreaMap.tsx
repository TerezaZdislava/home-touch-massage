import React from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import { MapPin } from "lucide-react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const ServiceAreaMap = () => {
  // Center coordinates for the service area (example: San Francisco)
  const centerLat = 37.7749;
  const centerLng = -122.4194;
  const radiusInMeters = 48280; // 30 miles in meters (1 mile = 1609.34 meters)

  return (
    <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full h-[500px]">
        <MapContainer 
          center={[centerLat, centerLng]} 
          zoom={10} 
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Service area radius circle */}
          <Circle
            center={[centerLat, centerLng]}
            radius={radiusInMeters}
            pathOptions={{
              color: '#8B7355',
              fillColor: '#8B7355',
              fillOpacity: 0.15,
              weight: 2,
            }}
          />
          
          {/* Center marker */}
          <Marker position={[centerLat, centerLng]}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-primary mb-1">Service Center</h3>
                <p className="text-sm">30-mile service radius</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      <div className="p-8 text-center">
        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
        <p className="text-lg text-foreground leading-relaxed mb-4">
          I serve the greater metropolitan area and surrounding communities within a 30-mile radius.
        </p>
        <p className="text-sm text-muted-foreground">
          Contact me to confirm I serve your location!
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
