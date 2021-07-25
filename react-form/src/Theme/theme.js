/*eslint-disable*/
//https://www.youtube.com/watch?v=mu8-u7V7Z8s
import { createTheme } from "@material-ui/core";
import { deepPurple, purple, deepOrange, red, lightBlue, blueGrey, teal } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: lightBlue[800],
      //contrastText: deepPurple[900],
    },
    error: {
      main: red["A700"],
    },
    default: {
      main: red["A700"],
    },
  },
  typography: {
    fontWeight: "bold",
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiTextField: {
    fullWidth: true,
    //variant: "outlined",
  },
  MuiInputLabel: {
    //shrink: false,
    // required: true,
    // variant: "outlined",
  },
  MuiInput: {
    disableUnderline: false,
  },

  MuiCheckbox: {},
};

theme.overrides = {
  /*  Theme Overwrite START */

  MuiButton: {
    root: {
      borderRadius: 5,
      textTransform: "none",
    },
    containedPrimary: {
      fontWeight: 700,
      "&:hover": {
        backgroundColor: deepPurple[500],
        color: purple[50],
        fontWeight: 700,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },

  MuiInput: {
    root: {},
  },
  MuiOutlinedInput: {
    root: {},
    input: {
      padding: "10px",
    },
  },
  MuiTextField: {
    root: {},
  },

  MuiFilledInput: {},

  MuiInputLabel: {
    root: {
      //textTransform: "uppercase",
      padding: "0px 0px 0px 0px",
      margin: "0px 3px",
      fontSize: "0.8rem",
    },

    outlined: {
      textTransform: "uppercase",
      transform: `translate(10px, 10px) scale(1)`,
    },
  },

  MuiFormHelperText: {
    root: {
      //color: deepPurple[900],
      //fontSize: "0.8rem",
      //padding: "2px",
      // padding: theme.spacing(0.25),
    },
    contained: {
      textTransform: "uppercase",
      color: `${deepOrange["A700"]}!important`,
    },
    error: {},
  },

  MuiCheckbox: {
    root: {
      color: red["A700"],
    },
    colorPrimary: {
      color: `${blueGrey[900]}`,
    },
    colorSecondary: {
      color: `${teal[900]}`,
    },
  },

  /*  Theme Overwrite END */
};

export default theme;
