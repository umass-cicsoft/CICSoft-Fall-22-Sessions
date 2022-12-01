import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../../ThemeContext';

const InfoCard = (props) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Card
      key={props.key}
      style={{ width: '18rem', padding: '1rem', margin: '1rem' }}
      bg={isDarkMode ? 'dark' : 'light'}
      text={isDarkMode ? 'light' : 'dark'}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
