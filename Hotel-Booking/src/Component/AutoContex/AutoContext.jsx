import { createContext, useEffect, useState } from "react";

export const AutoContext = createContext();

function AutoProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("user") || "null");
    if (savedData) {
      setUser(savedData);
    }
  }, []);

  const login = (name) => {
    const userData = { name };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <AutoContext.Provider value={{ user, login }}>
      {children}
    </AutoContext.Provider>
  );
}

export default AutoProvider;