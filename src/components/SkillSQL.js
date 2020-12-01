import React from 'react';

function SkillSQL(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header"><img className="skill-card__icon"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/1/10/AWS_Simple_Icons_Database_Amazon_RDS_MySQL_DB_Instance.svg"
                                                            alt="React Logo"/></header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">SQL</h2><span
                    className="skill-card__duration">1+ year experience using:</span>
                    <ul className="skill-card__knowledge">
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillSQL;