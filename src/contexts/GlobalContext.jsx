import React, { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../services/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 👈 Agregado

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{ users, searchTerm, setSearchTerm }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
