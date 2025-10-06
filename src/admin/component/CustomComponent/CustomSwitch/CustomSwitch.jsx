import { FormControlLabel, Switch } from "@mui/material";
import { useField } from "formik";
import React from "react";

const CustomSwitch = ({ label, checked, onChange, ...props} )  => {
  // console.log("propsprops" ,props); 
  
   const [field, meta,helpers] = useField(props);

   console.log("fieldfield" ,field);
   
  //  console.log("metameta" ,meta);
   
   

  return (
    <div>
      <FormControlLabel
       control={
          <Switch
            {...field}
            {...props}  // add props 
            checked={field.value || false}   
            onChange={(e) => helpers.setValue(e.target.checked)} 
          />
        }
        label={label}
      />
    


      {meta.error && meta.touched ? <p className="error">{meta.error}</p> : ''}
    </div>
  );
}

export default CustomSwitch;
