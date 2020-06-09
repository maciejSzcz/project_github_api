import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem.jsx"
import Button from "@material-ui/core/Button";

const RepoViewer = ({popularProjects, setPopularProjects, viewLaterList, setViewLaterList, stagingList, setStagingList}) => {

  const handleClick = () => {
    setViewLaterList(prev => {
      return [...prev, ...stagingList]
    })
    setStagingList([])
    setPopularProjects((prevState) => {
      return prevState.map((item) => {
        return item.checked === true
          ? { ...item, checked: false }
          : item;
      });
    });
  }

  return (
    <form>
        <ul className="Projects-Wrapper">
          <li className="Project-Item">
            <p>View Later</p>
            <p>Name</p>
            <p>Forks</p>
            <p>Stars</p>
            <p>Link to github</p>
          </li>
          {popularProjects
              .map((project) => (
                <RepoItem 
                  key={project.name}
                  project={project}
                  id={project.id}
                  viewLaterList={viewLaterList}
                  popularProjects={popularProjects}
                  setPopularProjects={setPopularProjects}
                  stagingList={stagingList}
                  setStagingList={setStagingList}
                />
              ))
            }
        </ul>
        {
          stagingList.length > 0
            ? 
              <div className="Add-Container">
                <Button variant="contained" onClick={handleClick}>
                  Add to view later
                </Button>
              </div>
            : ""
        }
    </form>
  );
};

RepoViewer.propTypes = {
  popularProjects: PropTypes.array,
  setPopularProjects: PropTypes.func,
  filterByName: PropTypes.string,
  viewLaterList: PropTypes.array,
  setViewLaterList: PropTypes.func,
  stagingList: PropTypes.array,
  setStagingList: PropTypes.func,
}

export default RepoViewer;