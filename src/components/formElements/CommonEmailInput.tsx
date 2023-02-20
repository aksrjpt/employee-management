import { TextField } from "@mui/material";

function CommonEmailInput({ value, blurFun, changeFunc, nameID, label }: any) {
  return (
    <>
      <TextField
        fullWidth
        name={nameID}
        required
        value={value}
        onChange={changeFunc}
        onBlur={blurFun}
        id={nameID}
        label={label}
      />
    </>
  );
}

export default CommonEmailInput;
