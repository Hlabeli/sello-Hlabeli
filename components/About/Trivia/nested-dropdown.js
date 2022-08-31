import { useState, useEffect } from "react";
import { FaCaretRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import ListOfQA from "./list-of-qa";

const NestedDropDown = ({ label, onMessageSelected }) => {
  const [optionsVisibility, setOptionVisibility] = useState(false);
  const [expandedOption, setExpandedOption] = useState(null);

  useEffect(() => {
    if (!optionsVisibility) {
      setExpandedOption(null);
    }
  }, [optionsVisibility]);

  const handleOptionClick = (optionId) => {
    setExpandedOption(optionId === expandedOption ? null : optionId);
  };
  const handleSubOptionClick = (e, question, answer) => {
    e.stopPropagation();
    onMessageSelected(question, answer);
  };

  const renderList = () => {
    return (
      <ul className="absolute top-12 left-0 w-full max-h-48 md:max-h-60 xs:max-h-40 overflow-auto rounded-b-xl border-t border-white py-2 px-1 text-base bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100">
        {ListOfQA.map((option) => {
          return (
            <li
              className="w-full"
              key={option.id}
              onClick={() => {
                handleOptionClick(option.id);
              }}
              role="menuitem"
            >
              <button className="group w-full flex items-center py-2 px-1 hover:bg-gray-300 dark:hover:bg-gray-700">
                <span className="text-sm mr-2 p-1 group-hover:bg-blue-300 dark:group-hover:bg-blue-500 rounded-full">
                  {expandedOption === option.id ? (
                    <FaCaretDown />
                  ) : (
                    <FaCaretRight />
                  )}
                </span>
                <span className="font-semibold">{option.label}</span>
              </button>
              {expandedOption === option.id && (
                <ul className="ml-6 mt-2">
                  {option.subOptions.map((subOption) => {
                    return (
                      <li role="menuitem" key={subOption.id}>
                        <button
                          className="w-full hover:bg-gray-300 dark:hover:bg-gray-700 flex p-1"
                          onClick={(e) =>
                            handleSubOptionClick(
                              e,
                              option.templateQuestion
                                ? `${option.label} ${subOption.question}`
                                : subOption.question,
                              subOption.answer
                            )
                          }
                        >
                          {subOption.question}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div
      className={`w-full  bg-gray-200 dark:bg-gray-800 ${
        !optionsVisibility ? "rounded-b-xl" : ""
      } p-1 relative`}
    >
      <button
        placeholder={label}
        className={`z-10 h-10 w-full bg-transparent px-6 text-sm flex justify-between items-center  ${
          !optionsVisibility ? "rounded-b-xl" : ""
        } hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        onClick={() => {
          setOptionVisibility(!optionsVisibility);
        }}
      >
        <span>Select a question</span>
        <span>
          <FaCaretDown />
        </span>
      </button>

      {optionsVisibility ? renderList() : null}
    </div>
  );
};
export default NestedDropDown;
