import React from 'react';

function SkillNoSQL(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header"><img className="skill-card__icon"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Redis_Logo.svg"
                                                            alt="React Logo"/></header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">NoSQL Databases</h2><span
                    className="skill-card__duration">1+ year experience</span>
                    <ul className="skill-card__knowledge">
                        <li>MongoDB</li>
                        <li>Redis</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillNoSQL;