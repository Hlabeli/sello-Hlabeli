import { useState } from "react";
import Expander from "./expander";
import Logo from "./logo";
import Navigation from "./navigation";
import ThemeSwitcher from "./theme-switcher";
import Drawer from "./drawer";
const Navbar = () => {
  const [expanded, expand] = useState(false);
  const toggleDrawer = () => {
    expand(!expanded);
  };
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-16 md:h-20 flex items-center justify-between bg-gray-200 dark:bg-black text-gray-900 dark:text-white shadow-sm px-2 md:px-10 lg:px-24 xl:px-44">
      <Logo />
      <div className="flex space-x-4 items-end md:items-center">
        <div className="hidden md:block">
          <Navigation />
        </div>
        <ThemeSwitcher />

        <Expander toggleDrawer={toggleDrawer} expanded={expanded} />
      </div>
      <Drawer expanded={expanded} toggleDrawer={toggleDrawer} />
    </header>
  );
};
export default Navbar;
