import React from 'react';
import './App.scss';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    fetch('https://api.github.com/users/echoatday/repos')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='Projects'>
                <div className='GitFrame'>
                  <a href='https://github.com/AcademyPgh/Y5S2-DoorsOpen.Mobile' className='GitTitle'>>doorsOpen.mobile</a>
                  <div>Mobile tour guide app for Doors Open PGH tours.</div>
                </div>

                {items.filter(filter => !filter.name.includes('echoatday')).map(item => (
                  <div className='GitFrame'>
                    <a href={item.html_url} className='GitTitle'>>{item.name}</a>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
      );
    }
  }
}


// pre-api version, export default Projects
function PortfolioEntry(props) {

  return (
    <div className='Entry'>
      <a href={props.link}>arg</a>
    </div>
  )
}

function Projects() {
  const githubs = ['https://github.com/AcademyPgh/Y5S2-DoorsOpen.Mobile', 'https://github.com/echoatday/75words', 'https://github.com/echoatday/helperbot', 'https://github.com/echoatday/Academy-PGH-Randomizer-13'];
  const itches = ['https://trashmaker.itch.io/zwitter', 'https://trashmaker.itch.io/picolife', 'https://birdking.itch.io/new-furniture']

  var projectList = [];

  githubs.forEach(element => {
    projectList.push(<PortfolioEntry link={element} />)
  })

  itches.forEach(element => {
    projectList.push(<PortfolioEntry link={element} />)
  })

  return (
    <div className='Projects'>
      {projectList}
    </div>
  );
}
// pre api version end

export default Portfolio;
