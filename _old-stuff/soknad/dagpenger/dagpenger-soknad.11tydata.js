const formSteps = [
  {
    title: "Intro",
    contentBlocks: [
      {
        type: "markdown",
        data: `Intro`,
      },
    ],
  },
  {
    title: "Steg 1",
    state: "complete",
    link: true,
  },
  {
    title: "Steg 2",
    state: "complete",
    link: true,
  },
  {
    title: "Steg 3",
    state: "complete",
    link: true,
  },
  {
    title: "Steg 4",
    state: "active",
    link: true,
    contentBlocks: [
      {
        type: "markdown",
        data: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ex aut ratione blanditiis asperiores quis fuga debitis fugit? Officia, quibusdam amet! Hic eum ab reprehenderit dolorum alias nihil autem modi.`,
      },
      {
        type: "select",
        label: "Nedtrekksliste",
        description: "Beskrivelse",
        options: [
          { label: "Alternativ 1", description: "" },
          { label: "Alternativ 2", description: "" },
          { label: "Alternativ 3", description: "" },
        ],
      },
      {
        type: "radios",
        legend: "Radioknapper",
        description: "Beskrivelse ...",
        name: "single-choice",
        options: [
          {
            label:
              "Alternativ 1 med mye lengre tekst enn de andre alternativene",
            description: "",
          },
          { label: "Alternativ 2", description: "" },
          { label: "Alternativ 3", description: "" },
        ],
      },
      {
        type: "checkboxes",
        legend: "Checkboxes",
        description: "Beskrivelse ...",
        name: "multiple-choice",
        options: [
          { label: "Alternativ 1", description: "Beskrivelse" },
          { label: "Alternativ 2", description: "" },
          { label: "Alternativ 3", description: "" },
        ],
      },
      {
        type: "textinput",
        label: "Tekstfelt",
        description: "Beskrivelse ...",
        size: "",
      },
      {
        type: "infobox",
        title: "Lorem, ipsum dolor sit amet consectetur",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ex aut ratione blanditiis asperiores quis fuga debitis fugit? Officia, quibusdam amet! Hic eum ab reprehenderit dolorum alias nihil autem modi.`,
        icon: "/src/_includes/svg/icons/info-colored.svg",
        theme: "",
      },
      {
        type: "textarea",
        label: "Tekstområde",
        description: "Beskrivelse ...",
      },
    ],
  },
  {
    title: "Steg 5",
    link: true,
  },
  {
    title: "Steg 6",
    link: true,
  },
];

module.exports = { formSteps };
