import { Routes, Route, Navigate, } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { LanguageContext } from './utils/Context';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Activities } from './pages/Activities';
import { Contact } from './pages/Contact';

import "antd/dist/antd.min.css"
import "./assets/styles/Overrides.css"
import "./assets/styles/Styles.Compiled.css"


export default function App() {
    const [language, setLanguage] =
        useState<string>(Math.floor((Math.random()) * 2) ? "En" : "Fa");

    return (
        <Fragment>
            <LanguageContext.Provider
                value={{ Language: language, SetLanguage: setLanguage }} >
                <Layout>
                    <Routes>
                        <Route path='/Resume/:lang/Home/' element={<Home />} />
                        <Route path='/Resume/:lang/Skills/' element={<Skills />} />
                        <Route path='/Resume/:lang/Activities/' element={<Activities />} />
                        <Route path='/Resume/:lang/Contact/' element={<Contact />} />

                        <Route path="*" element={<Navigate to={`/Resume/${language}/Home`} />} />
                    </Routes>
                </Layout>
            </LanguageContext.Provider>
        </Fragment>
    );
}