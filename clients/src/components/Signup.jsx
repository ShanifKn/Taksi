import React from "react";
import { useLocation } from "react-router-dom";

const Signup = ({ email }) => {
  // const data = email.state ? email.state.data : null;
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-row w-full">
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col pt-48 space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Create a account
              </h2>
            </div>
            <form>
              <div className="flex flex-col max-w-md space-y-5 bg-white">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">
                      What is your name?
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">
                      What is your phone number?
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs  bg-white text-black"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">
                      What is your password?
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
                  />
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
