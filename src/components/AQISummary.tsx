import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface AQISummaryProps {
  aqi: number;
  location: string;
  status: string;
  Icon?: SvgIconComponent; // Optional icon component
}

const AQISummary: React.FC<AQISummaryProps> = ({ aqi, location, status, Icon }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '16px auto', boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {Icon && <Icon fontSize="large" />}
          <Box>
            <Typography variant="h5" component="div">
              {location}
            </Typography>
            <Typography color="text.secondary">{status}</Typography>
          </Box>
        </Box>
        <Typography variant="h4" sx={{ mt: 2 }}>
          AQI: {aqi}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AQISummary;
