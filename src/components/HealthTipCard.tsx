import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface HealthTipCardProps {
  title: string;
  description: string;
  icon?: string; // Optional image or icon
}

const HealthTipCard: React.FC<HealthTipCardProps> = ({ title, description, icon }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px auto' }}>
      {icon && (
        <CardMedia
          component="img"
          alt={title}
          image={icon}
          sx={{ 
            height: 180, // Adjusted to fit the image better
            width: '100%', // Make the width take the full card width
            objectFit: 'contain', // Ensures the image fits inside the container
            borderTopLeftRadius: 4, // For rounded corners
            borderTopRightRadius: 4,
           }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HealthTipCard;
