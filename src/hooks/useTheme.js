import { useEffect, useState } from "react"

export default () => {
  const data = localStorage.getItem("theme") || "light"
  const [theme, setTheme] = useState(data)
  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark")
      document.documentElement.style.backgroundColor = "#000"
      setTheme("dark")
    } else {
      localStorage.setItem("theme", "light")
      document.documentElement.style.backgroundColor = "#fff"
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      localTheme === "light"
        ? (document.documentElement.style.backgroundColor = "#fff")
        : (document.documentElement.style.backgroundColor = "#000")
      setTheme(localTheme)
    }
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}
