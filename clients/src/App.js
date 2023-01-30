import "./App.css";
import Otp from "./components/Otp";
import SiderBar from "./components/SiderBar";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/Profile/Profile";
import { UserSigup } from "./pages/Signup/UserSigup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<UserSigup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/siderbar" element={<SiderBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
