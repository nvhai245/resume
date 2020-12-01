import React from 'react';

function SkillNodeJs(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header"><img className="skill-card__icon"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                                            alt="React Logo"/></header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">Nodejs</h2>
                    <span className="skill-card__duration">1.5 years experience</span>
                    <ul className="skill-card__knowledge">
                        <li>Experience using ES6, Typescript</li>
                        <li>Building APIs server using Express, Passport,...</li>
                        <li>Can design and build microservices with gRPC, graphQL,...</li>
                        <li>Experience using Websocket, Socket.io,...</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillNodeJs;