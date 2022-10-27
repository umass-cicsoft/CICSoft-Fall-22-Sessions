import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
