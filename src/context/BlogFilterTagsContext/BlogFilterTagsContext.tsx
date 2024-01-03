"use client"

import React, { createContext, useState, ReactNode } from "react";

interface ActiveItemContextProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const BlogFilterTagsContext = createContext<ActiveItemContextProps | undefined>(
  undefined
);


type ContextProviderProps = {
    children: ReactNode;
  };

 const BlogFilterTagsProvider: React.FC<ContextProviderProps> = ({children}) => {
  const [activeItem, setActiveItem] = useState("All");
  

  return (
    <BlogFilterTagsContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </BlogFilterTagsContext.Provider>
  );
};

export { BlogFilterTagsContext, BlogFilterTagsProvider };

