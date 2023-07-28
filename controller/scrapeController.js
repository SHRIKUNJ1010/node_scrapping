// const axios = require("axios");

// async function scrapeData1(url, filename) {
//     const userAgentsList = [
//         "Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0",
//         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36",
//     ];
//     try {
//         //fetch html data
//         const { data } = await axios.get(url, {
//             withCredentials: true,
//             headers: {
//                 Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//                 "Accept-Language": "en",
//                 "User-Agent": "python-requests/2.26.0",
//                 Connection: "keep-alive",
//                 "Cache-Control": "max-age=0",
//                 "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
//                 "sec-ch-ua-mobile": "?0",
//                 "sec-ch-ua-platform": "macOS",
//                 "Upgrade-Insecure-Requests": 1,
//                 "User-Agent": userAgentsList[Math.floor(Math.random() * 4)],
//                 Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//                 "Sec-Fetch-Site": "none",
//                 "Sec-Fetch-Mode": "navigate",
//                 "Sec-Fetch-User": "?1",
//                 "Sec-Fetch-Dest": "document",
//                 "Accept-Encoding": "gzip, deflate, br",
//                 "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
//             },
//         });
//     } catch (err) {
//         console.log(`Error: ${err}`);
//     }
// }

// module.exports = { scrapeData1 };
