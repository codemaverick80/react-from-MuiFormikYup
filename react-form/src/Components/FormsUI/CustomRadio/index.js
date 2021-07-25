import { FormControlLabel, Radio } from "@material-ui/core";
import { useField } from "formik";

/*
required Props:
control ="radio" 
label="Male or Female"
name="radioOption"
options=[{key,value}]
*/

// const RadioButtonGroup = (props) => {
//   const [field] = useField({
//     name: props.name,
//     type: "radio",
//     value: props.value,
//   });

//   return (
//     <FormControlLabel
//       control={<Radio {...props} {...field} />}
//       label={props.label}
//     />
//   );
// };

const RadioButtonGroup = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const configRadio = {
    ...field,
    ...props,
  };

  if (meta && meta.touched && meta.error) {
    configRadio.error = true;
    configRadio.helperText = meta.error;
  }

  return <FormControlLabel {...configRadio} control={<Radio />} label={label} />;
};

export default RadioButtonGroup;
