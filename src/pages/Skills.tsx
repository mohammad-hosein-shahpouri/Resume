import { Fragment, useContext } from "react"
import { Rate } from 'antd';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../utils/Context";

const skills = [
    {
        name: "C#",
        percentage: 4
    },
    {
        name: ".NET",
        percentage: 4
    },
    {
        name: "ASP.NET",
        percentage: 4
    },
    {
        name: "SignalR",
        percentage: 5
    },
    {
        name: "JavaScript",
        percentage: 4
    },
    {
        name: "TypeScript",
        percentage: 4
    },
    {
        name: "React.js",
        percentage: 4
    },
    {
        name: "Redux.js",
        percentage: 3
    },
    {
        name: "HTML",
        percentage: 4.5
    },
    {
        name: "CSS",
        percentage: 4.5
    },
    {
        name: "jQuery",
        percentage: 4.5
    },
    {
        name: "Bootstrap",
        percentage: 4
    },
    {
        name: "SQL",
        percentage: 3
    },
    {
        name: "SQL Server",
        percentage: 4
    },
    {
        name: "MySQL",
        percentage: 4
    },
    {
        name: "MongoDB",
        percentage: 3
    },
    {
        name: "Python",
        percentage: 0.5
    },
    {
        name: "Node.js",
        percentage: 0.5
    }
]

export function Skills() {
    var { lang } = useParams<{ lang: string }>();
    lang = lang!.toLowerCase();
    const fa = "fa"

    var {Language,SetLanguage} = useContext(LanguageContext);
    SetLanguage(lang);

    const skillBars = () => {
        var compenentArray: JSX.Element[] = []

        for (const item of skills) {
            compenentArray.push(
                <Fragment>
                    <div className=" w-full md:w-1/2 xl:w-1/3 px-1 xl:px-2">
                        <div className="flex flex-row justify-between">
                            <h4 className="mt-1 mr-1">
                                {item.name}
                            </h4>
                            <Rate allowHalf disabled value={item.percentage} />
                        </div>
                    </div>
                </Fragment>
            )
        }


        return (compenentArray)
    }

    return (
        <Fragment>
            <div className="w-full">
                <p className="text-center h1 mt-5 text-white">{lang == fa ? "مهارت های من" : "My Skills"}</p>
                <div className="flex flex-row justify-center text-white w-1/2 mx-auto mb-3">
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                    <FontAwesomeIcon icon={faCode} className=" h2 mx-2 mb-0" />
                    <hr className="border-2 border-white w-1/2 mx-1 mt-2" />
                </div>
            </div>

            <div className="flex flex-col md:flex-wrap w-5/6 md:w-3/4 bg-light mx-auto rounded-lg ltr">
                {skillBars()}
            </div>
        </Fragment>
    )
}