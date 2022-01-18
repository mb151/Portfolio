import React from 'react';
import "../skillsItem/style.css";
import {ListGroup, Card} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';


function SkillsItem() {
    return (
        <Slide left>
            <Bounce>
            <div className="card-container">
                        <br/><br/><br/><br/>
                        <Card className="card-style">
                            <Card.Header className="text-header">Langages</Card.Header>
                            <ListGroup>
                                <ListGroup.Item className="item">PHP | JavaScript | C/C++</ListGroup.Item>
                                <ListGroup.Item className="item">XML | Java | JSP | PL/SQL | C#</ListGroup.Item>
                                <ListGroup.Item className="item">SQL | Python | TypeScript</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="card-container">
                        <br/><br/><br/>
                        <Card className="card-style">
                            <Card.Header className="text-header">Framework</Card.Header>
                            <ListGroup>
                                <ListGroup.Item className="item">Laravel | Angular</ListGroup.Item>
                                <ListGroup.Item className="item">React.js | Express.js </ListGroup.Item>
                                <ListGroup.Item className="item">React Native | Java Fx</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="card-container">
                        <br/><br/><br/>
                        <Card className="card-style">
                            <Card.Header className="text-header">Administration</Card.Header>
                            <ListGroup>
                                <ListGroup.Item className="item">CCNA | Réseaux Wireless | VoIP | 4G</ListGroup.Item>
                                <ListGroup.Item className="item">Windows Server | Serveur Unix/Linux</ListGroup.Item>
                                <ListGroup.Item className="item">MySQL | Oracle 11g et 12c</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="card-container">
                        <br/><br/><br/>
                        <Card className="card-style">
                            <Card.Header className="text-header">Méthodologie</Card.Header>
                            <ListGroup>
                                <ListGroup.Item className="item">Merise</ListGroup.Item>
                                <ListGroup.Item className="item">UML</ListGroup.Item>
                                <ListGroup.Item className="item">SCRUM</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
            <br/><br/>
            </Bounce>
        </Slide>
    )
}

export default SkillsItem
