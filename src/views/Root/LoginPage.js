import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';

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

const LoginPage = ({ authenticate }) => (
  <AuthTemplate>
    <StyledHeading>Sign In</StyledHeading>

    {/* onSubmit przyjmuje values (tutaj, zeby skrocic zapis wykorzystujemy destrukturyzacje) i przekazujemy je w metodzie HTTP --> POST po przecinku jako/w obiekcie */}
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {() => (
        <Form>
          <StyledField type="username" name="username" placeholder="Login" />
          <StyledField type="password" name="password" placeholder="Password" />
          <StyledButton type="submit">sign in</StyledButton>
          <StyledLink as={NavLink} to="/register">
            I want to register!
          </StyledLink>
        </Form>
      )}
    </Formik>
  </AuthTemplate>
);

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
