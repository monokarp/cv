const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs").promises;

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = process.env.REPO_NAME;
const isProd = process.env.NODE_ENV === "production";

console.log("isGithubActions", isGithubActions);
console.log("repoName", repoName);
console.log("isProd", isProd);

const pageIndexPath = path.resolve("./out/index.html");

async function replaceInStaticPage(v1, v2) {
  console.log("Page path is", pageIndexPath);
  console.log(`Replacing "${v1}" with "${v2}"`);
  const content = await fs.readFile(pageIndexPath, "utf-8");

  console.log(content);

  const modified = content.replace(new RegExp(v1, "g"), v2);

  console.log(modified);

  await fs.writeFile(pageIndexPath, modified, "utf8");
}

async function runBrowserAndSavePDF() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`file:///${pageIndexPath}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    scale: 1.15,
    printBackground: true,
    path: "out/oleg-bondarenko-cv.pdf",
    format: "A2",
  });

  await browser.close();
}

const repoPrefix = isGithubActions && isProd ? repoName : "";
const originalPrefix = isGithubActions ? `/cv/_next/` : "/_next/";
const relativePrefix = isGithubActions ? `./cv/_next/` : "./_next/";

(async () => {
  await replaceInStaticPage(originalPrefix, relativePrefix);

  await runBrowserAndSavePDF();

  await replaceInStaticPage(relativePrefix, originalPrefix);
})();
