import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const DropDownSelect = ({ data, id, label, ...props }) => {
  // console.log("props...", props); 

  // console.log("data" ,data); 
  

  const [field, meta] = useField(props);

  // console.log(field, meta);  

  return (
    <TextField
      {...field}
      select
      variant="standard"
      fullWidth
      label={label}
      id={id}
      error={meta.error && meta.touched}
      helperText={meta.touched && meta.error ? meta.error : ""}

    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropDownSelect;
