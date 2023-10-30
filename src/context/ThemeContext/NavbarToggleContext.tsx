"use client"

import React, { createContext, useState, ReactNode } from 'react';

type NavbarToggleContextType = {
  isOpen:boolean
  setIsOpen:any
};

const NavbarToggleContext = createContext<NavbarToggleContextType | undefined>(undefined);

type NavbarToggleContextProviderProps = {
  children: ReactNode;
};

const NavbarToggleContextProvider: React.FC<NavbarToggleContextProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);



  return (
    <NavbarToggleContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarToggleContext.Provider>
  );
};

export { NavbarToggleContext, NavbarToggleContextProvider };
