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
            <img className="Creators-Avatar" src={project.owner.avatar_url} alt="profile pic" />
            {
                editView === true
                    ? <EditDetailsView 
                        project={project}
                        setViewLaterList={setViewLaterList}
                        setEditView={setEditView}
                    />
                    : <>
                        <p>Creator: <br />{project.owner.login}</p>
                        <p>Stars: <br />{project.stargazers_count}</p>
                        <p>Forks: <br />{project.forks_count}</p>
                        <p>Description: <br />{project.description}</p>
                        <p>Language: <br />{project.language}</p>
                        <p>Archived: <br />{project.archived === true ? "True" : "False"}</p>
                    </>
            }
            <Button
                variant="contained"
                data-value={project.name}
                color="primary"
                className="Details-Edit-Button"
                startIcon={
                    editView === true
                        ? <ArrowBackIosIcon />
                        : <EditIcon />
                }
                onClick={() => setEditView(prevState => !prevState)}
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
                className="Details-Delete-Button"
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