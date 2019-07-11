import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import Routes from './config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

class App extends React.Component {

  state = {
    reduxState: store.getState()
  }

  componentDidMount() {
    store.subscribe(() => {
      //console.log(store.getState());
      this.setState({ reduxState: store.getState() });
    });
  }

  render() {
    return (
      <Container>
        <Provider store={store}>
          <Router>
            <Header />

            <Routes />

            <footer>
              <Footer />
            </footer>
          </Router>
        </Provider>
      </Container>
    );
  }
}

export default App;
