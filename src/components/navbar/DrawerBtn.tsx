import { Menu } from "lucide-react";

const DrawerBtn = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  return (
    <button
      onClick={toggleDrawer}
      className="sm:inline-flex md:hidden lg:hidden xl:hidden 2xl:hidden"
    >
      <Menu />
    </button>
  );
};

export default DrawerBtn;
