const puppeteer = require("puppeteer");

const scrapTitleByLink = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"],
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const title = await page.title();

  await page.close();
  await browser.close();

  return title;
};

module.exports = {
  scrapTitleByLink,
};
