import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Formik, Field} from 'formik';

function App() {
  const [popularProjects, setPopularProjects] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [searchName, setSearchName] = useState('');


  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${searchName ? `${searchName}+` : searchName}language:javascript&sort=stars&order=desc`)
      .then(response => {
        setPopularProjects(response.data.items)
      })
      .catch(err => console.error(err))

  }, [searchName])

  const handleSubmit = (e) => {
    setFilterByName(e.filterByName)
  }

  const handleSubmit2 = (e) => {
    setSearchName(e.searchName);
    console.log(e.searchName, searchName)
  };


  return (
    <div className="App">
      <div className="Wrapper">
        <p className="Name">Github Repo search</p>
        <p className="Repo-Number">Most popular repositiories now are </p>
        <Formik initialValues={{ searchName: "" }} onSubmit={handleSubmit2}>
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <Field name={"searchName"} />
              <button type={"submit"}>Search</button>
            </form>
          )}
        </Formik>
       {/*  <Formik initialValues={{filterByName: ""}} onSubmit={handleSubmit}>
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <Field name={"filterByName"} />
              <button type={"submit"}>Search</button>
            </form>
          )}
        </Formik> */}
        <ul className="Projects-Wrapper">
          {
            popularProjects
              .map(project => (
                <li key={project.name} value={project.name}>{project.name}, {project.created_at}, <a href={project.html_url}>link</a></li>
              ))
              .filter(project => filterByName === "" ? project : project.props.value.includes(filterByName))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;