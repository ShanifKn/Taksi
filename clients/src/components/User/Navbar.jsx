/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../Store/Slice/Login";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);
  const { name } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(name);

  const HandleNavbar = () => {
    !navbar ? setNavbar(true) : setNavbar(false);
  };

  useEffect(() => {
    if (name) {
      setcurrentUser(name);
    } else {
      setcurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    dispatch(setLogout());
    setcurrentUser(null);
  };

  return (
    <nav className="bg-black px-2 sm:px-4  ">
      <div className="container flex   flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Tak-si</span>
        </a>
        <div className="flex md:order-2">
          {currentUser ? (
            <div>
              <AccountCircleIcon className="text-white" fontSize="large" />
              <button
                type="button"
                onClick={handleLogout}
                className="text-white  transform transition duration-900 md:hover:scale-110  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-3 md:mr-0">
                {currentUser}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-black bg-white transform transition duration-900 md:hover:scale-110  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Login
            </button>
          )}
          <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  " onClick={() => HandleNavbar()}>
            <DehazeIcon fontSize="large" />
          </button>
        </div>
        <div className={`items-center justify-between ${navbar ? "shown" : "hidden"} w-full md:flex md:w-auto md:order-1 `}>
          <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <Link to="/ride">
              <li className="block py-2 pl-3 pr-4 text-white hover:bg-transparent hover:text-blue-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Ride
              </li>
            </Link>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent hover:text-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Drive
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent hover:text-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Wallet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
