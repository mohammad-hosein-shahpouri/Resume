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
                <title data-react-helmet="true">{(props.lang == fa ? "سایت شخصی محمدحسین شاهپوری" : "Mohammad Hosein Shahpouri's Personal Site")}</title>
            </Helmet>

            <div className={"d-flex flex-column flex-md-row min-vh-100" + (props.lang == fa ? " rtl" : " ltr")}>
                <NavBar />
                <div className="container-fluid w-100 position-relative pb-3" id="page">
                    <div className="row justify-content-center">
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function mapStateToProps(state: RootState) { return { lang: state.lang } }

export default connect(mapStateToProps, null)(Layout)