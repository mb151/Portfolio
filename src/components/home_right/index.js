import React from 'react';
import '../home_right/style.css';
import Mahamadou from '../../assets/img/myPhoto3.png';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from "../social_icons";

function Home_Right() {
  
  React.useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <Image src={Mahamadou} className="home-right-main-img" alt="Bachir Ali Mahamadou Aminou Photo"/>
        </Col>
        <Row className="home-right-footer" >
            <SocialIcons/>
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
