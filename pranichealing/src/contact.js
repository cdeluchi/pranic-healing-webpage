function Contact() {
    return (
        <div className="center">
            <div className="form">
                <h2>Contact us</h2>
                <form>
                    <div className="item-form">
                        <input
                            className="data-input"
                            placeholder="full name"
                            type="text"
                        />
                        <input
                            className="data-input"
                            placeholder="email"
                            type="text"
                        />
                        <input
                            className="message-input"
                            placeholder="your message"
                            type="text"
                        />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;
