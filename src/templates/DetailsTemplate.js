import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

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

  /* Przekazujemy propsa activeColor w celu okreslenia jaki aktualnie kolor theme'u ma byc aktywny. W warunku określamy przy pomocy notacji, ktora wyciaga z obiektu dany kolor z listy kolorow: theme[activeColor] (primary, secondary, tertiary) */
  background-color: ${({ activecolor, theme }) =>
    activecolor ? theme[activecolor] : theme.gray100};

  text-decoration: none;
  color: black;
`;

// eslint-disable-next-line react/prop-types
const DetailsTemplate = ({ pageContext, articleUrl, twitterName, title, content }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === 'articles' && (
        <StyledLink href={articleUrl} target="_blank">
          Open article
        </StyledLink>
      )}
      {pageContext === 'twitters' && (
        <StyledImage alt={title} src={`https://avatars.io/twitter/${twitterName}`} />
      )}
      <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        Save / Close
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
