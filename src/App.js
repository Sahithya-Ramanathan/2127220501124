import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ShortenerForm from './components/ShortenerForm';
import logger from './utils/Logger';

function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = ({ url, validity, shortcode }) => {
    const code = shortcode || Math.random().toString(36).substring(2, 8);
    const entry = { url, validity: validity || 30, shortcode: code };
    setUrls((prev) => [...prev, entry]);
    logger(`Shortened: ${code} -> ${url}`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        React URL Shortener
      </Typography>
      <ShortenerForm onShorten={handleShorten} />
    </Container>
  );
}

export default App;
