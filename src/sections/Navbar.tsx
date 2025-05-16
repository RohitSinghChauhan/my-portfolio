import { useEffect, useState } from "react";
import DarkModeToggler from "../components/DarkModeToggler";
import Drawer from "../components/navbar/Drawer";
import DrawerBtn from "../components/navbar/DrawerBtn";
import { nav_links } from "../data";
import { Maximize, Minimize } from "lucide-react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // State for fullscreen mode
  const [hovered, setHovered] = useState(false); // Track hover state for animation

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.body.requestFullscreen) {
        // Some browsers may still use body
        document.body.requestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div
        className={`themer fixed w-screen h-[8vh] dark:border-gray-400 dark:border-b
    flex justify-between items-center z-50
  ${scrolled ? "bg-secondary" : "bg-transparent"}`}
      >
        <p className="font-bold">ROHIT SINGH</p>

        <div
          className="flex items-center
      sm:gap-4 md: lg:gap-16 xl:gap-16 2xl:gap-16
      sm:flex-row-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
        >
          {/*FOR BIGGER SCREENS*/}
          <div
            className="flex gap-9 items-center tracking-wide
        sm:hidden md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex"
          >
            {nav_links.map((e) => (
              <a key={e.id} href={e.s_id}>
                <p
                  className="p-1 hover:border-gray-700
              hover:dark:border-white 
              relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {e.title}
                </p>
              </a>
            ))}
          </div>

          {/*FOR SMALLER SCREENS*/}
          <DrawerBtn toggleDrawer={toggleDrawer} />

          {/* Maximize Icon with hover animation and fullscreen toggle */}
          <div className="flex gap-6 items-center">
            <div
              className="relative hidden md:inline-block"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={toggleFullscreen}
            >
              <div
                className={`transition-all duration-300 cursor-pointer ${hovered ? "scale-110" : "scale-100 rotate-0"
                  }`}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Maximize className="w-5 h-5" />
                )}
              </div>
            </div>

            <DarkModeToggler />
          </div>
        </div>

        {isDrawerOpen ? (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={toggleDrawer}
            links={nav_links}
          />
        ) : null}
      </div>

      <div className="h-[8vh] overflow-hidden"></div>
    </>
  );
};

export default Navbar;
