import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
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
  margin: 0;
  font-weight: ${({ theme }) => theme.normal};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 5vh;
  padding: 20px 80px;
  background-color: ${({ theme }) => theme.gray100};
  text-decoration: none;
  color: black;
`;

// eslint-disable-next-line react/prop-types
const DetailsTemplate = ({ pageType, created, articleUrl, twitterName, title, content }) => (
    <UserPageTemplate pageType={pageType}>
        <StyledWrapper>
            <StyledPageHeader>
                <StyledHeading big as="h1">
                    {title}
                </StyledHeading>
                <StyledParagraph>{created}</StyledParagraph>
            </StyledPageHeader>
            <Paragraph>{content}</Paragraph>
            {pageType === 'articles' && (
                <StyledLink href={articleUrl} target="_blank">
          Open article
                </StyledLink>
            )}
            {pageType === 'twitters' && (
                <StyledImage alt={title} src={`https://avatars.io/twitter/${twitterName}`} />
            )}
            <StyledButton as={Link} to={`/${pageType}`} activeColor={pageType} secondary>
        Save / Close
            </StyledButton>
        </StyledWrapper>
    </UserPageTemplate>
);

DetailsTemplate.propTypes = {
    pageType: PropTypes.string.isRequired,
    title: PropTypes.string,
    created: PropTypes.string,
    content: PropTypes.string,
    articleUrl: PropTypes.string,
    twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
    title: '',
    created: '',
    content: '',
    articleUrl: '',
    twitterName: '',
};

export default DetailsTemplate;
