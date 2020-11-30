import React from 'react';

function SkillReact(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header"><img className="skill-card__icon"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
                                                            alt="React Logo"/></header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">React</h2><span
                    className="skill-card__duration">1.5 years experience</span>
                    <ul className="skill-card__knowledge">
                        <li>Redux</li>
                        <li>Material-UI, Semantic-UI, Bootstrap</li>
                        <li>GraphQL</li>
                        <li>Canvas</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillReact;