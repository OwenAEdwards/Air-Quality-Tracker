import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface LocationData {
  name: string;
  aqi: number;
  coordinates: [number, number];
}

interface AirQualityMapProps {
  locations: LocationData[];
}

const AirQualityMap: React.FC<AirQualityMapProps> = ({ locations }) => {
  const defaultCenter: [number, number] = [39.8283, -98.5795]; // Default center: USA
  const defaultZoom = 4;

  useEffect(() => {
    // Ensure Leaflet marker icons are loaded properly
    const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Use CDN for default marker icon
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Shadow URL (use CDN)
      shadowSize: [41, 41],
    });

    // Make sure icons are loaded before rendering markers
    L.Marker.prototype.options.icon = icon;
  }, []);

  return (
    <Box sx={{ height: '400px', margin: '16px auto', maxWidth: '800px' }}>
      <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.coordinates}>
            <Popup>
              <strong>{location.name}</strong>
              <br />
              AQI: {location.aqi}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default AirQualityMap;
