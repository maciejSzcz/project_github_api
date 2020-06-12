import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SearchLocal = ({ setFilterByName, sorting, setSorting }) => {
  const formik = useFormik({
    initialValues: {
      filterByName: "",
      sort: sorting,
    },
    onSubmit: (e) => {
      setFilterByName(e.filterByName);
      setSorting(e.sort);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField name={"filterByName"} value={formik.values.filterByName} onChange={formik.handleChange}  />
        <FormControlLabel
          control={
              <Checkbox
                  name="sort"
                  checked={formik.values.sort}
                  onChange={formik.handleChange}
              />
          }
          label="sort from most starred"
        />
        <Button type={"submit"}>Search</Button>
    </form>
  );
};

SearchLocal.propTypes = {
  setFilterByName: PropTypes.func,
  sorting: PropTypes.bool,
  setSorting: PropTypes.func,
}

export default SearchLocal;