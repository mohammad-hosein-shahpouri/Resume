import $ from "jquery"
import { Link, useNavigate } from "react-router-dom";
import Music from "../assets/music/music.mp3"
import { ChangeLanguage, RootState, Store } from "../Store";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFlask, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useRef, useState } from "react";

type props = {
    lang?: string
}

function NavBar(props: props) {
    const [isMusicPlaying, setIsMusicPlaying] = useState(true)
    const audioRef = useRef<HTMLAudioElement>(null)
    const navigate = useNavigate()
    const playOrPause = () => {
        if (isMusicPlaying)
            audioRef.current?.pause()
        else
            audioRef.current?.play()

        setIsMusicPlaying(!isMusicPlaying)
    }

    const showMobileNavBar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var button = $(e.currentTarget)
        button.toggleClass("change")
        $('#mobile-menu [role="navbar"]').slideToggle()
    }

    const fa = "fa"

    const changeLanguage = () => {
        var { pathname } = location

        var pathArray = pathname.split("/")
        //setLang(lang == fa ? "en" : "fa")
        Store.dispatch(ChangeLanguage(props.lang == fa ? "en" : "fa"))
        navigate(props.lang == fa ? "/En/" + pathArray[pathArray.length - 1] : "/Fa/" + pathArray[pathArray.length - 1])
    }

    return (<Fragment>
        <audio src={Music} autoPlay loop ref={audioRef} />

        <div id="mobile-menu" className="flex flex-col" >
            <div className="flex flex-row justify-between py-1 py-md-0">
                <div className="block md:hidden">
                    <div className="text-white flex flex-row justify-start border-bottom-0 m-2 mb-0 pr-1">
                        <button className="btn btn-outline-dark border-0 p-1" onClick={showMobileNavBar}>
                            <div className="bar1 bg-white rounded-full"></div>
                            <div className="bar2 bg-white my-1 rounded-full"></div>
                            <div className="bar3 bg-white rounded-full"></div>
                        </button>
                    </div>
                </div>

                <div className={"btn btn-light md:rounded-none md:w-full rounded-full border-0 border-bottom border-dark  mx-5 md:mx-auto mt-2 md:mt-0 px-2 md:px-auto pt-2 pb-1 music-button " + (isMusicPlaying ? "playing" : "")} style={{
                    maxHeight: "48px"
                }} onClick={playOrPause}>
                    <div className="flex flex-row justify-evenly" style={{
                        transform: "rotate(3.14rad)",
                        height: "20px"
                    }} >
                        <div className="music-bars music-animation music-bar-1 bg-primary rounded"></div>
                        <div className="music-bars music-animation music-bar-2 bg-warning rounded"></div>
                        <div className="music-bars music-animation music-bar-3 bg-danger rounded"></div>
                        <div className="music-bars music-animation music-bar-4 bg-success rounded"></div>
                    </div>
                </div>

                <div className="md:hidden inline-flex flex-wrap align-content-center mx-2 px-1">
                    <button className="btn btn-light px-2 pt-1 pb-0 mt-2" onClick={changeLanguage}>
                        {props.lang == fa ? "En" : "Fa"}
                    </button>
                </div>
            </div>

            <div className="slide-d-none md:flex flex-col md:h-full" role="navbar" >
                <div className="w-full h-full inline-flex flex-row md:flex-col justify-around md:justify-start bg-light md:px-2">

                    <Link to="Home" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer flex flex-col w-1/4 md:w-auto">
                        <FontAwesomeIcon icon={faHome} className="h1 block mx-auto" />
                        <span className="p-1  ">{props.lang == fa ? "خانه" : "Home"}</span>
                    </Link>

                    <Link to="Skills" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer flex flex-col w-1/4 md:w-auto">
                        <FontAwesomeIcon icon={faCode} className="h1 block mx-auto" />
                        <span className="p-1 text-wrap-none ">{props.lang == fa ? "مهارت ها" : "Skills"}</span>
                    </Link>

                    <Link to="Activities" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer flex flex-col w-1/4 md:w-auto">
                        <FontAwesomeIcon icon={faFlask} className="h1 block mx-auto" />
                        <span className="p-1 text-wrap-none ">{props.lang == fa ? "فعالیت ها" : "Activities"}</span>
                    </Link>

                    <Link to="Contact" className="text-center text-dark text-decoration-none mt-2 cursor-pointer flex flex-col w-1/4 md:w-auto">
                        <FontAwesomeIcon icon={faPhone} className="h1 block mx-auto" />
                        <span className="p-1 ">{props.lang == fa ? "تماس" : "Contact"}</span>
                    </Link>

                </div>

                <div className="hidden md:inline-flex flex-wrap align-center" style={{
                }}>
                    <button className="btn btn-light no-shadow border-0 border-top border-dark border-3 w-full rounded-none" onClick={changeLanguage}>
                        {props.lang == fa ? "En" : "Fa"}
                    </button>
                </div>
            </div>
        </div>
    </Fragment>)
}

function mapStateToProps(state: RootState) { return { lang: state.lang } }

export default connect(mapStateToProps, null)(NavBar)