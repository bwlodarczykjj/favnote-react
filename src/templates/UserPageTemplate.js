import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
const UserPageTemplate = ({ children, pageType }) => (
    <>
        <Sidebar pageType={pageType} />
        {children}
    </>
);

/* Definiuje propTypy w celu ochrony przed literowkami w przekazywanych propsach */

UserPageTemplate.propType = {
    children: PropTypes.array.isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
    pageType: 'notes',
};

export default UserPageTemplate;
