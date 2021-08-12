import React, { useState } from "react";
import { createContext } from "react";

export const loginContext = createContext(null);

const Contextprovider = ({ children }) => {
  const [acount, setAcount] = useState("");
  return (
  <loginContext.Provider
  value={{acount,setAcount}}
  >
      {children}
      
  </loginContext.Provider>
  );
};

export default Contextprovider;
