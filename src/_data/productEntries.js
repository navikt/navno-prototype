module.exports = [
  {
    title: "Opplæringspenger",
  },
  {
    title: "Ortopediske sko",
  },
  {
    title: "Ortroser",
  },
  {
    title: "Overgangsstønad for enslig mor eller far",
    icon: "/src/_includes/svg/pictogram-single-parent.svg",
    tags: ["productEntry", "Pengestøtte", "Familie og barn"],
    ingress:
      "Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år.",
    contentBlocks: [
      {
        microcards: [
          {
            title: "Mer om",
            link: "Overgangsstønad for enslig mor eller far",
          },
          {
            title: "Overgangsstønad er aktuelt når du",
            link: "Er helt eller delvis alene med barn",
          },
        ],
      },
      {
        type: "markdown",
        data: [
          "Du bruker samme søknad både hvis du søker for første gang og hvis du søker forlengelse eller utvidelse av stønadstiden din.",
          "Hvis du har BankID, er det raskt og enkelt å søke overgangsstønad digitalt. Den digitale søknaden tilpasser spørsmålene til situasjonen din, og du får beskjed underveis hvis du må dokumentere noen av opplysningene dine.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Søk om overgangs&shy;stønad",
            variant: "primary",
          },
          {
            text: "Søk om overgangs&shy;stønad på papir",
            variant: "tertiary",
          },
        ],
      },
      {
        type: "markdown",
        data: [
          "## Søk om forlengelse av overgangsstønad som følge av koronasituasjonen",
          "Dette er en midlertidig ordning som er opprettet som følge av koronasituasjonen. Dette skjemaet gjelder kun søknad om forlengelse av overgangsstønaden som følge av koronasituasjonen.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Søk om forlengelse av overgangsstønad (korona)",
            variant: "primary",
          },
          {
            text: "Søk om forlengelse av overgangs&shy;stønad (korona) på papir",
            variant: "tertiary",
          },
        ],
      },
    ],
  },
];
