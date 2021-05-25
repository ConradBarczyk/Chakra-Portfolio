import React from 'react';
import Jumbotrance from '../components/Jumbotrance'
import { Jumbo, Project } from '../tools/data.model';

import ProjectCard from '../components/ProjectCard';
import ionicLogo from '../assets/images/ionicLogo.png';
import numicons from '../assets/images/allNumis.jpg';
import myself from '../assets/images/selfpic.jpg';
import gvpic from '../assets/images/icon.png';
import cbamining from '../assets/images/cbamininglogo.png';
import { Wrap } from '@chakra-ui/layout';



const HomePage = ():JSX.Element => {
    const jumbo:Jumbo = {
        title: 'Be a Learner',
        subtitle: 'Projects that make a difference',
        description: 'Checkout my projects below'
    }


    const projects:any [] = [
        {title: 'BMI Ionic App',
        subtitle: 'This simple app was built using Ionic and react to learn the new technology!',
        techs: ['Ionic','React','Typescript'],
        image: ionicLogo,
        imageAlt: 'bmiImage',
        link: '/project/bmi/index.html',
        linkPlaceholder: 'Where do you land?'},

        {title: 'BlockMath',
        subtitle: 'This app is focused on using numicons to teach young kids math!',
        techs: ['CreateJS','Illustrator','Typescript'],
        image: numicons,
        imageAlt: 'Block Math logo',
        link: 'https://blockmath.ca',
        linkPlaceholder: 'Want to learn?'},

        {title: 'Global Villages',
        subtitle: 'Collaborated with an international team to help bring rural businesses to a digital world',
        techs: ['NodeJs','Next.js','React', 'Laravel Nova'],
        image: gvpic,
        imageAlt: 'Global Vilages logo',
        link: 'https://globalvillages.ca/',
        linkPlaceholder: 'Check out the early result!'},

        {title: 'CBA Mining',
        subtitle: 'I started my own crypto mining business. We aim to mine various coins while running on 100% renewable energy!',
        techs: ['Chia','Etherium','Sol'],
        image: cbamining,
        imageAlt: 'CBA Mining logo',
        link: '#',
        linkPlaceholder: 'Site Under Construction'},

        {title: 'Who am I',
        subtitle: 'Woah! Loaded question there, I am web programming gradutate looking to thrive in the industry!',
        techs: ['Personable','Reliable','Adaptable'],
        image: myself,
        imageAlt: 'Picture of myself',
        link: 'https://github.com/ConradBarczyk',
        linkPlaceholder: 'Check out my Github!'}
    ];
    return(
        <>
            
            <Jumbotrance {...jumbo} />
            {projects.forEach(element => {
                <ProjectCard {...element} />
            })}
            <Wrap w='100%' justify='center' >
                {projects.map((project:Project, n:number):JSX.Element =>
                <div key={n}>
                    <ProjectCard {...project} />
                </div>
                )}
            </Wrap>

        </>
    );

};

export default HomePage;