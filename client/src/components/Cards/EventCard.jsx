import React from 'react';
import { Box, Image } from '@chakra-ui/core';

const EventCard = props => {
  const { event } = props; 
  return (
    <>
      <Box p={1} height='80vh' borderColor='blue' borderStyle='solid'>
        <Box
          width='100px'
          height='100px'
          bg='white'
          borderStyle='solid'
          borderColor='black'
        >
          <h2>{event.datewhen}</h2>
        </Box>
        <Box>
          <h1>{event.title}</h1>
        </Box>
        <Box>
          <Image src={event.picture} /> 
        </Box>
        <Box>
          <p>{event.blurb}</p>
        </Box>
        <Box>
          <p>{event.location}</p>
        </Box>
      </Box>
    </>
  );
};

export default EventCard;
