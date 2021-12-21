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
                            PRANIC HEALING | BERLIN <br />
                        </h3>
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
                            "A healing modality that works with energy or life
                            force to improve a wide range of physical and
                            psychological ailments"
                            <br />
                           
                            MasterChoa Kok Sui
                        </p>
                        <a href="contact">Book Now!</a>
                    </div>
                  
                    <div className="card-botton">
                        
                    </div>
                    <div className="img-box">
                        <img
                            // className="img-hand"
                            alt="Image Hand"
                            src="/healinghand.jpg"
                        />{" "}
                        
                    </div>
                </div>
            </div>
            <div className="text-botton">
                <h2>
                    Pranic Healing is not intended to replace the medicinal
                    treatments, <br />
                    it works together for a faster and more effective results.
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
