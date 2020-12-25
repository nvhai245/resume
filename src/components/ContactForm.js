import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

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

const MyForm = () => {
    const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [message, setMessage] = useState(""),
        [pending, setPending] = useState(false),
        [result, setResult] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setPending(true)
        fetch(`http://35.229.49.56:8080/mail?name=${name}&&email=${email}&&message=${message}`, {method: "POST"})
            .then(response => {
                console.log(response)
                setPending(false)
                if (response.status === 200) {
                    setResult("Message sent!")
                } else if (response.status === 500) {
                    setResult("Network error! Please try again!")
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className="my-form" action="" method="post">
            <div className="field">
                <label for="name">Name</label>
                <input onChange={handleNameChange} type="text" name="name" id="name" required/>
            </div>
            <div className="field">
                <label for="email">Email</label>
                <input onChange={handleEmailChange} type="email" name="eemail" id="email" required/>
            </div>
            <div className="field">
                <label for="name">Message</label>
                <textarea onChange={handleMessageChange} rows="5" name="msg" id="msg" required/>
            </div>
            <button type="submit" style={{marginRight: "2%"}}>Send</button>
            {pending && <CircularProgress />}
            {result !== "" && !pending  &&
            <span style={{color: result === "Message sent!" ? "blue" : "red"}}>
                {result === "Message sent!" && <DoneOutlineIcon style={{color: "green"}} />}
                {result}
            </span>
            }
        </form>
    )
};

const MyVid = () => (
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yXqW2igE8-4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
);

function ContactForm() {
    return (
        <ContactFlipForm
            title="Send Me A Message"
            frontContent={<MyForm/>}
            backContent={<MyVid />}
            lazyLoad={true}
        />
    );
}

export default ContactForm;