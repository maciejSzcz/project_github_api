import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SearchForm = ({setSearchName, setSearchLanguage, setSearchOrder}) => {

    const formik = useFormik({
        initialValues: {
            searchName: "",
            searchLanguage: "javascript",
            ascending: false,
        },
        onSubmit: e => {
            setSearchName(e.searchName);
            setSearchLanguage(e.searchLanguage);
            e.ascending === true ? setSearchOrder("asc") : setSearchOrder("desc")
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField label="Search term" name="searchName" value={formik.values.searchName} onChange={formik.handleChange} />
            <TextField label="Language" name="searchLanguage" value={formik.values.searchLanguage} onChange={formik.handleChange} />
            <FormControlLabel
                control={
                    <Checkbox
                        name="ascending"
                        checked={formik.values.ascending}
                        onChange={formik.handleChange}
                    />
                }
                label="sort by least popular"
            />
            
            <Button type={"submit"}>Search</Button>
        </form>
    )
}

export default SearchForm;