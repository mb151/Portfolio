import React, {useEffect} from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

function Home() {
    useEffect(() => {
        //google analytics 
        ReactGa.initialize("UA-183376484-1");
        ReactGa.pageview('Page Home');
   }, [])
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Accueil | Mahamadou Aminou</title>
            <meta name="description" content="Mahamadou Aminou Bachir Ali - Développeur Full Stack | Ingénieur Informatique" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
            <Particles
                params={particles}
                className="particle"
            />
            <Container className="App-header" fluid={true}>
                <Row className="App-main">
                    <Col  xl={7}  className="App-left">
                        <HomeLeft/>
                    </Col>
                    <Col  xl={5} className="">
                        <HomeRight/>
                    </Col>
                </Row>
                <Row className="App-footer">
                    <Footer/>
                </Row>
            </Container>
        </Animate>
    </div>
    );
}

export default Home;
