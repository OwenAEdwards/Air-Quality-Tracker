import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AQISummary from './components/AQISummary';
import AirQualityMap from './components/AirQualityMap';
import HealthTipCard from './components/HealthTipCard';
import { Cloud } from '@mui/icons-material';

const App: React.FC = () => {
  const aqiData = {
    aqi: 85,
    location: 'Los Angeles, CA',
    status: 'Moderate',
  };

  const mapData = [
    { name: 'Los Angeles, CA', aqi: 85, coordinates: [34.0522, -118.2437] as [number, number] },
    { name: 'New York, NY', aqi: 60, coordinates: [40.7128, -74.006] as [number, number] },
    { name: 'Chicago, IL', aqi: 70, coordinates: [41.8781, -87.6298] as [number, number] },
  ];

  const healthTips = [
    {
      title: 'Limit Outdoor Activities',
      description: 'Avoid prolonged outdoor exertion, especially if you experience respiratory discomfort.',
      icon: '../src/assets/limit-outdoor.jpg',
    },
    {
      title: 'Use Air Purifiers',
      description: 'Consider using an air purifier indoors to maintain good air quality.',
      icon: '../src/assets/air-purifier.jpg',
    },
    {
      title: 'Wear Masks Outdoors',
      description: 'Wear masks designed to filter particles when outdoor air quality is poor.',
      icon: '../src/assets/mask.png',
    },
  ];

  return (
    <>
      <Header />
      <div style={{ padding: '16px' }}>
        <AQISummary aqi={aqiData.aqi} location={aqiData.location} status={aqiData.status} Icon={Cloud} />
        <AirQualityMap locations={mapData} />
        <div style={{ marginTop: '32px' }}>
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
      </div>
      <Footer />
    </>
  );
};

export default App;
