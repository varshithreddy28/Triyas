import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
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
import CADCustomisation from "./pages/cadCustomization/cadcust";
import DesignAutomation from "./pages/designAutomation/designAuto";
import Staffing from "./pages/Staffing Services/staffing";
import Gap from "./components/Gap/gap";
import AltairEvents from "./pages/Altair Events/altrevnts";
import PTCEvents from "./pages/PTC Events/ptcevents";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

// Actions
import { addPTCEvents } from "./features/eventFeatures";

function App() {
  const [ptcEvents, setPtcEvents] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const dispatch = useDispatch();
  const API = "https://triyas-api.onrender.com/api/getEvents";
  const eventsStore = useSelector((state) => state.eventsSlice.ptcEvents);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log("I am fetching the Events!!!");
    async function fetchData() {
      try {
        const { data, status } = await axios.get(API);
        if (status === 200) setPtcEvents(data[1].ptc);
        else {
          setApiErrorMsg(data);
          throw Error("Error");
        }
        // console.log(data);
      } catch (error) {
        setApiError(true);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    for (let i = 0; i < ptcEvents.length; i++) {
      const element = ptcEvents[i];
      if (eventsStore.length <= 0) dispatch(addPTCEvents(element));
    }
  }, [ptcEvents]);

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
          {/* <Route path="cad" element={<Cad title="Triyas | CAD" />} /> */}
          <Route path="ptc" element={<Ptc title="PTC" />} />
          <Route path="designservices" element={<Cloud />} />
          <Route path="caeservices" element={<Cae />} />

          <Route path="cad/creo" element={<Creo />} />
          <Route path="cad/creoplus" element={<Creoplus />} />
          <Route path="cad/onshape" element={<Onshape />} />
          <Route path="/plm/windchill" element={<Windchill />} />
          <Route path="/arvr/vuforia" element={<Vuforia />} />
          <Route path="/iot/thingworx" element={<Thingwox />} />
          <Route path="/simulation/altair" element={<Altair />} />
          <Route path={`/simulation/altair/:pdt`} element={<Pdt_Altr />} />

          <Route path="/alm/codebeamer" element={<Codebeamer />} />
          <Route path="/slm" element={<Slm />} />
          {/* Services */}
          {/* Design */}
          <Route path="/design/productdesign" element={<Productdesign />} />
          <Route path="/design/3dmodelling" element={<Modeling3D />} />
          <Route path="/design/reverseengineering" element={<Reverse />} />
          <Route
            path="/design/cadcustomisation"
            element={<CADCustomisation />}
          />
          <Route
            path="/design/designautomation"
            element={<DesignAutomation />}
          />

          {/* CAE */}
          <Route path="/cae/femodelling" element={<FeModelling />} />
          <Route path="/cae/staticanalysis" element={<Static_Anylasis />} />
          <Route path="/cae/thermalanalysis" element={<ThermalAnylasis />} />
          <Route path="/cae/lineardynamics" element={<Linear />} />
          <Route path="/cae/explicitanalysis" element={<ExplicitAnylasis />} />
          <Route path="/cae/multibodydynamics" element={<MultiBody />} />
          <Route path="/cae/cfd" element={<CFD />} />

          {/* Staffing */}
          <Route path="/staffingservices" element={<Staffing />} />

          {/* Resources */}
          <Route path="/events/altair" element={<AltairEvents />} />
          <Route path="/events/ptc" element={<PTCEvents />} />
        </Routes>
        {/* <Gap /> */}
        <Bottomnav />
      </Router>
    </div>
  );
}

export default App;
