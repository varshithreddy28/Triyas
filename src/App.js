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
import Cloud from "./pages/cloud/cloud";
import Creo from "./pages/creo/creo";
import Creoplus from "./pages/creoplus/creoplus";
import Onshape from "./pages/onshape/onshape";
import Windchill from "./pages/windchill/windchill";
import Vuforia from "./pages/vuforia/vuforia";
import Thingwox from "./pages/thingvox/thingwox";
import Altair from "./pages/altair/altair";
import Codebeamer from "./pages/Codebeamer/codebeamer";
import Slm from "./pages/SLM/slm";
import Productdesign from "./pages/ProductDesign/productdesign";
import Modeling3D from "./pages/3Dmodeling/3Dmodeling";
import Reverse from "./pages/Reverse Engineering/reverse";
import FeModelling from "./pages/FE Modelling/fe_modelling";
import Static_Anylasis from "./pages/Static Anylasis/staticanylasis";
import ThermalAnylasis from "./pages/ThermalAnylasis/thermal";
import Linear from "./pages/LinearDynamics/linear";
import ExplicitAnylasis from "./pages/Explicit Anylasis/explicitanalysis";
import MultiBody from "./pages/MultiBodyDynamics/MultiBody";
import CFD from "./pages/Cfd/cfd";
import Pdts from "./components/Altairpdts/pdts";
import Pdt_Altr from "./pages/Altair Pdt/pdt";
import Ptc from "./pages/marketing/marketing";
import Cae from "./pages/caeservices/cae";
import Bottomnav from "./components/BottomNav/bottomnav";

import ScrolltoTop from "./components/ScrolltoTop/scrolltotop";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to={"/"} />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* Just for Demo */}
          <Route path="/cad" element={<Cad />} />
          <Route path="/ptc" element={<Ptc />} />
          <Route path="/designservices" element={<Cloud />} />
          <Route path="/caeservices" element={<Cae />} />

          <Route path="/cad/creo" element={<Creo />} />
          <Route path="/cad/creoplus" element={<Creoplus />} />
          <Route path="/cad/onshape" element={<Onshape />} />
          <Route path="/plm/windchill" element={<Windchill />} />
          <Route path="/arvr/vuforia" element={<Vuforia />} />
          <Route path="/iot/thingworx" element={<Thingwox />} />
          <Route path="/simulation/altair" element={<Altair />} />
          <Route path={`/simulation/altair/:pdt`} element={<Pdt_Altr />} />

          <Route path="/alm/codebeamer" element={<Codebeamer />} />
          <Route path="/slm" element={<Slm />} />
          {/* Services */}
          <Route path="/design/productdesign" element={<Productdesign />} />
          <Route path="/design/3dmodelling" element={<Modeling3D />} />
          <Route path="/design/reverseengineering" element={<Reverse />} />
          <Route path="/cae/femodelling" element={<FeModelling />} />
          <Route path="/cae/staticanalysis" element={<Static_Anylasis />} />
          <Route path="/cae/thermalanalysis" element={<ThermalAnylasis />} />
          <Route path="/cae/lineardynamics" element={<Linear />} />
          <Route path="/cae/explicitanalysis" element={<ExplicitAnylasis />} />
          <Route path="/cae/multibodydynamics" element={<MultiBody />} />
          <Route path="/cae/cfd" element={<CFD />} />
        </Routes>
        <Bottomnav />
      </Router>
    </div>
  );
}

export default App;
