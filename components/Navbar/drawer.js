import Navigation from "./navigation";

const Drawer = ({ expanded, toggleDrawer }) => {
  return (
    <aside
      className={`transform h-screen z-20 fixed left-0 top-16 w-full flex md:hidden border-t border-gray-900 dark:border-white ease-in-out transition-all duration-300 ${
        expanded ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-2/3 bg-gray-200 dark:bg-black h-full">
        {expanded && <Navigation toggleDrawer={toggleDrawer} />}
      </div>
      <div className="w-1/3  bg-black bg-opacity-30 h-full"></div>
    </aside>
  );
};
export default Drawer;
