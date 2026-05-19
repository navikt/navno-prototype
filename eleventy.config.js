/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 */

import slugify from "@sindresorhus/slugify";
import markdownIt from "markdown-it";
import { EleventyHtmlBasePlugin, EleventyRenderPlugin } from "@11ty/eleventy";
import { transform } from "lightningcss";

import svgContents from "eleventy-plugin-svg-contents";
import {
  markdown,
  markdownInline,
  filterByArray,
  extractTags,
  sortStringLast,
  lowerfirst,
  filterByTags,
} from "./src/_11ty/filters.js";
import { timestampNow } from "./src/_11ty/shortcodes.js";
import { minifyHtml, dummifyLinks } from "./src/_11ty/transforms.js";
// import {} from "./src/_11ty/collections.js";

export default function (eleventyConfig) {
  // Eleventy Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(svgContents);

  // Copy static assets to build folder
  eleventyConfig.addPassthroughCopy({ "./static/fonts/*": "/assets/fonts" });

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

  // Templating shortcodes
  eleventyConfig.addShortcode("now", timestampNow);

  // Bundles
  eleventyConfig.addBundle("css", {
    toFileDirectory: "",
    transforms: [
      async function (content) {
        // 'this.type' returns the bundle name.
        if (this.type === "css") {
          let result = await transform({
            code: Buffer.from(content),
            minify: true,
            sourceMap: true,
            drafts: {
              nesting: true,
            },
            targets: { safari: (13 << 16) | (2 << 8) },
          });
          return result.code;
        }
        return content;
      },
    ],
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

  // Build Time
  eleventyConfig.addGlobalData("generated", () => {
    let now = new Date();
    return new Intl.DateTimeFormat("no-NB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Oslo",
    }).format(now);
  });

  eleventyConfig.setDataDeepMerge(true);

  return {
    pathPrefix: "navno-prototype",
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
