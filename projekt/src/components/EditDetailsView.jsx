import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const EditDetailsView = ({project, setViewLaterList, setEditView}) => {
    const formik = useFormik({
        initialValues: {
            name: project.name,
            id: project.id,
            forks_count: project.forks_count,
            stargazers_count: project.stargazers_count,
            description: project.description,
            owner: {
              login: project.owner.login
            }
        },
        validate(values) {
            const errors = {
            }
            const numbersRegex = /^\d+$/;
            if(!numbersRegex.test(values.forks_count)) {
                errors.forks_count = "Must be a number"
            }

            if(!numbersRegex.test(values.stargazers_count)) {
                errors.stargazers_count = "Must be a number"
            }
            return errors
        },
        onSubmit: (e) => {
          setViewLaterList(prevState => {
            return prevState.map(item => {
              return item.id === e.id ? {...item, name: e.name, forks_count: e.forks_count, stargazers_count: e.stargazers_count, description: e.description, owner: {...item.owner, login: e.owner.login}} : item
            })
          })
          setEditView(false)
        },
    });

    return (
      <form onSubmit={formik.handleSubmit} className="Edit-Form">
        <TextField
          label="Creator"
          name="owner.login"
          value={formik.values.owner.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          label="Stars"
          name="stargazers_count"
          value={formik.values.stargazers_count}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.stargazers_count ? true : false}
          helperText={formik.errors.stargazers_count ? formik.errors.stargazers_count : ""}
        />
        <TextField
          label="Forks"
          name="forks_count"
          value={formik.values.forks_count}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.forks_count ? true : false}
          helperText={formik.errors.forks_count ? formik.errors.forks_count : ""}
        />
        <TextField
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          multiline
        />
        <p>Language: <br />{project.language}</p>
        <p>Archived: <br />{project.archived === true ? "True" : "False"}</p>
        <Button
          variant="contained"
          type={"submit"}
          color="primary"
          className="Change-Details-Button"
        >
          change
        </Button>
      </form>
    );
};

EditDetailsView.propTypes = { 
  project: PropTypes.object,
  setViewLaterList: PropTypes.func,
  setEditView: PropTypes.func,
};

export default EditDetailsView;