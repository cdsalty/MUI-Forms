import React from "react";
import Header from "./Components/Header";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
// import Textfield from "./Components/FormsUI/Textfield";
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
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false
};

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        Hello
      </Grid>
    </Grid>
  );
};

export default App;
