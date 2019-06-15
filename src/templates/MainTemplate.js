import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
    <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
);

/* Dodaje propType, który nazwyam element i dodaje do niego regule, ze musi byc wymagany, w tym przypadku children bedzei wymagane      */

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MainTemplate;
