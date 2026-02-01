import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ServiceAreaMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Dane County at zoom level 10
    const map = L.map(mapRef.current, {
      center: [43.07, -89.4],
      zoom: 10,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Define the boundary polygon covering all specified cities in Dane County
    // Points ordered clockwise: Cross Plains, Verona, Fitchburg, Oregon, Stoughton, 
    // Cottage Grove, Deerfield, Marshall, Sun Prairie, DeForest, Windsor back to Cross Plains
    const daneCountyBoundary: L.LatLngExpression[] = [
      [43.1145, -89.6565], // Cross Plains (west)
      [43.0000, -89.6400], // Verona (southwest)
      [42.9600, -89.4700], // Fitchburg (south-southwest)
      [42.9260, -89.3850], // Oregon (south)
      [42.9170, -89.2180], // Stoughton (southeast)
      [42.9500, -89.1500], // Deerfield area (east-southeast)
      [43.0760, -89.2000], // Cottage Grove (east)
      [43.1680, -89.0680], // Marshall (far east)
      [43.1830, -89.2140], // Sun Prairie (northeast)
      [43.2480, -89.3450], // DeForest (north)
      [43.2440, -89.4380], // Windsor (north-northwest)
      [43.1800, -89.5500], // Back toward Cross Plains
      [43.1145, -89.6565], // Close the polygon at Cross Plains
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
