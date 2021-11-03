import "./App.css";
import Main from "./main";
import Content from "./content";
import Location from "./location";
import Map from "./map";
import Contact from "./contact";
import Testimonial from "./testimonial";

function App() {
    return (
        <div className="App">
            <Main />
            <Content />
            <Location />
            <Map />
            <Contact />
            <Testimonial />
        </div>
    );
}

export default App;
