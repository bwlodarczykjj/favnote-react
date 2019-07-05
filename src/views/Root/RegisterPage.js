import React from 'react';
import { Formik, Form, Field } from 'formik';

const RegisterPage = () => (
  <div>
    <Formik initialValues={{ username: '', password: '' }} onSubmit={console.log('goodbye')}>
      {() => (
        <Form>
          <Field type="email" name="username" placeholder="Username" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit">sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default RegisterPage;
