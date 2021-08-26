import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  // bring in the useField hook, pass in name and ...otherProps so formik knows any changes, etc.
  const [field, meta] = useField(name); // pass in name because we want to know it's activity
  // the field will be passed into the "textField component"

  // create a default configiuration for the TextField; pass it in the component in the return statment
  const configTextField = {
    ...field, // to get the field data from the textfield compoment
    ...otherProps,
    fullWidth: true,
    variant: "outlined" // the appearence
  };

  // meta will return two things, touched and error
  // this will in essance pass two additional props, error(which expects a boolean value of true or false in order to show the error state)
  //  it will also get the "helperText" which allows us to make a custom error message in our yup validation.
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <TextField {...configTextField} /> // passing along the configuration setup with the TextField
  );
};

export default TextfieldWrapper;
