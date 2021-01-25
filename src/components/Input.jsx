import React, { Fragment, useMemo } from "react";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";

export const MyInput = (props) => {
  return (
    <Fragment>
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" onClick={props.endAdornmentIconOnClick} style={{ cursor: "pointer" }}>
              {props.endAdornment}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start" onClick={props.startAdornmentIconOnClick}>
              {props.startAdornment}
            </InputAdornment>
          )
        }}
        size="small"
        variant="outlined"
        margin="none"
        fullWidth
        style={props.style}
        {...props}
      />
    </Fragment>
  );
};
