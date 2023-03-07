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

const filterByRole = (array, role) => {
  return array.filter((item) => item.role.includes(role));
};

const console = (value) => {
  return util.inspect(value);
};

module.exports = { markdown, markdownInline, filterByRole, console };
