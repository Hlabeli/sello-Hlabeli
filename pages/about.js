import Head from "next/head";
import Link from "next/link";
import PageLayout from "../components/Common/page-layout";
import Chat from "../components/About/Trivia/chat";
import Contact from "../components/Contact/contact";
import Timeline from "../components/About/timeline/timeline";
import Heading from "../components/Common/heading";

export async function getStaticProps() {
  const commonData = await import("../data/common/common.json");

  return {
    props: {
      email: commonData.email,
      twitterLink: commonData["twitter-link"],
      linkedInLink: commonData["linked-in-link"],
    },
  };
}

const About = ({ email, twitterLink, linkedInLink }) => {
  return (
    <PageLayout>
      <div>
        <Head>
          <title>CS. Hlabeli | About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose max-w-7xl md:text-lg md:leading-loose">
          <h1 className="text-4xl font-bold mb-10">About me</h1>

          <section className="w-full mt-2">
            <div className="border-2 w-full border-gray-900 dark:border-white  rounded-sm relative p-4">
              <div className="bg-white dark:bg-blackish absolute -top-3 left-5 h-6 flex items-center text-2xl font-bold">
                Title; Mr
              </div>
              <ul className="leading-loose">
                
                <li className="list-inside list-disc">
                  I am a <strong>software developer</strong> with
                  over 2 years of work experience.
                </li>

                <li className="list-inside list-disc">
                  I love <strong>programming</strong>, and I also love learning and discovering <strong>new technologies</strong>.
                </li>   

                <li className="list-inside list-disc">
                  Passionate about solving business problems with the right technological solutions.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-10 md:mb-40">
            <Heading text="Background" subText="Who am I ?" />
            <p className="">
             
             My name is Sello Christian Hlabeli, a citizen of the kingdom of Lesotho. I was born in Qachas'neck 
             district, grew up at Ha-Mamosa Qachas'neck and Qalabane Mafeteng. My Dad and mum were blessed with three siblings;
             two sons and a beautiful daughter. I'm a second born. I did my Preschool at Qachas'neck district and after graduating i went to Mafeteng district where a did my primary school at Mampiletso Primary School then after completing my Standard 7 also known as Grade 7 i went to 
             Tsakholo High School were i did my Junior Certificate (JC)  and Cambridge Overseas School Certificate (COSC) a.k.a Grade 10 and Grade 12 repectively.
             <br />
             I completed High School in 2013. In 2014 enrolled with Limkokwing University where i did an undergraduate programme; BSc in Information Technology which i completed in mid 2018. I then did a one (1) year Higher Certificate in Software Development from JumpCO Software Labs 
             – an accredited software engineering lab by MICT SETA in Johannesburg area, South Africa. 
             <br/>
             From 2018 till now i have been heavily involved in various software projects. On some projects i worked as a project lead whereby i learnt and applied leadership styles so that my team can succeed. 
             With the experience and qualifications i have, i view muself as a Full Stack developer and talented Software Engineer with proven expertise in object-oriented analysis and design, and exceptional record participation in all 
             Software Development Life Cycle (SDLC) from analysis and 
             design to implementation and maintenance. I am enthusiastic about software development/architecture and design patterns. My favorite languages are Java and PHP.
             <br />
             <strong> Speed and accuracy; low latency applications is what satisfies me. </strong>  
                  

            </p>
            <div className="my-20">
              <Timeline />
            </div>
          </section>
         
          <section className="mt-10">
            <Heading text="Interests" />
            <p className="">
            <ul className="leading-loose">
                
                <li className="list-inside list-disc">
                  Software development; both frontend and backend.
                  
                </li>

                <li className="list-inside list-disc">
                  Integrating innovative digital systems into organizational life. 
                 
                </li>   

                <li className="list-inside list-disc">
                  Cybersecurity threats and implications.

                </li>
              </ul>
             
              <br />
              <strong>
                You can read more about my skills, experience and education in{" "}
                <Link href="/resume">
                  <a className="underline">my resume</a>
                </Link>
               
              </strong>
            </p>
          </section>

          <section className="my-10">
            <Heading text="Get in touch" />
            <Contact
              email={email}
              twitter={twitterLink}
              linkedIn={linkedInLink}
            />
          </section>
        </main>
        <Chat />
      </div>
    </PageLayout>
  );
};
export default About;

//
