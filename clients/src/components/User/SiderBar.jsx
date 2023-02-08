import React from "react";

const SiderBar = () => {
  return (
    <div class="max-w-2xl  md:mx-44 ">
      <aside class="md:w-64">
        <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 border ">
          <ul class="space-y-2">
            <li>
              <a
                href="/"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-700">
                <span class="ml-3">Ride Now</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                class="flex items-center p-2 text-base font-normal  text-gray-900 rounded-lg hover:bg-gray-700">
                <span class="flex-1 ml-3 whitespace-nowrap">My trips</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-700">
                <span class="flex-1 ml-3 whitespace-nowrap">Wallet</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="flex items-center p-2 text-base font-normal rounded-lg  bg-gray-700 text-white">
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Profile Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-700">
                <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SiderBar;
