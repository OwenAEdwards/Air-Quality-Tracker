import React from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
