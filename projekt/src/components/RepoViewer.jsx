import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";

const RepoViewer = ({popularProjects, filterByName}) => {
  /* const formik = useFormik({
    initialValues: {
      searchName: "",
      searchLanguage: "javascript",
    },
    onSubmit: (e) => {
      setSearchName(e.searchName);
      setSearchLanguage(e.searchLanguage);
    },
  }); */

  return (
    <form>
        <ul className="Projects-Wrapper">
            {popularProjects
                .map((project) => (
                    <>
                    <input type="checkbox" />
                    <li key={project.name} value={project.name}>
                        {project.name}, {project.created_at}, 
                        <Button variant="contained" href={project.html_url}>link</Button>
                    </li>
                    </>
                ))
                .filter((project) =>
                    filterByName === ""
                    ? project
                    : project.props.value.includes(filterByName)
                )}
        </ul>
    </form>
  );
};

export default RepoViewer;