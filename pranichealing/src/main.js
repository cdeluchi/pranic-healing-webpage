function Main() {
    return (
        <div className="main">
            <div className="center">
                <div className="menu">
                    <div className="logo">
                        <h3>Pranic Healing Berlin</h3>
                    </div>
                    <div className="item-menu">
                        <a href="#">Home</a>
                        <a href="#">Location</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

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
        </div>
    );
}
export default Main;
