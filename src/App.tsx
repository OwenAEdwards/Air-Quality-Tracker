import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AQISummary from './components/AQISummary';
import AirQualityMap from './components/AirQualityMap';
import HealthTipCard from './components/HealthTipCard';
import CitySearch from './components/CitySearch';
import { Cloud } from '@mui/icons-material';
import axios from 'axios';

const App: React.FC = () => {
  // State to store AQI data
  const [aqiData, setAqiData] = useState({
    aqi: 1,
    location: 'Los Angeles',
    status: 'Moderate',
  });

  // State to store map markers
  const [mapData, setMapData] = useState([
    { name: 'Los Angeles, CA', aqi: 4, coordinates: [34.0522, -118.2437] as [number, number] },
    { name: 'New York, NY', aqi: 2, coordinates: [40.7128, -74.006] as [number, number] },
    { name: 'Chicago, IL', aqi: 2, coordinates: [41.8781, -87.6298] as [number, number] },
  ]);

  // State for health tips
  const [healthTips] = useState([
    {
      title: 'Limit Outdoor Activities',
      description: 'Avoid prolonged outdoor exertion, especially if you experience respiratory discomfort.',
      icon: 'images/limit-outdoor.jpg',
    },
    {
      title: 'Use Air Purifiers',
      description: 'Consider using an air purifier indoors to maintain good air quality.',
      icon: 'images/air-purifier.jpg',
    },
    {
      title: 'Wear Masks Outdoors',
      description: 'Wear masks designed to filter particles when outdoor air quality is poor.',
      icon: 'images/mask.png',
    },
  ]);

  // Import API key
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  // Function to handle city search and fetch AQI data
  const fetchCityAQI = async (city: string) => {
    try {
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );

      const { lat, lon, name } = geoResponse.data[0];
      const aqiResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      const aqi = aqiResponse.data.list[0].main.aqi;

      // Update AQI summary
      setAqiData({
        aqi,
        location: name,
        status:
          aqi <= 3
            ? 'Low Risk: Ideal air quality for outdoor activities.'
            : aqi <= 6
            ? 'Moderate Risk: Consider reducing strenuous activities if experiencing symptoms.'
            : aqi <= 10
            ? 'High Risk: Reduce strenuous activities; children and the elderly should take it easy.'
            : 'Very High Risk: Avoid strenuous activities; children and the elderly should avoid exertion.',
      });

      // Add marker to the map
      setMapData((prev) => [
        ...prev,
        { name, aqi, coordinates: [lat, lon] as [number, number] },
      ]);
    } catch (error) {
      console.error('Error fetching AQI data:', error);
    }
  };

  return (
    <>
      <Header />
      {/* Main Content */}
      <div style={{ padding: '16px' }}>
        <h1>Welcome to the Air Quality Tracker</h1>
        <p>Track air quality dynamically to make informed decisions and stay healthy.</p>

        {/* City Search */}
        <CitySearch onSearch={fetchCityAQI} />
      </div>

      {/* Sections of the page */}
      <div id="aqi-summary" style={{ padding: '16px' }}>
        <AQISummary aqi={aqiData.aqi} location={aqiData.location} status={aqiData.status} Icon={Cloud} />
      </div>

      <div id="air-quality-map" style={{ padding: '16px' }}>
        <AirQualityMap locations={mapData} />
      </div>

      <div id="health-tips" style={{ padding: '16px' }}>
        <h2>Health Tips</h2>
        {healthTips.map((tip, index) => (
          <HealthTipCard
            key={index}
            title={tip.title}
            description={tip.description}
            icon={tip.icon}
          />
        ))}
      </div>

      <div id="more-info" style={{ padding: '16px' }}>
        <h2>More Information</h2>
        <p>Details about air quality and its effects on health.</p>
      </div>

      <Footer />
    </>
  );
};

export default App;
