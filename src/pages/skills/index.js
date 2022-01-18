import React, {useEffect} from 'react';
import "./style.css";
import Footer from '../../components/footer';
import {
    Container,
    Row,
  } from 'react-bootstrap';
  import Animate from 'react-smooth';
  import Particles from 'react-particles-js';
  import particles from '../../const/particle.js';
  import ReactGa from 'react-ga';
  import {Helmet} from 'react-helmet';
  import HamburgerMenu from '../../components/hamburger_menu';
import SkillsItem from '../../components/skillsItem';
  

function Skills() {

   useEffect(() => {
        //google analytics 
        ReactGa.initialize("UA-183376484-1");
        ReactGa.pageview('Page Certificat');
   }, [])

    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Projets | Mahamadou Aminou</title>
                <meta name="description" content="Mahamadou Aminou Bachir Ali - Développeur Full Stack | Ingénieur Informatique" />
            </Helmet>
            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={particles}
                    className="particle"
                />
                <Container className="App-header" fluid={true}>
                    <div className="About-main">
                        <HamburgerMenu />
                        <SkillsItem />
                    </div>
                    <Row className="App-footer">
                        <Footer/>
                    </Row>
                </Container>
            </Animate>
        </div>
    )
}

export default Skills

