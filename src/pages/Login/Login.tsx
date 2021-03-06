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
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Password is a require field'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is a require field'),
});

type Props = RouteComponentProps<any>;

const Login: React.FC<Props> = ({ history }) => {
  const { setIsAuthenticated } = useLogin();
  async function handleFormikSubmit(
    values: {
      password: string;
      email: string;
    },
    formikHelpers: FormikHelpers<{
      password: string;
      email: string;
    }>
  ) {
    try {
      const { data } = await api.post('/users/login', {
        password: values.password,
        email: values.email,
      });
      if (data.accessToken) {
        localStorage.setItem('authentication', data.accessToken);
        setIsAuthenticated(true);
        history.push('/');
      }
    } catch (error) {
      store.addNotification({
        title: 'Error',
        message: 'Wrong username or password! ',
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
        initialValues={{ password: '', email: '' }}
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
            <Title>Sign In to Animes BR</Title>
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
            {isSubmitting ? (
              <Loader
                type="Bars"
                color="rgb(22, 192, 240)"
                height={40}
                width={40}
              />
            ) : (
              <ButtonSubmit type="submit">Sign In</ButtonSubmit>
            )}

            <strong>
              Don&apos;t have an account?
              <Link to="/create-account"> Create one</Link>
            </strong>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
