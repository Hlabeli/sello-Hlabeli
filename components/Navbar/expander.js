import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
const Expander = ({ toggleDrawer, expanded }) => {
  return (
    <button className="text-3xl font-bold md:hidden" onClick={toggleDrawer}>
      {expanded ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
      <span className="sr-only">
        {`${expanded ? "Close" : "Open"} the sidebar`}
      </span>
    </button>
  );
};
export default Expander;
