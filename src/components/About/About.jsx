import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" className="about-me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                  どうもはじめまして！好きなことばは<span style={{ color: "#00f", fontWeight: 700 }}>「Compiled Successfully !!」</span>嫌いなエラーは<span style={{ color: "#f00", fontWeight: 700 }}>「Cannot read property 'map' of undefined</span>。React大好きボーイのKentoです。ゆっくり見ていってください！
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                  今年の３月に都内の大学を卒業して７月１６日より職業訓練校でWebを学んでいます！チームで意見を出し合いながらサービスをよりよくしていくプロセスに喜びを感じます。ぜひ興味を持って頂けたなら連絡してください！
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree}
                  ポートフォリオのコンセプトは<span style={{ color: "#FFE500", fontWeight: 700 }}>「半熟エンジニア」</span>です。知識不足な点は多々あるけれど、秘めた好奇心を<span style={{ color: "red", fontWeight: 700 }}>メラメラ燃やして</span>完熟ボイルドエンジニアになるぞ！
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Wantedly
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
