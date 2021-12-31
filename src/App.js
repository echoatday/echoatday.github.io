import logo from './logo.svg';
import './App.scss';
import About from './page-About.js';
import Projects from './page-Projects.js';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isContactRevealed: false };
  }

  getContactStyles = () => {
    let classNames = 'Contact'
    if(this.state.isContactRevealed) {
      classNames += ' ContactRevealed';
    }
    return classNames
  }

  topScroll = () => {
    window.scrollTo({top: 0, behavior:'smooth'});
  }

  contactReveal = () => {
      this.setState({ isContactRevealed: !this.state.isContactRevealed })
  }

  render() {

    return (
      <div className='App'>
      <div className='Header'>
        <a className='Title' onClick={this.topScroll}>Echo Storrs</a>
        <a className='Title' onClick={this.contactReveal}>Contact</a>
      </div>
      <div className='HeaderShadow' />
      <div className={this.getContactStyles()}>
        <a className='ContactLink' href='https://github.com/echoatday'>GitHub&lt;</a>
        <a className='ContactLink' href='https://www.linkedin.com/in/echostorrs/'>LinkedIn&lt;</a>
        <a className='ContactLink' href='mailto:echoatday@gmail.com'>E-Mail&lt;</a>
      </div>
      <About />
      <Projects />
    </div>
    );
  }
}

export default App;
