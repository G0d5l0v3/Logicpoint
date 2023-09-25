import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
//import Home from "./Pages/Home/Home";
//import AboutUs from "./Pages/About/AboutUs";
import LandingPage from "./Pages/LandingPage";
//import Services from "./Pages/Services/Services";
//import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E87B37",
          },
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/*<Route path="/test" element={<LandingPage />} />
           <Route path="/home" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} /> */}
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
