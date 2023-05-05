const markdownIt = require("markdown-it");
const util = require("util");

const markdown = (value) => {
  return new markdownIt({
    html: true,
    linkify: false,
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

const productsByRole = (array, role) => {
  return array.filter((item) => item.role.includes(role));
};

const productTypesFromProductRole = (array, role) => {
  const filteredArray = array.filter((item) => item.role.includes(role));
  return [...new Set(filteredArray.map(item => item.type).flat())]
};

const console = (value) => {
  return util.inspect(value);
};

const lowerfirst = (value) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

module.exports = {
  markdown,
  markdownInline,
  productsByRole,
  productTypesFromProductRole,
  console,
  lowerfirst,
};
