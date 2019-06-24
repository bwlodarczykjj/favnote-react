import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Root/Notes';
import Articles from 'views/Root/Articles';
import Twitters from 'views/Root/Twitters';
import DetailsPage from 'views/Root/DetailsPage';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <MainTemplate>
                <Switch>
                    <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
                    <Route exact path={routes.notes} component={Notes} />
                    <Route path={routes.note} component={DetailsPage} />
                    <Route exact path={routes.articles} component={Articles} />
                    <Route path={routes.article} component={DetailsPage} />
                    <Route exact path={routes.twitters} component={Twitters} />
                    <Route path={routes.twitter} component={DetailsPage} />
                </Switch>
            </MainTemplate>
        </BrowserRouter>
    </Provider>
);

export default Root;
