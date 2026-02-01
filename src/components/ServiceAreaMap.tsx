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

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 43.05, lng: -89.4 },
        zoom: 9,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      mapInstanceRef.current = map;

      // Red dotted boundary covering: Waunakee, DeForest, Sun Prairie, Cottage Grove,
      // Deerfield, Stoughton, Edgerton edge, Oregon, Fitchburg, Verona, Cross Plains, Middleton, Madison
      const daneCountyBoundary = [
        { lat: 43.18, lng: -89.75 }, // Cross Plains (west)
        { lat: 43.30, lng: -89.45 }, // Waunakee (north)
        { lat: 43.32, lng: -89.30 }, // DeForest (north)
        { lat: 43.20, lng: -89.10 }, // Sun Prairie (east)
        { lat: 43.08, lng: -89.00 }, // Cottage Grove / Deerfield (east)
        { lat: 42.95, lng: -89.00 }, // Deerfield (southeast)
        { lat: 42.88, lng: -89.15 }, // Stoughton (south)
        { lat: 42.78, lng: -89.30 }, // Edgerton edge (south)
        { lat: 42.85, lng: -89.50 }, // Oregon (southwest)
        { lat: 42.90, lng: -89.65 }, // Fitchburg / Verona (west)
        { lat: 43.05, lng: -89.75 }, // Verona (west)
        { lat: 43.12, lng: -89.70 }, // Middleton (northwest)
      ];

      // Red dotted polygon
      new google.maps.Polygon({
        paths: daneCountyBoundary,
        strokeColor: "#dc2626",
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: "#dc2626",
        fillOpacity: 0.1,
        map: map,
      });

      // Madison marker
      new google.maps.Marker({
        position: { lat: 43.0731, lng: -89.4012 },
        map: map,
        title: "M & I Professionals - Serving Dane County",
      });
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) existingScript.remove();
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
