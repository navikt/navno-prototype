/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const svgContents = require("eleventy-plugin-svg-contents");
const { markdown, markdownInline } = require("./src/_11ty/filters.js");
const { timestampNow } = require("./src/_11ty/shortcodes.js");
const { minifyHtml } = require("./src/_11ty/transforms.js");

// const compression = require("compression");

module.exports = function (eleventyConfig) {
  // Eleventy Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(svgContents);

  // Copy static assets to build folder
  eleventyConfig.addPassthroughCopy({ "./static/images/*": "/assets/images" });
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*": "/assets/fonts" });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/main.min.js",
  });

  // Watch extra files for changes
  eleventyConfig.addWatchTarget("./src/assets/main.css");
  eleventyConfig.addWatchTarget("./src/**/*.svg");

  // Templating filters
  eleventyConfig.addFilter("markdown", markdown);
  eleventyConfig.addFilter("markdownInline", markdownInline);

  // Templating shortcodes
  eleventyConfig.addShortcode("now", timestampNow);

  // Transforms
  eleventyConfig.addTransform("minifyHtml", minifyHtml);

  // Dev server options
  eleventyConfig.setServerOptions({
    enabled: true,
    showVersion: true,
    port: 8888,
    middleware: [],
  });

  return {
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
