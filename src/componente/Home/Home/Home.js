import React from 'react';
import PersonalDerails from '../../PersonalDerails/PersonalDerails';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import HomeSection from '../HomeSection/HomeSection';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
   return (
      <main>
         <HomeSection></HomeSection>
         <PersonalDerails></PersonalDerails>
         <Skills></Skills>
         <Project></Project>
         <Blogs></Blogs>
         <Contact></Contact>
      </main>
   );
};

export default Home;