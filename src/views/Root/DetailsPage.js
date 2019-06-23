/* eslint-disable react/prop-types */
import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
    <DetailsTemplate>
        <p> {`is twitter: ${match.path === routes.twitter}`}</p>
        <p> {`is article: ${match.path === routes.article}`}</p>
        <p> {`is note: ${match.path === routes.note}`}</p>
    </DetailsTemplate>
);

export default DetailsPage;
/* eslint-disable react/prop-types */
