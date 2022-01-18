import React, { useState, useEffect } from "react";
import '../project_card_details/style.css';
import {
  Col,
  Row,
  Card,
  Button,
  Image
} from 'react-bootstrap';
import GitLogo from '../../assets/img/git.svg';

const PCD = () => {
  const [setErrors] = useState(false);
  const [git, setGit] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/mb151/repos");
    res
      .json()
      .then(res => setGit(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  
  return (
    <Row >
      {git.map(item => (
        <Col xl={6} key = {item.id}>
          <Card className="pro_card">
            <Row >
              <Col xl={12} className="project_img_container">
                <Image className="project_card_left_img" src={GitLogo}/>
              </Col>
              <Col xl={12}>
                <Card.Title className="repoName">
                  Nom: {item.name} 
                </Card.Title>
                <Card.Subtitle className="repoInfo">
                  Emplacement : {item.full_name} <br/>
                  Créer : {item.created_at} <br/>
                  Mis à jour : {item.updated_at}<br/>
                  Langage : {item.language}
                </Card.Subtitle>
                <Card.Body className="project_card_main">          
                  <Button variant="outline-light" size="lg" className="modal-exit-btn about_modal"> 
                    <a href={item.svn_url} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">Vue</a>
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default PCD;
