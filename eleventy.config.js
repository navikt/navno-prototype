/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

const slugify = require("slugify");
const {
  EleventyHtmlBasePlugin,
  EleventyRenderPlugin,
} = require("@11ty/eleventy");
const tocPlugin = require("eleventy-plugin-toc");
const svgContents = require("eleventy-plugin-svg-contents");
const {
  markdown,
  markdownInline,
  filterByArray,
  extractTags,
  sortStringLast,
  lowerfirst,
  onlyTags,
  tocData,
} = require("./src/_11ty/filters.js");
const { timestampNow } = require("./src/_11ty/shortcodes.js");
const { minifyHtml, dummifyLinks } = require("./src/_11ty/transforms.js");
// const {} = require("./src/_11ty/collections.js");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Eleventy Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(tocPlugin, {
    tags: ["h3"],
    wrapper: "",
  });

  // Markdown-it plugins
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib.use(markdownItAnchor, {
      level: 3,
      slugify: (s) => slugify(s.toLowerCase()),
    }),
  );

  // Copy static assets to build folder
  eleventyConfig.addPassthroughCopy({ "./static/images/*": "/assets/images" });
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*": "/assets/fonts" });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/alpine.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/@alpinejs/intersect/dist/cdn.min.js":
      "./assets/alpine-intersect-plugin.min.js",
  });

  // Watch extra files for changes
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.addWatchTarget("./src/assets/main.css");
  eleventyConfig.addWatchTarget("./src/**/*.svg");

  // Templating filters
  eleventyConfig.addFilter("markdown", markdown);
  eleventyConfig.addFilter("markdownInline", markdownInline);
  eleventyConfig.addFilter("filterByArray", filterByArray);
  eleventyConfig.addFilter("lowerfirst", lowerfirst);
  eleventyConfig.addFilter("extractTags", extractTags);
  eleventyConfig.addFilter("sortStringLast", sortStringLast);
  eleventyConfig.addFilter("onlyTags", onlyTags);
  eleventyConfig.addFilter("tocData", tocData);

  // Templating collections
  // eleventyConfig.addCollection("typeFilter", typeFilter);
  // eleventyConfig.addCollection("areaFilter", areaFilter);

  // Templating shortcodes
  eleventyConfig.addShortcode("now", timestampNow);
  eleventyConfig.addPairedShortcode("prose", function (content) {
    const markdown = new markdownIt({
      html: true,
      linkify: false,
      typographer: true,
      quotes: "«»",
    })
      .use(markdownItAnchor, {
        level: 3,
        slugify: (s) => slugify(s.toLowerCase()),
      })
      .disable("code")
      .render(content);
    return `<div class="prose">${markdown}</div>`;
  });

  // Transforms
  eleventyConfig.addTransform("dummifyLinks", dummifyLinks);
  eleventyConfig.addTransform("minifyHtml", minifyHtml);

  // Dev server options
  eleventyConfig.setServerOptions({
    enabled: true,
    showVersion: true,
    port: 8888,
  });

  eleventyConfig.setDataDeepMerge(true);

  return {
    pathPrefix: "prototype",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "build",
    },
  };
};
