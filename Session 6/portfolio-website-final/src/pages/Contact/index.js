import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../page.module.css';

const Contact = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.paraText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Interdum varius sit amet mattis vulputate enim. Eget nulla facilisi etiam dignissim diam quis enim. Id aliquet
      risus feugiat in ante metus dictum at. Risus nullam eget felis eget nunc lobortis mattis. Sem viverra aliquet eget sit
      amet. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Nunc vel risus commodo viverra maecenas
      accumsan lacus vel. Eu mi bibendum neque egestas congue quisque egestas. Lacus vel facilisis volutpat est velit egestas
      dui. Lobortis feugiat vivamus at augue.
      </p>
    </Container>
  );
};

export default Contact;
