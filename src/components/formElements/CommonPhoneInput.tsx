import { InputAdornment, TextField } from "@mui/material";
import React from "react";

function CommonPhoneInput({ value, blurFun, changeFunc, nameID, label }: any) {
  return (
    <>
      <TextField
        size="small"
        name={nameID}
        required
        value={value}
        onChange={changeFunc}
        onBlur={blurFun}
        fullWidth
        id={nameID}
        label={label}
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">+65</InputAdornment>,
        }}
      />
    </>
  );
}

export default CommonPhoneInput;
