import { useContext } from "react"
import { ThemeContext } from "./ThemeSwitcher"

export default function Home() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center
      ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      
      <h1 className="text-2xl font-bold mb-4">
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded-lg font-semibold
          ${theme === "light" 
            ? "bg-gray-900 text-white hover:bg-gray-700" 
            : "bg-white text-black hover:bg-gray-200"}`}>
        Toggle Theme
      </button>

    </div>
  )
}