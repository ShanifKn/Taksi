import React, { useContext } from "react";
import { NavbarContext } from "../../Context/NavbarContext";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../../Store/Slice/AdminLogin";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HailIcon from "@mui/icons-material/Hail";

const Siderbar = () => {
  const { handleNav, isMobile } = useContext(NavbarContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    dispatch(setLogout());
    navigate("/admin/");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={() => handleNav()}
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <DehazeIcon fontSize="large" />
        </button>
        <h1 className="text-2xl font-semibold whitespace-nowrap dark:text-white mr-5">TaK-Si</h1>
      </div>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen ${isMobile ? " " : "transition-transform -translate-x-full"}  sm:translate-x-0`}
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black">
          <div className="flex justify-between cursor-pointer">
            <div className="flex items-center pl-2.5 mb-5">
              <Link to="/admin/home">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tak-si</span>
              </Link>
            </div>
            <div className="md:hidden">
              <CloseIcon fontSize="large" onClick={() => handleNav()} />
            </div>
          </div>

          <ul className="space-y-2">
            <Link to="/admin/home">
              <li className="flex items-center p-2 mt-6 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </li>
            </Link>
            <Link to="/admin/driver">
              <li className="flex items-center p-2 mt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HailIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Driver</span>
              </li>
            </Link>
            <Link to="/admin/carlist">
              <li className="flex items-center p-2  mt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <LocalTaxiIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Cars</span>
              </li>
            </Link>
            <Link to="/admin/home">
              <li className="flex items-center p-2 mt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </li>
            </Link>
            <Link to="/admin/home">
              <li className="flex items-center p-2 mt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Trips</span>
              </li>
            </Link>
            <Link to="/admin/home">
              <li
                onClick={handleLogout}
                className="flex items-center p-2 mt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </li>
            </Link>
          </ul>
        </div>
      </aside>

      {/* <div className="p-4 sm:ml-64"> */}
    </>
  );
};

export default Siderbar;
