import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <svg className="lettuce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill=" #a7e061" fill-opacity="1" d="M0,256L34.3,250.7C68.6,245,137,235,206,224C274.3,213,343,203,411,208C480,213,549,235,617,240C685.7,245,754,235,823,197.3C891.4,160,960,96,1029,64C1097.1,32,1166,32,1234,64C1302.9,96,1371,160,1406,192L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
      <svg className="panmimi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #EA9744" fill-opacity="1" d="M0,256L34.3,250.7C68.6,245,137,235,206,224C274.3,213,343,203,411,208C480,213,549,235,617,240C685.7,245,754,235,823,197.3C891.4,160,960,96,1029,64C1097.1,32,1166,32,1234,64C1302.9,96,1371,160,1406,192L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
