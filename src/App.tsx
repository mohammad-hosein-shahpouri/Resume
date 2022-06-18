import React, { Component } from 'react';
import { Redirect, Route, Router, Switch, useHistory } from 'react-router';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Activities } from './pages/Activities';
import { Contact } from './pages/Contact';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "antd/dist/antd.min.css"
import "./assets/styes/custom.css"


import { connect, Provider } from 'react-redux';
import { AppDispatch, ChangeLanguage, RootState, Store } from './Store';

export default function App() {
    const random = (Math.random()) * 2
    const lang = Math.floor(random) ? "En" : "Fa"
    return (
        <Provider store={Store}>
            <Layout >
                <Router history={useHistory()}>
                    <Switch>
                        <Route path='/:lang/Home/' component={Home} />
                        <Route path='/:lang/Skills/' component={Skills} />
                        <Route path='/:lang/Activities/' component={Activities} />
                        <Route path='/:lang/Contact/' component={Contact} />

                        <Route>
                            <Redirect to={`/${lang}/Home`} />
                        </Route>
                    </Switch>
                </Router>
            </Layout>
        </Provider>
    );
}