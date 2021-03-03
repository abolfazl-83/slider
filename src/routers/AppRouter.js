import React from 'react';
import {Router , Route , Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import GlobalStyles from '../components/GlobalStyles';
import Home from '../pages/Home';

export const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history = {history}>
            <GlobalStyles />
            <Switch>
                <Route path = '/' component = {Home}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;