import React from "react";
import { Field, ErrorMessage } from "formik";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextError from "../../TextError";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Index = (props) => {
  const classes = useStyles();
  return <></>;
};

export default Index;

// const index = (props) => {
//   const { label, name, options, ...rest } = props;
//   return (
//     <div className="form-control">
//       <label>{label}</label>

//       <Field name={name} {...rest}>
//         {({ field }) => {
//           //console.log(field);
//           return options.map((option) => {
//             return (
//               <React.Fragment key={option.key}>
//                 <input type="checkbox" id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)} />

//                 <label htmlFor={options.value}>{option.key}</label>
//               </React.Fragment>
//             );
//           });
//         }}
//       </Field>

//       <ErrorMessage name={name} component={TextError} />
//     </div>
//   );
// };

// export default index;
