import { useState } from "react";
import { SunMoon, Sun } from "lucide-react";

function DarkModeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDarkMode} className="active:animate-ping">
      {darkMode ? <Sun /> : <SunMoon />}
    </button>
  );
}

export default DarkModeToggler;
