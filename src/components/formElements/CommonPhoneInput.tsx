import { TextField } from "@mui/material";
import React from "react";

function CommonPhoneInput({ value, blurFun, changeFunc, nameID, label }: any) {
  return (
    <>
      <TextField
        name={nameID}
        required
        value={value}
        onChange={changeFunc}
        onBlur={blurFun}
        fullWidth
        id={nameID}
        label={label}
        type="number"
      />
    </>
  );
}

export default CommonPhoneInput;
