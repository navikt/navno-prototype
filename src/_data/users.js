export default [
  {
    type: "self",
    name: "Charlie Jensen",
    id: "090292*****",
    birthday: "1992-02-09",
    icon: "/src/assets/images/icon-person.svg",
    tasks: [
      {
        title: "Les vedtak på søknad om foreldrepenger",
        description: "13.10.23 kl. 15.23  •  Varslet på SMS",
      },
      {
        title:
          "Last opp manglende dokumentasjon til søknad om arbeidsavklaringspenger",
        description: "16.10.23 kl. 10.29",
      },
    ],
    products: [
      {
        title: "Arbeidsavklaringspenger (AAP)",
        url: "aap",
        access: true,
      },
      {
        title: "Foreldrepenger",
        url: "foreldrepenger",
        access: true,
      },
      {
        title: "Utbetalinger",
        url: "utbetalinger",
        access: true,
      },
    ],
    support: [{}],
  },
  {
    type: "agent",
    name: "Alex Jensen",
    id: "211112*****",
    birthday: "2012-11-21",
    representation: "Du har foreldreansvar",
    icon: "/src/assets/images/icon-persongroup.svg",
    tasks: [
      {
        title: "Veldig viktig oppgave 1",
        description: "Varslet på SMS",
      },
    ],
    products: [
      {
        title: "Arbeidsavklaringspenger (AAP)",
        url: "aap",
        access: false,
      },
    ],
  },
  {
    type: "agent",
    name: "Casey Jensen",
    id: "160616*****",
    birthday: "2016-06-16",
    representation: "Du har foreldreansvar",
    icon: "/src/assets/images/icon-persongroup.svg",
    tasks: [],
  },
  {
    type: "agent",
    name: "Pippilotta Viktualia Rullgardina Krusmynte Efraimsdatter Langstrømpe",
    id: "140561*****",
    birthday: "1961-05-14",
    representation: "Du er verge",
    icon: "/src/assets/images/icon-persongroup.svg",
    tasks: [],
    products: [
      {
        title: "Arbeidsavklaringspenger",
        url: "aap",
        access: false,
      },
    ],
  },
];
