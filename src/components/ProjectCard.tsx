import React from 'react';
import {Box, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import { Project } from '../tools/data.model';




const ProjectCard = (project:Project):JSX.Element => {
  
  return (
    <Box boxShadow="lg" m='5' p="1" maxW="250px" borderWidth="1px" borderRadius="lg" overflow="hidden" minH='550px' maxH='550px'>
      <Image src={project.image} alt={project.imageAlt} boxSize="100%" objectFit="fill" maxH='300px' minH='300px' />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.title}
        </Box>
        
        <Box>
          {project.subtitle}
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.500" fontSize="sm">
            <Link href={project.link} isExternal>
              {project.linkPlaceholder}
            </Link>
          </Box>
        </Box>
      </Box>
      <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <Flex>
            {project.techs.map((tech:string, n:number):JSX.Element =>
            <Flex key={n}>
                {project.techs[n]} <Spacer px='1'/>
            </Flex>
            )}
            </Flex>
          </Box>
        </Box>
    </Box>
  )
}


export default ProjectCard;