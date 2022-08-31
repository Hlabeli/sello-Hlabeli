import { getAllProjectIds, getProjectDetails } from "../../lib/projects";
import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import PageLayout from "../../components/Common/page-layout";

export async function getStaticProps({ params }) {
  const projectDetails = await getProjectDetails(params.id);
  return {
    props: {
      projectDetails,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectDetails }) {
  return (
    <div>
      <Head>
        <title>{`CS. Hlabeli  | ${projectDetails.title}`}</title>
      </Head>
      <PageLayout>
        <main className="w-full py-10 px-3 md:px-10 lg:px-24 xl:px-44 leading-loose text-base">
          <div className="flex flex-col lg:flex-row items-end justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                {projectDetails.title}
              </h1>
              <p className="mb-4 text-xl">{projectDetails.description}</p>
              <div className="flex space-x-2">
                {projectDetails.github && (
                  <a
                    rel="noopener"
                    href={projectDetails.github}
                    className="rounded-full w-12 h-12 text-xl bg-gray-200 dark:bg-gray-500  flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-gray-300 dark:hover:bg-gray-700"
                  >
                    <FaGithub />
                    <span className="sr-only">Link to github repository</span>
                  </a>
                )}
                {projectDetails.website && (
                  <a
                    rel="noopener"
                    href={projectDetails.website}
                    className="rounded-full w-12 h-12 text-xl bg-gray-200 dark:bg-gray-500  flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-gray-300 dark:hover:bg-gray-700"
                  >
                    <FaLink />
                    <span className="sr-only">Visit website</span>
                  </a>
                )}
              </div>
            </div>
            <div className="mt-6 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
              <a href={projectDetails.website} rel="noopener">
                <div className="border-2 border-gray-300 dark:border-white rounded-sm flex justify-center">
                  <Image
                    alt="Website screenshot"
                    src={projectDetails.screenshot}
                    width={500}
                    height={Math.floor(
                      500 * projectDetails.screenshotHtoWRatio
                    )}
                    quality={100}
                    // className="rounded-sm"
                  />
                </div>
              </a>
            </div>
          </div>

          <hr className="my-6" />
          <div
            className="max-w-6xl prose dark:prose-dark"
            dangerouslySetInnerHTML={{ __html: projectDetails.contentHtml }}
          />
        </main>
      </PageLayout>
    </div>
  );
}
