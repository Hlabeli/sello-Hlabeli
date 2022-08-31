import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLink, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  tags,
  thumbnail,
  thumbnailAlt,
  id,
  github,
  website,
}) => {
  return (
    <div className="group w-full md:flex border-2 rounded-xl border-gray-600 dark:border-white bg-white dark:bg-black">
      <div className="w-full md:w-1/3 p-10 bg-gray-100 dark:bg-gray-800 flex justify-center items-center border-b-2 md:border-b-0 md:border-r-2 rounded-t-xl md:rounded-t-none md:rounded-l-xl border-gray-600 dark:border-white">
        <div className="h-32 w-32 md:h-36 md:w-36 relative p-2">
          <Image
            src={thumbnail}
            alt={thumbnailAlt}
            layout="fill"
            objectFit="fill"
          />
        </div>
      </div>

      <div className="text-center md:text-left md:w-2/3 mt-2 flex flex-col space-y-3 md:space-y-4 justify-between md:items-start">
        {/* title */}
        <h2 className="px-2 md:pl-4 text-2xl font-semibold">{title}</h2>
        {/* description */}
        <p className="px-2 md:pl-4 text-base">{description}</p>
        {/* tags */}
        <div className="w-full flex justify-center md:mb-8 md:justify-start px-2 md:pl-4">
          <div className="flex flex-wrap justify-center md:justify-start">
            {tags.map((tag, index) => {
              return (
                <div
                  className="rounded-sm px-3 py-0.5 mb-1 mr-2 border border-yellow-400 bg-yellow-200 text-sm text-gray-900 dark:border-blue-300 dark:bg-gray-700 dark:text-blue-300"
                  key={index}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        {/* read more on small screen */}
        <div className="md:hidden flex justify-center py-4">
          <Link href={`/projects/${id}`}>
            <button className="bg-gray-300 dark:bg-gray-700 px-8 py-1 rounded-md">
              Read more
            </button>
          </Link>
        </div>

        {/* links */}
        <div className="w-full flex justify-end  border-gray-600 dark:border-white">
          <Link href={`/projects/${id}`}>
            <button
              className={`hidden md:flex h-12 text-xl border-t-2  border-gray-600 dark:border-white items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 ${
                github && website
                  ? "w-1/3 border-r-2"
                  : github || website
                  ? "w-1/2 border-r-2"
                  : "w-full rounded-br-xl"
              }`}
            >
              <span>
                <FaArrowRight />
                <span className="sr-only">Right arrow icon</span>
              </span>
              <span className="text-sm font-semibold ml-2">Read more</span>
            </button>
          </Link>

          {github && (
            <a
              href={github}
              rel="noopener"
              className="w-1/2 md:w-1/3 h-12 text-xl border-t-2 bg-gray-100 dark:bg-gray-700 md:bg-transparent md:dark:bg-transparent border-r-2 rounded-bl-xl md:rounded-none border-gray-600 dark:border-white flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span>
                <FaGithub />
                <span className="sr-only">github icon</span>
              </span>
              <span className="text-sm font-semibold ml-2">View on GitHub</span>
            </a>
          )}
          {website && (
            <a
              className="w-1/2 md:w-1/3 h-12 text-xl border-t-2 border-gray-600 dark:border-white bg-gray-100 dark:bg-gray-700 md:bg-transparent md:dark:bg-transparent flex items-center justify-center rounded-br-xl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700"
              href={website}
              rel="noopener"
            >
              <span>
                <FaLink />
                <span className="sr-only">Link icon</span>
              </span>
              <span className="text-sm font-semibold ml-2">Live view</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
