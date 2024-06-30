import React, { useState } from "react";
import UserContext from "./UserContext";

// Part 2: Now we will make a context provider for our UserContext
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
