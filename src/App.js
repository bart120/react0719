import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
