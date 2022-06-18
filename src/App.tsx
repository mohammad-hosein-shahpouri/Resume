import { Redirect, Route, Router, Switch, useHistory } from 'react-router';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Activities } from './pages/Activities';
import { Contact } from './pages/Contact';

import "bootstrap/dist/css/bootstrap.min.css"

import "antd/dist/antd.min.css"
import "./assets/styles/Styles.Compiled.css"


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
                        <Route path='/Resume/:lang/Home/' component={Home} />
                        <Route path='/Resume/:lang/Skills/' component={Skills} />
                        <Route path='/Resume/:lang/Activities/' component={Activities} />
                        <Route path='/Resume/:lang/Contact/' component={Contact} />

                        <Route>
                            <Redirect to={`/Resume/${lang}/Home`} />
                        </Route>
                    </Switch>
                </Router>
            </Layout>
        </Provider>
    );
}