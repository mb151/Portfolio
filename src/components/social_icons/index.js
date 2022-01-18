import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/mb151" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="git" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/mouhamadoubachir/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
            </a>
            <a href="mailto: bachir.ali.mahamadou.aminou@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="google" icon={faGoogle} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+22799700430" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
            </a>
         </Col>
  );
}

export default SocialIcons;
