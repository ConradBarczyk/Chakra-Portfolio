import React from 'react';
import Jumbotrance from '../components/Jumbotrance'
import { Flip, Jumbo } from '../tools/data.model';
import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import CardFlip from '../components/CardFlip';
import comp from '../assets/images/mycomp.jpg';
import coding from '../assets/images/coding.jpg';
import mycar from '../assets/images/mycar.jpg';
import beerme from '../assets/images/selfbeer.jpg';




const AboutPage = ():JSX.Element => {
  const jumbo:Jumbo = {
    title: 'About Me',
    subtitle: 'Pushing myself forward',
    description: ''
}
  const flipper:any [] =[
    {
      title: 'I LOVE COMPUTERS!',
      description: 'I have been playing games and breaking all my parents computers for as long as I can remember! Atleast now I can put them back together.',
      image: comp,
      imageAlt: 'my comp'
    },
    {
      title: 'I LOVE BEER!',
      description: 'My father and I have been brewing beer for a few years now and we think it\'s pretty awesome, next time you see me ask how it\'s going!',
      image: beerme,
      imageAlt: 'Me with a beer'
    },
    {
      title: 'I LOVE CARS!',
      description: 'Pulling stuff apart and putting it back together is something I really enjoy doing and cars are no exeption. I\'ve only had to tow my creations twice :)',
      image: mycar,
      imageAlt: 'My old S15'
    },
    {
      title: 'I LOVE CODING!',
      description: 'It brings together everything I enjoy from breaking down apps to understand what going on, to creating new code to enchance or bolster new features.',
      image: coding,
      imageAlt: 'My monitors'
    }
  ]
  return(
    <>
      <Jumbotrance {...jumbo}/>
        <Center>
          <Wrap minChildWidth="120px" spacing="40px" m={5} justify='center'>
            {flipper.map((flip:Flip, n:number):JSX.Element =>
                <WrapItem key={n}>
                    <CardFlip {...flip} />
                </WrapItem>
                )}
          </Wrap>
        </Center>
    </>
  );
}

export default AboutPage;