import React from "react";
import  FormLabel  from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from "@mui/material/Radio";
import RadioGroup from '@mui/material/RadioGroup';

function CustomRadioGroup({ label, name, value, onChange, options, error }) {
  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup row name={name} value={value} onChange={onChange}>
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              control={<Radio />}
              label={opt.label}
            />
          ))}
        </RadioGroup>
        {error && <p className="error">{error}</p>}
      </FormControl>
    </>
  );
}

export default CustomRadioGroup;
