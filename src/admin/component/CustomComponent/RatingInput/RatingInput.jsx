import React from "react";
import { useField } from "formik";
import Rating from "@mui/material/Rating";

function RatingInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <label>{label}</label>
      <Rating
        {...field}
        precision={0.5}
        value={field.value || 0}
        onChange={(event, newValue) => {
          helpers.setValue(newValue);
        }}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: "red", fontSize: "12px" }}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default RatingInput;