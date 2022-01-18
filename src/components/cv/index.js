import React from 'react';
import '../cv/style.css';
import {
  Col,
  Row
} from 'react-bootstrap';
import CLC from '../cv_left_content';

function CV() {
  return (
      <Row className="cv">
        <Col xl={8} >
         < CLC />
        </Col>
      </Row>
  );
}

export default CV;
