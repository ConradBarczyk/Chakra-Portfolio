import { Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import {Jumbo} from '../tools/data.model';




const Jumbotrance = (jumbo:Jumbo):JSX.Element => {



  return(
		<>
			<Flex justify='flex-start' align='center' w='80%' m={3} pt='120px'>
				<Heading as='h1' size='4xl' >
					{jumbo.title}
				</Heading>
			</Flex>
			<Flex m={5}>
			<Heading as='h4' size='2xl'>
				{jumbo.subtitle}
			</Heading>
			</Flex>
			<Flex m={6}>
				<Text>
					{jumbo.description}
				</Text>
			</Flex>
			
			
			
		</>
  );
}

export default Jumbotrance;