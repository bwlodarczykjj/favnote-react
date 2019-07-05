import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.notes};
  margin-left: 40px;
  margin-bottom: 20px;
`;

const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 30px;
  width: 300px;
  background-color: ${({ theme }) => theme.grey100};
  /* text-transform: uppercase; */
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.bold};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const LoginPage = () => (
  <AuthTemplate>
    <StyledHeading>Sign In</StyledHeading>

    {/* onSubmit przyjmuje values (tutaj, zeby skrocic zapis wykorzystujemy destrukturyzacje) i przekazujemy je w metodzie POST po przecinku jako/w obiekcie */}
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:9000/api/user/login', {
            username,
            password,
          })
          .then(() => console.log('Login successful!'))
          .catch(err => console.log('Login unseccessfull'`${err}`));
      }}
    >
      {() => (
        <Form>
          <StyledField type="username" name="username" placeholder="Login" />
          <StyledField type="password" name="password" placeholder="Password" />
          <StyledButton type="submit">sign in</StyledButton>
          <StyledLink href="">I want to go to register!</StyledLink>
        </Form>
      )}
    </Formik>
  </AuthTemplate>
);

export default withContext(LoginPage);
