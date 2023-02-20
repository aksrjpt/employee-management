import TextField from "@mui/material/TextField";

function InputField({ value, blurFun, changeFunc, nameID, label }: any) {
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
      />
    </>
  );
}

export default InputField;
