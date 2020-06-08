import React from "react";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const AddLocalRepo = ({viewLaterList, setViewLaterList}) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            forks_count: 0,
            stargazers_count: 0,
        },
        onSubmit: (e, { resetForm }) => {
            const newRepo = {
                name: e.name,
                forks_count: e.forks_count,
                stargazers_count: e.stargazers_count,
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
            <Button type={"submit"}>Add</Button>
        </form>
    )
}

AddLocalRepo.propTypes = {
    viewLaterList: PropTypes.array,
    setViewLaterList: PropTypes.func
};

export default AddLocalRepo;