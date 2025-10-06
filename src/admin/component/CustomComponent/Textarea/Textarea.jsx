import { useField } from "formik";
import React from "react";

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
}

export default TextArea;