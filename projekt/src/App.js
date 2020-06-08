import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm.jsx';
import RepoViewer from './components/RepoViewer.jsx';
import ViewLaterViewer from './components/ViewLaterViewer.jsx';
import SearchLocal from './components/SearchLocal.jsx';

function App() {
  const [popularProjects, setPopularProjects] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('javascript');
  const [searchOrder, setSearchOrder] = useState('desc');
  const [viewLaterList, setViewLaterList] = useState([])


  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${searchName ? `${searchName}+` : searchName}language:${searchLanguage}&sort=stars&order=${searchOrder}`)
      .then(response => {
        response.data.items.map(project => project.checked = false)
        setPopularProjects(response.data.items)
      })
      .catch(err => console.error(err))
    

  }, [searchName, searchLanguage, searchOrder])

  return (
    <div className="App">
      <div className="Data-Wrapper">
        <p className="Name">GitHub Repo search</p>
        <p className="Repo-Number">Search GitHub projects</p>
        <SearchForm 
          setSearchName={setSearchName}
          setSearchLanguage={setSearchLanguage}
          setSearchOrder={setSearchOrder}
        />
        
        <RepoViewer 
          popularProjects={popularProjects}
          setPopularProjects={setPopularProjects}
          filterByName={filterByName}
          viewLaterList={viewLaterList}
          setViewLaterList={setViewLaterList}
        />
      </div>
      <div className="Local-Wrapper">
        <p className="Name">View Later</p>
        <SearchLocal
          setFilterByName={setFilterByName}
        />
        <ViewLaterViewer 
          viewLaterList={viewLaterList}
          setViewLaterList={setViewLaterList}
          filterByName={filterByName}  
        />
      </div>
    </div>
  );
}

export default App;