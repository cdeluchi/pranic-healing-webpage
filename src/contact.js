import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_ruxyorDmwWFgsR1R3cm8z");

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_pranicHealing",
                e.target,
                "user_ruxyorDmwWFgsR1R3cm8z"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }
    return (
        <div>
            <div className="center">
                <div className="form">
                    <h2>Book your session</h2>
                    <form onSubmit={sendEmail}>
                        <div className="item-form">
                            <div className="data-input">
                                <input
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                />
                            </div>
                            <div className="data-input">
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                />
                            </div>

                            <textarea
                                className="form-control"
                                id=""
                                cols="30"
                                rows="8"
                                placeholder="Your message"
                                name="message"
                            ></textarea>

                            <input
                                type="submit"
                                className="btn btn-info"
                                value="Send Message"
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
