const markdownIt = require("markdown-it");
const util = require("util");

const markdown = (value) => {
  return new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    quotes: "«»",
  })
    .disable("code")
    .render(value);
};

const markdownInline = (value) => {
  return new markdownIt({
    html: false,
  }).renderInline(value);
};

const console = (value) => {
  return util.inspect(value);
};

module.exports = { markdown, markdownInline, console };
