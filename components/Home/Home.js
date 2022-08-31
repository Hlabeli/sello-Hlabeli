import NavCards from "./nav-cards";
import ThemeSwitcher from "../Navbar/theme-switcher";
const Home = ({ heading, subHeading, image, noCorners }) => {
  return (
    <div className="w-full  text-gray-900 dark:text-white">
      <header className="w-full h-48 md:h-60 lg:h-80 bg-gray-200 dark:bg-black flex flex-col justify-end items-center md:items-start  px-3 py-4 md:px-6 md:py-8 relative">
        <div className="absolute top-2 right-3 md:right-6">
          <ThemeSwitcher />
        </div>
        {image}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold align-text-bottom">
          {heading}
        </h1>
      </header>

      <main className="w-full  md:max-w-xl xl:max-w-2xl flex flex-col justify-center space-y-5 md:space-y-10 px-3 py-4 md:px-6 md:py-8">
        <p
          className={`w-full relative md:text-lg lg:text-xl lg:leading-loose break-words text-justify ${
            !noCorners ? "p-5" : ""
          }`}
        >
          {!noCorners && (
            <span className="absolute text-6xl  top-0 left-0">&#8988;</span>
          )}
          {subHeading}
          {!noCorners && (
            <span className="absolute text-6xl bottom-0 right-0">&#8991;</span>
          )}
        </p>
        <NavCards />
      </main>
    </div>
  );
};
export default Home;
