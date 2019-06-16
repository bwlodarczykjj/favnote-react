import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
const UserPageTemplate = ({ children, pageType }) => (
    <div>
        <Sidebar pageType={pageType} />
        {children}
    </div>
);

UserPageTemplate.propType = {
    children: PropTypes.element.isRequired,
};

/* Definiuje propTypy w celu ochrony pozred literowkami w przekazywanych propsach */
UserPageTemplate.propTypes = {
    pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
    pageType: 'note',
};

export default UserPageTemplate;
