const preSteps = [
  {
    question: "Hvordan vil du sende søknaden?",
    answers: [
      {
        title: "Send digitalt",
        description:
          "Det er enklest og raskest å søke digitalt. Du blir bedt om å logge inn.",
        href: "/soknad/dagpenger/intro/"
      },
      {
        title: "Send i posten",
        description: "Du fyller ut søknaden før du skriver den ut.",
        href: "/soknad/dagpenger-1/",
      },
      {
        title: "Last ned papirsøknad",
        description:
          "Du skriver ut en papirsøknad som du fyller ut for hånd og sender i posten.",
        href: "/soknad/dagpenger-2/",
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
