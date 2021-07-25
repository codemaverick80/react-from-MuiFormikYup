import React from "react";
import { DatePicker } from "@material-ui/pickers";

const CustomDatePicker = ({ field, form, ...otherProps }) => {
  const currentError = form.errors[field.name];

  return (
    <DatePicker
      autoOk="true"
      disableToolbar
      variant="inline"
      inputVariant="outlined"
      name={field.name}
      value={field.value}
      format="MM/dd/yyyy"
      helperText={currentError}
      // error={Boolean(currentError)}
      // onError={(error) => {
      //   // handle as a side effect
      //   if (error !== currentError) {
      //     form.setFieldError(field.name, error);
      //   }
      // }}
      //// if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={(date) => {
        form.setFieldValue(field.name, date, false);
      }}
      {...otherProps}
    />
  );
};

export default CustomDatePicker;
