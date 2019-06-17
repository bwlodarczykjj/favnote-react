import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;

  /* Przekazujemy propsa activeColor w celu okreslenia jaki aktualnie kolor theme'u ma byc aktywny. W warunku określamy przy pomocy notacji, ktora wyciaga z obiektu dany kolor z listy kolorow: theme[activeColor] (primary, secondary, tartiary) */

  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 99;
  }

  ${({ flex }) =>
        flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 66px;
  height: 66px;
  border: 4px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 50px;
  margin: 0 0 0 40px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat center;
  position: absolute;
  right: -10px;
  top: 56%;
  transform: translate(-50%, -50%);
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
    <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>{title}</StyledHeading>
            <DateInfo>{created}</DateInfo>
            {cardType === 'twitter' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
            {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
            <Paragraph>{content}</Paragraph>
            <Button secondary>REMOVE</Button>
        </InnerWrapper>
    </StyledWrapper>
);

/* Określam propsy, ktore przekazuje w komponencie Card. W tablicy przekazuje dostępne możliwości propsów cardType */

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

/* Definiuję defaultowe propsy i co maja zawierać  */

Card.defaultProps = {
    cardType: 'note',
    twitterName: null,
    articleUrl: null,
};

export default Card;
