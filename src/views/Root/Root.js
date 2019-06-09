import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
    <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>
                <h1>Hello Bartek</h1>
                <Input />
                <Button width="300px">Close / Save</Button>
                <Button secondary>Remove</Button>
                <Paragraph>Lorem ipsum</Paragraph>
            </>
        </ThemeProvider>
    </div>
);

export default Root;
