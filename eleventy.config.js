const compress = require('compression');
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPassthroughCopy({ "./node_modules/alpinejs/dist/cdn.min.js": "./main.min.js" });
  eleventyConfig.addPassthroughCopy({ "./static/images/*" : "/images" });
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*" : "/fonts" });
  eleventyConfig.addWatchTarget("./src/main.css");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setBrowserSyncConfig({
    snippet: process.env.ELEVENTY_ENV != 'production',
    server: {
      baseDir: './dist',
      middleware: function(req,res,next){
        const gzip = compress();
        gzip(req,res,next);
      }
    }
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      output: "dist",
    }
  }
}
