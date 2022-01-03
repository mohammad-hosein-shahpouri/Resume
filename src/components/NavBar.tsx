import * as React from "react";
import $ from "jquery"
import { Link, useHistory, useParams } from "react-router-dom";
import Music from "../assets/music/music.mp3"
import { ChangeLanguage, RootState, Store } from "../Store";
import { connect } from "react-redux";

type props = {
    lang?: string
}

function NavBar(props: props) {
    const [isMusicPlaying, setIsMusicPlaying] = React.useState(true)
    const audioRef = React.useRef<HTMLAudioElement>(null)
    const history = useHistory()
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
        history.push(props.lang == fa ? "/En/" + pathArray[pathArray.length - 1] : "/Fa/" + pathArray[pathArray.length - 1])
    }

    return (<React.Fragment>
        <audio src={Music} autoPlay loop ref={audioRef} />

        <div id="mobile-menu" className="d-flex flex-column" >
            <div className="d-flex flex-row justify-content-between py-1 py-md-0">
                <div className="d-block d-md-none">
                    <div className="text-white d-flex flex-row justify-content-start border-bottom-0 m-2 mb-0 pr-1">
                        <button className="btn btn-outline-dark border-0 p-1" onClick={showMobileNavBar}>
                            <div className="bar1 bg-white rounded-pill"></div>
                            <div className="bar2 bg-white my-1 rounded-pill"></div>
                            <div className="bar3 bg-white rounded-pill"></div>
                        </button>
                    </div>
                </div>

                <div className={"btn btn-light rounded-md-0 w-md-100 rounded-pill border-0 border-bottom border-dark border-3 mx-5 mx-md-auto mt-2 mt-md-0 px-2 px-md-auto pt-2 pb-1 music-button " + (isMusicPlaying ? "playing" : "")} style={{
                    maxHeight: "48px"
                }} onClick={playOrPause}>
                    <div className="d-flex flex-row justify-content-evenly" style={{
                        transform: "rotate(3.14rad)",
                        height: "20px"
                    }} >
                        <div className="music-bars music-animation music-bar-1 bg-primary rounded"></div>
                        <div className="music-bars music-animation music-bar-2 bg-warning rounded"></div>
                        <div className="music-bars music-animation music-bar-3 bg-danger rounded"></div>
                        <div className="music-bars music-animation music-bar-4 bg-success rounded"></div>
                    </div>
                </div>

                <div className="d-md-none d-inline-flex flex-wrap align-content-center mx-2 px-1">
                    <button className="btn btn-light px-2 pt-1 pb-0 mt-2" onClick={changeLanguage}>
                        {props.lang == fa ? "En" : "Fa"}
                    </button>
                </div>
            </div>

            <div className="slide-d-none d-md-flex flex-column h-md-100" role="navbar" >
                <div className="w-100 h-100 d-inline-flex flex-row flex-md-column justify-content-around justify-content-md-start bg-light  px-md-2">

                    <Link to="Home" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer d-flex flex-column w-25 w-md-auto">
                        <i className="fas fa-home h1 d-block mx-auto"></i>
                        <span className="p-1  ">{props.lang == fa ? "خانه" : "Home"}</span>
                    </Link>

                    <Link to="Skills" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer d-flex flex-column w-25 w-md-auto">
                        <i className="fas fa-code h1 d-block mx-auto"></i>
                        <span className="p-1 text-wrap-none ">{props.lang == fa ? "مهارت ها" : "Skills"}</span>
                    </Link>

                    <Link to="Activities" className="text-center text-dark text-decoration-none  mt-2 cursor-pointer d-flex flex-column w-25 w-md-auto">
                        <i className="fas fa-flask h1 d-block mx-auto"></i>
                        <span className="p-1 text-wrap-none ">{props.lang == fa ? "فعالیت ها" : "Activities"}</span>
                    </Link>

                    <Link to="Contact" className="text-center text-dark text-decoration-none mt-2 cursor-pointer d-flex flex-column w-25 w-md-auto">
                        <i className="fas fa-phone h1 d-block mx-auto"></i>
                        <span className="p-1 ">{props.lang == fa ? "تماس" : "Contact"}</span>
                    </Link>

                </div>

                <div className="d-none d-md-inline-flex flex-wrap align-content-center" style={{
                }}>
                    <button className="btn btn-light no-shadow border-0 border-top border-dark border-3 w-100 rounded-0" onClick={changeLanguage}>
                        {props.lang == fa ? "En" : "Fa"}
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

function mapStateToProps(state: RootState) { return { lang: state.lang } }

export default connect(mapStateToProps, null)(NavBar)