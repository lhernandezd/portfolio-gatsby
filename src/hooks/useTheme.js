import { useState } from "react"

export default () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    if (theme !== "dark") {
      document.documentElement.style.backgroundColor = "#000"
      setTheme("dark")
    } else {
      document.documentElement.style.backgroundColor = "#fff"
      setTheme("light")
    }
  }

  return {
    theme,
    toggleTheme,
  }
}
