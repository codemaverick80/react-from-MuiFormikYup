import React from "react";
import { TextField } from "@material-ui/core";

/* to make Formik aware of this component (textbox) we need use useField hook from Formik library.
So any changes that are made in this field will update our form state
*/
import { useField } from "formik";

const CustomTextField = ({ name, ...otherProps }) => {
  /*   */
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined", //"outlined , standard, filled
  };
  /* Error state and error validation (we will use the meta which contains two important property 'touched' and 'error'. if either of those are true then we need to pass the error message to our TextField component)*/

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};

export default CustomTextField;
