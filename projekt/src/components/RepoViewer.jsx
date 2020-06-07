import React from "react";
/* import { useFormik } from "formik"; */
import PropTypes from "prop-types";
/* import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid"; */
import RepoItem from "./RepoItem.jsx"

const RepoViewer = ({popularProjects, filterByName, viewLaterList, setViewLaterList}) => {
  return (
    <form>
        <ul className="Projects-Wrapper">
            {popularProjects
                .map((project) => (
                  <RepoItem key={project.name} project={project} popularProjects={popularProjects} viewLaterList={viewLaterList} setViewLaterList={setViewLaterList} />
                ))
                .filter((project) =>
                  filterByName === ""
                    ? project
                    : project.props.value.includes(filterByName)
                )
              }
        </ul>
    </form>
  );
};

RepoViewer.propTypes = {
  popularProjects: PropTypes.array,
  filterByName: PropTypes.string,
  viewLaterList: PropTypes.array,
  setViewLaterList: PropTypes.func,
}

export default RepoViewer;