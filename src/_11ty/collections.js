const areaFilter = (collection) => {
  let tagSet = new Set();
  collection
    .getFilteredByGlob("src/pages/produktoversikt/produkter/**/*.md")
    .forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.area;

        tags = tags.filter(function (item) {
          switch (item) {
            // This list should match the `filter` list in tags.njk
            case "all":
            case "produkt":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

  return [...tagSet];
};

const typeFilter = (collection) => {
  let tagSet = new Set();
  collection
    .getFilteredByGlob("src/pages/produktoversikt/produkter/**/*.md")
    .forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.type;

        tags = tags.filter(function (item) {
          switch (item) {
            // This list should match the `filter` list in tags.njk
            case "all":
            case "produkt":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

  return [...tagSet];
};

module.exports = { areaFilter, typeFilter };