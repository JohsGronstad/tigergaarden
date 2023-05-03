import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useDarkModeClass from "./useDarkModeClass";

const useTheme = () => {
  const currTheme = useDarkModeClass();
  const [theme, setTheme] = useLocalStorage("theme", currTheme ? "dark":"light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    theme === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;