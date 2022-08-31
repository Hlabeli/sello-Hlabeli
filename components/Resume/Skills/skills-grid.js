import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import ListOfSkills from "./ListOfSkills";
import SectionTitle from "../Common/section-title";
import Image from "next/image";
const SkillsGrid = ({ title }) => {
  const [selectedCategory, selectCategory] = useState("web");
  const [disclaimerVisibility, setDisclaimerVisibility] = useState(false);
  const [selectedSkill, selectSkill] = useState(null);
  const toggleDisclaimerVisibility = () => {
    setDisclaimerVisibility(!disclaimerVisibility);
  };
  const grid = () => {
    return (
      <div className=" w-full flex flex-wrap">
        {Object.keys(ListOfSkills[selectedCategory].items).map(
          (skillKey, index) => {
            const skill = ListOfSkills[selectedCategory].items[skillKey];
            return (
              <div
                key={index}
                className="my-3 md:my-6 w-1/2 md:w-1/4 lg:w-1/5 flex justify-center items-center"
              >
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={() => selectSkill(skillKey)}
                >
                  <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex justify-center items-center  bg-gray-200 dark:bg-gray-800">
                    <div className="relative w-8 h-8 md:w-12 md:h-12 transition duration-300 ease-in-out transform hover:scale-110">
                      <Image
                        src={skill.icon}
                        alt={`${skill.label} icon`}
                        layout="fill"
                      />
                    </div>
                  </div>

                  <span className="text-base mt-1">{skill.label}</span>
                </button>
              </div>
            );
          }
        )}
      </div>
    );
  };

  const skillInfo = () => {
    const skill = ListOfSkills[selectedCategory].items[selectedSkill];
    return (
      <div className="py-4 px-4 relative">
        <div className="flex items-center">
          <Image
            src={skill.icon}
            alt={`${skill.label} icon`}
            width={50}
            height={50}
          />
          <span className="text-2xl font-bold ml-2">{skill.label}</span>
        </div>
        <div className="ml-2">
          <ul className="mt-1 leading-loose">
            {skill.year && (
              <li className="list-disc list-inside">
                <strong>Years of experience:</strong> ~
                {new Date().getFullYear() - skill.year}
              </li>
            )}
            {skill.mood && (
              <li className="list-disc list-inside">
                <strong>My mood when using it:</strong> {skill.mood}
              </li>
            )}
          </ul>
          <p className="mt-3 leading-relaxed text-justify">{skill.about}</p>
        </div>

        <button
          className="absolute top-4 right-2 h-5 w-5 flex items-center justify-center rounded-full bg-red-400  hover:bg-red-500 "
          onClick={() => selectSkill(null)}
        >
          <span className="sr-only">Close info tab</span>
          <span className="text-white">
            <GrFormClose />
          </span>
        </button>
      </div>
    );
  };
  return (
    <div className="w-full max-w-6xl relative">
      <div className="flex">
        <SectionTitle title={title} />
        <button
          className="ml-1 text-sm bg-gray-300 dark:bg-gray-700 w-4 h-4 flex items-center justify-center rounded-full"
          onClick={toggleDisclaimerVisibility}
        >
          <span className="sr-only">Toggle disclaimer abour skills</span>?
        </button>
      </div>
      {disclaimerVisibility && (
        <p className="text-sm mb-2  flex">
          I only include technologies I am currently comfortable using. There is
          no mention of my proficiency level in each technology as it is very
          relative and often misleading. I include the number years' experience
          for each technology as it is quantitative, but it also does not
          directly reflect my proficiency level.
        </p>
      )}

      <div className="w-full h-16 bg-white dark:bg-blackish text-gray-600 dark:text-gray-300 font-bold border border-gray-200 flex text:sm md:text-md md:font-bold rounded-t-xl ">
        {Object.keys(ListOfSkills).map((category, index) => {
          return (
            <button
              key={category}
              className={`flex items-center w-1/2 justify-center px-4 md:px-4 font-semibold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 ${
                category === selectedCategory
                  ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                  : "w-16 md:w-1/2"
              } ${index === 0 ? "rounded-tl-xl" : "rounded-tr-xl"}`}
              onClick={() => {
                selectCategory(category);
                selectSkill(null);
              }}
            >
              <span className={`hidden md:mr-2 md:block`}>
                {ListOfSkills[category].icon}
              </span>
              <span>{ListOfSkills[category].label}</span>
            </button>
          );
        })}
      </div>
      <div className="bg-white dark:bg-blackish text-gray-900 dark:text-white rounded-b-xl border border-gray-200">
        {!selectedSkill && grid()}
        {selectedSkill && skillInfo()}
      </div>
    </div>
  );
};
export default SkillsGrid;
