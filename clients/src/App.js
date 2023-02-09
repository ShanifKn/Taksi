import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useSelector } from "react-redux";
import DriverPage from "./pages/Admin/Driver/Driver";

function App() {
  const isDriver = Boolean(useSelector((state) => state.driverLogin.token));
  const isAdmin = Boolean(useSelector((state) => state.adminLogin.token));
  const isUser = Boolean(useSelector((state) => state.userLogin.token));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isUser ? <Navigate to="/" /> : <UserSigup />}
        />
        <Route
          path="/profile"
          element={isUser ? <Navigate to="/" /> : <UserProfile />}
        />
        <Route
          path="/otp"
          element={isUser ? <Navigate to="/" /> : <OtpPage />}
        />
        <Route path="/siderbar" element={<SiderBar />} />
        <Route
          path="/password"
          element={isUser ? <Navigate to="/" /> : <Password />}
        />

        {/* Driver Side */}
        <Route
          path="/driver/login"
          element={isDriver ? <Navigate to="/driver/" /> : <LoginPage />}
        />
        <Route
          path="/driver/signup"
          element={isDriver ? <Navigate to="/driver/" /> : <Signup />}
        />
        <Route
          path="/driver/"
          element={isDriver ? <HomePage /> : <Navigate to="/driver/login" />}
        />
        <Route path="/driver/approve" element={<Approve />} />
        <Route path="/driver/error" element={<ErrorPage />} />

        {/* Admin Side  */}
        <Route
          path="/admin/"
          element={isAdmin ? <Navigate to="/admin/home" /> : <LoginAdmin />}
        />
        <Route
          path="/admin/home"
          element={isAdmin ? <AdminHome /> : <Navigate to="/admin/" />}
        />
        <Route
          path="/admin/driver"
          element={isAdmin ? <DriverPage /> : <Navigate to="/admin/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
