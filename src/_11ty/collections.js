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

  return [...tagSet].sort((a, b) => {
    if (a == b) return 0;
    if (a == "Annet") return 1;
    if (b == "Annet") return -1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
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

  return [...tagSet].sort();
};

const areaFilterArb = (collection) => {
  let tagSet = new Set();
  collection
    .getFilteredByGlob(
      "src/pages/produktoversikt-arbeidsgiver/produkter/**/*.md"
    )
    .forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.area;

        tags = tags.filter(function (item) {
          switch (item) {
            // This list should match the `filter` list in tags.njk
            case "all":
            case "produktArb":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

  return [...tagSet].sort((a, b) => {
    if (a == b) return 0;
    if (a == "Annet") return 1;
    if (b == "Annet") return -1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

const typeFilterArb = (collection) => {
  let tagSet = new Set();
  collection
    .getFilteredByGlob(
      "src/pages/produktoversikt-arbeidsgiver/produkter/**/*.md"
    )
    .forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.type;

        tags = tags.filter(function (item) {
          switch (item) {
            // This list should match the `filter` list in tags.njk
            case "all":
            case "produktArb":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

  return [...tagSet].sort();
};

module.exports = { areaFilter, typeFilter, areaFilterArb, typeFilterArb };
