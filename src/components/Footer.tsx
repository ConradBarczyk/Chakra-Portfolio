import { useColorModeValue } from '@chakra-ui/color-mode';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';




const Footer = ():JSX.Element => {



  return(
    <>
      <Flex
        h={'60px'}
        border={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        justify='flex-start'
        
      >
        <Flex
					align='center'
					justify="flex-start"
				>
          <Text m='8'>This Website was built by Conrad Barczyk</Text>
        </Flex>
      </Flex>
      
    </>
  );
}

export default Footer;