import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/nav.jsx";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";
import Cad from "./pages/CAD/cad";
import Marketing from "./pages/marketing/marketing";
import Cloud from "./pages/cloud/cloud";
import Creo from "./pages/creo/creo";
import Creoplus from "./pages/creoplus/creoplus";
import Onshape from "./pages/onshape/onshape";
import Windchill from "./pages/windchill/windchill";
import Vuforia from "./pages/vuforia/vuforia";
import Thingwox from "./pages/thingvox/thingwox";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to={"/"} />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/cad" element={<Cad />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/cad/creo" element={<Creo />} />
          <Route path="/cad/creoplus" element={<Creoplus />} />
          <Route path="/cad/onshape" element={<Onshape />} />
          <Route path="/plm/windchill" element={<Windchill />} />
          <Route path="/arvr/vuforia" element={<Vuforia />} />
          <Route path="/iot/thingworx" element={<Thingwox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
