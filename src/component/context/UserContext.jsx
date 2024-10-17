import React, { createContext, useState, useEffect } from "react";
import { apiFetch } from "../../api/api";
import jwtDecode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const nasabahId = decodedToken.nasabahId;

        const result = await apiFetch(`/nasabah/${nasabahId}`, "GET");
        const data = result.data;
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
