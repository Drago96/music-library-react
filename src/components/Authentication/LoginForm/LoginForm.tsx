import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, FormControl } from '@material-ui/core';
import * as Yup from 'yup';

import { useStyles } from './LoginForm.styles';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('invalid email'),
  password: Yup.string()
    .required('password is required')
    .min(6)
    .max(24)
});

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        // console.log(values);
      }}
      validationSchema={loginSchema}
      render={({ submitForm }) => (
        <Form>
          <FormControl fullWidth={true} margin={'dense'}>
            <Field
              name="email"
              type="email"
              label="Email"
              component={TextField}
            />
          </FormControl>
          <FormControl fullWidth={true} margin={'dense'}>
            <Field
              type="password"
              label="Password"
              name="password"
              component={TextField}
            />
          </FormControl>
          <FormControl fullWidth={true} margin={'dense'}>
            <Button
              onClick={submitForm}
              fullWidth={true}
              variant={'contained'}
              color={'primary'}
            >
              Login
            </Button>
          </FormControl>
        </Form>
      )}
    />
  );
};

export default LoginForm;
