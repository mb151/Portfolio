import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';
import ReactTypingEffect from 'react-typing-effect';

function Contact_Left() {
  return (
    <div>
       <Row className="Contact-text">
            <Col xl={12}>
            <h1 className="p-heading1">Entrer En Contact</h1>
            <p className="p-heading2">
                Bienvenue sur mon PORTFOLIO<br />
                Désirez-vous prendre contact avec moi ?<br />
                Choisissez l’option qui vous pareil la plus confortable :<br />
                <strong>Via le formulaire </strong><br />
                Ou bien<br />
                <strong>Directement via les réseaux sociaux ci-dessous.</strong><br />
                <p style={{ color: 'green' }}>
                    Je suis  ouvert à toute discussion sur votre projet
                    <ReactTypingEffect
                        text=" ... "
                        className="typical"
                        speed="100"
                        eraseDelay="5000"
                    />
                </p>
            </p>
            </Col>
        </Row>
        <Row className="contact-left-footer" >
            <SocialIcons />
        </Row>
    </div>
  );
}

export default Contact_Left;
