import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [stateTheme, setStateTheme] = useState(null);
  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);
  if (stateTheme) {
    return (
      <button
        // title={`switch to ${theme === "light" ? "dark" : "light"} theme`}
        className={`w-14 h-7 rounded-full bg-white dark:bg-gray-800 relative  flex items-center font-bold`}
        onClick={toggleTheme}
      >
        <span className="sr-only">{`switch to ${
          theme === "light" ? "dark" : "light"
        } theme`}</span>
        <div
          className={`transition duration-500 ease-in-out w-6 h-6 rounded-full bg-opacity-50 border-2 ${
            stateTheme === "light"
              ? "bg-yellow-500 border-yellow-500"
              : "bg-gray-700 border-white"
          } transform ${
            stateTheme === "light" ? "translate-x-0.5" : "translate-x-7"
          }`}
        ></div>

        <div
          className={`transition duration-500 ease-in-out transform absolute right-1 ${
            stateTheme === "light"
              ? "-translate-x-0.5 text-yellow-500"
              : "-translate-x-8 text-white"
          }`}
        >
          {stateTheme === "light" ? <FiSun /> : <FiMoon />}
        </div>
      </button>
    );
  } else {
    return null;
  }
};
export default ThemeSwitcher;
