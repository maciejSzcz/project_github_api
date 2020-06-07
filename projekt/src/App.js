import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm.jsx';
import RepoViewer from './components/RepoViewer.jsx';
import ViewLaterViewer from './components/ViewLaterViewer.jsx';

function App() {
  const [popularProjects, setPopularProjects] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('javascript');
  const [viewLaterList, setViewLaterList] = useState([])


  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${searchName ? `${searchName}+` : searchName}language:${searchLanguage}&sort=stars&order=desc`)
      .then(response => {
        response.data.items.map(project => project.checked = false)
        setPopularProjects(response.data.items)
      })
      .catch(err => console.error(err))
    

  }, [searchName, searchLanguage])

  return (
    <div className="App">
      <div className="Wrapper">
        <p className="Name">GitHub Repo search</p>
        <p className="Repo-Number">Search GitHub projects</p>
        <SearchForm setSearchName={setSearchName} setSearchLanguage={setSearchLanguage} />
        
        <RepoViewer 
          popularProjects={popularProjects}
          setPopularProjects={setPopularProjects}
          filterByName={filterByName}
          setFilterByName={setFilterByName} 
          viewLaterList={viewLaterList}
          setViewLaterList={setViewLaterList}
        />
        <ViewLaterViewer viewLaterList={viewLaterList}/>
      </div>
    </div>
  );
}

export default App;