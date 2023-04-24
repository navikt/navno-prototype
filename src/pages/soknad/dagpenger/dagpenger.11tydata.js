const preSteps = [
  {
    question: "Hvordan vil du sende søknaden?",
    answers: [
      {
        title: "Send digitalt",
        description:
          "Det er enklest og raskest å søke digitalt. Du blir bedt om å logge inn.",
      },
      {
        title: "Send i posten",
        description: "Du fyller ut søknaden før du skriver den ut.",
        href: "/soknad-og-skjema/dagpenger-2/",
      },
      {
        title: "Last ned papirsøknad",
        description:
          "Du skriver ut en papirsøknad som du fyller ut for hånd og sender i posten.",
        href: "/soknad-og-skjema/dagpenger-3/",
      },
    ],
  },
  {
    markdown: `## Send i posten
    Du fyller ut søknaden før du skriver den ut.`,
    question: "Hva skal du søke om?",
    answers: [
      { title: "Søknad om dagpenger når du er arbeidsledig" },
      { title: "Dagpenger når du er permittert" },
      { title: "Søknad om dagpenger når du er permittert" },
    ],
  },
  {
    markdown: `## Last ned papirsøknad
    Du skriver ut en papirsøknad som du fyller ut for hånd og sender i posten.`,
    question: "Hva skal du søke om?",
    answers: [
      { title: "Søknad om dagpenger når du er arbeidsledig" },
      { title: "Dagpenger når du er permittert" },
      { title: "Søknad om dagpenger når du er permittert" },
    ],
  },
];

module.exports = { preSteps };