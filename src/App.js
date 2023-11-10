import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Leadership from "./pages/leadership/Leadership";

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
          <Route path="/about-us" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
