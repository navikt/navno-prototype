/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

const svgContents = require("eleventy-plugin-svg-contents");
const markdownIt = require("markdown-it");
const htmlmin = require("html-minifier");
const compression = require("compression");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./main.min.js",
  });
  eleventyConfig.addPassthroughCopy({ "./static/images/*": "/images" });
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*": "/fonts" });
  eleventyConfig.addWatchTarget("./src/main.css");
  eleventyConfig.addWatchTarget("./src/**/*.svg");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setServerOptions({
    enabled: true,
    showVersion: true,
    port: 8888,
    middleware: [
      // function compression(req, res, next) {
      //   res.writeHead(200, { "content-type": "text/html" });
      //   res.end();
      //   next();
      // },
    ],
  });

  eleventyConfig.addFilter("markdown", function (value) {
    return new markdownIt({
      html: true,
      linkify: true,
      typographer: true,
      quotes: "«»",
    }).render(value);
  });

  eleventyConfig.addFilter("markdownInline", function (value) {
    return new markdownIt({
      html: false,
    }).renderInline(value);
  });

  eleventyConfig.addShortcode("now", function () {
    const now = new Date();
    return now.toLocaleDateString("nb-NO", { dateStyle: "medium" });
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    const env = process.env.ELEVENTY_ENV;
    if (env === "production" && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: {
          level: 2,
        },
      });
      return minified;
    }

    return content;
  });

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "dist",
    },
  };
};
