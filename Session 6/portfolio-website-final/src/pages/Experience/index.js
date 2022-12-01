import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../page.module.css';

import experienceData from '../../data/Experience.json';
import InfoCard from '../../components/InfoCard';

const Experience = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.heading}>Experience</h1>
      <Container fluid>
        <Row className={styles.cardrow}>
          {experienceData.map((item) => {
            return (
              <InfoCard
                key={item._id}
                title={item.title}
                description={item.description}
              ></InfoCard>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
