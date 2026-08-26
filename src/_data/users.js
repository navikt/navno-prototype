export default [
  {
    type: "self",
    name: "Charlie Jensen",
    id: "090292*****",
    birthday: "1992-02-09",
    representation: "Deg selv",
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
        title: "Dagpenger",
        url: "dagpenger",
        access: true,
      },
      {
        title: "Økonomisk sosialhjelp",
        url: "foreldrepenger",
        access: true,
      },
      {
        title: "Utbetalinger",
        access: true,
      },
    ],
    support: [
      {
        title: "Aktivitetsplan",
        access: true,
      },
      {
        title: "Dialog med veileder",
        access: true,
      },
      {
        title: "CV",
        access: true,
      },
    ],
  },
  {
    type: "agent",
    name: "Alex Jensen",
    id: "211112*****",
    birthday: "2012-11-21",
    representation: "Du har fullmakt",
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
      {
        title: "Utbetalinger",
        access: true,
      },
    ],
  },
  {
    type: "agent",
    name: "Casey Jensen",
    id: "160616*****",
    birthday: "2016-06-16",
    representation: "Du har fullmakt",
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
      {
        title: "Utbetalinger",
        access: true,
      },
    ],
  },
];
