import './App.scss';

const projScroll = () => {
  window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
}

function About() {
  return (
    <div className='About'>
      <div className='Greeting'>Hi! I'm Echo.</div>
      <a className='ScrollDown' onClick={projScroll}>a developer<br />▼</a>
      <div className='GreetingBackground' />
      <div className='GreetingBackgroundShadow' />
    </div>
  );
}

export default About;