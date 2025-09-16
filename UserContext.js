import React, { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (name, role) => {
    setUser({ name, role });
    console.log("Logged in user:", { name, role });
  };
  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
