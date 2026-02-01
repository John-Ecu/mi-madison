import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Dane County at zoom level 9 to show full county
    const map = L.map(mapRef.current, {
      center: [43.05, -89.4],
      zoom: 9,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Full Dane County boundary polygon (clockwise from northwest)
    // Includes: Waunakee, DeForest, Sun Prairie, Cottage Grove, Deerfield, 
    // Stoughton, Edgerton edge, Oregon, Fitchburg, Verona, Cross Plains, Middleton, Madison
    const daneCountyBoundary: L.LatLngExpression[] = [
      // Northwest - Black Earth/Mazomanie area
      [43.18, -89.75],
      // North - Waunakee
      [43.30, -89.45],
      // Northeast - DeForest/Windsor
      [43.32, -89.30],
      // East - Sun Prairie
      [43.20, -89.10],
      // East - Cottage Grove/Deerfield
      [43.08, -89.00],
      // Southeast - near Cambridge
      [42.95, -89.00],
      // South - Stoughton
      [42.88, -89.15],
      // South - edge of Edgerton
      [42.78, -89.30],
      // Southwest - Oregon area
      [42.85, -89.50],
      // West - Verona/Fitchburg
      [42.90, -89.65],
      // West - Cross Plains
      [43.05, -89.75],
      // Northwest - Middleton
      [43.12, -89.70],
      // Close polygon
      [43.18, -89.75],
    ];

    // Create the red dotted polygon
    L.polygon(daneCountyBoundary, {
      color: "#dc2626", // Red color
      weight: 3,
      opacity: 1,
      fillColor: "#dc2626",
      fillOpacity: 0.1,
      dashArray: "10, 10", // Dotted line pattern
    }).addTo(map);

    // Add a marker for Madison (center)
    L.marker([43.0731, -89.4012])
      .addTo(map)
      .bindPopup("<strong>M & I Professionals</strong><br>Serving all of Dane County");

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
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
