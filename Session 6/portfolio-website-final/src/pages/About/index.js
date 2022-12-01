import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../page.module.css';

const About = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <p className={styles.paraText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Interdum varius sit amet mattis vulputate enim. Eget nulla facilisi etiam dignissim diam quis enim. Id aliquet
      risus feugiat in ante metus dictum at. Risus nullam eget felis eget nunc lobortis mattis. Sem viverra aliquet eget sit
      amet. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Nunc vel risus commodo viverra maecenas
      accumsan lacus vel. Eu mi bibendum neque egestas congue quisque egestas. Lacus vel facilisis volutpat est velit egestas
      dui. Lobortis feugiat vivamus at augue.
      <br/><br/>
        Vel fringilla est ullamcorper eget nulla facilisi etiam. Sed elementum tempus egestas sed. Lorem donec massa sapien
      faucibus et molestie ac. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Aliquet eget sit amet tellus
      cras. In fermentum posuere urna nec tincidunt praesent semper. In metus vulputate eu scelerisque felis imperdiet proin
      fermentum leo. Adipiscing enim eu turpis egestas pretium. Blandit volutpat maecenas volutpat blandit aliquam etiam erat
      velit scelerisque. Ullamcorper eget nulla facilisi etiam. Dictum sit amet justo donec enim. Dictum sit amet justo donec
      enim diam vulputate ut. Iaculis urna id volutpat lacus. Vestibulum lectus mauris ultrices eros. Donec massa sapien
      faucibus et molestie ac feugiat sed lectus. Enim praesent elementum facilisis leo vel fringilla. Nec feugiat nisl
      pretium fusce id velit ut. Purus faucibus ornare suspendisse sed.
      </p>
    </Container>
  );
};

export default About;
