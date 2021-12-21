import "./App.css";
import Main from "./main";
import Content from "./content";
import Modal from "./modal";
import Map from "./map";
import Contact from "./contact";
import Testimonial from "./testimonial";
import Footer from "./footer";

function App() {
    return (
        <>
            <Main />
            <Content />
            <div className="modal-map-container">
                <Map />
                <Modal />
            </div>
            <Testimonial />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
