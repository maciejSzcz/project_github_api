import React, {useState} from "react";
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
    const [languages] = useState(["javascript", "scala", "python"]);

    const formik = useFormik({
        initialValues: {
            name: "",
            forks_count: 0,
            stargazers_count: 0,
            description: "",
            language: "javascript",
            checkbox: false,
        },
        onSubmit: (e, { resetForm }) => {
            const newRepo = {
                name: e.name,
                forks_count: e.forks_count,
                stargazers_count: e.stargazers_count,
                description: e.description,
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
                required
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
                data-testid="required-input"
                required
            />
            <Select
                name="language"
                className="Language-Select"
                value={formik.values.language}
                onChange={formik.handleChange}
            >
                {
                    languages.map(language => (
                        <MenuItem value={language} key={language} label={language}>{language}</MenuItem>
                    ))
                }
            </Select>
                <FormControlLabel
                    control={<Checkbox
                        name="checkbox"
                        checked={formik.values.checkbox}
                        onChange={formik.handleChange}
                    />}
                label="costam"
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