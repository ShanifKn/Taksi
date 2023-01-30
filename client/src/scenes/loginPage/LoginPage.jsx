import React from "react";
import "../../styles/login.scss";

const LoginPage = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="box">
          <div className="box_content">
            <div className="box_contentitems">
              <h2>Sign in to account</h2>
              <p>Sign up or log in to place the order,no password require!</p>
            </div>
            <div className="box_input">
              <input
                type="text"
                placeholder="Username"
              />
              <button>
                Confirm with email
              </button>
              <div className="Box2">
                <span className="Box2_Signin"></span>
                <span className="px-4">Or</span>
                <span className="Box2"></span>
              </div>
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                <span className="absolute left-4"></span>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
