const products = [
  {
    title: "Tannelegerklæring ved yrkesskade",
    ingress:
      "I sakene hvor det er aktuelt, kan du som tannlege bli bedt om å fylle ut en tannlegeerklæring.",
    type: ["Skjema"],
    role: ["Tannlege"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send tannlegelegeerklæring", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Yrkesskade eller yrkessykdom",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Yrkesskade eller yrkessykdom",
    ingress:
      "Hvis skaden eller sykdommen blir godkjent som yrkesskade, vil pasienten kunne få dekket utgifter til ulik helsehjelp.",
    type: ["Skjema"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "Når noen blir skadet på arbeidsplassen, plikter arbeidsgiveren å sende skademelding til NAV, som så vurderer om skaden eller sykdommen kan godkjennes. I den forbindelse kan det hende at NAV har behov for å innhente ytterligere dokumentasjon fra deg som fastlege eller behandlende lege. (usikker på om det er egne skjema for dette eller om det sendes inn på annen måte?)",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Meld fra om yrkessykdom",
          "Alle leger har plikt til å melde fra til Arbeidstilsynet om sykdom som legen antar skyldes pasientens arbeidssituasjon.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Arbeidstilsynet",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Yrkesskade eller yrkessykdom",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger for sykt barn",
    ingress:
      "Når en må være borte fra jobb for å pleie og ta vare på et barn som er, eller har vært, innlagt eller til behandling på sykehus.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "Legeerklæringen skal være skrevet av en sykehuslege, eller en lege i spesialisthelsetjenesten. Legeerklæringen fylles ut i eget system. Hvis den nye legeerklæringen ikke er implementert i deres systemer enda, kan du fortsatt bruke det gamle skjemaet. Du kan også skrive legeerklæringen i et annet format, som for eksempel i fritekst på et ark. Da er det viktig at du gir alle opplysningene som NAV trenger for å kunne behandle søknaden. Her ser du et eksempel på den nye legeerklæringen, og hva den må inneholde. Når du har skrevet legeerklæringen gir du den til omsorgspersonen som skal søke om pleiepenger.",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Pleiepenger for sykt barn",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger for en utviklingshemmet person over 18 år",
    ingress:
      "Når en må være borte fra jobb for å ta vare på en person over 18 år, som er utviklingshemmet og svært alvorlig syk.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "Legeerklæringen skal være skrevet av en sykehuslege, eller en lege i spesialisthelsetjenesten. Legeerklæringen fylles ut i eget system. Hvis den nye legeerklæringen ikke er implementert i deres systemer enda, kan du fortsatt bruke det gamle skjemaet. Du kan også skrive legeerklæringen i et annet format, som for eksempel i fritekst på et ark. Da er det viktig at du gir alle opplysningene som NAV trenger for å kunne behandle søknaden. Her ser du et eksempel på den nye legeerklæringen, og hva den må inneholde. Når du har skrevet legeerklæringen gir du den til omsorgspersonen som skal søke om pleiepenger.",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Pleiepenger for en utviklingshemmet person over 18 år",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger i livets sluttfase",
    ingress:
      "Når en må være borte fra jobb for å ta vare på en person som er i livets sluttfase.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "En lege må bekrefte hvorvidt pasienten er i livets sluttfase. Med livets sluttfase menes det at man forventer at pasienten skal dø i løpet av de neste ukene eller månedene. Legeerklæringen er et eget dokument som søkeren skal legge ved søknaden sin. Når du har skrevet legeerklæringen, gir du den til den som skal søke om pleiepenger.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Skriv ut legeerklæring",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Pleiepenger i livets sluttfase",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Opplæringspenger",
    ingress:
      "Når en må være borte fra jobb for å få opplæring for et barn eller en voksen, som har en funksjonshemning eller langvarig sykdom.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "Legeerklæringen skrives i søknadsskjemaet for opplæringspenger, og må komme fra helseinstitusjonen hvor opplæringen foregår, eller fra en lege som kjenner barnets helsetilstand.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send legeerklæring i søknad",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Opplæringspenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Omsorgspenger",
    ingress:
      "Når en må være hjemme med barn som for eksempel har fått omgangssyke.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "Legen må dokumentere at sykdommen eller funksjonshemningen er kronisk, og at den gir en markert høyere risiko for fravær fra arbeid. Selvstendig næringsdrivende, frilansere eller arbeidstakere som ikke får utbetalt omsorgspenger fra arbeidsgiver, må søke om utbetaling av omsorgspenger fra NAV. I disse tilfellene krever NAV en legeerklæring.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Omsorgspenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Grunnstønad",
    ingress:
      "Gir økonomisk støtte til ekstrautgifter når pasienten har en varig skade, sykdom eller funksjonsnedsettelse.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "(Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Grunnstønad",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Hjelpestønad",
    ingress:
      "Økonomisk støtte til barn eller voksne som trenger langvarig, privat pleie og tilsyn.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "(Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpestønad",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Forhøyet hjelpestønad",
    ingress:
      "Økonomisk støtte til barn under 18 år når behovet for pleie og tilsyn er vesentlig enn det ordinær hjelpestønad kan dekke.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "(Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Forhøyet hjelpestønad",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Sykepenger",
    ingress:
      "Erstatter inntekten din når pasienten ikke kan jobbe på grunn av sykdom eller skade.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send vurdering av arbeidsmulighet ved sykmelding",
          "Noe tekst",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Send vurdering av arbeidsmulighet ved 7 uker", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Send vurdering av arbeidsmulighet ved 17 uker",
          "Noe tekst",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Send vurdering av arbeidsmulighet ved 39 uker",
          "Noe tekst",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Send legeerklæring ved arbeidsuførhet", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Sykepenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arbeidsavklaringspenger (AAP)",
    ingress:
      "Sikrer pasienten inntekt i perioder de har behov for hjelp fra NAV på grunn av sykdom eller skade.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send legeerklæring ved arbeidsuførhet", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Arbeidsavklaringspenger (AAP)",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Uføretrygd)",
    ingress:
      "Sikrer pasienten inntekt hvis inntektsevnen er varig redusert på grunn av sykdom eller skade.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send legeerklæring ved arbeidsuførhet", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Send detaljert legeerklæring ved arbeidsuførhet i forbindelse med uføresøknader til andre EU/EØS-land",
          "Noe tekst",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Uføretrygd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Supplerende stønad til uføre flyktninger",
    ingress:
      "Sikrer pasienten inntekt hvis inntektsevnen er varig redusert på grunn av sykdom eller skade.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send legeerklæring ved arbeidsuførhet", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Supplerende stønad til uføre flyktninger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Legeerklæringved arbeidsuførhet",
    ingress:
      "Denne brukes i forbindelse med søknad om sykepenger(?), arbeidsavklaringspenger (AAP), uføretrygd og supplerende stønad for uføre flyktninger. Erklæringen kan skrives av lege, psykolog, fysioterapeut, manuellterapeut eller kiropraktor dersom NAV etterspør dette.",
    type: ["Skjema"],
    role: ["Lege", "Annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send legeerklæring ved arbeidsuførhet", "Noe tekst"],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Legeerklæringved arbeidsuførhet",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Fullmakt og innsyn",
    ingress:
      "Hvis du ringer til NAV om en pasient og ønsker innsyn i saken, må du ha fullmakt. Du ringer da ikke som behandler, men på vegne av en privatperson. Det er pasienten som gir fullmakten.",
    type: ["Skjema"],
    role: ["Lege", "Annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Sosiale tjenester",
          "Fullmakt som gjelder sosiale tjenester, skal arkiveres på NAV-kontoret og kan ikke gjøres synlig eller skannes i NAVs systemer på grunn av bestemmelser i Sosialtjenesteloven §44.",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Muntlig fullmakt",
          "Dersom du ringer sammen med pasienten, kan pasienten gi muntlig fullmakt per telefon. Fullmakten vil kun gjelde for den aktuelle samtalen.",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Skriftlig fullmakt via nav.no",
          "Pasienten kan gi deg fullmakt ved å logge inn og bruke Skriv til oss. Dette tilsvarer signatur fra pasienten.",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Mer om"],
      },
      {
        type: "microcards",
        data: [
          {
            text: "Fullmakt og innsyn",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
];

const getTags = (array, key) => {
  let tagSet = new Set();

  array.forEach(function (item) {
    if (key in item) {
      let tags = item[key];

      tags = tags.filter((item) => {
        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  return [...tagSet].sort((a, b) => {
    if (a == b) return 0;
    if (a == "Annet") return 1;
    if (b == "Annet") return -1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

module.exports = {
  products,
  tags: ["template"],
  typeFilter: getTags(products, "type"),
  roleFilter: getTags(products, "role"),
};
