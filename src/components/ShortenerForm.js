import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import logger from '../utils/Logger';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert('URL is required');
      logger('Attempted to shorten without entering a URL');
      return;
    }

    onShorten({ url, validity, shortcode });
    logger(`Shorten requested: ${url}, validity: ${validity}, shortcode: ${shortcode}`);

    // Clear form
    setUrl('');
    setValidity('');
    setShortcode('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        margin="normal"
        type="number"
      />
      <TextField
        fullWidth
        label="Custom Shortcode (optional)"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Shorten URL
      </Button>
    </Box>
  );
};

export default ShortenerForm;
