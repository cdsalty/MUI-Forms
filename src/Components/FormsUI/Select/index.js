import { TextField, MenuItem } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name);

  const handleChange = e => {};

  const configSelect = {
    ...field,
    select: true, // https://material-ui.com/api/text-field/#main-content
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange
  };

  return <TextField {...configSelect} />;
};

export default SelectWrapper;

/*
Steps
Step 1: Define a custom configuration that will be passed to the Textfield
Step 2: Pass to the TextField component being returned
Step 3: Handle the onChange event: (with Select, you have to manually hanlde the form state unlike a Textfield that would do it iself.)
Step 4: Import useField and useFormikContext from formik
Step 5: Pass in the name prop (very important) along with the rest of the props, as well as some custom options
Step 6: bring in the "useField" hook and destructure it.
6b: Brind down the field data to the configuration select/configSelect
- https://youtu.be/MV9NC3FoCmM?t=1598
*/
