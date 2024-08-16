import * as React from 'react';
import { Stack } from '@mui/material';
import image from '../Cuernos Negr.jpg'

const CuerpoComponent = () => {

  const myStyle = {
      backgroundImage: `url(${image})`,
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "round", 
      backgroundAttachment: "fixed",
      opacity: 0.1,
      margin: 0, 
      padding: 0, 
  };

  return (
      <Stack style={myStyle}>
      </Stack>
  );
};

export default CuerpoComponent;