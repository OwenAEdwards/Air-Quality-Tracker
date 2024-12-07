import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      {/* Header Component */}
      <Header />
      {/* Main Content */}
      <div style={{ padding: '16px' }}>
        <h1>Welcome to the Air Quality Tracker</h1>
        <p>Track air quality dynamically to make informed decisions and stay healthy.</p>
      </div>
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default App;
