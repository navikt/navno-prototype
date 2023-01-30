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
  {
    title: "Seksualtekniske hjelpemidler",
    ingress:
      "Kan gi et bedre sexliv når en har nedsatt seksualfunksjon.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om seksualteknisk hjelpemiddel",
          "Som lege, bestiller du det seksualtekniske hjelpemidlet direkte fra leverandør. Hjelpemiddelet blir sendt til ditt kontor eller hjem til pasienten.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Seksualtekniske hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Førerhund",
    ingress:
      "Hjelper blinde og svaksynte å ta seg frem innendørs og utendørs.",
    type: ["Hjelpemiddel"],
    role: ["Lege", "Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "NAV krever legeerklæring fra øyelege om nedsatt syn og legeerklæring som viser at vedkommende er helsemessig skikket til å ha førerhund. Erklæringene legges ved søknaden. Det er ikke egne skjemaer for å gi slike erklæringer. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Førerhund",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Servicehund",
    ingress:
      "Hjelper pasienter med fysiske funksjonsnedsettelser i hverdagen.",
    type: ["Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send legeerklæring",
          "NAV krever legeerklæring som viser at vedkommende er helsemessig skikket til å ha servicehund. Erklæringen legges ved søknaden. Det er ikke eget skjema for å gi slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Servicehund",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Bilstønad",
    ingress:
      "Støtte til bil, tilpasning av bil og spesialutstyr til bruk i bil.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring for motorkjøretøy",
          "NAV krever legeerklæring om behovet for motorkjøretøy og søkerens evne til å kjøre bilen. Du skriver ut, signerer og stempler erklæringen, og gir den til søkeren slik at de kan legge den ved søknaden.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Skriv legeerklæring",
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
            text: "Bilstønad",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Brystprotese",
    ingress:
      "Etterligner et bryst i form og størrelse, og finnes i mange ulike utgaver.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever legeerklæring første gang en pasient søker om brystprotese. Søkeren legger erklæringen ved søknaden. Det er ikke et eget skjema for å gi slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Brystprotese",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Øyeprotese",
    ingress:
      "Erstatter øyet når en mangler et øye, eller har skadet øyet.",
    type: ["Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever legeerklæring første gang en pasient søker om øyeprotese. Søkeren legger erklæringen ved søknaden. Det er ikke et eget skjema for å gi slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Øyeprotese",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Ansiktsprotese",
    ingress:
      "Etterligner den delen av ansiktet som mangler eller er skadet.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever legeerklæring første gang en pasient søker om ansiktsprotese. Søkeren legger erklæringen ved søknaden. Det er ikke et eget skjema for å gi slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Ansiktsprotese",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Parykk",
    ingress:
      "Erstatter eget hår på hele hodet, eller deler av hodet.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever legeerklæring første gang en pasient søker om parykk. Ved alopecia og/eller søknad om utvidet stønadsgrense på grunn av allergi mot syntetisk materiale, er det også nødvendig med erklæring fra spesialist i hudsykdommer. Det er ikke egne skjemaer for å gi slike erklæringer. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Parykk",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Lese- og sekretærhjelp",
    ingress:
      "Hjelper deg med å lese og skrive når du er blind eller svaksynt.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Optiker eller øyelege", "Andre"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever erklæring fra øyelege eller optiker med diagnose og visus første gang en innbygger søker om lese- og sekretærhjelp. Det er ikke et eget skjema for å gi slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: [
          "### Send regning for utført lese- og sekretærhjelp",
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
            text: "Lese- og sekretærhjelp",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tolk for hørselshemmede",
    ingress:
      "Utfører tolkeoppdrag for døve, døvblinde og hørselshemmede.",
    type: ["Tjeneste", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever erklæring fra hørselssentral eller øre-nese-halsspesialist første gang en innbygger søker om tolkehjelp. Det er ikke et eget skjema for å gi en slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Tolk for hørselshemmede",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tolk- og ledsagerhjelp for døvblinde",
    ingress:
      "Utfører tolkeoppdrag for døve, døvblinde og hørselshemmede.",
    type: ["Tjeneste", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "NAV krever erklæring fra hørselssentral eller øre-nese-halsspesialist første gang en innbygger søker om tolke- og ledsagerhjelp. Det er ikke et eget skjema for å gi en slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Tolk- og ledsagerhjelp for døvblinde",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Høreapparat",
    ingress:
      "Forsterker lyden rundt deg når en har nedsatt hørsel.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv begrunnelse",
          "En øre-nese-halslege må begrunne behovet i et eget felt på søknadsskjemaet.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Høreapparat",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Ortopediske sko",
    ingress:
      "Hjelper når en har feilstilling i foten eller ankelen, har problemer med føttene på grunn av diabetes eller revmatisme, eller har en annen funksjonsnedsettelse i føttene.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv begrunnelse",
          "Sykehusleger og spesialister i ortopedisk kirurgi må begrunne behovet i et eget felt på søknadsskjemaet (skrives kanskje bare ut førsteside? kan fylles ut i legens epj-system). Avhengig av hvilken type ortopedisk hjelpemiddel det søkes om, kan også andre legespesialister begrunne behovet.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Ortopediske sko",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Ortoser",
    ingress:
      "Stabiliserer eller gir bedre funksjon når du har en kroppsdel som er lammet eller svekket.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv begrunnelse",
          "Sykehusleger og spesialister i ortopedisk kirurgi må begrunne behovet i et eget felt på søknadsskjemaet (skrives kanskje bare ut førsteside? kan fylles ut i legens epj-system). Avhengig av hvilken type ortopedisk hjelpemiddel det søkes om, kan også andre legespesialister begrunne behovet.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Ortoser",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arm- og benproteser",
    ingress:
      "Erstatter en manglende kroppsdel.",
    type: ["Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv begrunnelse",
          "Sykehusleger og spesialister i ortopedisk kirurgi må begrunne behovet i et eget felt på søknadsskjemaet (skrives kanskje bare ut førsteside? kan fylles ut i legens epj-system). Avhengig av hvilken type ortopedisk hjelpemiddel det søkes om, kan også andre legespesialister begrunne behovet.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Arm- og benproteser",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Funksjonsassistanse i arbeidslivet",
    ingress:
      "Hjelper deg med praktiske oppgaver når det er nødvendig for at du skal kunne utføre jobben din.",
    type: ["Tjeneste", "Hjelpemiddel"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "Det er bare nødvendig med legeerklæring hvis saksbehandler i NAV etterspør dette. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Funksjonsassistanse i arbeidslivet",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Grunnmønster og søm av klær",
    ingress:
      "Brukes som grunnlag for å skreddersy klær.",
    type: ["Pengestøtte"],
    role: ["Lege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Skriv legeerklæring",
          "Det er bare nødvendig med legeerklæring hvis saksbehandler i NAV etterspør dette. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)",
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
            text: "Grunnmønster og søm av klær",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arbeidsforberedende trening",
    ingress:
      "Skjermet og tilrettelagt jobb i en oppstartsfase, før en går over i arbeidstrening hos bedrifter i ordinært arbeidsliv.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten. Hvis du ikke har mulighet til å bruke deltakeroversikten, kan du sende fremmøteoversikt på papir.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            variant: "primary",
          },
          {
            text: "Send oversikt i posten",
            variant: "secondary",
          },
          {
            text: "Ettersend dokumentasjon i posten",
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
          "### Send refusjonskrav",
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
        data: [
          "### Send vedlegg til refusjonskrav",
          "Excel-skjema til bruk når ...?",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Last ned skjema",
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
            text: "Arbeidsforberedende trening (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Varig tilrettelagt arbeid i skjermet virksomhet",
    ingress:
      "Tilrettelagt jobb i en skjermet bedrift.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten. Hvis du ikke har mulighet til å bruke deltakeroversikten, kan du sende fremmøteoversikt på papir.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            variant: "primary",
          },
          {
            text: "Send oversikt i posten",
            variant: "secondary",
          },
          {
            text: "Ettersend dokumentasjon i posten",
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
          "### Send refusjonskrav",
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
        data: [
          "### Send vedlegg til refusjonskrav",
          "Excel-skjema til bruk når ...?",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Last ned skjema",
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
            text: "Varig tilrettelagt arbeid i skjermet virksomhet (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arbeidsmarkedsopplæring (AMO)",
    ingress:
      "AMO-kurs eller ordinær utdanning for å bli kvalifisert til ledige jobber.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send refusjonskrav for opplæring",
          "Dette skjemaet brukes av tiltaksarrangør som har fått tilsagn fra NAV for opplæringstiltak (AMO-kurs eller ordinær utdanning) og som skal be om refusjon av tilsagnsbeløp.",
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
            text: "Arbeidsmarkedsopplæring (AMO) (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Oppfølging",
    ingress:
      "Støtte for å klare å skaffe eller beholde en jobb.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten. Hvis du ikke har mulighet til å bruke deltakeroversikten, kan du sende fremmøteoversikt i posten.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            variant: "primary",
          },
          {
            text: "Send oversikt i posten",
            variant: "secondary",
          },
          {
            text: "Ettersend dokumentasjon i posten",
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
            text: "Oppfølging (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Avklaring",
    ingress:
      "Støtte for å klare å skaffe eller beholde en jobb.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten. Hvis du ikke har mulighet til å bruke deltakeroversikten, kan du sende fremmøteoversikt i posten.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            variant: "primary",
          },
          {
            text: "Send oversikt i posten",
            variant: "secondary",
          },
          {
            text: "Ettersend dokumentasjon i posten",
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
            text: "Avklaring (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arbeidsrettet rehabilitering",
    ingress:
      "Støtte for å klare å skaffe eller beholde en jobb.",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten. Hvis du ikke har mulighet til å bruke deltakeroversikten, kan du sende fremmøteoversikt i posten.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            variant: "primary",
          },
          {
            text: "Send oversikt i posten",
            variant: "secondary",
          },
          {
            text: "Ettersend dokumentasjon i posten",
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
            text: "Arbeidsrettet rehabilitering (bør heller lenke til situasjonsside for tiltaksarr?)",
            dot: "bg-green-300",
          },
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Deltakeroversikt for tiltaksarrangører",
    ingress:
      "Hold oversikt over deltakere i tiltakene og dialogen med NAV.",
    type: ["Skjema"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Registrer deltakere",
          "Dette gjør du digitalt i Deltakeroversikten.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
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
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Fullmakt til å søke om hjelpemidler",
    ingress:
      "Fullmakt i forbindelse med søknad om tekniske hjelpemidler",
    type: ["Skjema"],
    role: ["Optiker eller øyelege", "Ergoterapeut"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Be om fullmakt",
          "Skjemaet benyttes når søker gir fullmakt til at søknad kan hentes fra nav.no og fylles ut av behandler/kartlegger i etterkant av kartlegging.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Fullmakt til å søke om hjelpemidler)",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Briller til barn",
    ingress:
      "Tilskudd til barn og unge under 18 år som trenger briller.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Inngå avtale",
          "For å kunne registrere krav om tilskudd til briller til barn og få riktig utbetaling, må optikerfirmaet ha en avtale om direkte oppgjør med NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Inngå avtale",
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
          "### Send inn eller slett krav",
          "Som optiker kan du logge deg på den digitale løsningen og sende krav. På optikers side kan du se alle kravene du selv har sendt inn. Hvis du trenger å korrigere et krav du har sendt inn, gjør du det ved å slette det aktuelle kravet før det har gått syv dager. ",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Til optikerportalen",
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
            text: "Briller til barn",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Irislinse",
    ingress:
      "Tilskudd til barn og unge under 18 år som trenger briller.",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send pristilbud",
          "Pristilbud fra optiker er et obligatorisk vedlegg til søknad om irislinser. Det er optiker som skal fylle ut og signere skjemaet. Pristilbudet bør legges ved og sendes samtidig med søknaden. Hvis det ettersendes senere enn to uker etter søknaden, kan NAV Hjelpemiddelsentral avslå søknaden.",
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
            text: "Irislinse",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Hørselshjelpemidler",
    ingress:
      "Ingress",
    type: ["Pengestøtte", "Hjelpemiddel"],
    role: ["Ergoterapeut"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Be om hjelp til vurdering og utprøving",
          "Dette skjemaet bruker du hvis du er fagperson og trenger hjelp til vurdering eller utprøving.",
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
        data: [
          "### Søk om andre høreapparat, tinnitusmaskerer eller tilleggsutstyr",
          "Hørselssentral eller avtalespesialist har ansvar for at skjemaet blir fylt ut og sendt inn. Det er valgfritt å fylle ut søknaden via pasientjournalsystemet eller via NAVs nettsider. Hvis du har fylt ut søknaden i pasientjournalsystemet, må du skrive ut en førsteside som skal legges ved søknaden. (Evt bygge mellomsteg her?)",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad digitalt",
            variant: "primary",
          },
          {
            text: "Skriv ut førsteside for å sende i posten",
            variant: "secondary",
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
          "### Bekreftelse på utlån og tildeling av høreapparat / tinnitusmaskerer / tilleggsutstyr​",
          "Skjemaet fylles ut og sendes inn av avtalespesialist eller høresentral.",
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
          "### Søk om andre hørselshjelpemidler",
          "Hvis du er hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.",
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
        data: [
          "### Be om fullmakt",
          "Skjemaet benyttes når søker gir fullmakt til at søknad kan hentes fra nav.no og fylles ut av behandler/kartlegger i etterkant av kartlegging.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
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
            text: "Hørselshjelpemidler",
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
