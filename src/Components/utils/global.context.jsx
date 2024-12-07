import { createContext, useState, useEffect } from "react";

export const initialState = { theme: "light", data: [] };
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    setState((prev) => ({
      ...prev,
      theme: newTheme,
    }));
  };

  useEffect(() => {
    // Fetch data and update state.data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setState((prev) => ({ ...prev, data })));
  }, []);

  useEffect(() => {
    document.body.className = state.theme; // Aplica el tema al body
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
