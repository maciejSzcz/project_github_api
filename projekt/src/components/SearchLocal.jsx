import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SearchLocal = ({ setFilterByName }) => {
  const formik = useFormik({
    initialValues: {
      filterByName: ""
    },
    onSubmit: (e) => {
      setFilterByName(e.filterByName);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField name={"filterByName"} value={formik.values.filterByName} onChange={formik.handleChange}  />
        <Button type={"submit"}>Search</Button>
    </form>
  );
};

export default SearchLocal;