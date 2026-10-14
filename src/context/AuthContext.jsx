import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const[workAs, setWorkAs] = useState("employee")

  const auth = { user, setUser, workAs, setWorkAs };

  return (
    <AuthContext.Provider value={{auth}}>
      {children}
    </AuthContext.Provider>
  );
};
