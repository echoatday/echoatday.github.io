import logo from './logo.svg';
import './App.css';
import About from './page-About.js';
import Projects from './page-Projects.js';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { transform: 'translateY(0em)'};
  }

  topScroll = () => {
    window.scrollTo({top: 0, behavior:'smooth'});
  }

  contactReveal = () => {
    if(this.state.transform = 'translateY(0em)') {
      this.setState({ transform: 'translateY(-8em)' })
    }
    else {
      this.setState({ transform: 'translateY(0em)' })
    }
  }

  render() {

    return (
      <div className="App">
      <div className="Header">
        <a className="Title" onClick={this.topScroll}>Echo Storrs</a>
        <a className="Title" onClick={this.contactReveal}>Contact</a>
        <div className="Contact" style={this.state}></div>
      </div>
      <About />
      <Projects />
    </div>
    );
  }
}

export default App;
