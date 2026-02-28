import './AboutMe.css';
import html from './../../assets/images/html-logo.png'
import css from './../../assets/images/css-logo.png'
import react from './../../assets/images/react-logo.png'
import github from './../../assets/images/github-logo.png'
import figma from './../../assets/images/figma-logo.png'
import { BsChatSquareFill } from "react-icons/bs";

const AboutMe = () => {

    const htmlValue = 96;
    const cssValue = 94;
    const jsValue = 85;
    const reactValue = 90;

    return (
        <section id="about-me" className="about-me">
            <div className="logos">
                <div className="bg">
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                    <div className="css-logo">
                        <img src={css} className="icon icon2" />
                    </div>

                    <div className="orbit">
                        <img src={html} className="icon icon1" />
                        <img src={react} className="icon icon3" />
                        <img src={github} className="icon icon4" />
                        <img src={figma} className="icon icon5" />
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="about-text">
                    <h1 className='about-me-title'>About Me</h1>
                    <p className='about-me-des'>
                        I’m a motivated Front-End Developer with hands-on experience in HTML5, CSS3, JavaScript, and React.
                        I focus on writing clean code and building responsive web applications with modern UI design.
                        Currently expanding my knowledge and working on improving performance and user experience.
                    </p>
                </div>

                <div className="percents">

                    {/* HTML */}
                    <div className="labels">
                        <label htmlFor="html" className='label'>HTML5</label>

                        <div className="range-wrapper">
                            <input
                                type="range"
                                name="html"
                                id="html"
                                className='range html'
                                min="0"
                                max="100"
                                value={htmlValue}
                                readOnly
                            />

                            <div
                                className="icon-wrapper"
                                style={{ left: `${htmlValue}%` }}
                            >
                                <BsChatSquareFill className='square-icon' />
                                <span className="icon-text">{htmlValue}%</span>
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="labels">
                        <label htmlFor="css" className='label'>CSS3</label>

                        <div className="range-wrapper">
                            <input
                                type="range"
                                name="css"
                                id="css"
                                className='range css'
                                min="0"
                                max="100"
                                value={cssValue}
                                readOnly
                            />

                            <div
                                className="icon-wrapper"
                                style={{ left: `${cssValue}%` }}
                            >
                                <BsChatSquareFill className='square-icon' />
                                <span className="icon-text">{cssValue}%</span>
                            </div>
                        </div>
                    </div>

                    {/* JS */}
                    <div className="labels">
                        <label htmlFor="js" className='label'>Javascript</label>

                        <div className="range-wrapper">
                            <input
                                type="range"
                                name="js"
                                id="js"
                                className='range js'
                                min="0"
                                max="100"
                                value={jsValue}
                                readOnly
                            />

                            <div
                                className="icon-wrapper"
                                style={{ left: `${jsValue}%` }}
                            >
                                <BsChatSquareFill className='square-icon' />
                                <span className="icon-text">{jsValue}%</span>
                            </div>
                        </div>
                    </div>

                    {/* React */}
                    <div className="labels">
                        <label htmlFor="react" className='label'>React</label>

                        <div className="range-wrapper">
                            <input
                                type="range"
                                name="react"
                                id="react"
                                className='range react'
                                min="0"
                                max="100"
                                value={reactValue}
                                readOnly
                            />

                            <div
                                className="icon-wrapper"
                                style={{ left: `${reactValue}%` }}
                            >
                                <BsChatSquareFill className='square-icon' />
                                <span className="icon-text">{reactValue}%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;