import React, {useState} from 'react';

const ToggleButton = ({clickFn = null, classNames = ""}) => (
    <button className={classNames} type="button" onClick={clickFn}>
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAP4SURBVGiB7ZdbTFt1HMc/v3NaLm4R5nyZYXihxU2cQSgSjQ8aY7LMaLbg8DZfjIMCU6M+LFmybCb6YhYTZmA0xGiiD2LmMEu2ZcYHF00QaMHLMBnFOWCb2YMgM1rXy/n5wDba0kJXWtDkfF6anu/v9m1Of+d/wMbGxsbGxsbGxmalkKyyVKXed9YVU61VQ+8QpQwoB8qAEkUMAy2JT7GQGUEtYAY4jzCucEEsOWeKBPq9FcG8GqjpPHufYca2YcnDiHqA0mwaLjDItIJf4FtVOeJvcZ3OMC89tb5fylHLCzwt4M7JpJkzinJYLOkabHNNpgtKaaDWd2YDau4W9AXAmbcRMyOM8Amx2Lv+1g1nksUEA66DwcKSAn1bkNcBc+G68huoX+G0qFxEdcIwjItqxabEaWkoUvxHfHSxM1SqEUNwmGvVsm5TpBx0ncC9IB7QdYsYiYpy4O+14X0jjVXheQaqP/y11PFP9BjCQ2kK/AWcUNHeAktP9bXcfWGRhjdEfXewzIrxiApbUTYDq1LFCfKNJfJkoLliZs6Aqnh8YyeBx1Pk+EW1wxEq7ul7Y30ol0On48H3JoujN4WeVWQXUDMvQDnh97qeQEQFoK4ruEPh46SwCSxe8be6jy7DzGl54NDYNku0HVifIKg8529xfWoAKOyM10QIXLEKqld6eICBFlev0xGuBoYSBNEmAOPq1+oEzYht/6n19ullmTAD+l6umlKhMeny/TBnIGEbxSzT4D+GKUbyVrRgzsBwvGJAz6bO8TVLaVh3aKzddTBYuJQa16jvDpZZlnU46fIPcNWAQHe8okptoRH+3tMZfCrbpiraVFrIcE3H6MZsa7Bfjbqu4I5ojO+ATfGSIL7Zz9mJxeMbOw5sTlEmqzXq6QqGgCLgMqov+VsqP880d1Pn+JoiM7LdUn1N4J55AcJRf5Nr6/U1ClDVMbK62HR+AfJYmro39CCLMwCgovL+qkuTb369/9HoQnm1XaNHBNkCpL79VL4yI9rQ/6r78qyXOKo+GykomnK+s9SjRLRI/jTDMgFalJCinDId5jP9O++6tIBxTSNFFA4gM/sCzZ7I9SlSReb5MHfegMYBr7svlZjCgIL0mujefq/75+T4lTpOXxF096C3sj1ZiDMwqWiPYchHg03ukXSFHAt1CTRXTAB7gD05fqExVcVAVRBJ+MUV3YvI8UCTazhZS0VeXimBm0FvTVVekXOINgSa3UPzxCzIzkAGJG2ha3xpRKPPD+za+Huu+izXkcFCeevOW1xbcjk8LPIfyAUC05boiwFv5TF/Hurn14Doj7Go0TDU5h7LV4t83kIfrC5w1g+1ufI2vI2NjY2Nzf+efwFdDKDtHsuriQAAAABJRU5ErkJggg=="
            alt="Flip Form"
        />
    </button>
);

function ContactFlipForm({title, lazyLoad, frontContent, backContent}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => {
        setIsFlipped(prevState => !prevState);
    };
    return (
        <div className={`contact-card-container ${isFlipped && "flipped"}`}>
            <div className="contact-card card-front">
                <div className="title-container">
                    <h1 className="title">{title}</h1>
                    <ToggleButton
                        clickFn={toggleFlip}
                        classNames="toggle-button"
                    />
                </div>
                {frontContent}
            </div>
            <div className="contact-card card-back">
                <ToggleButton clickFn={toggleFlip} classNames="toggle-button"/>
                {((lazyLoad && isFlipped) || !lazyLoad) && backContent}
            </div>
        </div>
    );
}

const MyForm = () => (
    <form className="my-form" action="" method="post">
        <div className="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div className="field">
            <label for="email">Email</label>
            <input type="email" name="eemail" id="email" required/>
        </div>
        <div className="field">
            <label for="name">Message</label>
            <textarea rows="5" name="msg" id="msg" required/>
        </div>
        <button>Send</button>
    </form>
);

const DummyContent = () => (
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/lZ-O5K6ssII"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
);

function ContactForm() {
    return (
        <ContactFlipForm
            title="Send Me An Email"
            frontContent={<MyForm/>}
            backContent={<DummyContent/>}
            lazyLoad={true}
        />
    );
}

export default ContactForm;