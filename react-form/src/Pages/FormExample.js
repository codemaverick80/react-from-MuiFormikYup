/*eslint-disable*/
import React from "react";

/* Material UI components */
import {
  Container,
  Grid,
  Button,
  Typography,
  LinearProgress,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

/*Radio Components*/
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

/* Formaik component */
import { Formik, Form, Field, validateYupSchema } from "formik";

/* Yup form validaton */
import * as Yup from "yup";

/*Custom Component */
import CustomTextField from "../Components/FormsUI/CustomTextField";
import CustomDatePicker from "../Components/FormsUI/CustomDatePicker";
import { DisplayFormikProps } from "./DisplayFormikProps";

/* Component level setting */

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
}));

const GreenRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const setDateFormat = (date) => {
  let today = new Date(date);

  var year = today.getFullYear();

  var month = (1 + today.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = today.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  today = month + "/" + day + "/" + year;
  return today;
};

/* Formik Form Configuration */

/* form initial values */
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: setDateFormat(new Date()),
};
/* Form Validation schema for Yup */
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Phone is required"),
  // date: Yup.date().required("Required"),
});

const FormExample = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Container maxWidth="md">
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                // values.date = setDateAndFormat(values.date);
                // console.log(JSON.stringify(values, null, 2));
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ ...props }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography>Form</Typography>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <CustomTextField name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    /* Material-ui TextFiel hooking with Formik and Yup
                    validation */
                    <TextField
                      id="lastName"
                      name="lastName"
                      variant="outlined"
                      label="Last Name"
                      value={props.values.lastName}
                      error={
                        props.touched.lastName && Boolean(props.errors.lastName)
                      }
                      helperText={
                        props.touched.lastName && props.errors.lastName
                      }
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <CustomTextField name="email" label="Email" />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <CustomTextField name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6}>
                    <Field
                      name="dateOfBirth"
                      label="Date of Birth"
                      component={CustomDatePicker}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    {props.isSubmitting && <LinearProgress />}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      type="submit"
                      disabled={props.isSubmitting}
                      variant="contained"
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>

                <DisplayFormikProps {...props} />
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </Grid>
  );
};

export default FormExample;
