import React from "react";
import "../../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header_content">
        <div>
          <span className="logo">Taksi</span>
        </div>
        <div>
          <nav className="nav">
            <a className="nav_item" href="/">
              Ride
            </a>
            <a className="nav_item" href="/">
              Share
            </a>
            <a className="nav_item" href="/">
              My trip
            </a>
          </nav>
          <nav className="nav">
            <h1 className="nav_user_mob">Hey User....</h1>

            <a className="nav_item_mob" href="/">
              Ride
            </a>
            <a className="nav_item_mob" href="/">
              Share
            </a>
            <a className="nav_item_mob" href="/">
              My trip
            </a>
          </nav>
        </div>
        <div className="">
          <div className="header_button_container">
            <button className="header_toggler">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
