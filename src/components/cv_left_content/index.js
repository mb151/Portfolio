import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Projects from '../projects';



const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render(){
    const { show } = this.state;
    return (
      <Slide left > 
        <Bounce >
          <div className="clc_main">
            <div className="clc_container">
                <h1 className="clc_header">À propos de moi</h1>
                <ColoredLine color="#FFC466" />
                <Fade top cascade>
                  <div className="AboutBtnContainer">
                    <Link to={'/formation'} className="left"><FontAwesomeIcon icon={faGraduationCap} className="left_icon" /><br/><br/>FORMATION</Link>
                    <Link to={'/experience'} className="left"><FontAwesomeIcon icon={faBriefcase} className="left_icon" /><br/><br/>EXPERIENCES PROFESSIONNELLES</Link>
                    <Link to={'/skills'} className="left"><FontAwesomeIcon icon={faCogs} className="left_icon" /><br/><br/>COMPÉTENCES</Link>
                    <div className="right"><FontAwesomeIcon onClick={() => this.setState({ show: true })} icon={faCheckCircle} className="right_icon"/><br/><br/>PROJETS RÉALISÉS</div>
                  </div>
                </Fade>
            </div>
                <Modal show={show} size="xl" onHide={this.toggleModal} centered>
                  <Modal.Header className="modalHeader" closeButton>
                    <Projects/>
                  </Modal.Header>
                  <Button onClick={() => this.setState({ show: false })} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
                    Fermer
                  </Button>
                </Modal>
          </div>
        </Bounce>
      </Slide>
   );
  }

  
}

export default CLC;
