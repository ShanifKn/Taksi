import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Driver/Register/LoginPage";
import Signup from "./pages/Driver/Register/Signup";
import HomePage from "./pages/Driver/Home/HomePage";
import LoginAdmin from "./pages/Admin/LoginPage/LoginPage";
import AdminHome from "./pages/Admin/Home/HomePage";
import Home from "./pages/User/HomePage/Home";
import Login from "./pages/User/Login/Login";
import OtpPage from "./pages/User/Otp/OtpPage";
import Password from "./components/User/password";
import SiderBar from "./components/User/SiderBar";
import UserProfile from "./pages/User/Profile/Profile";
import UserSigup from "./pages/User/Signup/UserSigup";
import "../src/App.css";
import Approve from "./pages/Driver/Approve/Approve";
import ErrorPage from "./pages/Driver/Error/Error";

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
        <Route path="/password" element={<Password />} />

        {/* Driver Side */}
        <Route path="/driver/login" element={<LoginPage />} />
        <Route path="/driver/signup" element={<Signup />} />
        <Route path="/driver/" element={<HomePage />} />
        <Route path="/driver/approve" element={<Approve />} />
        <Route path="/driver/error" element={<ErrorPage />} />

        {/* Admin Side  */}

        <Route path="/admin/" element={<LoginAdmin />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
