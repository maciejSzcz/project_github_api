import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm.jsx';
import RepoViewer from './components/RepoViewer.jsx';
import ViewLaterViewer from './components/ViewLaterViewer.jsx';
import SearchLocal from './components/SearchLocal.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Button from "@material-ui/core/Button";

function App() {
  const [popularProjects, setPopularProjects] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('javascript');
  const [searchOrder, setSearchOrder] = useState('desc');
  const [viewLaterList, setViewLaterList] = useState([]);
  const [stagingList, setStagingList] = useState([]);
  const [sorting, setSorting] = useState(false);


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
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="Data-Wrapper">
              <Link to="/view-later">
                <Button variant="contained" color="primary">view later</Button>
              </Link>
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
                viewLaterList={viewLaterList}
                setViewLaterList={setViewLaterList}
                stagingList={stagingList}
                setStagingList={setStagingList}
              />
            </div>
          </Route>
          <Route path="/view-later">
            <div className="Local-Wrapper">
              <Link to="/">
                <Button variant="contained" color="primary">Back to main view</Button>
              </Link>
              <p className="Name">View Later</p>
              <SearchLocal
                setFilterByName={setFilterByName}
                sorting={sorting}
                setSorting={setSorting}
              />
              <ViewLaterViewer
                viewLaterList={viewLaterList}
                setViewLaterList={setViewLaterList}
                filterByName={filterByName}
                sorting={sorting}
                setPopularProjects={setPopularProjects}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;