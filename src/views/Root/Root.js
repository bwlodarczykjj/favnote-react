import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
    <div>
        <GlobalStyle />
        <h1>Hello Włodar</h1>
        <Button width="300px">Close / Save</Button>
        <Button secondary>Remove</Button>
    </div>
);

export default Root;
