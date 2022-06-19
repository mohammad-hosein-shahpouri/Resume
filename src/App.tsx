import { Routes, Route, Navigate, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { Fragment } from 'react';

import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Activities } from './pages/Activities';
import { Contact } from './pages/Contact';

import "antd/dist/antd.min.css"
import "./assets/styles/Overrides.css"
import "./assets/styles/Styles.Compiled.css"


export default function App() {
    const random = (Math.random()) * 2
    const lang = Math.floor(random) ? "En" : "Fa"
    return (
        <Fragment>
            <Provider store={Store} >
                <Layout>
                    <Routes>
                        <Route path='/Resume/:lang/Home/' element={<Home />} />
                        <Route path='/Resume/:lang/Skills/' element={<Skills />} />
                        <Route path='/Resume/:lang/Activities/' element={<Activities />} />
                        <Route path='/Resume/:lang/Contact/' element={<Contact />} />

                        <Route>
                            <Navigate to={`/Resume/${lang}/Home`} />
                        </Route>
                    </Routes>
                </Layout>
            </Provider>
        </Fragment>
    );
}