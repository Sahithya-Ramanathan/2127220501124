import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const URLList = ({ urls }) => {
  return (
    <div>
      <Typography variant="h6" sx={{ mt: 4 }}>Shortened URLs:</Typography>
      <List>
        {urls.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText
              primary={`Short: ${item.shortcode}`}
              secondary={`Original: ${item.url} | Valid for: ${item.validity} mins`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default URLList;
