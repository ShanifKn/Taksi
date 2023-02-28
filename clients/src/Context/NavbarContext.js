import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleNav = () => {
    setIsMobile(!isMobile);
  };

  return <NavbarContext.Provider value={{ isMobile, handleNav }}>{children}</NavbarContext.Provider>;
};
