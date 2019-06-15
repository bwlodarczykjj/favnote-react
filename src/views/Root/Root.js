import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Root/Notes';
import Twitters from 'views/Root/Twitters';
import Articles from 'views/Root/Articles';

const Root = () => (
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Notes} />
                <Route path="/twitters" component={Twitters} />
                <Route path="/articles" component={Articles} />
            </Switch>
        </BrowserRouter>
    </MainTemplate>
);

export default Root;
