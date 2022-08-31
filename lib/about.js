import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const aboutDirectory = path.join(process.cwd(), "about");
const overviewFileName = "overview.md";

export async function getOverview() {
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
