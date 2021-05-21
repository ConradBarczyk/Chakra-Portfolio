import React from 'react';
import Jumbotrance from '../components/Jumbotrance'
import { Jumbo } from '../tools/data.model';
import { Box, Center, Wrap, WrapItem } from '@chakra-ui/react';


const AboutPage = ():JSX.Element => {
  const jumbo:Jumbo = {
    title: 'About Me',
    subtitle: 'Pushing myself forward',
    description: ''
}
  return(
    <>
      <Jumbotrance {...jumbo}/>
        <Center>
          <Wrap minChildWidth="120px" spacing="40px" m={5} justify='center'>
            <WrapItem>
              <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px'>
                <Box p='6'>
                  <Box 
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    I LOVE COMPUTERS!
                  </Box>
                  <Box>
                    I have been playing games and breaking all my parents computers for as long as I can remember! Atleast now I can put them back together.
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px'>
                <Box p='6'>
                  <Box 
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    I LOVE BEER!
                  </Box>
                  <Box>
                    My father and I have been brewing beer for a few years now and we think it's pretty awesome, next time you see me ask how it's going!
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px'>
                <Box p='6'>
                  <Box 
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    I LOVE CARS
                  </Box>
                  <Box>
                    Pulling stuff apart and putting it back together is something I really enjoy doing and cars are no exeption. I've only had to tow my creations twice :)
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box boxShadow="lg" borderRadius='lg' borderWidth='2px' maxW='225px' minH='250px'>
                <Box p='6'>
                  <Box 
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    I LOVE CODING
                  </Box>
                  <Box>
                    It brings together everything I enjoy from breaking down apps to understand what going on, to creating new code to enchance or bolster new features.
                  </Box>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Center>
    </>
  );
}

export default AboutPage;