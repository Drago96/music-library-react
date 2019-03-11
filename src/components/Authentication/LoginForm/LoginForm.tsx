import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, FormControl } from '@material-ui/core';

import { useStyles } from './LoginForm.styles';

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        // console.log(values);
      }}
      render={({ submitForm }) => (
        <Form>
          <FormControl fullWidth={true} margin={'normal'}>
            <Field
              name="email"
              type="email"
              label="Email"
              component={TextField}
            />
          </FormControl>
          <FormControl fullWidth={true} margin={'normal'}>
            <Field
              type="password"
              label="Password"
              name="password"
              component={TextField}
            />
          </FormControl>
          <FormControl fullWidth={true} margin={'normal'}>
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
