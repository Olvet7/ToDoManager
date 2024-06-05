import { Formik, Form, Field } from "formik";
import { Container, TextField } from "@mui/material";
// import css from "./RegisterForm.module.css";


// style={{ maxWidth: '335px', padding: '24px' }}

export default function RegisterForm() {
  return (
    <Container style={{ maxWidth: '335px', padding: '24px' }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <Field name="name">
            {({ field }) => (
              <TextField
                {...field}
                id="standard-basic-username"
                label="Enter your name"
                variant="outlined"
                fullWidth
              />
            )}
          </Field>
          <Field name="email">
            {({ field }) => (
              <TextField
                {...field}
                id="standard-basic-useremail"
                label="Enter your email"
                variant="outlined"
                fullWidth
              />
            )}
          </Field>
          <Field name="password">
            {({ field }) => (
              <TextField
                {...field}
                id="standard-basic-userpassword"
                label="Create a password"
                variant="outlined"
                fullWidth
              />
            )}
          </Field>
          <button type="submit">Register Now</button>
        </Form>
      </Formik>
    </Container>
  );
}
