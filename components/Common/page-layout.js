import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-blackish text-gray-900 dark:text-white">
      <main className="mt-16 md:mt-20 w-full ">{children}</main>
      <footer className="w-full mt-auto px-2 md:px-10 lg:px-24 xl:px-44">
        <Footer />
      </footer>
      <Navbar />
    </div>
  );
};
export default PageLayout;
