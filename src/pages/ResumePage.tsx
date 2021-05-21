import React from 'react';
import { Grid ,Center, Button, GridItem, Heading, Text, UnorderedList, ListItem} from '@chakra-ui/react';
import Jumbotrance from '../components/Jumbotrance'
import { Jumbo } from '../tools/data.model';


const ResumePage = ():JSX.Element => {

  const jumbo:Jumbo = {
    title: 'Resume',
    subtitle: 'Life experience is the best experience!',
    description: 'Checkout what I\'ve been working on'
}
  return(
    <>
      <Jumbotrance {...jumbo}/>
      <Center>
        <Grid
          templateRows={["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"]}
          templateColumns="repeat(8, 1fr)"
          gap={4}
          w='90%'
          
        >
          <GridItem rowSpan={[1,1,4,4]} colSpan={[8,8,3,3]} bg="tomato" >
            <Heading m={1}>
              Diverse Experience
            </Heading>
            <Text m={1} mb={3}>I am a strong comunicator so I got started in my sales career. After selling accident insurance door to door, I was able to land a job selling vehicles for Dodge.
            After a few month I found myself not loving the sales life as I felt like it was my job to push young people into loans they can't afford.
            </Text>
            <Text m={1} mb={3}>
              I left the sales life for a device repair job at Jump+ an authorized apple repair shop. Where I was really able to shine, claiming the top 3 technician spot every month after my first month and claiming 1rst once. This was it I found a job that I got to problem solve all day but I knew I needed to go back to school.
            </Text>
            <Text m={1} mb={3}>
              I was accepted to NSCC for hardware and security. During the first semester I took an intro to coding course in which I got 100% and knew this was what I've been looking for. I switched courses and challenged any missing credits from first semester(for Web Programming) to get into Web Programming right away in 2nd semester. Since then I've been trying to absord as much knowledge as I can in my new career!
            </Text>
          </GridItem>
          <GridItem colSpan={[8,8,5,5]} rowSpan={1} bg="tomato" >
            <Heading
            as='h3'
            size='lg'
            m={1}
            >
              Ignite Atlantic - Web Developer intern
            </Heading>
            <UnorderedList px={6} >
              <ListItem>Help integrate mobile responsive design to existing platform (React / NodeJS)</ListItem>
              <ListItem> Contribute to back end data structure (Laravel Nova)</ListItem>
              <ListItem>Configure custom plug-in to suit client needs (Wordpress)</ListItem>
              <ListItem>Version Control and code reviews (Github)</ListItem>
              <ListItem>Prepare readme file for env setup for future onboarding</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={[8,8,5,5]} rowSpan={1} bg="tomato" >
            <Heading
            as='h3'
            size='lg'
            m={1}
            >
              Jump+ - Senior IOS Technician
            </Heading>
            <UnorderedList px={6} >
              <ListItem>Phone and Laptop repairs (1500+ repairs)</ListItem>
              <ListItem>Inventory Management ($500, 000 )</ListItem>
              <ListItem> Manage department repair logs</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={[8,8,5,5]} rowSpan={1} bg="tomato" >
            <Heading
            as='h3'
            size='lg'
            m={1}
            >
              Summit Dodge - Sales Rep
            </Heading>
            <UnorderedList px={6} >
              <ListItem>Car Sales</ListItem>
              <ListItem>Customer Service</ListItem>
              <ListItem>Product Knowledge</ListItem>
              <ListItem>Commission Sales</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={[8,8,5,5]} rowSpan={1} bg="tomato" >
            <Heading
            as='h3'
            size='lg'
            m={1}
            >
              Combined Insurance - Sales Rep
            </Heading>
            <UnorderedList px={6} >
              <ListItem>Door to Door cold call sales</ListItem>
              <ListItem>Application processing</ListItem>
              <ListItem>Collection of payment</ListItem>
            </UnorderedList>
          </GridItem>
        </Grid>
      </Center>


      <Center>
        <Button
          as='a'
          download 
          href='/downloads/site-resume.pdf'
          my={5}
        >
          Download Resume
        </Button>
      </Center>
      
    </>
  );
}

export default ResumePage;