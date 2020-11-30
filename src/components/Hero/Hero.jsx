import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, ctc } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                {ctc || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
        <svg className="hero-fluid" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFE500" d="M33.1,-46.7C48.1,-41.9,69.1,-41.5,77.2,-32.6C85.4,-23.8,80.7,-6.4,74.8,8.4C69,23.1,61.9,35.4,52.6,44.7C43.2,54.1,31.4,60.6,18.2,66.7C4.9,72.8,-9.9,78.3,-18.4,71.7C-26.9,65,-29.1,46.1,-35.2,33.6C-41.3,21.1,-51.3,14.9,-57.4,5.2C-63.5,-4.5,-65.7,-17.7,-62.9,-30.8C-60.2,-43.9,-52.5,-56.8,-41.2,-63.3C-29.8,-69.9,-14.9,-70.1,-2.9,-65.5C9,-60.9,18.1,-51.6,33.1,-46.7Z" transform="translate(100 100)" />
        </svg>
      </Container>
    </section>
  );
};

export default Header;
