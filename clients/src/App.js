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
import UserProfile from "./pages/User/Profile/Profile";
import UserSigup from "./pages/User/Signup/UserSigup";
import "../src/App.css";
import Approve from "./pages/Driver/Approve/Approve";
import ErrorPage from "./pages/Driver/Error/Error";
import { useSelector } from "react-redux";
import DriverPage from "./pages/Admin/Driver/Driver";
import Error from "./components/Admin/Error";
import CarlistPage from "./pages/Admin/Car/CarlistPage";
import AcceptRidePage from "./pages/Driver/RideAccept/AcceptRidePage";
import ErrorServer from "./components/User/Error";
import RidePage from "./pages/User/Ride/RidePage";
import WalletPage from "./pages/User/Wallet/WalletPage";
import UpcomingtripPage from "./pages/Driver/Upcomingtrip/UpcomingtripPage";

function App() {
  const isDriver = Boolean(useSelector((state) => state.driverLogin.token));
  const isAdmin = Boolean(useSelector((state) => state.adminLogin.token));
  const isUser = Boolean(useSelector((state) => state.userLogin.token));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isUser ? <Navigate to="/" /> : <UserSigup />} />
        <Route path="/profile" element={!isUser ? <Navigate to="/" /> : <UserProfile />} />
        <Route path="/otp" element={isUser ? <Navigate to="/" /> : <OtpPage />} />
        <Route path="/password" element={isUser ? <Navigate to="/" /> : <Password />} />
        <Route path="/ride" element={!isUser ? <Navigate to="/" /> : <RidePage />} />
        <Route path="/wallet" element={!isUser ? <Navigate to="/" /> : <WalletPage />} />:
        <Route path="/error" element={<ErrorServer />} />
       
       
        {/* Driver Side */}
        <Route path="/driver/login" element={isDriver ? <Navigate to="/driver/" /> : <LoginPage />} />
        <Route path="/driver/signup" element={isDriver ? <Navigate to="/driver/" /> : <Signup />} />
        <Route path="/driver/" element={isDriver ? <HomePage /> : <Navigate to="/driver/login" />} />
        <Route path="/driver/accept-ride" element={isDriver ? <AcceptRidePage /> : <Navigate to="/driver/login" />} />
        <Route path="/driver/upcoming-trips" element={isDriver ? <UpcomingtripPage /> : <Navigate to="/driver/login" />} />
        <Route path="/driver/approve" element={<Approve />} />
        <Route path="/driver/error" element={<ErrorPage />} />
        
        
        {/* Admin Side  */}
        <Route path="/admin/" element={isAdmin ? <Navigate to="/admin/home" /> : <LoginAdmin />} />
        <Route path="/admin/home" element={isAdmin ? <AdminHome /> : <Navigate to="/admin/" />} />
        <Route path="/admin/driver" element={isAdmin ? <DriverPage /> : <Navigate to="/admin/" />} />
        <Route path="/admin/carlist" element={isAdmin ? <CarlistPage /> : <Navigate to="/admin/" />} />
        <Route path="/admin/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
