import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [userNav, setUserNav] = useState(false);

  const handleNav = () => {
    setIsMobile(!isMobile);
  };

  const handleUserNav = () => {
    setUserNav(!userNav);
  };

  return <NavbarContext.Provider value={{ isMobile, handleNav, userNav, handleUserNav }}>{children}</NavbarContext.Provider>;
};
