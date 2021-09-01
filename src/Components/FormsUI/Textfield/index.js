import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  // name will be passed to the TextField inside of App.js
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
  // error(which expects a boolean value of true or false in order to show the error state) -- the red text that appears on error
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
// https://youtu.be/MV9NC3FoCmM?t=889

/*

import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default TextfieldWrapper;


*/
