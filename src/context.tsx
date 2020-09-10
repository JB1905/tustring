import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>([undefined, () => null])

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : undefined
  )

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    window.localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
