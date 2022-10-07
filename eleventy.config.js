const svgContents = require("eleventy-plugin-svg-contents");
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
    enabled: false,
    showVersion: true,
    middleware: [compression()],
  });

  eleventyConfig.addShortcode("now", function () {
    const now = new Date();
    return now.toLocaleDateString("nb-NO", { dateStyle: "medium" });
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
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
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "dist",
    },
  };
};
