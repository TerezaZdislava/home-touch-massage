import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    return localStorage.getItem('mapboxToken') || '';
  });
  const [tokenInput, setTokenInput] = useState<string>(mapboxToken);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    // Clean up existing map
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    try {
      mapboxgl.accessToken = token;
      
      // Center coordinates for the service area (example: downtown area)
      const centerLng = -122.4194; // San Francisco as example
      const centerLat = 37.7749;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [centerLng, centerLat],
        zoom: 10,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add a marker at the center
      new mapboxgl.Marker({ color: '#8B7355' })
        .setLngLat([centerLng, centerLat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3 style="margin:0;color:#8B7355;">Service Center</h3><p style="margin:4px 0 0 0;">30-mile service radius</p>')
        )
        .addTo(map.current);

      // Add a circle to show the 30-mile radius
      map.current.on('load', () => {
        if (!map.current) return;

        // Convert 30 miles to approximate degrees (1 degree ≈ 69 miles)
        const radiusInDegrees = 30 / 69;
        const circlePoints = 64;
        const coordinates: [number, number][] = [];

        for (let i = 0; i < circlePoints; i++) {
          const angle = (i / circlePoints) * 2 * Math.PI;
          const lng = centerLng + radiusInDegrees * Math.cos(angle);
          const lat = centerLat + radiusInDegrees * Math.sin(angle);
          coordinates.push([lng, lat]);
        }
        coordinates.push(coordinates[0]); // Close the circle

        map.current.addSource('service-area', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [coordinates],
            },
            properties: {},
          },
        });

        map.current.addLayer({
          id: 'service-area-fill',
          type: 'fill',
          source: 'service-area',
          paint: {
            'fill-color': '#8B7355',
            'fill-opacity': 0.15,
          },
        });

        map.current.addLayer({
          id: 'service-area-outline',
          type: 'line',
          source: 'service-area',
          paint: {
            'line-color': '#8B7355',
            'line-width': 2,
            'line-opacity': 0.8,
          },
        });

        setIsMapLoaded(true);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setIsMapLoaded(false);
    }
  };

  const handleSaveToken = () => {
    localStorage.setItem('mapboxToken', tokenInput);
    setMapboxToken(tokenInput);
    initializeMap(tokenInput);
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <Card className="bg-background border-border shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Interactive Map Setup
            </h3>
            <p className="text-muted-foreground text-sm">
              To display an interactive service area map, please enter your Mapbox public token.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
              <Input
                id="mapbox-token"
                type="text"
                placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleSaveToken} 
              className="w-full"
              disabled={!tokenInput.trim()}
            >
              Load Map
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Get your free token at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
      <div 
        ref={mapContainer} 
        className="w-full h-[500px]"
        style={{ opacity: isMapLoaded ? 1 : 0.5 }}
      />
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
