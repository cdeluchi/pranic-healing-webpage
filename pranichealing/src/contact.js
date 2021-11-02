function Contact() {
    return (
        <div className="center">
            <div className="form">
                <h2>Contact us</h2>
                <form>
                    <div className="item-form">
                        <input placeholder="first name" type="text" />
                        <input placeholder="last name" type="text" />
                        <input placeholder="email" type="text" />
                        <input placeholder="password" type="text" />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;
