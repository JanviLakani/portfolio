// import React from "react";
// import { TextField } from "@mui/material";

// function Input({
//   label,
//   name,
//   type = "text",
//   onChange,
//   onBlur,
//   error,
//   value,
//   helperText,
//   multiline ,
//   rows ,
// }) {
//   return (
//      <TextField
//       fullWidth
//       variant="standard"
//       margin="dense"
//       label={label}
//       name={name}
//       type={type}
//       value={value}
//       onChange={onChange}
//       onBlur={onBlur}
//       error={error}
//       helperText={helperText}
//       multiline={multiline}
//       rows={rows}
//     />
//   )
// }

// export default Input;

import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  multiline = false,
  rows = 0,
  ...props
}) => {
  // console.log("props", props); 

  const [field, meta] = useField(props);
  // console.log(field, meta); 
  
  return (
    <TextField
      {...field}
      {...props}
      id={id}
      // name={name}
      label={label}
      type={type}
      fullWidth
      // value={value}
      variant="standard"
      multiline={multiline}
      rows={rows}
  
      error={meta.error && meta.touched}
      helperText={meta.touched && meta.error ? meta.error : ""}
    />
  );
};

export default Input;
