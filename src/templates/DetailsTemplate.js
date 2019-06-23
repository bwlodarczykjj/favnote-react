import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

// eslint-disable-next-line react/prop-types
const DetailsTemplate = ({ children }) => (
    <UserPageTemplate>
        <h1>Note</h1>
        {children}
        <Link to="/">Go back!</Link>
    </UserPageTemplate>
);

export default DetailsTemplate;
