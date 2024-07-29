const markdownIt = require("markdown-it");
const cheerio = require("cheerio");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("slugify");

const markdown = (value) => {
  return new markdownIt({
    html: true,
    linkify: false,
    typographer: true,
    quotes: "«»",
  })
    .disable("code")
    .use(markdownItAnchor, {
      level: [2, 3],
      slugify: (s) => slugify(s.toLowerCase()),
    })
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
  return [...new Set(array.map((item) => item[key]).flat())];
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
};

const lowerfirst = (value) => {
  return value.charAt(0).toLowerCase() + value.slice(1);
};

const filterByTags = (collection = [], ...tags) => {
  return collection.filter((post) => {
    const commonTags = tags.filter((tag) => post.data.tags?.includes(tag));
    return tags.length === commonTags.length;
  });
};

const tocData = (content, tags = ["h3"]) => {
  const SimplifyResults = (tag, tags, $) => {
    const results = [];

    $(`${tag}[id]`).each((i, el) => {
      const tag = el.name;
      const id = $(el).attr("id");
      const text = $(el).text().replace(" #", "");
      const hierarchy = tags.indexOf(tag);
      const parent =
        hierarchy > 0 &&
        $(el)
          .prevAll(tags[hierarchy - 1])
          .attr("id");

      results.push({
        order: i,
        tag,
        id,
        text,
        parent,
        children: [],
      });
    });

    return results;
  };

  const NestHeadings = (tags, $) => {
    const temp = {};

    tags.forEach((t) => {
      temp[t] = SimplifyResults(t, tags, $);
    });

    const headings = [];

    Object.keys(temp)
      .reverse()
      .filter((t) => temp[t].length > 0)
      .map((k) => {
        const index = tags.indexOf(k);

        temp[k].map((h) => {
          let parent = headings;

          if (index > 0) {
            const potentialParent = temp[tags[index - 1]].find((p) => {
              return p.id === h.parent;
            });

            if (potentialParent && "children" in potentialParent) {
              parent = potentialParent.children;
            }
          }

          parent.push(h);
        });
      });

    return headings;
  };

  const $ = cheerio.load(content);
  const headings = NestHeadings(tags, $);

  if (headings.length === 0) {
    return undefined;
  }

  return headings;
};

module.exports = {
  markdown,
  markdownInline,
  filterByArray,
  extractTags,
  sortStringLast,
  lowerfirst,
  filterByTags,
  tocData,
};
