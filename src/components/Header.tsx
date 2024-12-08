import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-scroll'; // For smooth scrolling

const Header: React.FC = () => {
  const aqiImage = './images/aqi.jpg';

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title and Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={aqiImage}
            alt="AQI Icon"
            style={{ width: 40, height: 40, marginRight: 8, borderRadius: '50%' }}
          />
          <Typography variant="h6" component="div">
            Air Quality Tracker
          </Typography>
        </Box>
        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="aqi-summary"
            smooth={true}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px', cursor: 'pointer' }}
          >
            AQI Summary
          </Link>
          <Link
            to="air-quality-map"
            smooth={true}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px', cursor: 'pointer' }}
          >
            Air Quality Map
          </Link>
          <Link
            to="health-tips"
            smooth={true}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px', cursor: 'pointer' }}
          >
            Health Tips
          </Link>
          <Link
            to="more-info"
            smooth={true}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
          >
            More Information
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
