import * as React from "react"
import { Rate } from 'antd';
import { useParams } from "react-router-dom";
import { ChangeLanguage, Store } from "../Store";

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
        percentage: .5
    },
    {
        name: "Node.js",
        percentage: .5
    }
]

export function Skills() {
    var { lang } = useParams<{ lang: string }>();
    lang = lang.toLowerCase();
    const fa = "fa"
    Store.dispatch(ChangeLanguage(lang))

    const skillBars = () => {
        var compenentArray: JSX.Element[] = []

        skills.forEach((value, index) =>
            compenentArray.push(
                <React.Fragment>
                    <div className=" col-12 col-md-6 col-xxl-4 d-flex flex-column px-1 px-xxl-2">
                        <div className="d-flex flex-row justify-content-between">
                            <h4 className="mt-1 me-1">
                                {value?.name}
                            </h4>
                            <Rate allowHalf disabled value={value.percentage} />
                        </div>
                    </div>
                </React.Fragment>
            )
        )

        return (compenentArray)
    }

    return (<React.Fragment>
        <div className="col-12">
            <p className="text-center h1 mt-5 text-white">{lang == fa ? "مهارت های من" : "My Skills"}</p>

            <div className="d-flex flex-row justify-content-center text-white w-50 mx-auto mb-3">
                <hr className="border border-2 border-white w-50 mx-1 mt-2" />
                <i className="fas fa-code h2 mx-2 mb-0"></i>
                <hr className="border border-2 border-white w-50 mx-1 mt-2" />
            </div>
        </div>

        <div className="col-10 col-md-9 container bg-light d-flex flex-column flex-md-wrap mx-auto rounded-3 font-regula ltr">
            <div className="row p-2">
                {skillBars()}
            </div>
        </div>
    </React.Fragment>)
}