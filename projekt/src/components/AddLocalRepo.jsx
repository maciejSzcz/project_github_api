import React from "react";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";

const AddLocalRepo = ({viewLaterList, setViewLaterList}) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            forks_count: 0,
            stargazers_count: 0,
            description: "",
        },
        onSubmit: (e, { resetForm }) => {
            const newRepo = {
                name: e.name,
                forks_count: e.forks_count,
                stargazers_count: e.stargazers_count,
                description: e.description,
            };

            viewLaterList !== []
                ? setViewLaterList([...viewLaterList, newRepo])
                : setViewLaterList([newRepo]);

            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            <TextField
                label="Forks"
                name="forks_count"
                value={formik.values.forks_count}
                onChange={formik.handleChange}
            />
            <TextField
                label="Stars"
                name="stargazers_count"
                value={formik.values.stargazers_count}
                onChange={formik.handleChange}
            />
            <TextField
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            <Button
                variant="contained"
                type={"submit"}
                color="primary"
            >
                Add
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={e => formik.resetForm()}
            >
                Clear
            </Button>
        </form>
    )
}

AddLocalRepo.propTypes = {
    viewLaterList: PropTypes.array,
    setViewLaterList: PropTypes.func
};

export default AddLocalRepo;