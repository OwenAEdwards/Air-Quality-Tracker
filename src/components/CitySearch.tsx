import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface CitySearchProps {
  onSearch: (city: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
      setCity(''); // Clear the input after search
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
      <TextField
        label="Search City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown} // Add onKeyDown event for Enter key
        sx={{ flex: 1 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default CitySearch;
