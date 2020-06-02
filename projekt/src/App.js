import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App(props) {
  const [popularProjects, setPopularProjects] = useState([])



  useEffect(() => {
    axios
      .get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
      .then(response => {
        setPopularProjects(response.data.items)
      })
      .catch(err => console.error(err))

  }, [])


  return (
    <div className="App">
      <div className="Wrapper">
        <p className="Name">Github Trending</p>
        <p className="RepoNumber">Most popular repositiories now are </p>
        <ul>
          {
            popularProjects
              .map(project => (
                <li key={project.name}>{project.name}</li>
              ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;