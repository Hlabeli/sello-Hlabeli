import React from "react";
import Head from "next/head";
import { FaFileDownload } from "react-icons/fa";
import Awards from "../components/Resume/Awards/Awards";
import Education from "../components/Resume/Education/Education";
import Certifications from "../components/Resume/Certifications/Certifications";

import Experiences from "../components/Resume/Experiences/Experiences";
import Profile from "../components/Resume/Profile/Profile";
import PageLayout from "../components/Common/page-layout";
import SkillsGrid from "../components/Resume/Skills/skills-grid";
const sections = [
  {
    id: "resume-skills",
    title: "Technical Skills",
    dataKey: "skills",
    content: <SkillsGrid />,
  },
  {
    id: "resume-experiences",
    title: "Experience",
    dataKey: "experience",
    content: <Experiences />,
  },
  {
    id: "resume-education",
    title: "Education",
    dataKey: "education",
    content: <Education />,
  },
  {
    id: "resume-certifications",
    title: "Certifications",
    dataKey: "certifications",
    content: <Certifications />,
  },
  {
    id: "resume-awards",
    title: "Awards",
    dataKey: "awards",
    content: <Awards />,
  },
];

export async function getStaticProps() {
  const resumeData = await import("../data/resume/resume.json");
  const commonData = await import("../data/common/common.json");

  return {
    props: {
      data: resumeData.default,
      email: commonData.email,
      githubLink: commonData["github-link"],
      twitterLink: commonData["twitter-link"],
      linkedInLink: commonData["linked-in-link"],
    },
  };
}

const Resume = ({ data, email, githubLink, twitterLink, linkedInLink }) => {
  return (
    <div>
      <Head>
        <title>CS. Hlabeli | Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <main className="flex justify-center py-10">
          <div
            id="resume"
            className="w-full max-w-5xl  text-black dark:text-white relative shadow-lg dark:shadow-md"
          >
            <a
              href="https://docs.google.com/uc?export=download&id=1SkoMhMi-8rIG5c7b7CJMr3Abfpkdh95e" 
              download
              className="absolute top-2 right-2 text-2xl w-12 h-12 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center"
              title="download as pdf"
            >
              <span className="sr-only">Download as PDF</span>

              <span>
                <FaFileDownload />
              </span>
            </a>
            <div id="resume-sections" className="py-10 px-3 md:px-6 lg:px-12 ">
              <Profile
                email={email}
                githubLink={githubLink}
                twitterLink={twitterLink}
                linkedInLink={linkedInLink}
              />
              {sections.map((section) => {
                return (
                  <section
                    id={section.id}
                    key={section.id}
                    className="w-full pt-16"
                  >
                    {React.cloneElement(section.content, {
                      title: section.title,
                      data: data[section.dataKey],
                      email,
                    })}
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      </PageLayout>
    </div>
  );
};

export default Resume;
