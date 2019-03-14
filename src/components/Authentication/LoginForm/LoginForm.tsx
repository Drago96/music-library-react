import React, { FunctionComponent, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, FormControl } from '@material-ui/core';
import * as Yup from 'yup';

import { useStyles } from './LoginForm.styles';

interface OwnProps {
  onSubmit: (values: { email: string; password: string }) => Promise<any>;
}

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('invalid email'),
  password: Yup.string()
    .required('password is required')
    .min(6)
    .max(24)
});

const LoginForm: FunctionComponent<OwnProps> = ({ onSubmit }) => {
  const classes = useStyles();

  const [formErrors, setFormErrors] = useState<string[]>([]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values).catch(e => {
          setFormErrors(e);

          setSubmitting(false);
        });
      }}
      validationSchema={loginSchema}
      render={({ submitForm, isSubmitting }) => (
        <Form>
          {formErrors.length > 0 && (
            <p className={classes.formError}>formErrors</p>
          )}
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
              disabled={isSubmitting}
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
