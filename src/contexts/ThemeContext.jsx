import { useState, createContext } from "react";

// two ways to handle contex; create the context and use the context
//creating the themeContext = createContext
const PageTheme = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// provider function
const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <PageTheme.Provider value={{theme, toggleTheme}}>
            {children}
        </PageTheme.Provider>
    )
}

export {PageTheme, ThemeContext}