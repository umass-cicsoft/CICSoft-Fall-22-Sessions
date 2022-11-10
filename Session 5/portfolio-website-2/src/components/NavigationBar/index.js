import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles.personName}>
          Person Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              <span className={styles.navLinkSpan}>About</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/experience">
              <span className={styles.navLinkSpan}>Experience</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <span className={styles.navLinkSpan}>Projects</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <span className={styles.navLinkSpan}>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
