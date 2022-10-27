import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProfileAvatar from '../../assets/avatar.png';

import styles from './index.module.css';

const Home = () => {
    return (
        <Container fluid className={styles.profileContainer}>
            <Row className={styles.profileRow}>
                <img className={styles.profileAvatar} src={ProfileAvatar} alt="Profile Avatar" />
            </Row>
            <Row className={styles.profileRow}>
                <span className={styles.profileName}>Person Name</span>
            </Row>
            <Row className={styles.profileRow}>
                <span className={styles.profileDescription}>Technical Consultant | Blockchain Enthusiast | Fan-Fiction Writer</span>
            </Row>
        </Container>
    )
};

export default Home;