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
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat center;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Card = ({ cardType }) => (
    <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>Hello Bartek</StyledHeading>
            <DateInfo>3 days</DateInfo>
            {cardType === 'twitter' && (
                <StyledAvatar
                    src="https://avatars.io/instagram/wlodar420rrr
"
                />
            )}
            {cardType === 'article' && (
                <StyledLinkButton href="https://www.linkedin.com/in/bart%C5%82omiej-w%C5%82odarczyk-a98888166/" />
            )}
        </InnerWrapper>
        <InnerWrapper flex>
            <Paragraph>Lorem lorem lorem loerm lorem lorem lorem lorem lomre</Paragraph>
            <Button secondary>REMOVE</Button>
        </InnerWrapper>
    </StyledWrapper>
);

/* Określam props, ktory przekazuje w komponencie Card i w tablicy przekazuje dostępne możliwości */

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
    cardType: 'note',
};

export default Card;
