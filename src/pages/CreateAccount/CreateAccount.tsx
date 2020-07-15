import React, { useState } from 'react';

import {
  Container,
  ButtonSubmit,
  Form,
  Input,
  Label,
  Text,
  Title,
} from './styles';
import api from '../../services/api';
import { store } from 'react-notifications-component';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { RouteComponentProps } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Password is a require field'),
  confirmPassword: Yup.string()
    .required()
    .min(7, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Confirm password is a require field')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is a require field'),
});

type Props = RouteComponentProps<any>;

const CreateAccount: React.FC<Props> = () => {
  const { setIsAuthenticated } = useLogin();
  const history = useHistory();
  async function handleFormikSubmit(
    values: {
      password: string;
      email: string;
      confirmPassword: string;
    },
    formikHelpers: FormikHelpers<{
      password: string;
      email: string;
      confirmPassword: string;
    }>
  ) {
    try {
      const response = await api.post('/user', {
        password: values.password,
        email: values.email,
      });

      if (response.data.accessToken) {
        localStorage.setItem('authentication', response.data.accessToken);

        setIsAuthenticated(true);
        history.push('/');
      }
    } catch (error) {
      store.addNotification({
        title: 'Error',
        message: `${error.response.data.error}`,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  }

  return (
    <Container>
      <Formik
        initialValues={{ password: '', email: '', confirmPassword: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleFormikSubmit}
      >
        {({
          errors,
          touched,
          handleChange,
          values,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Title>Create an Account</Title>
            <Label>
              <Input
                name="email"
                onChange={handleChange}
                value={values.email}
                type="email"
                error={errors.email}
                placeholder="Email"
              />
              {errors.email && <Text error={errors.email}>{errors.email}</Text>}
            </Label>
            <Label>
              <Input
                name="password"
                onChange={handleChange}
                value={values.password}
                type="password"
                error={errors.password}
                placeholder="Password"
              />
              {errors.password && (
                <Text error={errors.password}>{errors.password}</Text>
              )}
            </Label>
            <Label>
              <Input
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                type="password"
                error={errors.confirmPassword}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <Text error={errors.confirmPassword}>
                  {errors.confirmPassword}
                </Text>
              )}
            </Label>

            {isSubmitting ? (
              <Loader
                type="Bars"
                color="rgb(22, 192, 240)"
                height={40}
                width={40}
              />
            ) : (
              <ButtonSubmit type="submit">Create an account</ButtonSubmit>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateAccount;
