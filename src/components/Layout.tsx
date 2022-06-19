import React, { Component, Fragment, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { AppDispatch, ChangeLanguage, RootState } from '../Store';
import NavBar from "./NavBar"
type props = {
    children?: ReactNode,
    lang?: string
}

function Layout(props: props) {
    const fa = "fa"

    return (
        <Fragment>
            <Helmet>
                <title>{(props.lang == fa ? "سایت شخصی محمدحسین شاهپوری" : "Mohammad Hosein Shahpouri's Personal Site")}</title>
            </Helmet>

            <div className={"flex flex-col md:flex-row min-h-[100vh]" + (props.lang == fa ? " rtl" : " ltr")}>
                <NavBar />
                <div className="w-full relative pb-3" id="page">
                    <div className="flex flex-wrap justify-center">
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function mapStateToProps(state: RootState) { return { lang: state.lang } }

export default connect(mapStateToProps, null)(Layout)