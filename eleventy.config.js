const svgContents = require("eleventy-plugin-svg-contents");
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

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "dist",
    },
  };
};
