import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../page.module.css';

const About = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.heading}>About</h1>
    </Container>
  );
};

export default About;
