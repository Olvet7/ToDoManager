import { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { Container, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 

export default function LoginForm() {

const [showPassword, setShowPassword] = useState(false);
const [passwordValue, setPasswordValue] = useState("");

const handleChangePassword = (e) => {
  setPasswordValue(e.target.value)
}

const handleClickShowPassword = () => {

  setShowPassword((show) => !show);

};

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <Field name="email">
            {({ field }) => (
              <TextField
                {...field}
                id="standard-basic-username"
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
                id="standard-basic-username"
                label="Enter your password"
                variant="outlined"
                fullWidth
                value={passwordValue}
                type={showPassword ? 'text' : 'password'}
                onChange={handleChangePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        {passwordValue && (passwordValue.length > 0) ? (showPassword ? <VisibilityOff /> : <Visibility />) : null}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Field>
          <button type="submit">Log In Now</button>
        </Form>
      </Formik>
    </Container>
  );
}
