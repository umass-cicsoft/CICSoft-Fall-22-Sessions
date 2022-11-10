import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import styles from './index.module.css';

const NavigationBar = () => {
    return (
        <Navbar bg='dark' variant='dark' fixed='top' expand='lg'>
            <Container fluid>
                <Navbar.Brand className={styles.personName}>Person Name</Navbar.Brand>
                <Navbar.Toggle aria-controls='portfolio-navbar-nav'/>
                <Navbar.Collapse id='portfolio-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href="#about"><span className={styles.navLinkSpan}>About</span></Nav.Link>
                        <Nav.Link href="#experience"><span className={styles.navLinkSpan}>Experience</span></Nav.Link>
                        <Nav.Link href="#projects"><span className={styles.navLinkSpan}>Projects</span></Nav.Link>
                        <Nav.Link href="#contact"><span className={styles.navLinkSpan}>Contact</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;