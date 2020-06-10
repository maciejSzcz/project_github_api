import React from "react";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import md5 from "js-md5";

const AddLocalRepo = ({viewLaterList, setViewLaterList}) => {
    const languages = ["JavaScript", "Java", "Rust", "Python"];

    const formik = useFormik({
        initialValues: {
            name: "",
            forks_count: 0,
            stargazers_count: 0,
            description: "",
            language: "JavaScript",
            ssh_url: "",
            archived: false,
        },
        validate(values) {
            const errors = {
                /* name: "wrong" */
            }
            const numbersRegex = /^\d+$/;
            const gitUrlRegex = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|[-\d\w._]+?)$/;
            if(formik.touched.name && values.name.length === 0) {
                errors.name = "Name is required"
            }

            if(!numbersRegex.test(values.forks_count)) {
                errors.forks_count = "Must be a number"
            }

            if(!numbersRegex.test(values.stargazers_count)) {
                errors.stargazers_count = "Must be a number"
            }

            if(!gitUrlRegex.test(values.ssh_url)) {
                errors.ssh_url = "Must be a valid github url"
            }
            return errors
        },
        onSubmit: (e, { resetForm }) => {
            const newRepo = {
                name: e.name,
                forks_count: e.forks_count,
                stargazers_count: e.stargazers_count,
                description: e.description,
                archived: e.archived,
                language: e.language,
                owner: {
                    login: 'local-user',
                    avatar_url: `http://www.gravatar.com/avatar/${md5(e.name)}?d=identicon&s=80`,
                },
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
                onBlur={formik.handleBlur}
                error={formik.errors.name ? true : false}
                helperText={formik.errors.name ? formik.errors.name : ""}
                required
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
                label="Stars"
                name="stargazers_count"
                value={formik.values.stargazers_count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.stargazers_count ? true : false}
                helperText={formik.errors.stargazers_count ? formik.errors.stargazers_count : ""}
            />
            <TextField
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                multiline
            />
            <TextField
                label="SSH URL"
                name="ssh_url"
                value={formik.values.ssh_url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.ssh_url ? true : false}
                helperText={formik.errors.ssh_url ? formik.errors.ssh_url : ""}
                required
                multiline
            />
            <Select
                name="language"
                className="Language-Select"
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                {
                    languages.map(language => (
                        <MenuItem value={language} key={language} label={language}>{language}</MenuItem>
                    ))
                }
            </Select>
                <FormControlLabel
                    control={<Checkbox
                        name="archived"
                        checked={formik.values.archived}
                        onChange={formik.handleChange}
                    />}
                label="archived"
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
                onClick={() => formik.resetForm()}
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