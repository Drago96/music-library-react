import React, { FunctionComponent } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, FormControl } from '@material-ui/core';
import * as Yup from 'yup';

import { useStyles } from './AuthenticationForm.styles';
import { useErrorsHandler } from '../../../hooks/useErrorsHandler';

interface OwnProps {
  onSubmit: (values: { email: string; password: string }) => Promise<any>;
  button: {
    text: string;
  };
  includeFields?: {
    confirmPassword: boolean;
  };
}

const authenticationSchema = Yup.object().shape({
  email: Yup.string()
    .required('email is required')
    .email('invalid email'),
  password: Yup.string()
    .required('password is required')
    .min(6)
    .max(24)
});

const withConfirmPasswordSchema = authenticationSchema.shape({
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'passwords must match'
  )
});

const AuthenticationForm: FunctionComponent<OwnProps> = ({
  onSubmit,
  button: { text: buttonText },
  includeFields
}) => {
  const classes = useStyles();

  const [errors, setErrors] = useErrorsHandler();

  const validationSchema = includeFields!.confirmPassword
    ? withConfirmPasswordSchema
    : authenticationSchema;

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={({ email, password }, { setSubmitting }) => {
        onSubmit({ email, password }).catch(e => {
          setErrors(e);

          setSubmitting(false);
        });
      }}
      validationSchema={validationSchema}
      render={({ submitForm, isSubmitting }) => (
        <Form>
          {errors.length > 0 && (
            <p>
              {errors.map(e => (
                <span key={e} className={classes.formError}>
                  {e}
                </span>
              ))}
            </p>
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
          {includeFields!.confirmPassword && (
            <FormControl fullWidth={true} margin={'dense'}>
              <Field
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                component={TextField}
              />
            </FormControl>
          )}
          <FormControl fullWidth={true} margin={'dense'}>
            <Button
              onClick={submitForm}
              fullWidth={true}
              variant={'contained'}
              color={'primary'}
              disabled={isSubmitting}
            >
              {buttonText}
            </Button>
          </FormControl>
        </Form>
      )}
    />
  );
};

AuthenticationForm.defaultProps = {
  includeFields: {
    confirmPassword: false
  }
};

export default AuthenticationForm;
