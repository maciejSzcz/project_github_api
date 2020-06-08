import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const DetailedView = ({project, deleteItem}) => {
    return (
        <>
            <p>Stars {project.stargazers_count}</p>
            <p>Forks {project.forks_count}</p>
            <p>Description {project.description}</p>
            <Button
                variant="contained"
                data-value={project.name}
                color="primary"
                startIcon={<EditIcon />}
                >
                edit
            </Button>
            <Button
                variant="contained"
                data-value={project.name}
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={deleteItem}
                >
                delete
            </Button>
        </>
    )
}

DetailedView.propTypes = {
    project: PropTypes.object,
    deleteItem: PropTypes.func,
}

export default DetailedView;