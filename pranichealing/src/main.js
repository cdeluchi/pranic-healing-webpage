// import Lottie from "react-lottie";
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
                        <h3>
                            Pranic Healing <br />
                            Berlin
                        </h3>
                    </div>
                    <div className="item-menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
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
                            A healing modality that works with energy or life
                            force to improve a wide range of physical and
                            psychological ailments.
                            <br />
                            <br />
                            MasterChoa Kok Sui
                        </p>
                        <a href="contact">Book Now!</a>
                    </div>
                    {/* <div className="card-right">
                        <Lottie
                            options={defaultOptions}
                            height={100}
                            width={100}
                        />
                        <h2>About energy</h2>
                        <p>everything is energy</p>
                    </div>
                    {/* <div className="card-left">
                        <p>About energy</p>
                    </div> */}
                    <div className="card-botton">
                        <p>About energy</p>
                    </div>
                    <div className="img-box">
                        <img
                            // className="img-hand"
                            alt="Image Hand"
                            src="/healinghand.jpg"
                        />{" "}
                        {/* <Lottie
                            options={defaultOptions}
                            height={500}
                            width={500}
                        /> */}
                    </div>
                </div>
            </div>
            <div className="text-botton">
                <h2>
                    Pranic Healing is not intended to replace medicinal
                    treatments, <br />
                    it works together for a faster and more effective result.
                </h2>
                <img
                    className="arrow-down"
                    alt="arrow-down"
                    src="/arrow-down.png"
                />
            </div>
        </div>
    );
}
export default Main;
