import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  error: {
    textTransform: "uppercase",
    color: `${deepOrange["A700"]}!important`,
  },
}));

const TextError = (props) => {
  const classes = useStyles();
  console.log(props.children);
  return <div className={classes.error}>{props.children}</div>;
};

export default TextError;
