/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { NavbarContext } from "../../Context/NavbarContext";

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false);
  const { userNav, handleUserNav } = useContext(NavbarContext);
  const [currentUser, setcurrentUser] = useState(null);
  const { name } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setcurrentUser(name);
    } else {
      setcurrentUser(null);
    }
  }, []);

  console.log(userNav);
  return (
    <nav className={`bg-black px-2 sm:px-4  sticky top-0 ${!userNav ? "h-16" : "h-72"}`}>
      <div className="container flex   flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Tak-si</span>
        </a>
        <div className="flex md:order-2 items-center">
          {currentUser ? (
            <div>
              <AccountCircleIcon className="text-white" fontSize="large" />
              <Link
                to="/profile"
                className="text-white md:inline hidden  transform transition duration-900 md:hover:scale-110  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-3 md:mr-0 ">
                {currentUser}
              </Link>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-black bg-white transform transition duration-900 md:hover:scale-110  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Login
            </button>
          )}

          <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500  rounded-lg md:hidden" onClick={handleUserNav}>
            <DehazeIcon fontSize="large" />
          </button>
        </div>
        <div className={`items-center justify-between ${!userNav ? "hidden" : ""} w-full md:flex md:w-auto md:order-1 `}>
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
              <Link
                to="/wallet"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent hover:text-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                Wallet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
