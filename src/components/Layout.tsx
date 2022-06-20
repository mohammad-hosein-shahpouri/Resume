import React, { Component, Fragment, ReactNode, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '../utils/Context';
import {NavBar} from "./NavBar"

type props = {
    children?: ReactNode;
}

export function Layout({ children }: props) {
    const fa = "fa"
    var { Language, SetLanguage } = useContext(LanguageContext);

    return (
        <Fragment>
            <Helmet>
                <title>{(Language == fa ? "سایت شخصی محمدحسین شاهپوری" : "Mohammad Hosein Shahpouri's Personal Site")}</title>
            </Helmet>

            <div className={"flex flex-col md:flex-row min-h-[100vh]" + (Language == fa ? " rtl" : " ltr")}>
                <NavBar />
                <div className="w-full relative pb-3" id="page">
                    <div className="flex flex-wrap justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}