import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const RepoItem = ({ project, popularProjects, viewLaterList, setViewLaterList }) => {

    const handleChange = (e) => {
        const targetItem = popularProjects.filter((project) => project.name === e.target.name)[0];
        targetItem.detailedView = false;

        if(e.target.checked === true) {
            viewLaterList !== []
                ? setViewLaterList([...viewLaterList, targetItem])
                : setViewLaterList([targetItem])
        } else {
            setViewLaterList([...viewLaterList.filter(listItem => listItem !== targetItem)])
        }
    } 


    return (
        <li value={project.name}>{/* 
            <input type="checkbox" checked={project.isChecked}/> */}
            <FormControlLabel
                control={<Checkbox/*  checked={project.isChecked} */ name={project.name} onChange={handleChange}/>}
            />
            {project.name}, {project.created_at}
            <Button variant="contained" href={project.html_url}>link</Button>
        </li>
    );
};

RepoItem.propTypes = {
    project: PropTypes.object,
    popularProjects: PropTypes.array,
    viewLaterList: PropTypes.array,
    setViewLaterList: PropTypes.func
};

export default RepoItem;