import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/particle.js';
import Particles from 'react-particles-js';

class About extends Component {

  componentDidMount() {
  //google analytics 
    ReactGa.initialize("UA-183376484-1");
    ReactGa.pageview('Page à propos');
  }
 
  render() {
    return (
       <div>
       <Helmet>
            <meta charSet="utf-8" />
            <title>À propos | Mahamadou Aminou</title>
            <meta name="description" content="Mahamadou Aminou Bachir Ali - Développeur Full Stack | Ingénieur Informatique" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
            <Particles
                params={particles}
                className="about-particle"
            />
            <Container className="about-header" fluid={true}>
                <div className="about-main">
                    <HamburgerMenu />
                    <CV/>
                </div>
                <Row className="about-footer">
                    <Footer/>
                </Row>
            </Container>
        </Animate>
    </div>
    );
  }
}

export default About;
