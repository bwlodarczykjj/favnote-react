import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

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

const RegisterPage = () => (
  <AuthTemplate>
    <StyledHeading>Create your account</StyledHeading>

    {/* onSubmit przyjmuje values (tutaj, zeby skrocic zapis wykorzystujemy destrukturyzacje) i przekazujemy je w metodzie HTTP --> POST po przecinku jako/w obiekcie */}
    <Formik
      initialValues={{ username: '', password: '' }}
      // onSubmit={({ username, password }) => {}}
    >
      {() => (
        <Form>
          <StyledField type="username" name="username" placeholder="Login" />
          <StyledField type="password" name="password" placeholder="Password" />
          <StyledButton type="submit">Create!</StyledButton>
          <StyledLink as={NavLink} to="/login">
            I want to log in!
          </StyledLink>
        </Form>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
