import React, { createContext, useState } from "react";
//import { UserProvider } from "./components/context/UserContext";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Yasir", role: "admin" });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
