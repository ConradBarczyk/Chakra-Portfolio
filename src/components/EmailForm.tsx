import React from 'react';
import emailjs from 'emailjs-com';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Box,
  Center,
  Button,
  Spacer
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"

const EmailForm = ():JSX.Element => {
  const toast = useToast();

  function sendEmail(e:any) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_wp1g1n6', 'template_vvdhgsn', e.target, 'user_tteL3rNO5nqtgSQk6ZDrZ')
    .then((result) => {
        console.log(result.text);
        toast({
          title: "Success",
          description: "Your Email was sent successfully!",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
    }, (error) => {
        console.log(error.text);
        toast({
          title: "Error",
          description: "Your Email incountered an error please try again late.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
    });
    e.target.reset();

  }

  return(
    <>
      <Box
        w={'100%'}
        justifyContent='center'
        alignItems='center'
      >
        <Center w={'100%'} pb={8}>
        <form onSubmit={sendEmail}>
          <FormControl minW={['80','96','96','96']} id="first-name" isRequired>
            <FormLabel>Full name</FormLabel>
            <Input id="name" name='name' placeholder="Full name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input id="email" name='email' type="email" />
            <FormHelperText>I will never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="subject" isRequired>
            <FormLabel>Subject</FormLabel>
            <Input id="subject" name='subject' placeholder="Subject" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Input rows={3} id='message' name='message' as='textarea' placeholder="Message" />
          </FormControl>
          <Flex align='center' justify='center' mt={5} >
            <Spacer/>
            <Button type='submit'>Send!</Button>
            <Spacer/>
            <Button type='reset'>Reset</Button>
            <Spacer/>
          </Flex>
          
        </form>
        </Center>
      </Box>
    </>

  );
}

export default EmailForm;