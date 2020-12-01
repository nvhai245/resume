import React from 'react';
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Typography from "@material-ui/core/Typography";

function LotusBackEndEngineer(props) {
    return (
            <div className="skill-card-container" style={{display: "block"}}>
                <div className="skill-card" style={{minWidth: "150%"}}>
                    <header className="skill-card__header" style={{height: "100px"}}>
                        <div className="skill-card__icon" style={{top: "70%"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1">
                                <title>logo vccorp</title>
                                <path className="cls-1"
                                      d="M118.41,21.85,107.59,5.55S105.81,1.11,98.4,1.4H5.94s-4.45-.3-4.74,3.85V66.31s-.3,4.45,5.63,4.45H136.34s5.63-.3,5.63-6.82V28.37s.59-6.22-5.33-6.52Z"/>
                                <ellipse className="cls-3" cx="57.9" cy="47.19" rx="1.81" ry="1.85"
                                         style="fill: rgb(255, 255, 255);"/>
                                <polygon className="cls-4"
                                         points="10.31 31.28 14.8 31.28 30.57 59.11 28.28 63.25 10.31 31.28"
                                         style="fill: rgb(255, 255, 255);"/>
                                <polygon className="cls-4"
                                         points="18.16 31.28 22.78 31.28 32.31 48.27 41.92 31.28 46.41 31.28 32.28 56.31 18.16 31.28"
                                         style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M57.84,59.09a12,12,0,0,1,0-23.9A11.56,11.56,0,0,1,66,38.53l2.63-2.84a15.42,15.42,0,0,0-10.75-4.37,15.95,15.95,0,0,0,0,31.89,15.42,15.42,0,0,0,10.82-4.44l-2.76-3A11.55,11.55,0,0,1,57.84,59.09Z"
                                      style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M58,52.32a5.05,5.05,0,0,1,0-10.11,4.88,4.88,0,0,1,3.35,1.33L64,40.64a8.65,8.65,0,0,0-6-2.46,9,9,0,0,0,0,17.9,8.65,8.65,0,0,0,6-2.39l-2.57-2.76A4.89,4.89,0,0,1,58,52.32Z"
                                      style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M90.38,38.34a8.92,8.92,0,1,0,8.74,8.92A8.83,8.83,0,0,0,90.38,38.34Zm0,13.9a5,5,0,1,1,4.89-5A4.94,4.94,0,0,1,90.38,52.25Z"
                                      style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M75.53,52.27a5,5,0,0,1,0-10,4.84,4.84,0,0,1,3.35,1.34l2.55-2.86a8.66,8.66,0,0,0-6-2.44,9,9,0,0,0,0,17.92,8.67,8.67,0,0,0,6.12-2.54l-2.6-2.81A4.84,4.84,0,0,1,75.53,52.27Z"
                                      style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M112.06,50.1c3.9-1.7,3.16-6.25,3.16-6.25-.43-5.62-6.74-5.3-6.74-5.3H101v17.1h3.84l-.06-4.86,4,.06,2.6,4.8h4.33Zm-.4-5.17a2.83,2.83,0,0,1-2.91,2.75h-4V41.74h4.33A2.75,2.75,0,0,1,111.66,44.92Z"
                                      style="fill: rgb(255, 255, 255);"/>
                                <path className="cls-4"
                                      d="M132.14,43.66c-.34-5.14-6.22-5.12-6.22-5.12h-7.61V55.73h3.76l0-4.94,4.42,0,.65-.13C133,50,132.14,43.66,132.14,43.66Zm-3.48,1a2.91,2.91,0,0,1-3,3h-3.61v-6h3.49A2.84,2.84,0,0,1,128.66,44.68Z"
                                      style="fill: rgb(255, 255, 255);"/>
                            </svg>
                        </div>
                    </header>
                    <section className="skill-card__body">
                        <h3 style={{color: "white"}} className="skill-card__title">Backend Engineer</h3>
                        <span className="skill-card__duration">1 years experience</span>

                        <ul className="skill-card__knowledge">
                            <li>Understand SSR architectures</li>
                            <li>Experience using Nextjs with Go && Nodejs back-end</li>
                        </ul>
                    </section>
                </div>
            </div>
    );
}

export default LotusBackEndEngineer;