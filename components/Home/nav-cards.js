import Link from "next/link";
import { TiUser } from "react-icons/ti";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const cards = [
  { label: "About", icon: <TiUser />, href: "/about" },
  {
    label: "Work",
    icon: <AiOutlineFundProjectionScreen />,
    href: "/projects",
  },
  { label: "CV/Resume", icon: <RiPagesLine />, href: "/resume" },
];

const NavCards = () => {
  return (
    <div className="w-full flex flex-col md:flex-row space-x-0 space-y-2 md:space-x-2 md:space-y-0">
      {cards.map((card) => {
        return (
          <Link key={card.label} href={card.href}>
            <button className="transition duration-300 ease-in-out group w-full md:w-1/3 h-16 md:h-32 bg-gray-200 dark:bg-black rounded-md flex md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-2 justify-center items-center cursor-pointer transform dark:hover:bg-eerie hover:bg-gray-300">
              <div className="hidden md:flex transition duration-300 ease-in-out w-14 h-14 rounded-full bg-gray-300 dark:bg-blackish justify-center items-center text-2xl transform group-hover:bg-white dark:group-hover:bg-black">
                {card.icon}
                <span className="sr-only">{`icon for ${card.label}`}</span>
              </div>
              <span className="text-lg font-bold">{card.label}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};
export default NavCards;
