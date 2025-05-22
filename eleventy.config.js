/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

import slugify from "slugify";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItMark from "markdown-it-mark";
import compression from "compression";
import { EleventyHtmlBasePlugin, EleventyRenderPlugin } from "@11ty/eleventy";
import tocPlugin from "eleventy-plugin-toc";

import svgContents from "eleventy-plugin-svg-contents";
import {
  markdown,
  markdownInline,
  filterByArray,
  extractTags,
  sortStringLast,
  lowerfirst,
  filterByTags,
  tocData,
} from "./src/_11ty/filters.js";
import { timestampNow } from "./src/_11ty/shortcodes.js";
import { minifyHtml, dummifyLinks } from "./src/_11ty/transforms.js";
// import {} from "./src/_11ty/collections.js";

const linkAfterHeaderOptions = {
  class: "absolute inset-0",
  style: "visually-hidden",
  visuallyHiddenClass: "sr-only",
  assistiveText: (title) => `Lenke til kapittel «${title}»`,
  placement: "after",
  symbol: "",
  wrapper: ['<div class="relative heading-3">', "</div>"],
};

const headerLinkOptions = {
  safariReaderFix: true,
  class: "",
};

export default function (eleventyConfig) {
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
    mdLib
      .use(markdownItAnchor, {
        level: [2, 3],
        slugify: (s) => slugify(s.toLowerCase()),
        permalink: markdownItAnchor.permalink.headerLink(headerLinkOptions),
      })
      .use(markdownItMark),
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
  eleventyConfig.addFilter("filterByTags", filterByTags);
  eleventyConfig.addFilter("tocData", tocData);

  // Templating shortcodes
  eleventyConfig.addShortcode("now", timestampNow);
  eleventyConfig.addPairedShortcode("prose", function (content, classes = "") {
    const markdown = new markdownIt({
      html: true,
      linkify: false,
      typographer: true,
      quotes: "«»",
    })
      .use(markdownItAnchor, {
        level: 3,
        slugify: (s) => slugify(s.toLowerCase()),
        permalink: markdownItAnchor.permalink.headerLink(headerLinkOptions),
      })
      .use(markdownItMark)
      .disable("code")
      .render(content);
    return `<div class="prose ${classes}">${markdown}</div>`;
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
}
