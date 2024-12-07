import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu Icon - can be used for navigation in the future */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        {/* App Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Air Quality Tracker
        </Typography>
        {/* Placeholder for future options (e.g., user profile) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Add icons or buttons for additional actions if needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
