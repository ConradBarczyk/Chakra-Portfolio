import React, { useState } from 'react';
import {Box, Image} from '@chakra-ui/react';
import { Flip } from '../tools/data.model';
import ReactCardFlip from 'react-card-flip';



const CardFlip = (flip:Flip):JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = ():void => {
    setIsFlipped(!isFlipped);
    console.log(flip.title)
  }
  return(
    <>
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical' >
      <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px' onMouseEnter={handleFlip} >
        <Box p='6'>
          <Box 
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {flip.title}
          </Box>
          <Box>
            {flip.description}
          </Box>
          </Box>
        </Box>
        <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px' onMouseLeave={handleFlip}>
          <Box p='6'>
            <Image src={flip.image} alt={flip.imageAlt} w='225px' h='250px' />
          </Box>
        </Box>
      </ReactCardFlip>
    </>
  );
}

export default CardFlip;