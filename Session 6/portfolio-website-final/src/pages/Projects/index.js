import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../page.module.css';

import projectData from '../../data/Projects.json';
import InfoCard from '../../components/InfoCard';

const Projects = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <Container fluid>
        <Row className={styles.cardrow}>
          {projectData.map((item) => {
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

export default Projects;
