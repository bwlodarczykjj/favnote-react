import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 50px 25px 70px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 45px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
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
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  z-index: 99999;

  :hover {
    cursor: pointer;
  }
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  // prevState tworzy nam bezpieczna kopie poprzedniego stanu, na ktorej mozemy wykonywac rozne akcje
  toggleNewItemBar = () => {
    this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            activeColor={pageContext}
            icon={plusIcon}
          />
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

/* Definiuje propTypy w celu ochrony przed literowkami w przekazywanych propsach */

GridTemplate.propType = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
