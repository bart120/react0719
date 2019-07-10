import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Routes from './config/routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Router>
          <Header />

          <Routes />

          <footer>
            <Footer />
          </footer>
        </Router>
      </Container>
    );
  }
}

export default App;
