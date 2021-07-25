/*eslint-disable*/
import React from "react";

/* Material UI components */
import { Container, Grid, Button, Typography, LinearProgress, Checkbox, TextField, FormGroup } from "@material-ui/core";
import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

/*Radio Components*/
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { ErrorMessage } from "formik";

/*Select Components */
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

/* Formik component */
import { Formik, Form, Field, useFormikContext } from "formik";

/* Yup form validaton */
import * as Yup from "yup";

/*Custom Component */
import CustomTextField from "../Components/FormsUI/CustomTextField";
import CustomDatePicker from "../Components/FormsUI/CustomDatePicker";
import { DisplayFormikProps } from "./DisplayFormikProps";

import countries from "../data/countries.json";
import { top100Movies } from "../data/top100movies";
import SelectWrapper from "../Components/FormsUI/CustomSelect";

/* ======================= Component level setting ======================= */
import { deepOrange } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  radioError: {
    textTransform: "uppercase",
    color: `${deepOrange["A700"]}!important`,
  },
}));

/* Radio component style */

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

/* ======================= Formik Form Configuration =======================*/

/* form initial values */
const INITIAL_FORM_STATE = {
  firstName: "Harish",
  lastName: "",
  email: "harish@gmail.com",
  phone: "5223456789",
  maritalStatus: "married",
  dateOfBirth: setDateFormat(new Date()),
  gender: "male",
  country: "US",
  lang: [],
  rebuy: false,
};
/* Form Validation schema for Yup */
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.number().integer().typeError("Please enter a valid phone number").required("Phone is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  dateOfBirth: Yup.date().required("Date is required"),
  gender: Yup.string().required("Gender is required"),
  // date: Yup.date().required("Required"),
  country: Yup.string().required("Country is required"),
  //lang: Yup.array().length(1, "Required").required("Required"),
});

/* Marital Status Data */
const maritalStatus = [
  {
    value: "single",
    label: "Single",
  },
  {
    value: "married",
    label: "Married",
  },
  {
    value: "divorce",
    label: "Divorce",
  },
  {
    value: "widowed",
    label: "Widowed",
  },
];

/* Gender Data */

const genderData = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

/* Language Check Box data */

const languageCheckBoxOptions = [
  { key: "CSharp", value: "csharp" },
  { key: "Javascript", value: "javascript" },
  { key: "Html", value: "html" },
  { key: "Css", value: "css" },
];

const AutoSubmitOnRebuy = () => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.rebuy is true or gender is female
    if (values.rebuy === true || values.gender === "female") {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};

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
                    <Typography>Personal information</Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <CustomTextField name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    {/* Material-ui TextField hooking with Formik and Yup
                    validation */}
                    <TextField
                      id="lastName"
                      name="lastName"
                      variant="outlined"
                      label="Last Name"
                      value={props.values.lastName}
                      error={props.touched.lastName && Boolean(props.errors.lastName)}
                      helperText={props.touched.lastName && props.errors.lastName}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <CustomTextField name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <CustomTextField name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <Field name="dateOfBirth" label="Date of Birth" component={CustomDatePicker} />

                    {/* <KeyboardDatePicker
                      disableToolbar
                      name="dateOfBirth"
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={props.values.dateOfBirth}
                      onChange={props.handleChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    /> */}
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="maritalStatus"
                      name="maritalStatus"
                      select
                      label="Marital Status"
                      value={props.values.maritalStatus}
                      onChange={props.handleChange}
                      error={props.touched.maritalStatus && Boolean(props.errors.maritalStatus)}
                      helperText={props.touched.maritalStatus && props.errors.maritalStatus}
                    >
                      {maritalStatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup row aria-label="gender" color="primary" name="gender" value={props.values.gender} onChange={props.handleChange}>
                        {genderData.map((item) => {
                          return <FormControlLabel key={item.value} value={item.value} control={<Radio color="primary" />} label={item.label} />;
                        })}
                      </RadioGroup>
                      <FormHelperText className={classes.radioError}>{props.errors.gender}</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item sx={12} sm={12} md={6}>
                    <SelectWrapper name="country" label="Country" options={countries} />
                  </Grid>

                  <Grid item sx={12} sm={12} md={6}>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox checked={props.values.rebuy} onChange={props.handleChange} name="rebuy" color="primary" />} label="Rebuy" />
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    {props.isSubmitting && <LinearProgress />}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Button type="submit" disabled={props.isSubmitting} variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>

                <DisplayFormikProps {...props} />

                <AutoSubmitOnRebuy />
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </Grid>
  );
};

export default FormExample;
