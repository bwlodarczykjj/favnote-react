import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 680px;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 99;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px 50px;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.2s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 30px 0 100px;
  height: 30vh;
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};

  :hover {
    cursor: pointer;
  }
`;

const StyledInput = styled(Input)`
  margin: 25px 0;
`;

// eslint-disable-next-line react/prop-types
const NewItemBar = ({ pageContext, isVisible }) => (
  <div>
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>Create new {pageContext}</Heading>
      <Input placeholder={pageContext === 'twitters' ? 'Account Name e.g dan_abramov' : 'title'} />
      {pageContext === 'articles' && <StyledInput placeholder="link" />}
      <StyledTextArea as="textarea" placeholder="content" />
      <StyledButton activeColor={pageContext}>Add note</StyledButton>
    </StyledWrapper>
  </div>
);

NewItemBar.propType = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
