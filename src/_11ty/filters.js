const markdownIt = require("markdown-it");

const markdown = (value) => {
  return new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    quotes: "«»",
  }).render(value);
};

const markdownInline = (value) => {
  return new markdownIt({
    html: false,
  }).renderInline(value);
};

module.exports = { markdown, markdownInline };
