import TimelinePiece from "./timeline-piece";
import { FaBaby, FaCode, FaGlobe } from "react-icons/fa";
import { GiBrightExplosion, GiArchiveResearch } from "react-icons/gi";
const items = [
  {
    colors: { light: "gray-700", dark: "red-500" },
    year: "1983",
    text: "Is considered the birthday of the internet",
    icon: <GiBrightExplosion />,
  },
  {
    colors: { light: "red-500", dark: "yellow-400" },
    year: "1989",
    text: "The web was invented by Tim Berners-Lee at CERN",
    icon: <FaGlobe />,
  },
  {
    colors: { light: "green-600", dark: "green-600" },
    year: "17th July",
    text: "I was born",
    icon: <FaBaby />,
  },
  {
    colors: { light: "blue-500", dark: "blue-400" },
    year: "2014 - 2018",
    text: "I studied Information Technology",
    icon: <GiArchiveResearch />,
  },
  {
    colors: { light: "indigo-600", dark: "indigo-500" },
    year: <span>2018 &#8594;</span>,
    text: "I started software development career",
    icon: <FaCode />,
  },
];
const Timeline = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:mt-48">
      {items.map((item, index) => {
        return (
          <TimelinePiece
            key={index}
            roundedLeft={index === 0}
            roundedRight={index === items.length - 1}
            reversed={index % 2 !== 0}
            colors={item.colors}
            icon={item.icon}
            year={item.year}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
export default Timeline;
