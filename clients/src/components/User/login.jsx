import React, { useState } from "react";
import axiosInstance from "../../api/AxiosInstance";
import { useNavigate } from "react-router-dom";
import GoogleButton from "./GoogleButton";

// * Email Validation *//
const validateEmail = (email) => {
  if (!email) return null;
  const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return pattern.test(email);
};
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(email) === null) {
      setError("Enter  your email address");
    } else if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError(null);
      // * Login function *\\
      await axiosInstance
        .post("/auth/", { email: email })
        .then((res) => {
          const email = res.data.email;
          const Phone = res.data.phone;
          const id = res.data._id;
          !id
            ? navigate("/signup", { state: { email: email } })
            : navigate("/otp", { state: { Phone: Phone, email: email } });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-row w-full">
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col pt-48 space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Sign in to account
              </h2>
              <p className="text-md md:text-xl text-black">
                What's your phone number or email?
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="flex flex-col max-w-md space-y-5 bg-white">
                {error && (
                  <div className="alert alert-error shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                <input
                  placeholder="Email"
                  onChange={handleChange}
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black bg-white rounded-lg text-black font-medium placeholder:font-normal"
                />
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  continue
                </button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4 text-black">Or</span>
                  <span className="w-full border border-black"></span>
                </div>
              </div>
            </form>
            <GoogleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
