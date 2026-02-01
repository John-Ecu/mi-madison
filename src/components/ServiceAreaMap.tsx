/// <reference types="google.maps" />
import { useEffect, useRef } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyCttE6amQtwxH2kw_iaoWmUwYdJ_QmhKco";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Load Google Maps script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      if (!mapRef.current) return;

      // Initialize map centered on Dane County
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 43.05, lng: -89.35 },
        zoom: 9,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      mapInstanceRef.current = map;

      // Big rectangle covering Dane County service area
      // Includes: Middleton, Verona, Fitchburg, McFarland, Cottage Grove, 
      // Windsor, Waunakee, Sun Prairie, Marshall, Cross Plains, edge of Edgerton
      const daneCountyBounds = [
        { lat: 43.32, lng: -89.75 }, // Northwest corner (Cross Plains/Waunakee)
        { lat: 43.32, lng: -89.00 }, // Northeast corner (Marshall/Sun Prairie)
        { lat: 42.78, lng: -89.00 }, // Southeast corner (edge of Edgerton)
        { lat: 42.78, lng: -89.75 }, // Southwest corner (Verona area)
      ];

      // Create highlighted rectangle polygon
      const polygon = new google.maps.Polygon({
        paths: daneCountyBounds,
        strokeColor: "#dc2626",
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: "#dc2626",
        fillOpacity: 0.15,
      });
      polygon.setMap(map);

      // Add marker for Madison (center)
      new google.maps.Marker({
        position: { lat: 43.0731, lng: -89.4012 },
        map: map,
        title: "M & I Professionals - Serving all of Dane County",
      });
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        existingScript.remove();
      }
      delete (window as any).initMap;
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[300px] rounded-b-lg z-0"
      style={{ background: "#e5e7eb" }}
    />
  );
};

export default ServiceAreaMap;
