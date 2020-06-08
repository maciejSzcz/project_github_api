import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const RepoItem = ({ project, viewLaterList, popularProjects, setPopularProjects, stagingList, setStagingList }) => {

    const isInViewLaterList = (name) => {
        return viewLaterList.filter((item) => item.name === name).length >= 1
            ? true
            : false;
    };

    const handleChange = (e) => {
        const targetItem = popularProjects.filter((project) => project.name === e.target.name)[0];
        targetItem.detailedView = false;
        if(isInViewLaterList(e.target.name)) {
            return
        }

        setPopularProjects(prevState => {
            return prevState.map(item => {
                return item.name === targetItem.name
                    ? { ...item, checked: !item.checked }
                    : item;
            });
        })

        if(e.target.checked === true) {
            stagingList !== []
                ? setStagingList(prevState => {
                    return [...prevState, targetItem]
                })
                : setStagingList([targetItem])
        } else if (e.target.checked === false) {
            setStagingList([...stagingList.filter(listItem => listItem.name !== targetItem.name)])
        }
    }

    return (
        <li value={project.name} className="Project-Item">
            <FormControlLabel
                control={<Checkbox name={project.name} checked={project.checked} disabled={isInViewLaterList(project.name)} onChange={handleChange}/>}
            />
            <p>{project.name}</p>
            <p>{project.forks_count}</p>
            <p>{project.stargazers_count}</p>
            <Button variant="contained" href={project.html_url}>link</Button>
        </li>
    );
};

RepoItem.propTypes = {
    project: PropTypes.object,
    viewLaterList: PropTypes.array,
    popularProjects: PropTypes.array,
    setPopularProjects: PropTypes.func,
    stagingList: PropTypes.array,
    setStagingList: PropTypes.func,
};

export default RepoItem;