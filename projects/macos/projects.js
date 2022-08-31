import Head from "next/head";
import ProjectGrid from "../components/ProjectsCard/projects-grid";
import { getProjectsData } from "../lib/projects";
import PageLayout from "../components/Common/page-layout";
export async function getStaticProps() {
  const allProjectsData = getProjectsData();

  return {
    props: {
      projects: allProjectsData,
    },
  };
}
const Projects = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>CS. Hlabeli  projects</title>
      </Head>
      <PageLayout>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose  text-lg max-w-7xl">
          <h1 className="text-4xl font-bold mb-2">Recent projects</h1>

          <p className="mb-10">

            A selection of recent projects that I made in a team and independently.
           
          </p>
          <ProjectGrid projects={projects} />
        </main>
      </PageLayout>
    </div>
  );
};

export default Projects;
