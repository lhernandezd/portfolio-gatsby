import { useEffect, useState } from "react"

export default () => {
  const data = localStorage.getItem("theme") || "light"
  const [theme, setTheme] = useState(data)
  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}
