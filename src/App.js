import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/home/Home";


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
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/leadership" element={<Home />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
