const { JSDOM } = require("jsdom");

function jsDocify(text) {
  return new JSDOM(text).window.document;
}

module.exports = jsDocify;
