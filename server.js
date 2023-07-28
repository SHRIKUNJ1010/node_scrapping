const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const PORT = process.env.PORT || 8080;

const { crawler } = require("./utils/scraper");

//custom middleware
app.use(logger);

//handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

//cross origin resource sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded data (from-data / content-type: application/x-www-form-urlencoded)
app.use(express(express.urlencoded({ extended: false })));

//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

const url = "https://wuxiaworld.site/novel/top-tier-providence-secretly-cultivate-for-a-thousand-years-pvt/chapter-584/";

const getNovelUrl = (chapter) => `https://wuxiaworld.site/novel/top-tier-providence-secretly-cultivate-for-a-thousand-years-pvt/chapter-${chapter}/`;

const urlList = [];

for (let i = 0; i < 1192; i++) {
    urlList.push(getNovelUrl(i));
}

crawler.run(urlList);

app.use(errorHandler);
