import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';

import MeTie from "../assets/images/Me-tie.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faSmile } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../utils/Context';

export function Home() {
    var { lang } = useParams<{ lang: string }>();
    lang = lang!.toLowerCase();
    const fa = "fa"
    var { Language, SetLanguage } = useContext(LanguageContext);
    SetLanguage(lang);

    const socialMedia = () => (
        <div className="w-5/6 md:w-3/4 flex flex-wrap justify-around mb-2 pt-2 pb-1 px-3 bg-light rounded-lg"        >
            <a href="https://t.me/mohammad_hosein_shahpouri" target="_blank"
                className="h1 text-primary inline-block mx-3">
                <FontAwesomeIcon icon={faTelegram} className="text-center mx-auto block" />
            </a>

            <a href="https://www.instagram.com/mohammad_hosein_shahpouri/" target="_blank"
                className="h1 text-pink inline-block mx-3">
                <FontAwesomeIcon icon={faInstagram} className=" text-center mx-auto block" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=+989135949659" target="_blank"
                className="h1 text-success inline-block mx-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-center mx-auto block" />
            </a>

            <a href="https://www.linkedin.com/in/mohammad-hosein-shahpouri/" target="_blank"
                className="h1 text-primary inline-block mx-3">
                <FontAwesomeIcon icon={faLinkedin} className=" text-center mx-auto block" />
            </a>

            <a href="https://github.com/mohammad-hosein-shahpouri" target="_blank"
                className="h1 text-dark inline-block mx-3">
                <FontAwesomeIcon icon={faGithub} className=" text-center mx-auto block" />
            </a>
            <a href="https://www.facebook.com/mohammad.hosein.shahpouri" target="_blank"
                className="h1 text-primary inline-block mx-3">
                <FontAwesomeIcon icon={faFacebook} className="text-center mx-auto block" />
            </a>

            <a href="https://twitter.com/M_H_Shahpouri" target="_blank"
                className="h1 text-info inline-block mx-3">
                <FontAwesomeIcon icon={faTwitter} className="text-center mx-auto block" />
            </a>
        </div>
    )

    return (
        <Fragment>
            <div className="w-full">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "درباره من" : "About Me"}</p>

                <div className="flex flex-row justify-content-center text-white w-1/2 mx-auto mb-3">
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                    <FontAwesomeIcon icon={faSmile} className="h2 mx-2 mb-0" />
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                </div>
            </div>

            <div className={"w-5/6 md:w-3/4 flex flex-col lg:flex-row mt-3 mb-3 p-4 rounded-lg bg-light " + (lang == fa ? " rtl" : " text-en")}>
                <img src={MeTie} className="xl:w-1/4 lg:w-[35%] md:w-1/2  rounded-full border-5 border-dark sm:mx-3 md:mx-auto" />

                <div className={"flex flex-col md:mx-3 mt-3  text-dark " + (lang == fa ? " text-right" : " text-left")}>
                    <p className="h2">{lang == fa ? "محمدحسین شاهپوری" : "Mohammad Hosein Shahpouri"}</p>
                    <p className="h4 flex">
                        <FontAwesomeIcon icon={faLocationDot} className={"text-danger " + (lang == fa ? " ml-2" : " mr-2")} />
                        <span className="inline-block">{lang == fa ? "اصفهان، ایران" : "Isfahan, Iran"}</span>
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