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
import countries from "./data/countries.json";

const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}));

// Initial Form State (All must match the name parameter exactly) -------------------------------------------------------

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: ""
  // country: "",
  // arrivealDate: "",
  // departureDate: "",
  // message: "",
  // termsOfService: false
};

// Yup! ----------------------------------------------------------------------------------------------------------

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email.")
    .required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required")
  // country: Yup.string().required("Required"),
  // arrivealDate: Yup.date().required("Required"),
  // departureDate: Yup.date().required("Required"),
  // message: Yup.string(),
  // termsOfService: Yup.boolean()
  //   .oneOf([true], "The terms and conditions must be accepted.")
  //   .required("The terms and conditions must be accepted.")
});

// APP.JS -----------------------------------------------------------------------------------------------------

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            {/*Formik Start ----------------------------------------------------------------------------------------------------- */}
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* 'name' references formik(name) to make formik aware of any changes. */}
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="email" label="Email" />
                    {/* name matches the name in index.js while "email" matches our formik initial value */}
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>

                  {/* Look up to center */}
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="State" />
                  </Grid>
                  {/* Next Section ---------------------------------------------------------------------------------------------- */}
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
