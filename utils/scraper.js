const { CheerioCrawler } = require("crawlee");
const cheerio = require("cheerio");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
const crawler = new CheerioCrawler({
    useSessionPool: true,
    sessionPoolOptions: { maxPoolSize: 100 },
    // Use the requestHandler to process each of the crawled pages.
    async requestHandler({ $, request, enqueueLinks }) {
        // select all the list items in text-left class
        const listItems = $(".text-left p");
        //stores data for all text
        let paragraph = "";
        //Use .each method to loop through the span we selected
        listItems.each((idx, el) => {
            const val = $(el).text();
            paragraph += `${val}\n\n\n`;
        });
        if (!fs.existsSync(path.join(__dirname, "..", "scrapedData"))) {
            await fsPromises.mkdir(path.join(__dirname, "..", "scrapedData"));
        }
        await fsPromises.writeFile(
            path.join(__dirname, "..", "scrapedData", `${request.loadedUrl.split("/")[request.loadedUrl.split("/").length - 2]}.txt`),
            `${paragraph}`
        );
    },
    // Uncomment this option to see the browser window.
    // headless: false,
});

module.exports = { crawler };
//await crawler.run(["https://crawlee.dev"]);
