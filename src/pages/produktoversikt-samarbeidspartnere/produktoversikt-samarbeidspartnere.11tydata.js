const products = [
  {
    title: "Tittel her 1",
    ingress: "Ingress her",
    type: ["Type 1"],
    role: ["Tannlege"],
  },
  {
    title: "Tittel her 2",
    ingress: "Ingress her",
    type: ["Type 2"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Overskrift nivå 2", "Et kort avsnitt med tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Tittel på side",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
];

const getTags = (array, key) => {
  let tagSet = new Set();

  array.forEach(function (item) {
    if (key in item) {
      let tags = item[key];

      tags = tags.filter((item) => {
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

module.exports = {
  products,
  tags: ["template"],
  typeFilter: getTags(products, "type"),
  roleFilter: getTags(products, "role"),
};
