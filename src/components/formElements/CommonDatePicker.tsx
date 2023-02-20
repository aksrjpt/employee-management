import { TextField } from "@mui/material";
import moment from "moment";

function CommonDatePicker({ value, blurFun, changeFunc, nameID, label }: any) {
  const today = moment().format("YYYY-MM-DD");
  return (
    <>
      {/* <DatePicker
        value={value}
        onChange={changeFunc}
        minDate={new Date().setDate(5)}
        maxDate={new Date().setDate(15)}
        id={nameID}
        label={label}
      /> */}
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
        type="date"
        inputProps={{ max: today }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
}

export default CommonDatePicker;
