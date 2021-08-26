import React from "react";
import Header from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
// import Select from "./Components/FormsUI/Select";
// import DateTimePicker from "./Components/FormsUI/DataTimePicker";
// import Checkbox from "./Components/FormsUI/Checkbox";
// import Button from "./Components/FormsUI/Button";
// import countries from "./data/countries.json";

const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
  // addressLine1: "",
  // addressLine2: "",
  // city: "",
  // state: "",
  // country: "",
  // arrivealDate: "",
  // departureDate: "",
  // message: "",
  // termsOfService: false
};

// YUP Validation
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required to enter"),
  lastName: Yup.string().required("Required to enter last name"),
  email: Yup.string()
    .email("Invalid Email")
    .required("You ain't special Mr."),
  phone: Yup.number()
    .integer()
    .typeError("Enter valid number")
    .required("Must include a number")
});

const App = () => {
  const classes = useStyles();

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Your details</Typography>
        </Grid>

        <Grid item xs={6}>
          {/* Important... name must match the inital "firstName" value that was inside of initialValues */}
          <Textfield name="firstName" lable="First Name" />
        </Grid>
        <Grid item xs={6}>
          <Textfield
            name="lastName"
            // since we brought in ...otherProps, we can pass in any other material ui components we want to pass in. Such as label

            label="Last Name"
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default App;
