import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLogin } from "../../api/services/AdminRequest";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.email === "" || user.password === "") {
      setError("All fields are required.");
      return;
    }

    if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      setError("Invalid email address.");
      return;
    }
    const data = new FormData();
    data.append("email", user.email);
    data.append("password", user.password);

    try {
      const response = await AdminLogin(data);
      if (response.status === 201) {
        setError("Invalid Email");
      } else if (response.status === 202) {
        setError("Incorrect Password");
      } else {
        console.log(response.data.token);
        navigate("/admin/home");
      }
    } catch (error) {
      console.log(error.message);
      navigate("/driver/error");
    }
  };

  return (
    <div className="flex  flex-col  max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 ">
      <div className="mb-8 text-center">
        {error ? (
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
        ) : (
          ""
        )}
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">Email address</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Driver@Driver.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm">Password</label>
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs hover:underline dark:text-gray-400">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
              Sign in
            </button>
          </div>
        </div>
      </form>
      <p className="px-6 text-sm text-center dark:text-gray-400 mt-10">
        Don't have an account yet?
        <button
          className="hover:underline dark:text-violet-400 "
          onClick={() => navigate("/driver/signup")}>
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
