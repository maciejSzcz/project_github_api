import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchForm = ({setSearchName, setSearchLanguage}) => {

    const formik = useFormik({
        initialValues: {
            searchName: "",
            searchLanguage: "javascript",
        },
        onSubmit: e => {
            setSearchName(e.searchName);
            setSearchLanguage(e.searchLanguage);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField label="Search term" name="searchName" value={formik.values.searchName} onChange={formik.handleChange} />
            <TextField label="Language" name="searchLanguage" value={formik.values.searchLanguage} onChange={formik.handleChange} />
            
            <Button type={"submit"}>Search</Button>
        </form>
    )
}

export default SearchForm;