import { TextField } from "@mui/material";

function CommonDatePicker({ value, blurFun, changeFunc, nameID, label }: any) {
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
        type="date"
        inputProps={{ maxLength: 12 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
}

export default CommonDatePicker;
