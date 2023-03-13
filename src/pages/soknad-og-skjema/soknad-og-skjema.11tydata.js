const stepperItems = [
  { text: "Personalia", state: "complete" },
  { text: "Bostedsland", state: "complete" },
  { text: "Reel arbeidssøker", state: "complete" },
  { text: "Arbeidsforhold", state: "complete" },
  { text: "Arbeidsforhold i EØS", state: "active" },
  { text: "Egen næring" },
  { text: "Utdanning" },
  { text: "Værneplikt" },
  { text: "Barnetillegg" },
  { text: "Andre ytelser" },
  { text: "Tilleggsopplysninger" },
  { text: "Vedlegg" },
  { text: "Oppsummering" },
  { text: "Kvittering" },
];

const formFields = [
  {
    type: "select",
    label: "Nedtrekksliste",
    description: "Beskrivelse",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
    ],
  },
  {
    type: "radios",
    legend: "Radioknapper",
    description: "",
    name: "single-choice",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
    ],
  },
  {
    type: "checkboxes",
    legend: "Checkboxes",
    description: "",
    name: "multiple-choice",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
    ],
  },
  {
    type: "textfield",
    label: "Tekstfelt",
    description: "",
    size: "",
  },
  {
    type: "textarea",
    label: "Tekstområde",
    description: "",
  },
];

module.exports = { stepperItems, formFields };
