import * as React from "react"
import { useParams } from "react-router";
import GitHubLogo from "../assets/images/github-logo.png"
import { ChangeLanguage, Store } from "../Store";

const activityList = [
    {
        Title: "UnAuthorize Attribute",
        DescriptionFa: "وظیفه این کتابخانه دقیقا مخالف صفت Authorize در ASP.NET Core است. این پروژه در GitHub موجود است",
        DescriptionEn: "Made For ASP.NET Core. Better To be Used With ASP.NET Core Identity. This Library is Available on GitHub.",
        Link: "https://github.com/mohammad-hosein-shahpouri/UnAuthorizeAttribute"
    },
    {
        Title: "Aggressive Text Recognizer",
        DescriptionFa: "این کتابخانه با استفاده از هوش مصنوعی (ML.NET) میتواند درصد خشونت آمیز بودن یک متن را تشخیص دهد. این پروژه در GitHub موجود است",
        DescriptionEn: "This Library Uses ML.NET To recognize how Aggressive is the Given Text. Made For ASP.NET Core.Check GitHub For Project Source.",
        Link: "https://github.com/mohammad-hosein-shahpouri/AggressiveTextRecognizer"
    }
]

export function Activities() {
    var { lang } = useParams<{ lang: string }>();
    lang = lang.toLowerCase();
    const fa = "fa"
    Store.dispatch(ChangeLanguage(lang))

    const ActivityComponents = () => {
        var array = []
        for (var item of activityList) {
            array.push(
                <div className={"col-10 col-sm-5 col-lg-3 col-xxl-2 d-flex flex-column justify-content-between bg-light rounded-3 p-1 m-1 activity-card" + (lang == fa ? " rtl" : "")}>
                    <img src={GitHubLogo}
                        className="github-projects-image rounded-lg mb-1 w-100" />
                    <p className="text-center h3 my-1">{item.Title}</p>
                    <p className="text-center m-0">{lang == fa ? item.DescriptionFa : item.DescriptionEn}</p>
                    <a href={item.Link} target="_blank"
                        className="text-decoration-none btn btn-outline-dark pulse m-1 d-block mx-auto">
                        {lang == fa ? "کلیک کنید" : "Click Here"}
                    </a>
                </div>
            )
        }

        return array;
    }

    return (
        <React.Fragment>
            <div className="col-12">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "فعالیت های من" : "My Activities"} </p>

                <div className="d-flex flex-row justify-content-center text-white w-50 mx-auto mb-3">
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                    <i className="fas fa-flask h2 mx-2 mb-0"></i>
                    <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                </div>
            </div>
            <div className="col-10 conatiner p-2">
                <div className="row justify-content-center">
                    {ActivityComponents()}
                </div>
            </div>
        </React.Fragment>
    )
}