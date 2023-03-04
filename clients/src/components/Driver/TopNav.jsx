import React, { useContext, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { NavbarContext } from "../../Context/NavbarContext";

const TopNav = () => {
  const { handleNav } = useContext(NavbarContext);
  const [online, setOnline] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              onClick={() => handleNav()}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <DehazeIcon fontSize="large" />
            </button>
            <a href="/driver/" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Tak-Si</span>
            </a>
          </div>

          <div className="flex items-center">
            <h1 className="text-red-500 mr-4">Active</h1>
            <div className="flex items-center md:mr-16">
              <div>
                <input type="checkbox" className="toggle toggle-lg bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
