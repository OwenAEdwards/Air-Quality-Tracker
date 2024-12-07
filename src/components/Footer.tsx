import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '16px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Air Quality Tracker. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="#" color="primary" underline="hover" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="primary" underline="hover" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" color="primary" underline="hover" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
