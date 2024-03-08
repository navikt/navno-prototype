const htmlMinifier = require("html-minifier");

const minifyHtml = (content, outputPath) => {
  const env = process.env.ELEVENTY_ENV;
  if (env === "production" && outputPath && outputPath.endsWith(".html")) {
    let minified = htmlMinifier.minify(content, {
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
};


const dummifyLinks = (content) => {
  const regexPattern = new RegExp('"#"', "g");
  return content.replace(regexPattern, "javascript:void(0);");
};

module.exports = { minifyHtml, dummifyLinks };
