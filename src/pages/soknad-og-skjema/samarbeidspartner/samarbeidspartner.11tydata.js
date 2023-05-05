const products = [
  {
    title: "Tannlegeerklæring ved yrkesskade",
    ingress:
      "I sakene hvor det er aktuelt, kan du som tannlege bli bedt om å fylle ut en tannlegeerklæring.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send tannlegelegeerklæring
        `,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-tannlegeerklaering-ved-yrkesskade-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Yrkesskade eller yrkessykdom",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Yrkesskade eller yrkessykdom",
    ingress:
      "Hvis skaden eller sykdommen blir godkjent som yrkesskade, vil pasienten kunne få dekket utgifter til ulik helsehjelp.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
          Når noen blir skadet på arbeidsplassen, plikter arbeidsgiveren å sende skademelding til NAV, som så vurderer om skaden eller sykdommen kan godkjennes. I den forbindelse kan det hende at NAV har behov for å innhente ytterligere dokumentasjon fra deg som fastlege eller behandlende lege. (usikker på om det er egne skjema for dette eller om det sendes inn på annen måte?)`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Meld fra om yrkessykdom
          Alle leger har plikt til å melde fra til Arbeidstilsynet om sykdom som legen antar skyldes pasientens arbeidssituasjon.
        `,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Arbeidstilsynet",
            href: "/soknad/temp-yrkesskade-eller-yrkessykdom-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Yrkesskade eller yrkessykdom",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger for sykt barn",
    ingress:
      "Når en må være borte fra jobb for å pleie og ta vare på et barn som er, eller har vært, innlagt eller til behandling på sykehus.",
    icon: "/src/_includes/svg/pictograms/pleiepenger-sykt-barn.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring

        Legeerklæringen skal være skrevet av en sykehuslege, eller en lege i spesialisthelsetjenesten. Legeerklæringen fylles ut i eget system. Hvis den nye legeerklæringen ikke er implementert i deres systemer enda, kan du fortsatt bruke det gamle skjemaet. Du kan også skrive legeerklæringen i et annet format, som for eksempel i fritekst på et ark. Da er det viktig at du gir alle opplysningene som NAV trenger for å kunne behandle søknaden. Her ser du et eksempel på den nye legeerklæringen, og hva den må inneholde. Når du har skrevet legeerklæringen gir du den til omsorgspersonen som skal søke om pleiepenger.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/pleiepenger-utviklingshemmet.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
          Legeerklæringen skal være skrevet av en sykehuslege, eller en lege i spesialisthelsetjenesten. Legeerklæringen fylles ut i eget system. Hvis den nye legeerklæringen ikke er implementert i deres systemer enda, kan du fortsatt bruke det gamle skjemaet. Du kan også skrive legeerklæringen i et annet format, som for eksempel i fritekst på et ark. Da er det viktig at du gir alle opplysningene som NAV trenger for å kunne behandle søknaden. Her ser du et eksempel på den nye legeerklæringen, og hva den må inneholde. Når du har skrevet legeerklæringen gir du den til omsorgspersonen som skal søke om pleiepenger.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/pleiepenger-livets-sluttfase.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
          En lege må bekrefte hvorvidt pasienten er i livets sluttfase. Med livets sluttfase menes det at man forventer at pasienten skal dø i løpet av de neste ukene eller månedene. Legeerklæringen er et eget dokument som søkeren skal legge ved søknaden sin. Når du har skrevet legeerklæringen, gir du den til den som skal søke om pleiepenger.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Skriv ut legeerklæring",
            href: "/soknad/temp-pleiepenger-i-livets-sluttfase-sam.html",
            variant: "secondary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/opplaeringspenger.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
          Legeerklæringen skrives i søknadsskjemaet for opplæringspenger, og må komme fra helseinstitusjonen hvor opplæringen foregår, eller fra en lege som kjenner barnets helsetilstand.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send legeerklæring i søknad",
            href: "/soknad/temp-opplaeringspenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/omsorgspenger.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
          Legen må dokumentere at sykdommen eller funksjonshemningen er kronisk, og at den gir en markert høyere risiko for fravær fra arbeid. Selvstendig næringsdrivende, frilansere eller arbeidstakere som ikke får utbetalt omsorgspenger fra arbeidsgiver, må søke om utbetaling av omsorgspenger fra NAV. I disse tilfellene krever NAV en legeerklæring.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-omsorgspenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    title: "Grunn- og hjelpestønad",
    ingress: "",
    icon: "/src/_includes/svg/pictograms/grunnstonad.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Grunnstønad
        Hvis pasienten din søker om grunnstønad, må du som lege gi NAV opplysninger som både beskriver den medisinske tilstanden og sammenhengen mellom de varige, nødvendige ekstrautgiftene og den medisinske tilstanden.`
      },
      {
        type: "markdown",
        data: `### Hjelpestønad
        I legeerklæringen som skal følge pasientens søknad om hjelpestønad, må du opplyse om diagnose og gi en medisinsk begrunnet beskrivelse og vurdering av søkerens helsetilstand.`
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Grunnstønad",
            dot: "bg-green-300",
          },
        ],
      }
    ]
  },
  {
    title: "Sykepenger",
    ingress:
      "Erstatter inntekten din når pasienten ikke kan jobbe på grunn av sykdom eller skade.",
    icon: "/src/_includes/svg/pictograms/sykepenger.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send vurdering av arbeidsmulighet ved sykmelding`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-sykepenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send vurdering av arbeidsmulighet ved 7 uker`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-sykepenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send vurdering av arbeidsmulighet ved 17 uker`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-sykepenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send vurdering av arbeidsmulighet ved 39 uker`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-sykepenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send legeerklæring ved arbeidsuførhet`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-sykepenger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/aap.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring ved arbeidsuførhet`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-arbeidsavklaringspenger-aap-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    title: "Uføretrygd",
    ingress:
      "Sikrer pasienten inntekt hvis inntektsevnen er varig redusert på grunn av sykdom eller skade.",
    icon: "/src/_includes/svg/pictograms/uforetrygd.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring ved arbeidsuførhet`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-uforetrygd-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send detaljert legeerklæring ved arbeidsuførhet i forbindelse med uføresøknader til andre EU/EØS-land`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-uforetrygd-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    role: ["Lege, tannlege eller annen behandler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring ved arbeidsuførhet`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-supplerende-stonad-til-ufore-flyktninger-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    title: "Legeerklæring ved arbeidsuførhet",
    ingress:
      "Denne brukes i forbindelse med søknad om sykepenger(?), arbeidsavklaringspenger (AAP), uføretrygd og supplerende stønad for uføre flyktninger. Erklæringen kan skrives av lege, psykolog, fysioterapeut, manuellterapeut eller kiropraktor dersom NAV etterspør dette.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Lege, tannlege eller annen behandler",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring ved arbeidsuførhet`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-legeerklaering-ved-arbeidsuforhet-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Legeerklæringved arbeidsuførhet",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Fullmakt og innsyn",
    ingress:
      "Hvis du ringer til NAV om en pasient og ønsker innsyn i saken, må du ha fullmakt. Du ringer da ikke som behandler, men på vegne av en privatperson. Det er pasienten som gir fullmakten.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Lege, tannlege eller annen behandler",
      "Bostyrer",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Sosiale tjenester
          Fullmakt som gjelder sosiale tjenester, skal arkiveres på NAV-kontoret og kan ikke gjøres synlig eller skannes i NAVs systemer på grunn av bestemmelser i Sosialtjenesteloven §44.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Muntlig fullmakt
          Dersom du ringer sammen med pasienten, kan pasienten gi muntlig fullmakt per telefon. Fullmakten vil kun gjelde for den aktuelle samtalen.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Skriftlig fullmakt via nav.no
          Pasienten kan gi deg fullmakt ved å logge inn og bruke Skriv til oss. Dette tilsvarer signatur fra pasienten.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Fullmakt og innsyn",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Førerhund",
    ingress: "Hjelper blinde og svaksynte å ta seg frem innendørs og utendørs.",
    icon: "/src/_includes/svg/pictograms/forerhund.svg",
    type: ["Hjelpemiddel"],
    role: [
      "Optiker eller øyelege",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send legeerklæring
        NAV krever legeerklæring fra øyelege om nedsatt syn og legeerklæring som viser at vedkommende er helsemessig skikket til å ha førerhund.

        Erklæringene legges ved søknaden. Det er ikke egne skjemaer for å gi slike erklæringer.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    title: "Bestillingsordningen",
    ingress: "Forenklet saksbehandling i NAV for å bestille enkle hjelpemidler som ikke krever individuelle tilpasninger.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: [
      "Skjema",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Bestilling av tekniske hjelpemidler
        Du må være godkjent bestiller for å bestille hjelpemidler. For å bli godkjent bestiller, må du ta godkjenningskurs for bestillingsordningen på Kunnskapsbanken.`
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "#",
            variant: "primary"
          }
        ]
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Bestillingsordningen",
            dot: "bg-green-300",
          },
        ],
      },
    ]
  },




  {
    title: "Bilstønad",
    ingress:
      "Støtte til bil, tilpasning av bil og spesialutstyr til bruk i bil.",
    icon: "/src/_includes/svg/pictograms/grunnstonad.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Tilleggsskjema fra ergo- eller fysioterapeut i forbindelse med søknad om motorkjøretøy og spesialutstyr eller tilpasning
        Funksjonsserklæring er påkrevd ved søknad om stønad til anskaffelse av motorkjøretøy.
        Du fyller ut skjemaet digitalt, skriver det ut og stempler og signerer. Send skjemaet til NAV eller overlever det til søker som kan legge det ved sin søknad.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Fyll ut skjema",
            href: "/soknad/temp-bilstonad-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Lese- og sekretærhjelp",
    ingress: "Hjelper deg med å lese og skrive når du er blind eller svaksynt.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: [
      "Optiker eller øyelege",
      "Andre samarbeidspartnere",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Skriv legeerklæring
          NAV krever erklæring fra øyelege eller optiker med diagnose og visus første gang en innbygger søker om lese- og sekretærhjelp. Det er ikke et eget skjema for å gi slik erklæring.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tolking for døve, døvblinde og hørselshemmede",
    ingress: "Utfører tolkeoppdrag for døve, døvblinde og hørselshemmede.",
    icon: "/src/_includes/svg/pictograms/tegnspraak.svg",
    type: [
      "Hjelpemiddel",
    ],
    role: [
      "Andre samarbeidspartnere",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Skriv legeerklæring
          NAV krever erklæring fra hørselssentral eller øre-nese-halsspesialist første gang en innbygger søker om tolkehjelp. Det er ikke et eget skjema for å gi en slik erklæring. (Bør vi lage en felles tekst som brukes alle steder der det skal leveres legeerklæring, men det ikke er et eget skjema for det?)`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Språktolking",
    ingress: "Ingress.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Tjeneste",
      "Hjelpemiddel",
    ],
    role: ["Andre samarbeidspartnere"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send regning for utført tolkeoppdrag
          Finnes det eget skjema? Timeliste som kan lastes ned?`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Tolking for døve, døvblinde og hørselshemmede",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Briller til barn",
    ingress: "Tilskudd til barn og unge under 18 år som trenger briller.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Inngå avtale
          For å kunne registrere krav om tilskudd til briller til barn og få riktig utbetaling, må optikerfirmaet ha en avtale om direkte oppgjør med NAV.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Inngå avtale",
            href: "/soknad/temp-briller-til-barn-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn eller slett krav
          Som optiker kan du logge deg på den digitale løsningen og sende krav. På optikers side kan du se alle kravene du selv har sendt inn. Hvis du trenger å korrigere et krav du har sendt inn, gjør du det ved å slette det aktuelle kravet før det har gått syv dager. `,
      },
      {
        type: "actions",
        data: [
          {
            text: "Til optikerportalen",
            href: "/soknad/temp-briller-til-barn-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    title: "Briller til behandling eller forebygging av amblyopi",
    ingress: "Kan behandle eller forebygge synsnedsettelsen amblyopi hos barn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Hjelpemiddel",
    ],
    role: ["Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søknad om briller til behandling eller forebygging av amblyopi
        Optiker eller øyelege fyller ut søknaden.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-briller-til-barn-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Briller til behandling eller forebygging av amblyopi",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Irislinse",
    ingress: "Tilskudd til barn og unge under 18 år som trenger briller.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Optiker eller øyelege"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send pristilbud
          Pristilbud fra optiker er et obligatorisk vedlegg til søknad om irislinser. Det er optiker som skal fylle ut og signere skjemaet. Pristilbudet bør legges ved og sendes samtidig med søknaden. Hvis det ettersendes senere enn to uker etter søknaden, kan NAV Hjelpemiddelsentral avslå søknaden.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-irislinse-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søknad om dekning av utgifter til irislinse
        Legg ved pristilbud fra optiker.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-irislinse-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    ingress: "Hjelpemidler for personer som har nedsatt eller ingen hørsel",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-horselshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om høreapparat, tinnitusmaskerer eller tilleggsutstyr
        Hørselssentral eller avtalespesialist har ansvar for at skjemaet blir fylt ut og sendt inn. En øre-nese-halslege må begrunne behovet i et eget felt på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-horselshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Bekreftelse på utlån og tildeling av høreapparat / tinnitusmaskerer / tilleggsutstyr
          Skjemaet fylles ut og sendes inn av avtalespesialist eller høresentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-horselshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Bekreftelse på utlån og tildeling av høreapparat, tinnitusmaskerer eller tilleggsutstyr
        Skjemaet fylles ut og sendes inn av avtalespesialist eller høresentral.`
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "#",
            variant: "primary"
          }
        ]
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Søk om hjelpemidler
          Hvis du er Hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-horselshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
          Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-horselshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
  {
    title: "Hjelpemidler til tale og språk",
    ingress: "Hjelpemidler for personer som har utfordringer med tale og språk",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-til-tale-og-sprak-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om hjelpemidler
          Hvis du er Hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-til-tale-og-sprak-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
          Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-hjelpemidler-til-tale-og-sprak-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler til tale og språk",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Hjelpemidler for å huske, planlegge og organisere",
    ingress: "Hjelpemidler for personer med utfordringer med å huske, planlegge og organisere",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-for-a-huske-planlegge-og-organisere-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om hjelpemidler
        Hvis du er Hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-for-a-huske-planlegge-og-organisere-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
          Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-hjelpemidler-for-a-huske-planlegge-og-organisere-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler for å huske, planlegge og organisere",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Bevegelseshjelpemidler",
    ingress: "Hjelpemidler for personer med motoriske utfordringer.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
      "Skjema",
    ],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-bevegelseshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om hjelpemidler
          Hvis du er Hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-bevegelseshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
        Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
        Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Skjema for søker",
            href: "/soknad/temp-bevegelseshjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Bevegelseshjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Ortopediske hjelpemidler",
    ingress: "Hjelpemidler som ortoser, parykk og proteser.",
    icon: "/src/_includes/svg/pictograms/ortopediske-sko.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: [
      "Hjelpemiddelformidler",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-ortopediske-hjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søknad om ortopediske hjelpemidler
        Denne brukes for å søke om protese, ortose, spesialfottøy, aktivitetshjelpemidler for brukere over 26 år, fotseng eller ortopedisk sydd fottøy.
        Sykehusleger og spesialister i ortopedisk kirurgi må begrunne behovet i et eget felt på søknadsskjeamet.
        Avhengig av hvilken type ortopedisk hjelpemiddel det søkes om, kan også andre legespesialister begrunne behovet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-ortopediske-hjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
          Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-ortopediske-hjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Ortopediske hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Hjelpemidler for å lese og skrive",
    ingress: "Hjelpemidler for personer med lese- og skrivevansker",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    role: [
      "Hjelpemiddelformidler",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om hjelp til vurdering og utprøving
        Skjemaet brukes når det er behov for å prøve ut et hjelpemiddel før man søker om det, eller når det er behov for vurdering og veiledning fra NAV Hjelpemiddelsentral.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-for-a-lese-og-skrive-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om hjelpemidler
          Hvis du er Hjelpemiddelformidler i kommunen og har fått nødvendige tilganger, kan du nå søke digitalt om et utvalg av enkle hjelpemidler. Når du skal søke på vegne av andre trenger du signert fullmakt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-hjelpemidler-for-a-lese-og-skrive-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Be om fullmakt
          Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.
Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-hjelpemidler-for-a-lese-og-skrive-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler for å lese og skrive",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Meld behov for hjelpemidler",
    ingress: "Kommunalt ansatte kan melde behov om hjelpemidler digitalt.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Hjelpemiddel"],
    role: [
      "Hjelpemiddelformidler",
      "Ansatt i NAV-kontor, kommunen eller fylkeskommunen",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Meld inn behov for hjelpemidler
          Saken sendes til NAV Hjelpemiddelsentral. Saker du har sendt inn digitalt vil være tilgjengelig på innlogget side på nav.no. Der kan du følge status på dine innsendte digitale saker. Søknaden blir også tilgjengelig på nav.no-profilen til innbyggeren du har søkt for.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-meld-behov-for-hjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Meld behov for hjelpemidler",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },

  {
    title: "Hjelpemidler",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    role: ["Lege, tannlege eller annen behandler"],
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Førerhund

        NAV krever legeerklæring fra øyelege om nedsatt syn og legeerklæring som viser at vedkommende er helsemessig skikket til å ha førerhund.

        Erklæringene legges ved søknaden. Det er ikke egne skjemaer for å gi slike erklæringer.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Servicehund

        NAV krever legeerklæring som viser at søkeren er helsemessig skikket til å ha førerhund.

        Erklæringen legges ved søknaden. Det er ikke egne skjemaer for å gi slike erklæringer.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Motorkjøretøy

        NAV krever legeerklæring om behovet for motorkjøretøy og søkerens evne til å kjøre bilen.

        Du skriver ut, signerer og stempler erklæringen, og gir den til søkeren slik at de kan legge den ved søknaden.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Søknad om ortopediske hjelpemidler

        Denne brukes for å søke om protese, ortose, spesialfottøy, aktivitetshjelpemidler for brukere over 26 år, fotseng eller ortopedisk sydd fottøy.

        Sykehusleger og spesialister i ortopedisk kirurgi må begrunne behovet i et eget felt på søknadsskjeamet.

        Avhengig av hvilken type ortopedisk hjelpemiddel det søkes om, kan også andre legespesialister begrunne behovet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-hjelpemidler-sam.html",
            variant: "primary",
          },
        ]
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Proteser til øye, ansikt eller bryst

        NAV krever legeerklæring første gang en pasient søker om protese. Søkeren legger erklæringen ved søknaden. Det er ikke et eget skjema for å gi slik erklæring.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Parykk

        NAV krever legeerklæring første gang en pasient søker om parykk.

        Ved alopecia og/eller søknad om utvidet stønadsgrense på grunn av allergi mot syntetisk materiale, er det også nødvendig med erklæring fra spesialist i hudsykdommer.

        Det er ikke egne skjemaer for å gi slike erklæringer.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Tolkehjelp for hørselshemmede

        NAV krever erklæring fra hørselssentral eller øre-nese-halsspesialist første gang en innbygger søker om tolkehjelp. Det er ikke et eget skjema for å gi en slik erklæring.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Tolke- og ledsagerhjelp for døvblinde

        NAV krever erklæring fra hørselssentral eller øre-nese-halsspesialist første gang en innbygger søker om tolke- og ledsagerhjelp. Det er ikke et eget skjema for å gi en slik erklæring.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Lese- og sekretærhjelp

        NAV krever erklæring fra øyelege eller optiker med diagnose og visus første gang en innbygger søker om lese- og sekretærhjelp. Det er ikke et eget skjema for å gi slik erklæring.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Varmehjelpemidler

        NAV krever legeerklæring første gang en pasient søker om varmehjelpemidler. Det er ikke et eget skjema for å gi slik erklæring.`,
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Høreapparat, tinnitusmaskerer eller tilleggsutstyr

        Hørselssentral eller avtalespesialist har ansvar for at skjemaet blir fylt ut og sendt inn. En øre-nese-halslege må begrunne behovet i et eget felt på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "#",
            variant: "primary"
          },
          {
            text: "Ettersend dokumentasjon",
            href: "#",
            variant: "secondary"
          }
        ]
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Seksualtekniske hjelpemidler

        Alle leger kan bestille seksualtekniske hjelpemidler til en pasient direkte fra leverandør. Leverandøren sender hjelpemidlet til legen, eller hjem til pasienten.

        Seksualtekniske hjelpemidler har med personlige og intime forhold å gjøre. Derfor benyttes ikke vanlig saksgang med søknad og vedtak.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "#",
            variant: "primary"
          },
        ]
      },
      {
        type: "line"
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Hjelpemidler",
            dot: "bg-green-300",
          },
        ],
      },
    ]
  },
  {
    title: "Arbeidsforberedende trening",
    ingress:
      "Skjermet og tilrettelagt jobb i en oppstartsfase, før en går over i arbeidstrening hos bedrifter i ordinært arbeidsliv.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-arbeidsforberedende-trening-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Førsteside til rapporter om deltaker
        Skal du sende inn statusrapport, sluttrapport eller plan for enkeltbrukere på tiltaket? Da må du hente førsteside for å kunne sende dokumenter.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Hent førsteside",
            href: "/soknad/temp-arbeidsforberedende-trening-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send refusjonskrav
        Noe tekst`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-arbeidsforberedende-trening-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    ingress: "Tilrettelagt jobb i en skjermet bedrift.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-varig-tilrettelagt-arbeid-i-skjermet-virksomhet-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Førsteside til rapporter om deltaker
        Skal du sende inn statusrapport, sluttrapport eller plan for enkeltbrukere på tiltaket? Da må du hente førsteside for å kunne sende dokumenter.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Hent førsteside",
            href: "/soknad/temp-varig-tilrettelagt-arbeid-i-skjermet-virksomhet-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send refusjonskrav`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-varig-tilrettelagt-arbeid-i-skjermet-virksomhet-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send refusjonskrav for opplæring
          Dette skjemaet brukes av tiltaksarrangør som har fått tilsagn fra NAV for opplæringstiltak (AMO-kurs eller ordinær utdanning) og som skal be om refusjon av tilsagnsbeløp.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-arbeidsmarkedsopplaering-amo-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send fremmøteskjema ved deltakelse
        Dette brukes for å dokumentere deltakelse på tiltaket. `,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-arbeidsmarkedsopplaering-amo-sam.html",
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
        data: `### Mer om`,
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
    ingress: "Støtte for å klare å skaffe eller beholde en jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-oppfolging-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Førsteside til rapporter om deltaker
        Skal du sende inn statusrapport, sluttrapport eller plan for enkeltbrukere på tiltaket? Da må du hente førsteside for å kunne sende dokumenter.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Hent førsteside",
            href: "/soknad/temp-oppfolging-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    ingress: "Støtte for å klare å skaffe eller beholde en jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-avklaring-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Førsteside til rapporter om deltaker
        Skal du sende inn statusrapport, sluttrapport eller plan for enkeltbrukere på tiltaket? Da må du hente førsteside for å kunne sende dokumenter.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Hent førsteside",
            href: "/soknad/temp-avklaring-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    ingress: "Støtte for å klare å skaffe eller beholde en jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-arbeidsrettet-rehabilitering-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Førsteside til rapporter om deltaker
        Skal du sende inn statusrapport, sluttrapport eller plan for enkeltbrukere på tiltaket? Da må du hente førsteside for å kunne sende dokumenter.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Hent førsteside",
            href: "/soknad/temp-arbeidsrettet-rehabilitering-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
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
    ingress: "Hold oversikt over deltakere i tiltakene og dialogen med NAV.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: ["Tiltaksarrangør"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Hold oversikt og send endringer til NAV
        Hold oversikt over deltakere på tiltaket og kommuniser med NAV om endringer i deltakeroversikten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Bruk deltakeroversikten",
            href: "/soknad/temp-deltageroveriskt-for-tiltaksarrangorer-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Deltakeroversikt for tiltaksarrangører",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Fullmakt til å søke om hjelpemidler",
    ingress: "Fullmakt i forbindelse med søknad om tekniske hjelpemidler",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Optiker eller øyelege",
      "Hjelpemiddelformidler",
      "Lege, tannlege eller annen behandler",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Be om fullmakt
        Søkeren kan gi deg fullmakt til å fylle ut og sende inn søknaden på deres vegne. Da vil søkerens signatur på dette skjemaet erstatte signaturen på selve søknadsskjemaet.

        Fullmakten gjelder ikke for tilleggsskjemaer som krever underskrift. Der hvor det er mulig, bruk standard fremgangsmåte med underskrift direkte på søknadsskjemaet.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/temp-fullmakt-til-a-soke-om-hjelpemidler-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Fullmakt til å søke om hjelpemidler)",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Lønnsgaranti",
    ingress: "Sikrer blant annet lønn og feriepenger arbeidstaker har til gode når arbeidsgiveren ikke kan betale, for eksempel ved konkurs.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    role: ["Bostyrer"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send inn opplysninger om boet og kravene
          Bostyrers oversendelsesbrev for søknader om lønnsgarantidekning.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-lonnsgaranti-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Lønnsgaranti",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Oppfostringsbidrag",
    ingress:
      "Hvis kommunen overtar omsorgen for et barn, kan kommunen kreve et oppfostringsbidrag fra foreldrene hvis de har betalingsevne og det er rimelig ut fra situasjonen.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Pengestøtte"],
    role: ["Ansatt i NAV-kontor, kommunen eller fylkeskommunen"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Krav i forbindelse med oppfostringsbidrag etter barnevernloven
          Hvis kommunen søker om oppfostringsbidrag fra begge foreldrene, må kommunen fylle ut to skjemaer.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-oppfostringsbidrag-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Oppfostringsbidrag",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Oppgjør for ortopediske verksteder",
    ingress:
      "De ortopediske verkstedene som har avtale med NAV, forplikter seg til å levere elektronisk oppgjør.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: ["Hjelpemiddelformidler"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Lever oppgjør
          For å få støtten, må verkstedene levere oppgjør gjennom programmet ORTOK.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Demontering av heis",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Opphold i kriminalomsorgen - meld fra",
    ingress:
      "Det er egne regler for å beregne økonomiske ytelser under institusjonsopphold og i fengsel. NAV har derfor behov for rask informasjon fra Kriminalomsorgen når en person kommer i varetekt eller soner en fengselsdom.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Ansatt i NAV-kontor, kommunen eller fylkeskommunen",
      "Andre samarbeidspartnere",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Meld fra om institusjonsopphold`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-opphold-i-kriminalomsorgen-meld-fra-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Meld fra om opphold i kriminalomsorgen",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Opphold på alders- eller sykehjem - meld fra",
    ingress:
      "Det er viktig at NAV får melding om innleggelse/utskriving ved opphold på alders- og sykehjem da dette kan ha betydning for rettigheter til ytelser eller det kan ha konsekvenser for beregningen av ytelsen eller at ytelsen skal stanses eller reduseres.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Andre samarbeidspartnere",
      "Ansatt i NAV-kontor, kommunen eller fylkeskommunen",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Meld fra om innleggelse`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-opphold-pa-alders-eller-sykehjem-meld-fra-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Meld fra om opphold på alders- eller sykehjem",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Innleggelse på helseinstitusjon - meld fra",
    ingress:
      "Det er viktig at helseinstitusjoner melder raskt om personens opphold på helseinstitusjon. Dette har påvirkning på personens ytelser fra NAV, i form av at ytelser kan stanses eller reduseres.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    role: [
      "Andre samarbeidspartnere",
      "Ansatt i NAV-kontor, kommunen eller fylkeskommunen",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Meld fra om innleggelse
          Hver enkelt helseinstitusjon må melde fra skriftlig i form av et brev til NAV. Brevet skal sendes til det NAV lokale kontoret en person tilhører. Det jobbes med å lage et Altinn-skjema.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Meld fra om innleggelse på helseinstitusjon",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Jobbklubb",
    ingress: "",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    role: [
      "Tiltaksarrangør",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Send refusjonskrav for opplæring
        Dette skjemaet brukes av tiltaksarrangør som har fått tilsagn fra NAV for opplæringstiltak (AMO-kurs eller ordinær utdanning) og som skal be om refusjon av tilsagnsbeløp.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-jobbklubb-sam.html",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send fremmøteskjema ved deltakelse
        Dette brukes for å dokumentere deltakelse på tiltaket. `,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema",
            href: "/soknad/temp-jobbklubb-sam.html",
            variant: "primary",
          },
          {
            text: "Ettersend dokumentasjon",
            href: "/soknad/temp-jobbklubb-sam.html",
            variant: "secondary",
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
    if (a == "Andre samarbeidspartnere") return 1;
    if (b == "Andre samarbeidspartnere") return -1;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

module.exports = {
  products,
  activeRole: "Samarbeidspartner",
  typeFilter: getTags(products, "type"),
  roleFilter: getTags(products, "role"),
};
