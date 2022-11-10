import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Outlet />
    </React.Fragment>
  );
};

export default App;
