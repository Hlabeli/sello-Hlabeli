import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/footer";
import Home from "../components/Home/Home";
export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-blackish 2xl:px-60">
      <Head>
        <title>CS. Hlabeli Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        noCorners
        heading="Hello, I'm Sello Hlabeli"
        subHeading={
          <p>
            I am a <strong>software developer</strong>, <strong>entrepreneur </strong>
            and <strong>researcher</strong> based in Lesotho. That’s my photo
            on the <span className="md:hidden">top</span>{" "}
            <span className="test hidden md:inline">right</span>. The two little
            icons in the bottom <span className="hidden md:inline">right</span>{" "}
            of the screen are links to my social media accounts if you want to
            contact me. The rest of the website can be accessed via these three
            large buttons.
          </p>
        }
        image={
          <div className=" mb-4 md:mb-0 md:absolute md:right-6 md:-bottom-20 lg:-bottom-24 xl:-bottom-32">
            <div className="relative w-16 h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full md:rounded-none border-2  border-white">
              <Image
                src="/profile.jpeg"
                alt="A portrait of Hlabeli"
                layout="fill"
                objectFit="cover"
                className="rounded-full md:rounded-none"
              />
            </div>
          </div>
        }
      />

      <footer className="w-full mt-auto px-4 xl:px-0">
        <Footer />
      </footer>
    </div>
  );
}
