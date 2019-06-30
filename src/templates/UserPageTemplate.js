import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

/* Definiuje propTypy w celu ochrony przed literowkami w przekazywanych propsach */

UserPageTemplate.propType = {
  children: PropTypes.array.isRequired,
  pageContext: PropTypes.string.isRequired,
};

UserPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default UserPageTemplate;
