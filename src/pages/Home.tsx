import React, { Component, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import MeTie from "../assets/images/Me-tie.jpg"
import { ChangeLanguage, Store } from '../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faSmile } from '@fortawesome/free-solid-svg-icons';

export function Home() {
    var { lang } = useParams<{ lang: string }>();
    lang = lang.toLowerCase();
    const fa = "fa"
    Store.dispatch(ChangeLanguage(lang))

    const socialMedia = () => (
        <div className="col-10 col-md-9 d-flex flex-wrap justify-content-around mb-2 pt-2 pb-1 px-3 bg-light rounded-3"        >
            <a href="https://t.me/mohammad_hosein_shahpouri" target="_blank"
                className="h1 text-primary d-inline-block mx-3">
                <FontAwesomeIcon icon={faTelegram} className="text-center mx-auto d-block" />
            </a>

            <a href="https://www.instagram.com/mohammad_hosein_shahpouri/" target="_blank"
                className="h1 text- d-inline-block mx-3" style={{ color: "var(--bs-pink)" }}>
                    <FontAwesomeIcon icon={faInstagram} className=" text-center mx-auto d-block" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=+989135949659" target="_blank"
                className="h1 text-success d-inline-block mx-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-center mx-auto d-block" />
            </a>

            <a href="https://www.linkedin.com/in/mohammad-hosein-shahpouri/" target="_blank"
                className="h1 text-primary d-inline-block mx-3">
                <FontAwesomeIcon icon={faLinkedin} className=" text-center mx-auto d-block" />
            </a>

            <a href="https://github.com/mohammad-hosein-shahpouri" target="_blank"
                className="h1 text-dark d-inline-block mx-3">
                <FontAwesomeIcon icon={faGithub} className=" text-center mx-auto d-block" />
            </a>
            <a href="https://www.facebook.com/mohammad.hosein.shahpouri" target="_blank"
                className="h1 text-primary d-inline-block mx-3">
                <FontAwesomeIcon icon={faFacebook} className="text-center mx-auto d-block" />
            </a>

            <a href="https://twitter.com/M_H_Shahpouri" target="_blank"
                className="h1 text-info d-inline-block mx-3">
                <FontAwesomeIcon icon={faTwitter} className="text-center mx-auto d-block" />
            </a>
        </div>
    )

    return (
        <Fragment>
            <div className="col-12">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "درباره من" : "About Me"}</p>

                <div className="d-flex flex-row justify-content-center text-white w-50 mx-auto mb-3">
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                    <FontAwesomeIcon icon={faSmile} className="h2 mx-2 mb-0" />
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                </div>
            </div>

            <div className={"col-10 col-md-9 d-flex flex-column flex-lg-row mt-3 mb-3 p-4 rounded-3 bg-light " + (lang == fa ? " rtl" : " text-en")}>
                <img src={MeTie} className="rounded-circle border border-5 border-dark mx-sm-3 mx-md-auto" role="profile-image" />

                <div className="d-flex flex-column mx-md-3 mt-3 text-right text-dark">
                    <p className="h2">{lang == fa ? "محمدحسین شاهپوری" : "Mohammad Hosein Shahpouri"}</p>
                    <p className="h4 d-flex">
                    <FontAwesomeIcon icon={faLocationDot}  className={"text-danger " + (lang == fa ? " ms-2" : " me-2")} />
                        <span className="d-inline-block">{lang == fa ? "اصفهان، ایران" : "Isfahan, Iran"}</span>
                    </p>
                    <p className="h4">{lang == fa ? `محمدحسین شاهپوری هستم، متولد 1382/6/8، برنامه نویس تحت وب و دسکتاپ` : `I'm Mohammad Hosein Shahpouri, Born on 30 Aug 2003, Desktop and Web Developer`} </p>
                    <p className="h5">
                        {lang == fa ? `از سن 14 سالگی به صورت جدی در حوضه ی برنامه نویسی فعالیت خود را شروع کرده ام و
                        در حال فعالیت در زمینه تولید نرم افزارهای تحت وب با به کارگیری جدیدترین متدهای برنامه نویسی هستم.`:
                            `I Started Programming professionally at the age of 14 and right now I'm Developing Websites, Desktop Applications, and Telegram Bots ,
            By Using Newest Programming Methods.`}
                    </p>
                </div>
            </div>

            {socialMedia()}
        </Fragment>
    );
}