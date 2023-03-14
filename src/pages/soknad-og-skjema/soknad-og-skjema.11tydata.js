const stepperItems = [
  { text: "Steg 1", state: "complete" },
  { text: "Steg 2", state: "complete" },
  { text: "Steg 3", state: "complete" },
  { text: "Steg 4", state: "complete" },
  { text: "Steg 5", state: "active" },
  { text: "Steg 6" },
  { text: "Steg 7" },
  { text: "Steg 8" },
  { text: "Steg 9" },
  { text: "Steg 10" },
  { text: "Steg 11" },
  { text: "Steg 12" },
];

const formFields = [
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
    type: "textarea",
    label: "Tekstområde",
    description: "Beskrivelse ...",
  },
];

module.exports = { stepperItems, formFields };
