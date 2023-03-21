const stepperItems = [
  { text: "Steg 1", state: "complete" },
  { text: "Steg 2", state: "complete" },
  { text: "Steg 3 med mye tekst som går over flere linjer", state: "complete" },
  { text: "Steg 4", state: "complete" },
  { text: "Steg 5", state: "active" },
  { text: "Steg 6 med mye tekst som går over flere linjer" },
  { text: "Steg 7" },
  { text: "Steg 8" },
  { text: "Steg 9" },
  { text: "Steg 10" },
  { text: "Steg 11" },
  { text: "Steg 12" },
];

const formBlocks = [
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
        label: "Alternativ 1 med mye lengre tekst enn de andre alternativene",
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
];

module.exports = { stepperItems, formBlocks };
