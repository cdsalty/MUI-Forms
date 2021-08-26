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

  return (
    <TextField {...configTextField} /> // passing along the configuration setup with the TextField
  );
};

export default TextFieldWrapper;

/*
1. How can we make formik aware of the component? In other words, if any changes are made in a particular field to update 
the form state?

  - useField hook
    - you want to destructure the props along with any additional props passed in... (name and ...otherProps)
    - 

*/
