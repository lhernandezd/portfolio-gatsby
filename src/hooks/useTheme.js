/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react"

export default () => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem("theme") || "light"
    const [theme, setTheme] = useState(data)
    const toggleTheme = () => {
      if (theme !== "dark") {
        window.localStorage.setItem("theme", "dark")
        document.documentElement.style.backgroundColor = "#000"
        setTheme("dark")
      } else {
        window.localStorage.setItem("theme", "light")
        document.documentElement.style.backgroundColor = "#fff"
        setTheme("light")
      }
    }

    useEffect(() => {
      const localTheme = window.localStorage.getItem("theme")
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
  } else {
    return {
      theme: "light",
      toggleTheme: () => {},
    }
  }
}
