import './App.scss';

const projScroll = () => {
  window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
}

function About() {
  return (
    <div className='About'>
      <div className='Greeting'>HIRE ME</div>
      <a className='ScrollDown' onClick={projScroll}>projects<br/>▼</a>
    </div>
  );
}

export default About;