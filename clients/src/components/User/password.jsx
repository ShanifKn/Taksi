import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/AxiosInstance";
import { setLogin } from "../../Store/Slice/Login";

const Password = () => {
  const location = useLocation();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [toast, setToast] = useState({ message: "" });

  useEffect(() => {
    setEmail(location.state.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePassword = async (event) => {
    event.preventDefault();
    try {
      console.log(password);

      const response = await axiosInstance.post(`/auth/password`, {
        password,
        email,
      });
      const isLoggedIn = await response.data;
      if (isLoggedIn) {
        dispatch(
          setLogin({
            user: "user",
            name: isLoggedIn.name,
            token: isLoggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      setToast({ message: "Incorrect Password" });
    }
  };
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-row w-full md:mt-32">
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col pt-48 space-y-5 max-w-md">
            <div
              className={`alert alert-error shadow-lg ${
                !toast.message ? "hidden " : "shown"
              }`}>
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
                <span>{toast.message}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Sign in with Password
              </h2>
              <p className="text-md md:text-xl text-black">
                Enter your password
              </p>
            </div>
            <form onSubmit={handlePassword}>
              <div class="flex flex-col max-w-md space-y-5 bg-white">
                <input
                  placeholder="Password"
                  autoComplete="new-password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black bg-white rounded-lg text-black font-medium placeholder:font-normal"
                />
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

export default Password;
