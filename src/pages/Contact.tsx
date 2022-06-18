import * as React from "react"
import $, { ajax } from "jquery"
import { useParams } from "react-router";
import { ChangeLanguage, Store } from "../Store";
import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { error } from "console";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
    const emailInputRef = React.useRef<HTMLInputElement>(null);
    const namelInputRef = React.useRef<HTMLInputElement>(null);
    const messageInputRef = React.useRef<HTMLDivElement>(null);

    var { lang } = useParams<{ lang: string }>();
    lang = lang.toLowerCase();
    const fa = "fa"
    Store.dispatch(ChangeLanguage(lang))

    const writeNewMessageAsync = async () => {
        const email = emailInputRef.current?.value
        const name = namelInputRef.current?.value
        const message = messageInputRef.current?.innerText

        if (message)
            await ajax({
                url: "/api/messages",
                method: "Post",
                data: JSON.stringify({ email, name, message }),
                contentType: "application/json; charset=utf-8",
                success: (data: { status: number }) => {
                    if (data.status) {
                        const key = Date.now().toString();
                        const icon = (<CheckCircleOutlined />)
                        notification.open({
                            message: (lang == fa ? "پیام شما ارسال شد." : "Message Sent."),
                            description: (lang == fa ? "پیام شما با موفقیت ذخیره شد. تلاش میکنم در اولین فرصت پیام شما رو خوانده و به شما پاسخ دهم." :
                                "Your message saved successfully. I'll try to read it and respond to you as soon as possible."),
                            duration: null,
                            key: key,
                            className: (lang == fa ? "rtl" : "ltr"),
                            icon: icon,
                            placement: (lang == fa ? "topLeft" : "topRight")
                        })
                    } else {
                        const key = Date.now().toString();
                        const icon = (<CloseCircleOutlined />)
                        notification.open({
                            message: (lang == fa ? "پیام شما ارسال نشد." : "Message Didn't Send."),
                            description: (lang == fa ? "مشکلی پیش آمده است. سعی میکنم در اولین فرصت مشکل را رفع کنم. اگر پیام ضروری دارید میتوانید از طریق ایمیل و یا شبکه های اجتماعی با من در ارتباط باشید." :
                                "Your message can not be saved. I'll try to fix the problem  as soon as possible. If you have an urgent message, You can send me an email or message me in social networks."),
                            duration: null,
                            key: key,
                            className: (lang == fa ? "rtl" : "ltr"),
                            icon: icon,
                            placement: (lang == fa ? "topLeft" : "topRight")
                        })
                    }
                },
                error: () => {
                    const key = Date.now().toString();
                    const icon = (<CloseCircleOutlined />)
                    notification.open({
                        message: (lang == fa ? "پیام شما ارسال نشد." : "Message Didn't Send."),
                        description: (lang == fa ? "مشکلی پیش آمده است. سعی میکنم در اولین فرصت مشکل را رفع کنم. اگر پیام ضروری دارید میتوانید از طریق ایمیل و یا شبکه های اجتماعی با من در ارتباط باشید." :
                            "Your message can not be saved. I'll try to fix the problem  as soon as possible. If you have an urgent message, You can send me an email or message me in social networks."),
                        duration: null,
                        key: key,
                        className: (lang == fa ? "rtl" : "ltr"),
                        icon: icon,
                        placement: (lang == fa ? "topLeft" : "topRight")
                    })
                }
            })
    }

    return (
        <React.Fragment>

            <div className="col-12">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "تماس" : "Contact"} </p>

                <div className="d-flex flex-row justify-content-center text-white w-50 mx-auto mb-3">
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                    <FontAwesomeIcon icon={faCode} className="h2 mx-2 mb-0" />
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                </div>
            </div>

            <div className={"col-10 col-md-9 bg-light rounded-3 p-2" + (lang == fa ? " rtl" : "")}>
                <div className="d-flex flex-column flex-md-row">
                    <div className="animated-form-group w-100 pt-3 px-2 bg-light shadow-sm my-2 mx-auto mx-md-2 rounded-3">
                        <input type="text" className="animated-form-input text-dark"
                            data-name={lang == fa ? "نام" : "Name"} required
                            placeholder=" " ref={namelInputRef} />
                        <label className="animated-form-label text-dark">{lang == fa ? "نام" : "Name"}</label>
                    </div>

                    <div className="animated-form-group w-100 pt-3 px-2 bg-light  shadow-sm my-2 mx-auto mx-md-2 rounded-3">
                        <input type="email" className="animated-form-input text-dark"
                            data-name={lang == fa ? "ایمیل" : "Email"} required
                            placeholder=" " ref={emailInputRef} />
                        <label className="animated-form-label text-dark">{lang == fa ? "ایمیل" : "Email"}</label>
                    </div>
                </div>

                <div className="animated-form-group pt-3 px-2 bg-light shadow-sm my-2 mx-auto mx-md-2 rounded-3">
                    <div contentEditable placeholder=" " className="animated-form-input text-dark"
                        style={{ minHeight: "80px" }} ref={messageInputRef} />
                    <label className="animated-form-label text-dark">{lang == fa ? "پیام شما" : "Your Message"}</label>
                </div>

                <div>
                    <button className="text-decoration-none btn btn-outline-dark btn-temp border-3 m-1 d-block mx-auto"
                        onClick={writeNewMessageAsync}>{lang == fa ? "ارسال پیام" : "Send Message"}</button>
                </div>
            </div>

            <div className="col-10 col-md-9 d-flex flex-column mb-2 px-0">
                <div className="d-flex flex-column flex-md-row justify-content-between mx-md-auto mt-5 text-light w-100 h3">
                    <div className={"d-flex flex-column bg-primary  my-2 w-100 p-2 rounded-3 " + (lang == fa ? "rtl ms-md-2" : "text-en me-md-2")}>
                        <span className="d-block mx-auto">
                            <i className="fas fa-mobile-alt mx-1"></i>
                            <span>{lang == fa ? "تلفن:" : "Phone:"}</span>
                        </span>
                        <a href="tel:+989135949659" className="user-select-all text-decoration-none text-light text-center">09135949659</a>
                    </div>

                    <div className={"d-flex flex-column bg-warning my-2 w-100 p-2 rounded-3 " + (lang == fa ? "rtl  me-md-2" : " ms-md-2 ")}>
                        <span className="d-block mx-auto">
                            <i className="fas fa-envelope-open-text mx-1"></i>
                            <span>{lang == fa ? "ایمیل:" : "Email:"}</span>
                        </span>
                        <a href="mailto:mh.shahpouri@gmail.com"
                            className="text-decoration-none text-light mt-1 mx-1 text-center">
                            mh.shahpouri@gmail.com
                            </a>
                    </div>
                </div>

                <div className={"d-flex flex-column bg-danger mx-auto w-100 w-md-75 p-2 rounded-3 h3 text-white " + (lang == fa ? "rtl" : "")}>
                    <span className="d-block mx-auto">
                        <i className="fas fa-map-marker-alt mx-1"></i>
                        <span>{lang == fa ? "آدرس:" : "Address:"} </span>
                    </span>
                    <span className="user-select-all text-center" >{lang == fa ? "اصفهان، ایران" : "Isfahan, Iran"}  </span>
                </div>
            </div>
        </React.Fragment>
    )
}