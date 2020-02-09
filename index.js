const cheerio = require("cheerio");
const request = require("request");
const rp = require("request-promise");
const fs = require("fs");

const url =
  "https://www.ilikesticker.com/LineStickerAnimation/W3877421-Mochi-Mochi-Peach-Cat3/en";
const path = "./sticker/";
const naming = "cat_";
var index = 0;
const extension = ".gif";
rp(url)
  .then(function(htmlString) {
    var $ = cheerio.load(htmlString);
    $("#website_sticker").each(function(i, elem) {
      $(elem)
        .find("img")
        .each((k, pic) => {
          var stickerURL = $(pic).attr("src");
          index++;
          download(stickerURL, path + naming + index + extension, function() {
            console.log("done");
          });
        });
    });
  })
  .catch(function(e) {
    console.log(e);
  });

var download = function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};
