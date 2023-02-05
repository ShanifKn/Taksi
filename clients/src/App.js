import "./App.css";
import SiderBar from "./components/SiderBar";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/Profile/Profile";
import { UserSigup } from "./pages/Signup/UserSigup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OtpPage from "./pages/Otp/OtpPage";
import LoginPage from "./pages/Driver/Register/LoginPage";
import Signup from "./pages/Driver/Register/Signup";
import HomePage from "./pages/Driver/Home/HomePage";
import LoginAdmin from "./pages/Admin/LoginPage/LoginPage";
import AdminHome from "./pages/Admin/Home/HomePage";
import Pass from "./pages/Password/pass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<UserSigup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/siderbar" element={<SiderBar />} />
        <Route path="/password" element={<Pass />} />

        {/* Driver Side */}
        <Route path="/driver/login" element={<LoginPage />} />
        <Route path="/driver/signup" element={<Signup />} />
        <Route path="/driver/" element={<HomePage />} />

        {/* Admin Side  */}

        <Route path="/admin/" element={<LoginAdmin />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
