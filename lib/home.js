import fs from "fs";
import path from "path";

const homeDataDir = path.join(process.cwd(), "data/home");
const homeDataFileName = "home.json";

export async function getHomeData() {
  const fullPath = path.join(aboutDirectory, `/${overviewFileName}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the project detail metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  return {
    contentHtml,
  };
}
