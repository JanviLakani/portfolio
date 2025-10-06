import { useField } from "formik";
import React from "react";

function FileInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  // console.log("field", field); 

  return (
    <div>
      <label>{label}</label>
      <input
        type="file"
        name={field.name}
        value=""
        onChange={(e) => helpers.setValue(e.target.files[0])}
        // onBlur={field.onBlur}
      />

      {field.value && (
        <img 
          width={20} 
          height={20}
          //  src={
          //   typeof field.value === "string" ? `/public/img/${field.value}` : URL.createObjectURL(field.value) 
          // } 

            src={
            typeof field?.value?.url === "string" 
            ? field?.value?.url : 
            field.value
            ? URL.createObjectURL(field.value) 
            : ''
          } 
            />
      )}

     

      {meta.touched && meta.error ? <p className="error">{meta.error}</p> : ""}
    </div>
  );
}

export default FileInput;












// import { useField } from "formik";
// import React from "react";

// function FileInput({ label, ...props }) {
//   const [field, meta, helpers] = useField(props);

//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         type="file"
//         name={field.name}
//         onChange={(e) => {
//           const file = e.target.files[0];
//           helpers.setValue(file);
//         }}
//         onBlur={field.onBlur}
//       />

//       {field.value ? (
//         <img
//           width={50}
//           height={50}
//           alt="preview"
//           src={
//             typeof field.value === "string"
//               ? `/public/img/${field.value}`
//               : field.value instanceof File
//               ? URL.createObjectURL(field.value)
//               : ""
//           }
//         />
//       ) : null}

   
//       {meta.touched && meta.error ? (
//         <p className="error">{meta.error}</p>
//       ) : null}
//     </div>
//   );
// }

// export default FileInput;
