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

/*Select Components */
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

/* Formaik component */
import { Formik, Form, Field, validateYupSchema } from "formik";

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

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
}));

/* Redio component style */

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
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  maritalStatus: "",
  dateOfBirth: setDateFormat(new Date()),
  gender: "female",
  country: "",
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
  maritalStatus: Yup.string().required("Marital status is required"),
  //gender: Yup.string().required("Gender is required"),
  // date: Yup.date().required("Required"),
  country: Yup.string().required("Country is required"),
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

const FormExample = () => {
  const classes = useStyles();

  // const [maritialStatus, setMaritialStatus] = React.useState("");
  // const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setMaritialStatus(event.target.value);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

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

                  <Grid item xs={12} sm={12} md={6}>
                    <CustomTextField name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <CustomTextField name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <Field
                      name="dateOfBirth"
                      label="Date of Birth"
                      component={CustomDatePicker}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      // style={{ width: "200px" }}
                      fullWidth
                      variant="outlined"
                      id="maritalStatus"
                      name="maritalStatus"
                      select
                      label="Marital Status"
                      value={props.values.maritalStatus}
                      onChange={props.handleChange}
                      error={
                        props.touched.maritalStatus &&
                        Boolean(props.errors.maritalStatus)
                      }
                      helperText={
                        props.touched.maritalStatus &&
                        props.errors.maritalStatus
                      }
                    >
                      {/* <MenuItem key={""} value={""}>
                        No Selected
                      </MenuItem> */}
                      {maritalStatus.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Gender</FormLabel> */}
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="gender"
                        defaultValue=""
                        value={props.values.gender}
                        onChange={(e) =>
                          props.setFieldValue("gender", e.currentTarget.value)
                        }
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                          labelPlacement="start"
                        />

                        <FormControlLabel
                          value="female"
                          control={<GreenRadio />}
                          label="Female"
                          labelPlacement="start"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item sx={12} sm={12} md={6}>
                    <SelectWrapper
                      name="country"
                      label="Country"
                      options={countries}
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
