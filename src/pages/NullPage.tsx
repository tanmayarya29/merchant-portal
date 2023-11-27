
import React from 'react';
import { Box, Typography } from '@mui/material';

const NullPage: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
    </Box>
  );
};

export default NullPage;
