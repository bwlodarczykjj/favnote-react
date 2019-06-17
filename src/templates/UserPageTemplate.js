import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 50px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 45px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
`;

// eslint-disable-next-line react/prop-types
const UserPageTemplate = ({ children, pageType }) => (
    <div>
        <Sidebar pageType={pageType} />
        <StyledWrapper>
            <StyledPageHeader>
                <Input search placeholder="Search" />
                <StyledHeading big as="h1">
                    {pageType}s
                </StyledHeading>
                <StyledParagraph>6 notes</StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
        </StyledWrapper>
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
