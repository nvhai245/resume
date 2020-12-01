import React from 'react';

function SkillNextJs(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header">
                    <img className="skill-card__icon"
                         src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                         alt="NextJS Logo"/>
                </header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">Nextjs</h2><span
                    className="skill-card__duration">1,5 years experience</span>
                    <ul className="skill-card__knowledge">
                        <li>Understand SSR architectures</li>
                        <li>Experience using Nextjs with Go && Nodejs back-end</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillNextJs;