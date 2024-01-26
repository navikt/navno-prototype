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

const filterByArray = (array, key) => {
  return array.filter((item) => item.role.includes(key));
};

const extractTags = (array, key) => {
  return [...new Set(array.map(item => item[key]).flat())]
};

const sortStringLast = (array, string) => {
  return array.sort((a, b) => {
    if (a == b) return 0;
    if (a == string) return 1;
    if (b == string) return -1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

const lowerfirst = (value) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

const onlyTags = (collection = [], ...tags) => {
  return collection.filter((post) => {
    const commonTags = tags.filter((tag) => post.data.tags?.includes(tag));
    return tags.length === commonTags.length;
  });
};

module.exports = {
  markdown,
  markdownInline,
  filterByArray,
  extractTags,
  sortStringLast,
  lowerfirst,
  onlyTags,
};
