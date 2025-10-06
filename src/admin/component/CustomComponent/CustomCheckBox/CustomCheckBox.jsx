import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { useField } from "formik";
import React from "react";

const CustomCheckBox = ({ label, options, ...props }) => {
  // console.log("props..", props);

  const [field, meta, helpers] = useField(props);

  // console.log("field 123", field);
  // console.log("meta...", meta);

  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        {options.map((opt) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                value={["yes"]}
                {...props}
                checked={field.value.includes(opt.value)}
              />
            }
            label={opt.label}
          />
        ))}
      </FormGroup>
      {/* {meta.error ? <p className="error">{meta.helperText}</p> : ""}   */}

      {meta.touched && meta.error ? <p className="error">{meta.error}</p> : ""}
    </div>
  );
};

export default CustomCheckBox;
