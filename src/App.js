import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Body from "./components/Body/Body";
import WebSite_Dev_Cal from "./components/Body/WebSite_Dev_Cal";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/website_price_cal" element={<WebSite_Dev_Cal />} />
      </Routes>
    </>
  );
}

export default App;