import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div class="flex min-h-screen">
      <div class="flex flex-row w-full">
        <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div class="flex flex-1 flex-col pt-48 space-y-5 max-w-md">
            <div class="flex flex-col space-y-2 text-center">
              <h2 class="text-3xl md:text-4xl font-bold">Sign in to account</h2>
              <p class="text-md md:text-xl">
                What's your phone number or email?
              </p>
            </div>
            <div class="flex flex-col max-w-md space-y-5">
              <input
                type="email"
                placeholder="Email"
                class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              />
              <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                continue
              </button>
              <div class="flex justify-center items-center">
                <span class="w-full border border-black"></span>
                <span class="px-4">Or</span>
                <span class="w-full border border-black"></span>
              </div>
              <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                <span class="absolute left-4"></span>
                <span className="flex items-center">
                  <FcGoogle className="pr-2 w-10" />
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
