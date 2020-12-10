import React, {useEffect, useState} from 'react';
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Typography from "@material-ui/core/Typography";
import LineTo from 'react-lineto';

function LotusBackEndEngineer(props) {

    return (
        <div className="skill-card-container" style={{display: "block"}}>
            <div className="skill-card" style={{minWidth: "150%"}}>
                <header className="skill-card__header" style={{height: "100px"}}>
                    <div className="skill-card__icon" style={{top: "70%"}}>
                        <img className="skill-card__icon"
                             src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Fixed.svg"
                             alt="VCC Logo"/>
                    </div>
                </header>
                <section className="skill-card__body exp-skill">
                    <h3 style={{color: "white"}} className="skill-card__title">Backend Engineer</h3>
                    <span className="skill-card__duration">1 year</span>
                    <ul>
                        <h2 style={{color: "#4285F4"}}>
                            <strong>Projects:</strong>
                        </h2>
                        <ul className="skill-card__knowledge">
                            <h3 style={{color: "#FED745"}}><strong>Lotus messenger's search engine</strong></h3>
                            <li><i>Designed and developed a search service for Lotus messenger app using
                                Elastic-Search</i></li>
                            <li><i>Designed search algorithm based on user's experience</i></li>
                        </ul>
                        <ul className="skill-card__knowledge">
                            <h3 style={{color: "#FED745"}}><strong>Lotus Chat Bots Service</strong></h3>
                            <li><i>Build a complete system for messenger chat bots(send, receive messages, manage chats,
                                reply based on user's settings...)</i></li>
                            <li><i>Delivered Bot APIs system for third-party access</i></li>
                        </ul>
                    </ul>
                    <ul className="skill-card__knowledge">
                        <h2 style={{color: "#4285F4"}}><strong>Technologies used:</strong></h2>
                        <li><i>Languages: Go, Javascript</i></li>
                        <li><i>Frameworks: microservices(gRPC), Echo, Gin, ReactJS, Kafka,...</i></li>
                        <li><i>Databases: MySQL, PostgreSQL, Redis,...</i></li>
                    </ul>
                    <ul className="skill-card__knowledge">
                        <h2 style={{color: "#4285F4"}}><strong>Skills developed during working time:</strong></h2>
                        <li><i>Co-operate and team-work efficiently</i></li>
                        <li><i>Working with different teams in a project to achieve team's goals</i></li>
                        <li><i>Working under high pressure and deadlines...</i></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default LotusBackEndEngineer;