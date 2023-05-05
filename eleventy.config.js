/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const svgContents = require("eleventy-plugin-svg-contents");
const {
  markdown,
  markdownInline,
  console,
  productsByRole,
  productTypesFromProductRole,
  lowerfirst,
} = require("./src/_11ty/filters.js");
const { timestampNow } = require("./src/_11ty/shortcodes.js");
const { minifyHtml } = require("./src/_11ty/transforms.js");
const { typeFilter, areaFilter } = require("./src/_11ty/collections.js");
const compression = require("compression");

module.exports = function (eleventyConfig) {
  // Eleventy Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(svgContents);

  // Copy static assets to build folder
  eleventyConfig.addPassthroughCopy({ "./static/images/*": "/assets/images" });
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*": "/assets/fonts" });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/alpine.min.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/@alpinejs/focus/dist/cdn.min.js":
      "./assets/alpineFocus.min.js",
  });

  // Watch extra files for changes
  eleventyConfig.setWatchThrottleWaitTime(200);
  eleventyConfig.addWatchTarget("./src/assets/main.css");
  eleventyConfig.addWatchTarget("./src/**/*.svg");

  // Templating filters
  eleventyConfig.addFilter("markdown", markdown);
  eleventyConfig.addFilter("markdownInline", markdownInline);
  eleventyConfig.addFilter("console", console);
  eleventyConfig.addFilter("productsByRole", productsByRole);
  eleventyConfig.addFilter("lowerfirst", lowerfirst);
  eleventyConfig.addFilter("productTypesFromProductRole", productTypesFromProductRole);

  // Templating collections
  eleventyConfig.addCollection("typeFilter", typeFilter);
  eleventyConfig.addCollection("areaFilter", areaFilter);

  // Templating shortcodes
  eleventyConfig.addShortcode("now", timestampNow);

  // Transforms
  eleventyConfig.addTransform("minifyHtml", minifyHtml);

  // Dev server options
  eleventyConfig.setServerOptions({
    enabled: true,
    showVersion: true,
    port: 8888,
    // middleware: [compression()],
  });

  eleventyConfig.setDataDeepMerge(true);

  return {
    pathPrefix: "person/prototype",
    markdownTemplateEngine: "njk",
    templateFormats: [
      "njk",
    ],
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "build",
    },
  };
};
