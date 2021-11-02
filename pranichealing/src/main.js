import Lottie from "react-lottie";
import animationData from "./lotties/meditation.json";

function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
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
                <div className="main-content">
                    <div className="text-box">
                        <h2>
                            This is not just a healing
                            <br />
                            This is <span>Pranic Healing</span>
                        </h2>
                        <p>
                            This is our website about PranicHealing, and here
                            you will know all about this amazing technic.
                        </p>
                        <a href="www.pranaworld.net">Read more</a>
                    </div>
                    <div className="card-right">
                        <Lottie
                            options={defaultOptions}
                            height={100}
                            width={100}
                        />
                        <h2>About energy</h2>
                        <p>everything is energy</p>
                    </div>
                    <div className="card-left">
                        <p>About energy</p>
                    </div>
                    <div className="card-botton">
                        <p>About energy</p>
                    </div>
                    <div className="img-box">
                        {/* <img
                            className="img-hand"
                            alt="Image Hand"
                            src="/imghand.jpg"
                        /> */}
                        <Lottie
                            options={defaultOptions}
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
            </div>
            <div className="text-botton">
                <h2>
                    If you want to know more about our sessions, <br />
                    please send us a message
                </h2>
            </div>
        </div>
    );
}
export default Main;
