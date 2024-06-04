import { useEffect, useState } from "react";
import DarkModeToggler from "../components/DarkModeToggler";
import Drawer from "../components/navbar/Drawer";
import DrawerBtn from "../components/navbar/DrawerBtn";
import { nav_links } from "../data";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                  className="p-3 border-b border-transparent hover:border-gray-700
              hover:dark:border-white duration-150"
                >
                  {e.title}
                </p>
              </a>
            ))}
          </div>

          {/*FOR SMALLER SCREENS*/}
          <DrawerBtn toggleDrawer={toggleDrawer} />
          <DarkModeToggler />
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
