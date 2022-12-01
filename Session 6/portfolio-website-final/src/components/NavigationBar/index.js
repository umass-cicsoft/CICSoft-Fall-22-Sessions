import React, { useContext } from 'react';
import { Container, Nav, Navbar, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const NavigationBar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Navbar
      bg={isDarkMode ? 'dark' : 'light'}
      variant={isDarkMode ? 'dark' : 'light'}
      fixed="top"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles.personName}>
          Person Name
        </Navbar.Brand>
        <ToggleButton
          type="switch"
          variant={isDarkMode ? 'dark' : 'light'}
          value={isDarkMode}
          checked={isDarkMode}
          onClick={() => toggleDarkMode()}
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} style={{ color: '#FFD046' }} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </ToggleButton>
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
