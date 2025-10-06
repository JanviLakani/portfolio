import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useField } from "formik";
import React from "react";

const RadioButton = ({ id, label, option, ...props }) => {
  // console.log("RadioButton props", props); 

  const [field, meta] = useField(props);

  // console.log("RadioButtonfield", field);
  // console.log("RadioButtonmeta", meta);

  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        {...field}
        {...props}
        row
        aria-labelledby={id}
        // name={name}
        // onChange={onChange}
        // onBlur={onBlur}
      >
        {option.map((v) => (
          <FormControlLabel
            // key={v.value}
            value={v.value}
            control={<Radio />}
            label={v.label}
          />
        ))}
      </RadioGroup>

      {meta.touched && meta.error ? <p className="error">{meta.error}</p> : ""}
    </FormControl>
  );
};

export default RadioButton;
