import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import {useStyles} from "./styles";

export default function OrderBy() {
  const classes = useStyles();

  return <FormControl variant="outlined" className={classes.formControl}>
    <InputLabel htmlFor="outlined-age-simple">
      Ordenar
    </InputLabel>
    <Select
      value={20}
      onChange={e => e}
      input={<OutlinedInput labelWidth={60} name="age" id="outlined-age-simple" />}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
}
