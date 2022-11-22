module.exports = {
  productDomain: {
    title: "Velg område",
    items: [
      "Alle",
      "Arbeid",
      "Helse og sykdom",
      "Familie og barn",
      "Pensjon",
      "Økonomisk sosialhjelp, råd og veiledning",
      "Hjelpemidler og tilrettelegging",
      "Annet",
    ],
  },
  productType: {
    title: "Velg type",
    items: [
      "Alle",
      "Hjelpemiddel",
      "Pengestøtte",
      "Oppfølging",
      "Tiltak",
      "Tjeneste",
      "Veiledning",
      "For leger og andre behandlere",
    ],
  },
  productList: [
    {
      title: "Opplæringspenger",
      isOpen: false,
    },
    {
      title: "Ortopediske sko",
      isOpen: false,
    },
    {
      title: "Ortroser",
      isOpen: false,
    },
    {
      isOpen: false,
      title: "Overgangsstønad for enslig mor eller far",
      contentBlocks: [
        {
          type: "markdown",
          content: [
            "Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år.",
          ],
        },
        {
          type: "tag",
          tags: ["Pengestøtte"],
        },
        {
          type: "tag",
          tags: ["Familie og barn"],
        },
        {
          type: "microcards",
          title: "Mer om",
          links: ["Overgangsstønad for enslig mor eller far"],
        },
        {
          type: "microcards",
          title: "Overgangsstønad er aktuelt når du",
          links: ["Er helt eller delvis alene med barn"],
        },
        {
          type: "markdown",
          content: [
            "### Søk om overgangsstønad",
            "Du bruker samme søknad både hvis du søker for første gang og hvis du søker forlengelse eller utvidelse av stønadstiden din.",
            "Hvis du har BankID, er det raskt og enkelt å søke overgangsstønad digitalt. Den digitale søknaden tilpasser spørsmålene til situasjonen din, og du får beskjed underveis hvis du må dokumentere noen av opplysningene dine.",
          ],
        },
        {
          type: "cta",
          variant: "primary",
          text: "Søk om overgangsstønad",
        },
        {
          type: "markdown",
          content: ["Du kan også søke på papir."],
        },
        {
          type: "cta",
          text: "Søk om overgangsstønad på papir",
        },
        {
          type: "markdown",
          content: [
            "### Ettersende dokumentasjon til søknaden",
            "Du kan ettersende dokumentasjon digitalt fra Min side.",
          ],
        },
        {
          type: "cta",
          text: "Ettersend dokumentasjon",
        },
        {
          type: "markdown",
          content: ["Du kan også ettersende dokumentasjon på papir."],
        },
        {
          type: "cta",
          text: "Ettersend dokumentasjon på papir",
        },
        {
          type: "markdown",
          content: [
            "### Søk om forlengelse av overgangsstønad som følge av koronasituasjonen",
            "Dette er en midlertidig ordning som er opprettet som følge av koronasituasjonen. Dette skjemaet gjelder kun søknad om forlengelse av overgangsstønaden som følge av koronasituasjonen.",
          ],
        },
        {
          type: "cta",
          text: "Søk om forlengelse av overgangsstønad (korona)",
        },
        {
          type: "markdown",
          content: ["Du kan også søke på papir."],
        },
        {
          type: "cta",
          text: "Søk om forlengelse av overgangsstønad (korona) på papir",
        },
        {
          type: "markdown",
          content: [
            "### Send inn opplysninger når du er enslig mor eller far som er arbeidssøker",
            "Hvis du får overgangsstønad og blir arbeidssøker, må du sende oss noen ekstra opplysninger. Det samme gjelder hvis du er arbeidssøker og søker om overgangsstønad med papirsøknad.",
          ],
        },
        {
          type: "cta",
          text: "Send inn opplysninger",
        },
        {
          type: "markdown",
          content: ["Du kan også sende opplysningene på papir."],
        },
        {
          type: "cta",
          text: "Send inn opplysninger på papir",
        },
        {
          type: "markdown",
          content: [
            "### Klage",
            "Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til NAV-enheten som skrev vedtaket. De vil vurdere saken din på nytt. Hvis de ikke er enig i klagen din, sender de den videre til NAV Klageinstans.",
          ],
        },
        {
          type: "cta",
          text: "Klag på vedtak om overgangsstønad",
        },
        {
          type: "markdown",
          content: [
            "### Anke",
            "Hvis du har fått et vedtak fra NAV Klageinstans som du mener er feil, kan du anke. I vedtaket kan du lese om fristen for å anke.",
          ],
        },
        {
          type: "cta",
          text: "Klag på vedtak om overgangsstønad",
        },
        {
          type: "markdown",
          content: [
            "Ettersend dokumentasjon til klage eller anke",
            "Du kan ettersende dokumentasjon til klagen eller anken din.",
          ],
        },
        {
          type: "cta",
          text: "Ettersend dokumentasjon til klage eller anke",
        },
      ],
    },
    {
      title: "Overgangsstønad til gjenlevende",
      isOpen: false,
    },
    {
      title: "Parykk",
      isOpen: false,
    },
  ],
};
