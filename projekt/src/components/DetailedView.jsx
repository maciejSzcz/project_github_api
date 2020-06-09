import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditDetailsView from "./EditDetailsView.jsx"

const DetailedView = ({project, deleteItem, setViewLaterList}) => {
    const [editView, setEditView] = useState(false)
    return (
        <div className="Detailed-View">
            {
                editView === true
                    ? <EditDetailsView 
                        project={project}
                        setViewLaterList={setViewLaterList}
                        setEditView={setEditView}
                    />
                    : <>
                        <p>Stars: {project.stargazers_count}</p>
                        <p>Forks: {project.forks_count}</p>
                        <p>Description: {project.description}</p>
                        <p>Creator: {project.owner.login}</p>
                    </>
            }
            <img className="Creators-Avatar" src={project.owner.avatar_url} alt="profile pic" />
            <Button
                variant="contained"
                data-value={project.name}
                color="primary"
                startIcon={
                    editView === true
                        ? <ArrowBackIosIcon />
                        : <EditIcon />
                }
                onClick={e => setEditView(prevState => !prevState)}
                >
                {editView === true 
                    ? "discard"
                    : "edit"
                }
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
        </div>
    )
}

DetailedView.propTypes = {
    project: PropTypes.object,
    deleteItem: PropTypes.func,
    setViewLaterList: PropTypes.func,
}

export default DetailedView;