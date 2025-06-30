
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import English from '../components/English';
import Creative from '../components/Creative';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <English />
      <Creative />
      <Contact />
    </Layout>
  );
};

export default Index;
