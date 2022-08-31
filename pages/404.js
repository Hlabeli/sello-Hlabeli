import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer/footer";
import Home from "../components/Home/Home";

export default function Custom404({ heading, subHeading }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-blackish 2xl:px-60">
      <Head>
        <title>404 PAGE NOT FOUND</title>
        <link rel="icon" href="/favicon-404.ico" />
      </Head>
      <Home
        heading="Page not found!"
        subHeading={
          <span>
            Sorry, the page your requesting does not exist! you visit{" "}
            <Link href="/">
              <a className="underline">my home page</a>
            </Link>{" "}
            or go directly to one of the follwing:
          </span>
        }
        image={
          <div className="w-16 h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full md:rounded-none border-2 border-gray-900 dark:border-white  mb-4 md:mb-0 md:absolute md:right-6 md:-bottom-20 lg:-bottom-24 xl:-bottom-32 flex justify-center items-center bg-white dark:bg-blackish text-2xl md:text-5xl xl:text-7xl font-bold">
            404
          </div>
        }
        noCorners
      />

      <div className="w-full mt-auto px-4 xl:px-0">
        <Footer />
      </div>
    </div>
  );
}
