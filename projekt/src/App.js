import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Formik, Field} from 'formik';

function App() {
  const [popularProjects, setPopularProjects] = useState([])
  const [filterByName, setFilterByName] = useState('')



  useEffect(() => {
    axios
      .get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
      .then(response => {
        setPopularProjects(response.data.items)
      })
      .catch(err => console.error(err))

  }, [])

  const handleSubmit = (e) => {
    /* e.preventDefault() */
    console.log("zmiana")
    setFilterByName(e.filterByName)
  }


  return (
    <div className="App">
      <div className="Wrapper">
        <p className="Name">Github Trending</p>
        <p className="RepoNumber">Most popular repositiories now are </p>
        <Formik initialValues={{filterByName: ""}} onSubmit={handleSubmit}>
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <Field name={"filterByName"} />
              <button type={"submit"}>Search</button>
            </form>
          )}
        </Formik>
        <ul>
          {
            popularProjects
              .map(project => (
                <li key={project.name} value={project.name}>{project.name}</li>
              ))
              .filter(project => filterByName === "" ? project : project.props.value.includes(filterByName))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;