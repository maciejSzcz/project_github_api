import React from "react";
/* import { useFormik } from "formik"; */
import PropTypes from "prop-types";
/* import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid"; */
import RepoItem from "./RepoItem.jsx"

const RepoViewer = ({popularProjects, setPopularProjects, filterByName, viewLaterList, setViewLaterList}) => {
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
                  popularProjects={popularProjects}
                  setPopularProjects={setPopularProjects}
                  viewLaterList={viewLaterList}
                  setViewLaterList={setViewLaterList} 
                />
              ))
            }
        </ul>
    </form>
  );
};

RepoViewer.propTypes = {
  popularProjects: PropTypes.array,
  setPopularProjects: PropTypes.func,
  filterByName: PropTypes.string,
  viewLaterList: PropTypes.array,
  setViewLaterList: PropTypes.func,
}

export default RepoViewer;