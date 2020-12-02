import React, {useEffect, useState} from 'react';
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import Typography from "@material-ui/core/Typography";
import LineTo from 'react-lineto';

function LotusBackEndEngineer(props) {
    const [ticks, setTicks] = useState(0);
    const [paused, setPaused] = useState(false);
    const requestRef = React.useRef()

    const animate = time => {
        // Change the state according to the animation
        requestRef.current = requestAnimationFrame(animate);
    }
    useEffect(() => {
        startAnimation();
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [])
    const startAnimation = () => {
        const step = () => {
            setTicks(prevState => prevState + 1)
        };
        step();
    }
    const stopAnimation = () => {
        cancelAnimationFrame(requestRef.current);
    }

    const togglePause = () => {
        const paused = !paused;
        if (paused) {
            stopAnimation();
        } else {
            startAnimation();
        }
        setPaused(paused);
    }

    const renderPauseButton = () => {
        const text = this.state.paused ? 'Play' : 'Pause';
        return (
            <button onClick={togglePause}>{text}</button>
        );
    }

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
                    <section className="skill-card__body">
                        <h3 style={{color: "white"}} className="skill-card__title">Backend Engineer</h3>
                        <span className="skill-card__duration">1 year</span>

                        <ul className="skill-card__knowledge">
                            <h4 className="lotus-search"><strong>Lotus messenger's search engine</strong></h4>
                            <li className="lotus-search1">Designed and developed a search service for Lotus messenger app using Elastic-Search</li>
                            <LineTo delay={0} from="lotus-search" to="lotus-search1" />
                            <li className="lotus-search2">Designed search algorithm based on user's experience</li>
                            <LineTo delay={0} from="lotus-search" to="lotus-search2" />
                        </ul>
                        <ul className="skill-card__knowledge">
                            <h4><strong>Lotus messenger's Bot API</strong></h4>
                            <li>Build a complete system for messenger chat bots(send, receive messages, manage chats, reply based on user's settings...)</li>
                            <li>Delivered Bot APIs system for third-party access</li>
                        </ul>
                    </section>
                </div>
            </div>
    );
}

export default LotusBackEndEngineer;