import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AnimationPage from './pages/AnimationPage';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Preeti Mishra',
      headerLinks: [  
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Keep Learning',
        subtitle: 'Projects that showcase skills and talent',
        text: 'Checkout my portfolio below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Detail'
      },
      animation: {
        title: 'Animation and Design'
      }
      
    }
  }
  render() {
    return (
      <Router>
          <Container fluid className="App mr-0 p-0">
              <Navbar bg="dark" variant="dark" className="border-bottom" expand="lg">
                <Navbar.Brand href="#home">Preeti Mishra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/design">Logo and animatioan</Nav.Link>
                    <Nav.Link href="/conatct">contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

          

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}  />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
            <Route path="/design" render={() => <AnimationPage title={this.state.contact.title} />} />

            <Footer />

          </Container>
      </Router>
    );
  }
  
}

export default App;
