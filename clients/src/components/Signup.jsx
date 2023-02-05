import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      email: location.state.email,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post(`/auth/usignup`, formData);
      const status = response.status;
      if (status === 200) {
        navigate("/login");
      } else console.log(status);
    } catch (error) {
      setToast({ message: "Phone Number is already exist" });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div
        className={`toast top-0 md:mt-20 mt-20  ${
          !toast.message ? "hidden" : "shown"
        }`}>
        <div className="alert alert-error">
          <div>
            <span>{toast.message}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col pt-48 space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Create a account
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input input-bordered input-primary w-full max-w-xs  bg-white text-black"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    autoComplete="off"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input input-bordered input-primary w-full max-w-xs bg-white text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
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
