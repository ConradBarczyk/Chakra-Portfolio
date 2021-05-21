import React from 'react';
import Jumbotrance from '../components/Jumbotrance';
import { Jumbo } from '../tools/data.model';
import EmailForm from '../components/EmailForm';


const AboutPage = ():JSX.Element => {
  const jumbo:Jumbo = {
    title: 'Contact me',
    subtitle: 'I am always interested in new opportunity!',
    description: 'Please contact in regards to private github repos'
}
  return(
    <>
      <Jumbotrance {...jumbo}/>
      <EmailForm />
    </>
  );
}

export default AboutPage;