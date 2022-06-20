import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import GitHubLogo from "../assets/images/github-logo.png"
import { LanguageContext } from "../utils/Context";

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
    lang = lang!.toLowerCase();
    const fa = "fa"
    var { Language, SetLanguage } = useContext(LanguageContext);
    SetLanguage(lang);

    const ActivityComponents = () => {
        var array = []
        for (var item of activityList) {
            array.push(
                <div className={"w-5/6 sm:w-5/12 lg:w-1/4 2xl:w-1/6 d-flex flex-col justify-between bg-light rounded-lg p-1 m-1 activity-card" + (lang == fa ? " rtl" : "")}>
                    <img src={GitHubLogo}
                        className="github-projects-image rounded-lg mb-1 w-full" />
                    <p className="text-center h3 my-1">{item.Title}</p>
                    <p className="text-center m-0">{lang == fa ? item.DescriptionFa : item.DescriptionEn}</p>
                    <a href={item.Link} target="_blank"
                        className="text-decoration-none btn btn-outline-dark pulse m-1 block mx-auto">
                        {lang == fa ? "کلیک کنید" : "Click Here"}
                    </a>
                </div>
            )
        }

        return array;
    }

    return (
        <Fragment>
            <div className="w-full">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "فعالیت های من" : "My Activities"} </p>

                <div className="flex flex-row justify-center text-white w-1/2 mx-auto mb-3">
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                    <FontAwesomeIcon icon={faFlask} className="h2 mx-2 mb-0" />
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                </div>
            </div>
            <div className="w-5/6 p-2">
                <div className="flex justify-center">
                    {ActivityComponents()}
                </div>
            </div>
        </Fragment>
    )
}