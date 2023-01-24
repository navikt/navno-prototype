const products = [
  {
    title: "Sykepengeforsikring for selvstendig næringsdrivende",
    ingress: "Forsikring for å få bedre dekning når du blir sykmeldt.",
    type: ["Forsikring"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om opptak eller endring i forsikringen",
          "Et kort avsnitt med tekst",
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
            text: "Sykepengeforsikring for selvstendig næringsdrivende",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Sykepengeforsikring for jordbrukere og reindriftsutøvere",
    ingress: "Forsikring for å få bedre dekning når du blir sykmeldt.",
    type: ["Forsikring"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om opptak eller endring i forsikringen",
          "Et kort avsnitt med tekst",
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
            text: "Sykepengeforsikring for jordbrukere og reindriftsutøvere",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Sykepengeforsikring for frilansere",
    ingress: "Forsikring for å få bedre dekning når du blir sykmeldt.",
    type: ["Forsikring"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om opptak eller endring i forsikringen",
          "Et kort avsnitt med tekst",
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
            text: "Sykepengeforsikring for frilansere",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Frivillig yrkesskadetrygd",
    ingress:
      "En frivillig forsikring for selvstendig næringsdrivende og frilansere.",
    type: ["Forsikring"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Søk om opptak i forsikringen", "Et kort avsnitt med tekst"],
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
            text: "Frivillig yrkesskadetrygd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Forsikring for små bedrifter",
    ingress: "Forsikring mot ansvar for sykepenger i arbeidsgiverperioden.",
    type: ["Forsikring", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Søk om opptak i forsikringen", "Et kort avsnitt med tekst"],
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
        data: ["### Be om refusjon", "Et kort avsnitt med tekst"],
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
            text: "Forsikring for små bedrifter",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tolk på arbeidsplassen",
    ingress:
      "Den som er døv, hørselshemmet eller døvblind kan få tolkehjelp for å kunne utføre arbeidet.",
    type: ["Tjeneste", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om administrasjonstilskudd",
          "Hvis dere har ansatt en eller flere tolker i full stilling, kan bedriften få dekket administrative merkostnader av NAV.",
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
            text: "Tolk på arbeidsplassen",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Funksjonsassistanse i arbeidslivet",
    ingress: "Ingress her …",
    type: ["Tjeneste", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Søk om funksjonsassistanse", "Tekst"],
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
        data: ["### Be om refusjon for funksjonsassistanse", "Tekst"],
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
            text: "Funksjonsassistanse i arbeidslivet",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Lese- og sekretærhjelp",
    ingress:
      "Den som er blind eller svaksynt kan få lese- og sekretærhjelp når hjelpen er nødvendig for å kunne utføre arbeidet.",
    type: ["Tjeneste", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Be om refusjon",
          "Send regning for utført lese- og sekretærhjelp",
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
    title: "Arbeidstrening",
    ingress:
      "Gir personer som trenger ekstra hjelp muligheten til å få relevant erfaring og etter hvert en fast jobb.",
    type: ["Tiltak"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
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
            text: "Arbeidstrening",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Inkluderingstilskudd",
    ingress:
      "Et tilskudd til arbeidsgivere for å tilrettelegge en arbeids- eller tiltaksplass.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Be om refusjon", "Tekst"],
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
            text: "Inkluderingstilskudd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Dekking av sykepenger i arbeidsgiverperioden",
    ingress:
      "Dekking av sykepenger i arbeidsgiverperioden når en arbeidstaker har en langvarig eller kronisk sykdom som kan føre til hyppige sykefravær, eller sykmelding som henger sammen med graviditet.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om unntak fra arbeidsgiveransvar for sykepenger for kronisk syk arbeidstaker",
          "Tekst",
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
        data: [
          "### Søk om unntak fra arbeidsgiveransvar for sykepenger for gravid arbeidstaker",
          "Tekst",
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
        data: [
          "### Be om refusjon av sykepenger",
          "Når du er unntatt fra arbeidsgiveransvar i arbeidsgiverperioden, kan du be om refusjon for sykepenger du har utbetalt.",
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
            text: "Dekking av sykepenger i arbeidsgiverperioden",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Mentor",
    ingress:
      "En støtteordning der en medarbeider blir frikjøpt for å gi praktisk hjelp, veiledning og opplæring.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Be om refusjon", "Tekst"],
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
            text: "Mentor",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Midlertidig lønnstilskudd",
    ingress:
      "Et tilskudd til arbeidsgiveren der NAV dekker en del av lønnen til en arbeidstaker i en periode.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Be om refusjon", "Tekst"],
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
            text: "Midlertidig lønnstilskudd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Varig lønnstilskudd",
    ingress:
      "En støtteordning der NAV dekker en del av lønnen til en arbeidstaker.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Be om refusjon", "Tekst"],
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
            text: "Varig lønnstilskudd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tilskudd til ekspertbistand",
    ingress:
      "Hjelp til arbeidsgiveren og arbeidstakeren fra en nøytral ekspert som har kompetanse på sykefravær og arbeidsmiljø.",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om tilskudd til ekspertbistand",
          "Dette søker du om hos Altinn",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad (hos Altinn)",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Be om refusjon", "Tekst"],
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
            text: "Tilskudd til ekspertbistand",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Tilskudd til sommerjobb",
    ingress:
      "Arbeidsgivere kan søke om tilskudd til sommerjobb for unge arbeidsledige med lite jobberfaring.",
    type: ["Tiltak"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Signer avtale om tiltaksgjennomføring",
          "Avtalen blir inngått mellom arbeidssøkeren, arbeidsgiver og NAV.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Signer avtale",
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
            text: "Tilskudd til sommerjobb",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Varig tilrettelagt arbeid i ordinær bedrift",
    ingress: "Ingress her …",
    type: ["Tiltak", "Refusjon"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk og signer avtale om tiltaksplass for varig tilrettelagt arbeid i ordinær bedrift",
          "Tekst",
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
            text: "Varig tilrettelagt arbeid i ordinær bedrift",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Jobbmestrende oppfølging",
    ingress:
      "Arbeidstrening og oppfølging av ansatte med alvorlige psykiske helseproblemer.",
    type: ["Tiltak"],
    area: ["Inkludering og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Tilby arbeidspraksis i forbindelse med jobbmestrende oppfølging",
          "Tilbudet finnes i Nord-Trøndelag, Buskerud, Telemark, Oslo, Rogaland, Vest-Agder og Oppland. Ta kontakt med NAV-kontoret ditt for mer informasjon.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Finn ditt NAV-kontor",
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
            text: "Jobbmestrende oppfølging",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "NAV Arbeidslivssenter",
    ingress: "Ingress her …",
    type: ["Veiledning"],
    area: ["Rekruttering", "Inkludering og tilrettelegging"],
  },
  {
    title: "Arbeidsgiverlos",
    ingress:
      "Støtte fra en arbeidsgiverlos skal hindre at ansatte med psykiske helseproblemer faller ut av arbeidslivet.",
    type: ["Veiledning"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Finn arbeidsgiverlos",
          "Ta kontakt med ditt nærmeste arbeidslivssenter for å høre om det kan være et tilbud for virksomheten din.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Finn NAV Arbeidslivssenter",
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
            text: "Arbeidsgiverlos",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Kurspakken Sees i morgen!",
    ingress:
      "Skal gi arbeidsgivere, tillitsvalgte og verneombud mer kunnskap om hvordan møte ansatte med psykiske helseproblemer.",
    type: ["Veiledning"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Interessert i tilbudet?",
          "Ta kontakt med ditt nærmeste arbeidslivssenter for å høre om det kan være et tilbud for virksomheten din.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Finn NAV Arbeidslivssenter",
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
            text: "Kurspakken Sees i morgen!",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Arbeidsrådgiving ARK (arbeid og helse)",
    ingress: "Ingress her …",
    type: ["Veiledning"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Yrkesskade eller yrkessykdom - meld fra til NAV",
    ingress: "Send skademelding om arbeidsulykker eller yrkessykdommer.",
    type: ["Skjema"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Meld fra om skade eller sykdom i forbindelse med petroleumsvirksomhet til havs",
          "Tekst",
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
          "### Meld fra om skade eller sykdom under arbeid på land",
          "Du bruker samme skjema enten skaden er påført på norsk eller utenlandsk territorium.",
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
          "### Meld fra om skade eller sykdom under tjeneste på skip eller under fiske/fangst",
          "Tekst",
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
          "### Meld fra om skade eller sykdom under militær tjenestegjøring",
          "Tekst",
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
          "### Meld fra om skade eller sykdom for elev eller student",
          "Tekst",
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
            text: "Meld yrkesskade eller yrkessykdom",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "AA-registeret - søk om tilgang",
    ingress:
      "Arbeidsgiver- og Arbeidstakerregisteret (Aa-registeret) er tilgjengelig for offentlige og noen private aktører. Tilgang kan gis etter søknad.",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Søk om tilgang til AA-registeret",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Søk om tilgang (hos Altinn)",
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
            text: "Søk om tilgang til AA-registeret",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Medlemskap i folketrygden for utsendte arbeidstakere",
    ingress: "Ingress her …",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Meld fra at du sender en arbeidstaker på midlertidig oppdrag til et annet EØS-land eller Sveits",
          "Dette skjemaet fyller du ut når arbeidstakeren er midlertidig utstasjonert. Det skal ikke brukes hvis arbeidstakeren regelmessig veksler mellom å arbeide i Norge og ett eller flere andre land.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema digitalt (hos Altinn)",
            variant: "primary",
          },
          {
            text: "Send skjema i posten",
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
          "### Bekreft utsending av arbeidstaker",
          "Dette skjemaet er et vedlegg til arbeidstakerens søknad om å beholde medlemskapet i folketrygden under opphold utenfor Norge. Når du som arbeidsgiver sender en arbeidstaker på oppdrag i et land utenfor EØS-området, må du fylle ut dette skjemaet.",
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
            text: "Medlemskap i folketrygden for utsendte arbeidstakere",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Permittere",
    ingress:
      "Skal du permittere ansatte, melder du fra til NAV så tidlig som mulig.",
    type: ["Skjema"],
    area: ["Permittering og nedbemanning"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Meld fra om permitteringer, masseoppsigelser og/eller reduksjon i arbeidstid",
          "Tekst",
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
            text: "Permittere",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Meld fra om nedbemanning",
    ingress:
      "Hvis du vurderer eller skal si opp ansatte, skal du så tidlig som mulig sende melding til NAV.",
    type: ["Skjema"],
    area: ["Permittering og nedbemanning"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Meld fra om permitteringer, masseoppsigelser og/eller reduksjon i arbeidstid",
          "Tekst",
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
            text: "Meld fra om nedbemanning",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Kontonummer for bedriften - slik endrer du",
    ingress: "Ingress her …",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Endre kontonummer", "Dette gjør du hos Altinn."],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
            text: "Endre kontonummer for bedriften",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Inntektsmelding - send inn",
    ingress:
      "Arbeidsgivere må sende digitale inntektsmeldinger til NAV i tide.",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Send inntektsmelding", "Dette gjør du hos Altinn."],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
            text: "Send inn inntektsmelding",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Utleggstrekk fra NAV Innkreving",
    ingress:
      "Som arbeidsgiver er du pliktig til å gjennomføre trekk i lønn i henhold til tilsendt trekkpålegg fra NAV Innkreving.",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Be om tilbakebetaling",
          "Hvis du har betalt til NAV Innkreving uten at det er trukket fra den ansatte, kan du søke NAV Innkreving om å få tilbakebetalt beløpet. Send henvendelsen via kontaktskjema på altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Til kontaktskjema (hos Altinn)",
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
            text: "Utleggstrekk fra NAV Innkreving",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Foreldrepenger",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Send trekkopplysninger for arbeidstaker", "Tekst"],
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
            text: "Foreldrepenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Svangerskapspenger",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Send trekkopplysninger for arbeidstaker", "Tekst"],
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
            text: "Svangerskapspenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger for sykt barn",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
          "### Be om refusjon",
          "Du søker om refusjon ved å sende inn en inntektsmelding. Den sendes enten fra arbeidsgivers eget lønns- og personalsystem eller fra altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
            text: "Pleiepenger for sykt barn",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger for utviklingshemmet person over 18 år",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
          "### Be om refusjon",
          "Du søker om refusjon ved å sende inn en inntektsmelding. Den sendes enten fra arbeidsgivers eget lønns- og personalsystem eller fra altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
            text: "Pleiepenger for utviklingshemmet person over 18 år",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Pleiepenger i livets sluttfase",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
          "### Be om refusjon",
          "Du søker om refusjon ved å sende inn en inntektsmelding. Den sendes enten fra arbeidsgivers eget lønns- og personalsystem eller fra altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
            text: "Pleiepenger i livets sluttfase",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Opplæringspenger",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
          "### Be om refusjon",
          "Du søker om refusjon ved å sende inn en inntektsmelding. Den sendes enten fra arbeidsgivers eget lønns- og personalsystem eller fra altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
          "### Be om refusjon",
          "Du søker om refusjon ved å sende inn en inntektsmelding. Den sendes enten fra arbeidsgivers eget lønns- og personalsystem eller fra altinn.no.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
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
    title: "Sykepenger",
    ingress:
      "Erstatter inntekten til arbeidstakeren når de ikke kan jobbe på grunn av sykdom eller skade.",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Søk om sykepenger", "Tekst"],
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
        data: [
          "### Send inntektsmelding for arbeidstaker",
          "Dette gjør du hos Altinn.",
        ],
      },
      {
        type: "actions",
        data: [
          {
            text: "Send skjema (hos Altinn)",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: ["### Send trekkopplysninger for arbeidstaker", "Tekst"],
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
    title: "Reisetilskudd",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt", "Refusjon"],
    area: ["Helse og sykdom"],
    contentBlocks: [
      {
        type: "markdown",
        data: ["### Søk om refusjon", "Tekst"],
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
            text: "Reisetilskudd",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Dagpenger",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt"],
    area: ["Permittering og nedbemanning"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inn bekreftelse på arbeidsforhold og permittering",
          "Dette sender du inn når en permittert arbeidstaker har behov for dokumentasjon i forbindelse med dagpengesøknad.",
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
          "### Send inn bekreftelse på sluttårsak eller nedsatt arbeidstid (ikke permittert)",
          "Dette sender du inn når en oppsagt arbeidstaker har behov for dokumentasjon i forbindelse med dagpengesøknad.",
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
          "### Send inn bekreftelse på arbeidsforhold",
          "Skjemaet gjelder bekreftelse på arbeidsforhold for tidligere ansatt. Det gjelder opparbeidede rettigheter etter EØS regelverket.",
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
            text: "Dagpenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Lønnsgaranti",
    ingress: "Ingress her …",
    type: ["Pengestøtte til ansatt"],
    area: ["Permittering og nedbemanning"],
    contentBlocks: [
      {
        type: "markdown",
        data: [
          "### Send inn opplysninger om boet og kravene",
          "Dette sender bostyrer inn i forbindelse med søknader om lønnsgarantidekning.",
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
            text: "Lønngaranti",
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
  areaFilter: getTags(products, "area"),
};
