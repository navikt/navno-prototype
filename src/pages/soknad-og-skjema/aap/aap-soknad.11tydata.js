const formSteps = [
  {
    title: "Intro",
    contentBlocks: [
      {
        type: "markdown",
        data: `## Søknadsdato er viktig for eventuell utbetaling av AAP
        Vanligvis kan du tidligst få AAP fra den dagen du søker.

        Hvis du mottar sykepenger, får du vanligvis AAP fra første dag etter at sykepengene dine er ferdig.

        Du kan søke om AAP selv om om du ikke har mottatt sykepenger.

### Hvis du får AAP gjelder dette

* Du har rett til oppfølging av NAV
* Du har plikt til å bidra til å avklare om du kan beholde eller komme i jobb
* Du må sende inn meldekort hver 14. dag
* Du har plikt til å gi beskjed hvis situasjonen din endrer seg
* Hvis du får penger du ikke har rett til, er du forberedt på å betale disse tilbake`,
      },
    ],
  },
  {
    title: "Startdato",
    state: "complete",
    link: true,
  },
  {
    title: "Bosted og jobb",
    state: "complete",
    link: true,
  },
  {
    title: "Yrkesskade",
    state: "complete",
    link: true,
  },
  {
    title: "Kontaktperson for helseopplysninger",
    state: "complete",
    link: true,
  },
  {
    title: "Barnetillegg",
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
    title: "Student",
    link: true,
  },
  {
    title: "Utbetalinger",
    link: true,
  },
  {
    title: "Vedlegg og tilleggsinformasjon",
    link: true,
  },
  {
    title: "Oppsummering",
    link: true,
  },
  {
    title: "Kvittering",
  },
];

module.exports = { formSteps };
