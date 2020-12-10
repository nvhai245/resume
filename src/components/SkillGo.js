import React from 'react';

function SkillGo(props) {
    return (
        <div className="skill-card-container">
            <div className="skill-card">
                <header className="skill-card__header"><img className="skill-card__icon"
                                                            src="https://golang.org/lib/godoc/images/go-logo-blue.svg"
                                                            alt="React Logo"/></header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">Go</h2><span
                    className="skill-card__duration">1.5 years experience</span>
                    <ul className="skill-card__knowledge">
                        <li>Have deep knowledge of Go data structures, concurrency with channels & goroutines</li>
                        <li>Building fast and secured web servers with Echo, Gin,..</li>
                        <li>Design, develop microservices with gRPC</li>
                        <li>Building REST and GraphQL APIs in Go</li>
                        <li>Experience developing Go microservices with Redis, Kafka,...</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default SkillGo;