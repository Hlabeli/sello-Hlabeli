import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
var sizeOf = require("image-size");

const projectsDirectory = path.join(process.cwd(), "projects");
const publicDir = path.join(process.cwd(), "public");
export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}

export function getProjectsData() {
  // Get folder names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  let data = [];
  fileNames.forEach((projectDir) => {
    const projectData = fs.readFileSync(
      `${projectsDirectory}/${projectDir}/details.md`,
      "utf8"
    );

    data.push({
      ...matter(projectData).data,
      id: projectDir,
    });
  });
  return data;
}

export async function getProjectDetails(id) {
  const fullPath = path.join(projectsDirectory, `/${id}/details.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the project detail metadata section
  const matterResult = matter(fileContents);

  const screenshotDimensions = sizeOf(
    `${publicDir}/${matterResult.data.screenshot}`
  );

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
    screenshotHtoWRatio:
      screenshotDimensions.height / screenshotDimensions.width,
  };
}
