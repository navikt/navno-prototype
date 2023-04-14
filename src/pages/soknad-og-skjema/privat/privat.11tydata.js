const products = [
  {
    title: "Alderspensjon",
    ingress:
      "Alderspensjon fra folketrygden sikrer at du har en inntekt når du er pensjonist.",
    icon: "/src/_includes/svg/pictograms/alderspensjon.svg",
    type: ["Pengestøtte"],
    area: ["Pensjon"],
  },
  {
    title: "Ansiktsprotese",
    ingress: "Etterligner den delen av ansiktet som mangler eller er skadet.",
    icon: "/src/_includes/svg/pictograms/ansiktsprotese.svg",
    type: [
      "Hjelpemiddel",
      "Pengestøtte",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Arbeids- og utdanningsreiser",
    ingress:
      "Hvis du har varige forflytningsvansker og ikke kan reise til og fra arbeids- eller utdanningssted med offentlige kommunikasjonsmidler, kan du søke om stønad til arbeids- og utdanningsreiser. Ordningen innebærer at du kan få transport med drosje til og fra arbeid eller skole.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: [
      "Arbeid",
      "Hjelpemidler og tilrettelegging",
    ],
  },
  {
    title: "Arbeidsavklaringspenger (AAP)",
    ingress:
      "Sikrer deg inntekt i perioder du har behov for hjelp fra NAV for å komme i eller beholde arbeid på grunn av sykdom eller skade.",
    icon: "/src/_includes/svg/pictograms/aap.svg",
    type: ["Pengestøtte"],
    area: [
      "Arbeid",
      "Helse og sykdom",
    ],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om arbeidsavklaringspenger (AAP)
        For at vi skal vurdere om du har rett til AAP, må du søke om det. Du kan tidligst få AAP fra den dagen du søker.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om å beholde AAP under opphold i utlandet
        Du trenger ikke å søke hvis du er EU/EØS-borger eller sveitsisk statsborger og skal oppholde deg innenfor EU/EØS eller Sveits.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om reisestønad
        Du kan søke om reisetilskudd for å dekke ekstrautgifter til reise til og fra arbeids-og undervisningsstedet, hvis du på grunn av sykdom eller skade ikke kan reise på vanlig måte.

        Du må legge ved en legeerklæring som viser at du ikke kan reise på vanlig måte, og at du ellers ville vært sykmeldt.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om AAP under etablering av egen virksomhet (utviklingsfase)
        Dersom du allerede mottar arbeidsavklaringspenger, kan du søke om å beholde disse under etablering av egen virksomhet. Du kan beholde dem i en utviklingsfase på inntil 6 måneder. Du må søke før bedriften starter opp.

        Vedleggsskjemaet "Næringsfaglig vurdering av etableringsplaner" må legges ved søknaden. Det skal fylles ut av fylkeskommunen,  kommunen, eller en annen kompetent instans.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om AAP under etablering av egen virksomhet (oppstartfase)
        Dersom du allerede mottar arbeidsavklaringspenger, kan du søke om å beholde disse under etablering av egen virksomhet. Du kan beholde dem i en oppstartsfase på inntil 3 måneder. Du må søke før bedriften starter opp.

        Vedleggsskjemaet "Næringsfaglig vurdering av etableringsplaner" må legges ved søknaden. Det skal fylles ut av fylkeskommunen, kommunen, eller en annen kompetent instans.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn næringsfaglig vurdering av etableringsplaner
        Dette sender du inn hvis du søker om å beholde dagpenger, arbeidsavklaringspenger (AAP) eller overgangsstønad mens du etablerer egen virksomhet.

        Du må innhente en næringsfaglig vurdering av etableringsplanene dine fra fylkeskommunen, kommunen eller en annen kompetent instans, før NAV kan behandle søknaden.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/aap/",
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
    title: "Arbeidsforberedende trening",
    ingress:
      "Et tiltak for deg som har behov for en skjermet og tilrettelagt jobb i en oppstartsfase, før du går over i arbeidstrening hos bedrifter i ordinært arbeidsliv.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Arbeidsrettet rehabilitering",
    ingress:
      "Et tiltak som skal styrke arbeidsevnen din og hjelpe deg med å mestre helserelaterte og sosiale problemer som hindrer deg i å delta i arbeidslivet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Arbeidsrettet veiledningstjeneste",
    ingress:
      "NAV-kontor og NAV Hjelpemiddelsentral gir råd og veiledning om hva som skal til for å delta i arbeid.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Veiledning"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Arbeidssøker - registrer deg",
    ingress:
      "Når du har registrert deg, kan vi sammen med deg vurdere situasjonen din og finne ut hva du trenger hjelp til.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Arbeid"],
  },
  {
    title: "Arbeidstrening",
    ingress:
      "Et tiltak for deg som vil se om du kan mestre en bestemt type jobb, eller trenger en referanse mens du søker vanlig jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Arm- og benproteser",
    ingress: "Erstatter en manglende kroppsdel.",
    icon: "/src/_includes/svg/pictograms/arm-og-benprotese.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Avklaring",
    ingress:
      "Et tiltak for deg som er usikker på hva du kan jobbe med, for eksempel fordi du har fått dårligere helse eller har vært lenge ute av arbeidslivet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Avtalefestet pensjon (AFP) i offentlig sektor",
    ingress:
      "AFP i offentlig sektor er en tidligpensjonsordning for deg som er mellom 62-67 år og er født før 1963. Ordningen er i hovedsak for ansatte i stat, fylke og kommune.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Pensjon"],
  },
  {
    title: "Avtalefestet pensjon (AFP) i privat sektor",
    ingress:
      "AFP i privat sektor er en pensjonsordning for deg som er ansatt i en privat bedrift med en tariffavtale som har AFP som en del av avtalen. Denne pensjonsytelsen kommer i tillegg til alderspensjon fra folketrygden.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Pensjon"],
  },
  {
    title: "Barnebidrag",
    ingress:
      "Om hvordan dere kan utforme en privat avtale og forslag til beregning av bidrag som avtales mellom foreldrene.",
    icon: "/src/_includes/svg/pictograms/barnebidrag.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Barnepensjon",
    ingress:
      "Hvis du er barn og mister en eller begge foreldrene dine, kan du få økonomisk støtte. Pensjonen skal sikre deg inntekt til å leve og bo.",
    icon: "/src/_includes/svg/pictograms/barnepensjon.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Pensjon",
    ],
  },
  {
    title: "Barnetrygd",
    ingress: "Månedlig utbetaling for deg som har barn under 18 år.",
    icon: "/src/_includes/svg/pictograms/barnetrygd.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Bestillingsordningen",
    ingress:
      "Bestillingsordningen har forenklet saksbehandling i NAV. Hjelpemidler man kan bestille gjennom denne ordningen er enkle produkter som ikke krever individuelle tilpasninger.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Bevegelseshjelpemidler",
    ingress:
      "Har du motoriske utfordringer, kan tilrettelegging og hjelpemidler gjøre hverdagen enklere.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Bidrag til særlige utgifter",
    ingress:
      "Den andre forelderen betaler sin del av utgifter som tannregulering, konfirmasjon og briller.",
    icon: "/src/_includes/svg/pictograms/bidrag-sarlige-utgifter.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Bidragsforskudd",
    ingress:
      "Sikrer deg utbetaling av barnebidrag. Dette kan du også få selv om far er ukjent eller hvis du har fått barn ved hjelp av sæddonasjon.",
    icon: "/src/_includes/svg/pictograms/bidragsforskudd.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Bilstønad",
    ingress:
      "Støtte til bil, tilpasning av bil og spesialutstyr til bruk i bil.",
    icon: "/src/_includes/svg/pictograms/grunnstonad.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Briller og kontaktlinser for synshemmede",
    ingress:
      "Støtte til briller eller kontaktlinser når du har en øyetilstand, sykdom eller lidelse som gir behov for briller.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Briller til barn",
    ingress: "Tilskudd til barn og unge under 18 år som trenger briller.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: [
      "Familie og barn",
      "Hjelpemidler og tilrettelegging",
    ],
  },
  {
    title: "Briller til behandling eller forebygging av amblyopi",
    ingress: "Kan behandle eller forebygge synsnedsettelsen amblyopi hos barn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Brystprotese",
    ingress:
      "Etterligner et bryst i form og størrelse, og finnes i mange ulike utgaver.",
    icon: "/src/_includes/svg/pictograms/brystprotese.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Egenerklæring for utenlandske sykmeldinger",
    ingress:
      "Hvis du har sykmelding fra lege utenfor Norge, må du fylle ut dette skjemaet, vedlegge sykmeldingen og sende til NAV.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Ektefellebidrag",
    ingress:
      "Dette kan du i noen tilfeller få hvis muligheten din til å forsørge deg selv er svekket på grunn av ekteskapet eller omsorg for barna.",
    icon: "/src/_includes/svg/pictograms/ektefellebidrag.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Engangsstønad",
    ingress:
      "En engangssum du kan få i forbindelse med fødsel eller adopsjon hvis du ikke har hatt inntekt i 6 av de siste 10 månedene. Dette får du istedenfor foreldrepenger.",
    icon: "/src/_includes/svg/pictograms/engangsstonad.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Enslig mor eller far som er arbeidssøker - send inn opplysninger",
    ingress:
      "Dette skjemaet må du fylle ut dersom du er arbeidssøker og søker om overgangsstønad til enslig mor eller far.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Familie og barn",
      "Arbeid",
    ],
  },
  {
    title:
      "Farskap eller medmorskap fastsatt i utlandet - søknad om anerkjennelse i Norge",
    ingress:
      "Hvis farskapet eller medmorskapet for barnet ditt er fastsatt utenfor Norden, kan du søke om at den utenlandske avgjørelsen anerkjennes i Norge.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Familie og barn"],
  },
  {
    title: "Farskapsregistrering",
    ingress:
      "Far kan erklære farskapet både, før og etter fødsel. Erklæring av farskap skal gjøres skriftlig enten ved å erklære digitalt eller ved oppmøte på et offentlig kontor.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Familie og barn"],
  },
  {
    title: "Førerhund",
    ingress:
      "Hjelper deg å ta deg frem innendørs og utendørs når du er blind eller svært svaksynt.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Forhøyet hjelpestønad",
    ingress:
      "Økonomisk støtte til barn under 18 år som har et vesentlig større behov for pleie og tilsyn, enn det som dekkes av ordinær hjelpestønad.",
    icon: "/src/_includes/svg/pictograms/forhoyet-hjelpestonad.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Frivillig skattetrekk",
    ingress:
      "Et frivillig skattetrekk vil si at du blir trukket mer skatt enn det skattekortet ditt viser. Det blir også kalt ekstra skattetrekk.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Frivillig yrkesskadetrygd",
    ingress:
      "Yrkesskadetrygd er en frivillig forsikring for selvstendig næringsdrivende og frilansere.",
    icon: "/src/_includes/svg/pictograms/frivillig-yrkesskadetrygd.svg",
    type: ["Forsikring"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Funksjonsassistanse i arbeidslivet",
    ingress:
      "Hjelper deg med praktiske oppgaver når det er nødvendig for at du skal kunne utføre jobben din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tjeneste"],
    area: [
      "Arbeid",
      "Hjelpemidler og tilrettelegging",
    ],
  },
  {
    title: "Gjenlevendepensjon",
    ingress:
      "Gjenlevendepensjon sikrer deg inntekt hvis du mister ektefelle, partner eller samboer med felles barn. I noen tilfeller kan du få støtte hvis dere tidligere har vært gift.",
    icon: "/src/_includes/svg/pictograms/gjenlevendepensjon.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Pensjon",
    ],
  },
  {
    title: "Gravferdsstønad",
    ingress:
      "Gravferdsstønad skal bidra til å dekke faktiske og nødvendige utgifter til gravferden. Stønaden er behovsprøvd.",
    icon: "/src/_includes/svg/pictograms/gravferdsstonad.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Grønt arbeid",
    ingress:
      "Grønt arbeid er et tilbud til deg som har psykiske helseproblemer og/eller rusproblemer, og som ønsker hjelp til å komme i jobb. Du deltar i den daglige driften på et gårdsbruk og der får arbeidsoppgaver som passer til situasjonen din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Grunnmønster og søm av klær",
    ingress: "Brukes som grunnlag for å skreddersy klær.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Grunnstønad",
    ingress:
      "Du eller barnet ditt kan få dekket ekstrautgifter som skyldes en varig skade, sykdom eller funksjonsnedsettelse.",
    icon: "/src/_includes/svg/pictograms/grunnstonad.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Hjelpestønad",
    ingress:
      "Økonomisk støtte til barn eller voksne som trenger langvarig, privat pleie og tilsyn.",
    icon: "/src/_includes/svg/pictograms/hjelpestonad.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Honnørkort",
    ingress:
      "Med honnørkort får du redusert billettpris på kollektive transportmidler. Kortet gir også rett til honnørrabatt for ektefelle eller registrert partner som reiser sammen med deg, uansett alder.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Pensjon",
      "Helse og sykdom",
    ],
  },
  {
    title: "Høreapparat",
    ingress: "Forsterker lyden rundt deg når du har nedsatt hørsel.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Huske, planlegge og organisere – hjelpemidler",
    ingress:
      "Kognisjon handler om hjernens evne til å motta, bearbeide og uttrykke informasjon. Hjelpemidler kan bedre situasjonen for mange.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Individuell jobbstøtte (IPS)",
    ingress:
      "IPS er et tilbud til deg som har det vanskelig psykisk eller har utfordringer med rus. Du ønsker hjelp til å komme i jobb og få støtte til å bli værende i jobben.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Inkluderingstilskudd",
    ingress:
      "Inkluderingstilskudd er for deg som trenger å tilrettelegge arbeids- eller tiltaksplassen. Det er arbeidsgiveren som søker om tilskuddet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
  },
  {
    title: "Introduksjonsstønad",
    ingress:
      "Deltakere i introduksjonsprogram har rett til introduksjonsstønad. Stønaden er ment som inntektssikring mens de deltar i programmet. Det er kommunen som utbetaler stønaden.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Veiledning",
    ],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "IPS ung – individuell karrierestøtte",
    ingress:
      "IPS ung er et tilbud til deg mellom 16-30 år, som har det vanskelig psykisk eller har utfordringer med rus, og som trenger hjelp til å starte eller komme tilbake til jobb eller skole. IPS ung er et tilbud i samarbeid mellom NAV og helsetjenesten.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Irislinse",
    ingress:
      "Dekker over en deformert iris ved hjelp av en spesiallaget kontaktlinse.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Jobbklubb",
    ingress:
      "Jobbklubb er et kortvarig tiltak for deg som søker jobb. Når du deltar på jobbklubb, får du støtte og hjelp til å orientere deg på arbeidsmarkedet og være en aktiv jobbsøker.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Jobbmestrende oppfølging",
    ingress:
      "Jobbmestrende oppfølging er et tilbud til deg med alvorlige psykiske helseproblemer. Du får arbeidstrening og oppfølging. Målet er at du skal komme ut i vanlig jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Jobbsøkerkurs (digitalt)",
    ingress:
      "Digitalt jobbsøkerkurs er for deg som er arbeidssøker eller permittert.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Kjøreliste for godkjent bruk av egen bil",
    ingress:
      "Hvis NAV har godkjent at du kan bruke din egen bil i til arbeid, utdanning eller til tilpasning av hjelpemidler, kan du sende inn kjøreliste for å få tilbakebetalt utleggene dine.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Arbeid"],
  },
  {
    title: "Klagerettigheter",
    ingress:
      "Når du søker NAV om økonomisk støtte eller en tjeneste, får du et svar. Dette er vedtaket i saken din. I vedtaket står det hvordan du skal gå fram hvis du skal klage, hvem du skal klage til og klagefrist.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Kontaktinformasjon – slik endrer du",
    ingress:
      "Når NAV sender deg post, sender vi posten til kontaktinformasjonen du har registrert i kontakt- og reservasjonsregisteret, eller til adressen du har oppgitt til folkeregisteret.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Kontantstøtte",
    ingress:
      "Pengestøtte når du har barn mellom 1 og 2 år som ikke har fått fulltidsplass i barnehage.",
    icon: "/src/_includes/svg/pictograms/kontantstotte.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om kontantstøtte
        Du kan tidligst søke den måneden barnet fyller ett år.
        Hvis dere som er foreldre bor sammen, søker én av dere.
        Hvis dere bor hver for dere, er det den barnet bor fast sammen med som kan søke om kontantstøtte.
        Hvis dere har inngått en skriftlig avtale om delt bosted etter barneloven § 36, kan dere bli enige om å dele kontantstøtten. Dere må søke om kontantstøtte hver for dere.`,
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
        type: "markdown",
        data: `Du kan ikke få etterbetalt kontantstøtte for mer enn 3 måneder før den kalendermåneden du søkte.`,
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send tilleggsskjema for utbetaling av støtten i et annet EØS-land
        Dette skjemaet bruker du hvis du jobber i Norge og barnet ditt bor i et annet EØS-land. Skjemaet er et vedlegg til søknaden.`,
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
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Kontantstøtte",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Kontonummer internasjonalt – slik endrer du",
    ingress: "Om kontoendringer (internasjonalt).",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Kontonummer – slik endrer du",
    ingress:
      "Når du søker om pengestøtte fra NAV, må du kontrollere at vi har korrekt kontonummer. Du kan sjekke kontonummeret som er registrert på deg ved å logge inn på nav.no.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Krigspensjon",
    ingress:
      "Krigspensjon er en kompensasjon for nedsatt arbeidsevne på grunn av skader som følge av krigen 1939-45.",
    icon: "/src/_includes/svg/pictograms/krigspensjon.svg",
    type: ["Pengestøtte"],
    area: ["Pensjon"],
  },
  {
    title: "Kronisk syk eller gravid arbeidstaker",
    ingress:
      "NAV kan dekke sykepenger i arbeidsgiverperioden når du har hyppige sykefravær på grunn av kronisk sykdom eller graviditet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: [
      "Arbeid",
      "Helse og sykdom",
    ],
  },
  {
    title: "Kvalifiserings­programmet",
    ingress:
      "Kvalifiseringsprogrammet er for deg mellom 18 og 67 år som ønsker å komme i jobb, men trenger ekstra oppfølging for å klare det.",
    icon: "/src/_includes/svg/pictograms/kvalifiseringsprogrammet.svg",
    type: [
      "Pengestøtte",
      "Veiledning",
    ],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Lese- og sekretærhjelp",
    ingress: "Hjelper deg med å lese og skrive når du er blind eller svaksynt.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tjeneste"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Lese og skrive – hjelpemidler",
    ingress:
      "Har du lese- og/eller skrivevansker, kan du ha rett på hjelpemidler som gjør det lettere for deg å lese og/eller skrive.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Leveattest for deg som får pensjon og uføretrygd i utlandet",
    ingress:
      "Hvis du er bosatt i utlandet og får pensjon eller uføretrygd fra NAV, kan vi be deg om å levere leveattest. Vi gjennomfører årlig leveattestkontroller for å sikre at utbetalingene går til riktig mottaker.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Pensjon"],
  },
  {
    title: "Lønnsgaranti",
    ingress:
      "Lønnsgarantien skal sikre at du får utbetalt lønn, feriepenger og annen betaling for arbeid som du har til gode når arbeidsgiveren ikke kan betale ved for eksempel konkurs.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
  },
  {
    title: "Lydutjevningsanlegg",
    ingress:
      "Bidrar til at du får med deg det som blir sagt når du er i rom med mange lydforstyrrelser.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Lyttehjelpemidler for telefon",
    ingress:
      "Forsterker lyden fra telefonen når du trenger å høre telefonsamtale bedre.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Lyttehjelpemidler til TV og radio",
    ingress:
      "Sender lyden fra det du vil høre på til en ønsket mottaker hos deg.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Medlemskap i folketrygden",
    ingress:
      "Skal du arbeide eller oppholde deg i utlandet, kan det medføre at medlemskapet ditt i folketrygden opphører. I slike tilfeller bør du sende inn en søknad til NAV for å få en vurdering av medlemskapet. Hvis du bor i et annet EØS-land og arbeider i Norge, eller nylig har flyttet til Norge, kan et annet land be om dokumentasjon på at du er medlem i folketrygden. I slike tilfeller kan du også sende inn en søknad.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Meld fra om endringer",
    ingress:
      "Meld straks fra hvis du får endringer i inntekten, familiesituasjonen, jobbsituasjonen eller planlegger opphold i utlandet. Det kan ha betydning for pengestøtte du får fra NAV.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Arbeid",
      "Familie og barn",
      "Hjelpemidler og tilrettelegging",
      "Pensjon",
    ],
  },
  {
    title: "Meldekort",
    ingress:
      "For å være registrert som arbeidssøker eller for å få dagpenger, AAP og tiltakspenger, må du sende meldekort hver 14. dag.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Arbeid",
      "Helse og sykdom",
    ],
  },
  {
    title: "Menerstatning ved yrkesskade eller yrkessykdom",
    ingress:
      "Du kan søke om menerstatning ved yrkesskade eller yrkessykdom hvis du har fått varig medisinsk invaliditet.",
    icon: "/src/_includes/svg/pictograms/menerstatning.svg",
    type: ["Pengestøtte"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Mentor",
    ingress:
      "Mentor er et tilskudd fra NAV for å frikjøpe en kollega eller en medstudent som hjelper deg med å mestre en jobb eller utdanning.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Midlertidig botilbud (nødssituasjon)",
    ingress:
      "Hvis du ikke klarer å finne et sted å bo selv, skal NAV hjelpe deg med å finne et midlertidig botilbud.",
    icon: "/src/_includes/svg/pictograms/midlertidig-botilbud.svg",
    type: [
      "Tjeneste",
      "Veiledning",
    ],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Midlertidig lønnstilskudd",
    ingress:
      "Midlertidig lønnstilskudd skal bidra til å øke mulighetene for å få jobb. Du får ordinær lønn og ansettelse i hel- eller deltidsstilling, mens arbeidsgiveren din får et tilskudd til lønnen din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Økonomi- og gjeldsrådgivning",
    ingress:
      "NAV kan gi deg råd om privatøkonomien din. Tjenesten er gratis og du bør søke hjelp så tidlig som mulig.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Veiledning"],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Økonomisk sosialhjelp",
    ingress:
      "Økonomisk sosialhjelp er en midlertidig støtte du kan få hvis du ikke kan forsørge deg selv.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Omsorgspenger (hjemme med sykt barn-dager)",
    ingress:
      "Sikrer deg inntekt når du må være borte fra jobb fordi barnet ditt for eksempel har fått omgangssyke.",
    icon: "/src/_includes/svg/pictograms/omsorgspenger.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Omsorgsstønad og utbetalinger fra NAV",
    ingress:
      "Hvis du mottar kommunal omsorgsstønad (tidligere omsorgslønn), må du melde fra til NAV hvis du søker om/har en pengestøtte fra NAV. Omsorgsstønaden kan påvirke beregningen av pengestøtten din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Oppfølging",
    ingress:
      "Du kan få oppfølging hvis du trenger omfattende støtte for å klare å skaffe eller beholde en jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Oppfostringsbidrag",
    ingress:
      "Hvis kommunen overtar omsorgen for barnet ditt, kan det bli krevd oppfostringsbidrag fra deg som forelder.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Familie og barn"],
  },
  {
    title: "Opplæring",
    ingress:
      "Opplæring er tiltak for deg som trenger kvalifisering for å kunne få jobb. Hensikten er at du skal bli kvalifisert for ledige jobber.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Opplæringspenger",
    ingress:
      "Sikrer deg inntekt når du må være borte fra jobb fordi du deltar i opplæring for å kunne ta vare på et barn eller en voksen.",
    icon: "/src/_includes/svg/pictograms/opplaeringspenger.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Opplysning, råd og veiledning",
    ingress:
      "Du kan få veiledning hos NAV for å forebygge eller løse utfordringer med hjemmeforhold, bosituasjon, omsorg for barn, arbeid eller økonomi.",
    icon: "/src/_includes/svg/pictograms/opplysning-rad-og-veiledning.svg",
    type: ["Veiledning"],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Ortopediske sko",
    ingress: "Hjelper deg når du har ulike problemer med føttene.",
    icon: "/src/_includes/svg/pictograms/ortopediske-sko.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Ortoser",
    ingress:
      "Stabiliserer eller gir bedre funksjon når du har en kroppsdel som er lammet eller svekket.",
    icon: "/src/_includes/svg/pictograms/ortoser.svg",
    type: [
      "Pengestøtte",
      "Hjelpemiddel",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Overgangsstønad for enslig mor eller far",
    ingress:
      "Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år.",
    icon: "/src/_includes/svg/pictograms/overgangsstonad-enslig-foreldre.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om overgangsstønad
        Du bruker samme søknad både hvis du søker for første gang og hvis du søker forlengelse eller utvidelse av stønadstiden din.
        Hvis du har BankID, er det raskt og enkelt å søke overgangsstønad digitalt. Den digitale søknaden tilpasser spørsmålene til situasjonen din, og du får beskjed underveis hvis du må dokumentere noen av opplysningene dine.`,
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
        type: "markdown",
        data: `### Forlengelse av overgangsstønad som følge av koronasituasjonen
        Dette er en midlertidig ordning som er opprettet som følge av koronasituasjonen. Dette skjemaet gjelder kun søknad om forlengelse av overgangsstønaden som følge av koronasituasjonen.`,
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
    ],
  },
  {
    title: "Overgangsstønad til gjenlevende",
    ingress:
      "Sikrer deg inntekt hvis ekteskapet har vart i mindre enn 5 år og dere ikke har felles barn, eller hvis du har daglig omsorg for den avdødes barn.",
    icon: "/src/_includes/svg/pictograms/overgangsstonad-gjenlevende.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Øyeprotese",
    ingress: "Erstatter øyet når du mangler et øye, eller har skadet øyet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Pensjonsopptjening ved omsorg for barn",
    ingress:
      "Har du eller har du hatt daglig omsorg for små barn fra 0 til og med 5 år, kan du ha rett på pensjonsopptjening. Dette kalles omsorgsopptjening.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Pensjon",
      "Familie og barn",
    ],
  },
  {
    title:
      "Pensjonsopptjening ved omsorg for syke, eldre og personer med funksjonsnedsettelser",
    ingress:
      "Hvis du tar deg av en person som er syk, eldre eller har en funksjonsnedsettelse, kan du ha rett på pensjonsopptjening. Dette kalles omsorgsopptjening.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: [
      "Pensjon",
      "Familie og barn",
    ],
  },
  {
    title: "Pleiepenger for en utviklingshemmet person over 18 år",
    ingress:
      "Sikrer deg inntekt når du må være borte fra jobb for å ta vare på en person over 18 år som er utviklingshemmet og svært alvorlig syk.",
    icon: "/src/_includes/svg/pictograms/pleiepenger-utviklingshemmet.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Pleiepenger for sykt barn",
    ingress:
      "Sikrer deg inntekt når du må være borte fra jobb for å pleie og ta vare på et barn som har vært innlagt eller til behandling på sykehus.",
    icon: "/src/_includes/svg/pictograms/pleiepenger-sykt-barn.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Pleiepenger i livets sluttfase",
    ingress:
      "Sikrer deg inntekt når du må være borte fra jobb for å ta vare på en person som er i livets sluttfase.",
    icon: "/src/_includes/svg/pictograms/pleiepenger-livets-sluttfase.svg",
    type: ["Pengestøtte"],
    area: [
      "Familie og barn",
      "Helse og sykdom",
    ],
  },
  {
    title: "Reisetilskudd",
    ingress:
      "Du kan få reisetilskudd i stedet for sykepenger hvis det gjør at du kan være i arbeid helt eller delvis. Du kan også få reisetilskudd sammen med graderte sykepenger.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Reiseutgifter",
    ingress:
      "Dekker reiseutgiftene dine når du skal prøve, tilpasse eller reparere et hjelpemiddel.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Samtale – hjelpemidler",
    ingress: "Gjør det lettere å delta i samtaler når du har nedsatt hørsel.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Seksualtekniske hjelpemidler",
    ingress: "Kan gi et bedre sexliv når du har nedsatt seksualfunksjon.",
    icon: "/src/_includes/svg/pictograms/seksualtekniske-hjelpemidler.svg",
    type: [
      "Hjelpemiddel",
      "Pengestøtte",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Senter for jobbmestring",
    ingress:
      "Senter for jobbmestring er et tilbud for deg som har angst og/eller depresjon. Målet er å hjelpe deg med å mestre symptomene slik at du kan bli værende i jobb eller komme i jobb.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tjeneste"],
    area: ["Arbeid"],
  },
  {
    title: "Servicehund",
    ingress:
      "Hjelper deg i hverdagen når du har fysiske funksjonsnedsettelser.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title:
      "Søk om frivillig medlemskap i folketrygden under jobb eller opphold i utlandet",
    ingress:
      "Hvis du er medlem i folketrygden og skal oppholde deg i utlandet, kan det føre til at du mister medlemskapet i folketrygden. Du kan på visse vilkår søke om frivillig medlemskap i folketrygden.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Stønad til barnetilsyn for gjenlevende ektefelle",
    ingress:
      "Dekker deler av utgiftene til barnepass, når du er gjenlevende ektefelle som er alene om omsorgen for barnet ditt og er i arbeid.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Stønad til skolepenger for gjenlevende ektefelle",
    ingress:
      "Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er alene med barn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Stønad til skolepenger for tidligere familiepleiere",
    ingress:
      "Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er tidligere familiepleier.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Stønad ved båretransport",
    ingress:
      "Stønad ved båretransport skal bidra til å dekke utgifter i forbindelse med gravlegging. Stønaden blir gitt når båren med den avdøde må transporteres over lengre avstander.",
    icon: "/src/_includes/svg/pictograms/stonad-baretransport.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Støtte til folkehøyskole",
    ingress:
      "Dekker ekstrautgifter når du går tilrettelagt linje med opplæring i daglige aktiviteter.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Studier med støtte",
    ingress:
      "Studier med støtte er et tilbud for deg som har psykiske helseproblemer og behov for støtte til å gjennomføre skolegang eller studier.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Supplerende stønad for personer over 67 år med kort botid i Norge",
    ingress: "Gir deg høyere pensjon når du har bodd kort tid i Norge.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Pensjon"],
  },
  {
    title: "Supplerende stønad for uføre flyktninger under 67 år",
    ingress:
      "Hvis du er både ufør og har flyktningstatus, er du dermed garantert en samlet inntekt som tilsvarer minste ytelse for uføretrygd. Har du søkt om uføretrygd i 2020 eller tidligere, har du ikke rett til denne stønaden. Det er et vilkår at du har søkt om uføretrygd i januar 2021 og senere.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: [
      "Pensjon",
      "Helse og sykdom",
    ],
  },
  {
    title: "Svangerskapspenger",
    ingress:
      "Erstatter inntekten din når du er frisk, men ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for barnet.",
    icon: "/src/_includes/svg/pictograms/svangerskapspenger.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Sykepenger",
    ingress:
      "Erstatter inntekten din når du ikke kan jobbe på grunn av sykdom eller skade.",
    icon: "/src/_includes/svg/pictograms/sykepenger.svg",
    type: ["Pengestøtte"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Sykkel",
    ingress:
      "NAV Hjelpemiddelsentral låner ut mange ulike typer sykler. En spesialsykkel kan for mange gi bedre framkommelighet, mulighet for fysisk aktivitet og økt sosial deltakelse i samfunnet.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Synshjelpemidler",
    ingress:
      "Har du en varig synsnedsettelse kan du ha rett til hjelpemidler som kan bedre funksjonsevnen din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tale og språk – hjelpemidler",
    ingress:
      "Har du vansker med tale og språk, kan hjelpemidler gjøre det lettere å kommunisere.",
    icon: "/src/_includes/svg/pictograms/tegnspraak.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Taushetsplikt, samtykke og fullmakt",
    ingress:
      "NAV har taushetsplikt om all kontakt du har med NAV, inkludert opplysninger om hvilke tjenester og utbetalinger du mottar. Hvis andre skal få tilgang til de opplysningene som NAV har om deg, må de ha lovhjemmel eller samtykke fra deg.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Skjema"],
    area: ["Annet"],
  },
  {
    title: "Teleslynge",
    ingress:
      "Forsterker lyd slik at du kan høre eller oppfatte tale når du har nedsatt hørsel.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilbehør til høreapparat",
    ingress:
      "Gjør at du kan bruke høreapparat i flere situasjoner og andre sammenhenger.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilleggsstønader til enslig mor eller far",
    ingress:
      "Støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking når du er alene med barn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Tilleggsstønader til gjenlevende ektefelle",
    ingress:
      "Tar du utdanning eller søker jobb, kan du ha rett til støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Tilleggsstønader til tidligere familiepleiere",
    ingress:
      "Støtte til utgifter hvis du gjennomfører nødvendig og godkjent utdanning for å komme i eller beholde arbeid.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Tilleggsstønader",
    ingress:
      "Støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking.",
    icon: "/src/_includes/svg/pictograms/tilleggsstonad.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
  },
  {
    title: "Tilpasning av bolig",
    ingress:
      "Hvis du har en vesentlig og varig funksjonsnedsettelse, kan tilpasning og hjelpemidler gjøre deg mer selvhjulpen og i stand til å bli boende hjemme.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilpasningskurs - nedsatt syn og hørsel",
    ingress:
      "Gir verktøy og kunnskap når du har nedsatt syn eller nedsatt hørsel.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Sosiale tjenester og veiledning"],
  },
  {
    title: "Tilskudd til apper og programvare",
    ingress:
      "Gjelder apper og programvare som er spesielt utviklet for ulike funksjonsnedsettelser.",
    icon: "/src/_includes/svg/pictograms/tilskudd.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilskudd til ekspertbistand",
    ingress:
      "Er du sykemeldt, eller har du vært sykemeldt? Har du utfordringer med å mestre jobben din? Du og arbeidsgiveren din kan få hjelp fra en nøytral ekspert med kompetanse på sykefravær og arbeidsmiljø. Eksperten skal bidra til å avklare utfordringene som fører til sykefravær og foreslå tiltak.",
    icon: "/src/_includes/svg/pictograms/tilskudd.svg",
    type: ["Tiltak"],
    area: [
      "Arbeid",
      "Helse og sykdom",
    ],
  },
  {
    title: "Tilskudd til kjøp av PC eller nettbrett ved dysleksi",
    ingress:
      "Du kan søke om tilskudd til kjøp av PC eller nettbrett hvis du har spesifikke lese- og skrivevansker (dysleksi).",
    icon: "/src/_includes/svg/pictograms/tilskudd.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilskudd til rimelige hjelpemidler",
    ingress:
      "Gir økonomisk støtte når du trenger rimelige tekniske hjelpemidler.",
    icon: "/src/_includes/svg/pictograms/tilskudd.svg",
    type: ["Pengestøtte"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tilskudd til sommerjobb",
    ingress:
      "Tiltaket er et tilbud til deg som ønsker å få nyttig arbeidserfaring i sommer og har behov for hjelp fra NAV med å finne en aktuell arbeidsgiver.",
    icon: "/src/_includes/svg/pictograms/tilskudd.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Tiltakspenger",
    ingress:
      "Når du deltar i et arbeidsmarkedstiltak, kan du ha rett til tiltakspenger.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
  },
  {
    title: "Tinnitusmaskerer",
    ingress:
      "Lager motlyd for å dempe tinnitus (også kalt øresus) når det er stille eller når du skal sove.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: [
      "Hjelpemiddel",
      "Pengestøtte",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Tolk for ulike språk",
    ingress:
      "Du har rett til tolk i en samtale med NAV hvis du ikke forstår det som blir sagt og ikke kan formidle hva du trenger. Dette gjelder både tolk i ulike språk og tolk for døve, hørselshemmede og døvblinde.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tjeneste"],
    area: ["Annet"],
  },
  {
    title: "Tolketjenester",
    ingress: "Utfører tolkeoppdrag for døve, døvblinde og hørselshemmede.",
    icon: "/src/_includes/svg/pictograms/tegnspraak.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Uføretrygd",
    ingress:
      "Sikrer deg inntekt hvis inntektsevnen din er varig redusert på grunn av sykdom eller skade.",
    icon: "/src/_includes/svg/pictograms/uforetrygd.svg",
    type: ["Pengestøtte"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Utvidet barnetrygd",
    ingress:
      "Et tillegg til ordinær barnetrygd når du bor alene med barn under 18 år.",
    icon: "/src/_includes/svg/pictograms/utvidet-barnetrygd.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
  },
  {
    title: "Varig lønnstilskudd",
    ingress:
      "Varig lønnstilskudd er for deg med en varig og vesentlig nedsatt arbeidsevne. Tiltaket skal øke mulighetene for at du kan få en vanlig jobb. Du blir ansatt med vanlig lønn i en hel- eller deltidsstilling, mens arbeidsgiveren får et tilskudd til lønnen din.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: ["Arbeid"],
  },
  {
    title: "Varig tilrettelagt arbeid",
    ingress:
      "Varig tilrettelagt arbeid er et tilbud for deg som får uføretrygd. Du jobber i en skjermet bedrift med arbeidsoppgaver som er tilpasset deg. Du kan også jobbe i en ordinær bedrift.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Tiltak"],
    area: [
      "Arbeid",
      "Helse og sykdom",
    ],
  },
  {
    title: "Varslingsutstyr for hørsel",
    ingress:
      "Hjelper deg å oppfatte varsler fra for eksempel røykvarsler, dørklokke, barnegråt eller telefon.",
    icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
    type: ["Hjelpemiddel"],
    area: ["Hjelpemidler og tilrettelegging"],
  },
  {
    title: "Ventelønn",
    ingress:
      "Ventelønn er en ordning for ansatte i statlige virksomheter som har blitt uforskyldt oppsagt. Ordningen er bare aktuell hvis du allerede får ventelønn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
  },
  {
    title: "Yrkesskade eller yrkessykdom - meld fra til NAV",
    ingress:
      "Arbeidsgivere, Forsvaret, rektorer eller andre i lignende stillinger har plikt til å sende skademelding for deg ved arbeidsulykker og skadelig påvirkning av stoffer under arbeid. Hvis den meldepliktige ikke sender inn skademelding til NAV, kan du selv gjøre det selv.",
    icon: "/src/_includes/svg/pictograms/yrkesskade.svg",
    type: ["Skjema"],
    area: ["Helse og sykdom"],
  },
  {
    title: "Ytelser til tidligere familiepleiere",
    ingress:
      "Du kan ha rett til pengestøtte hvis du er en tidligere familiepleier. En familiepleier har hatt tilsyn og pleie av personer som har stått nære.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: [
      "Pensjon",
      "Familie og barn",
    ],
  },
  {
    title: "AA-registeret - få innsyn",
    ingress: "AA-registeret er et register over alle arbeidsforhold i Norge.",
    icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
    type: ["Skjema"],
    area: ["Annet"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Få innsyn i AA-registeret
        Viser deg hva som er rapportert inn om arbeidsforholdene dine.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Be om innsyn",
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
            text: "Få innsyn i AA-registeret",
            dot: "bg-lightblue-300",
          },
        ],
      },
    ],
  },
  {
    title: "Foreldrepenger",
    ingress:
      "Foreldrepengene skal erstatte inntekten din når du skal være hjemme med barnet i forbindelse med fødsel eller adopsjon.",
    icon: "/src/_includes/svg/pictograms/foreldrepenger.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om foreldrepenger
        Du bruker denne søknaden både når du søker om foreldrepenger første gang og hvis du skal søke om endring eller nytt uttak av foreldrepenger.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/foreldrepenger/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn opplysninger om inntekt som selvstendig næringsdrivende eller frilanser`,
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
        data: `### Mer om`,
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
    title: "Foreldrepenger (testversjon)",
    ingress:
      "Foreldrepengene skal erstatte inntekten din når du skal være hjemme med barnet i forbindelse med fødsel eller adopsjon.",
    icon: "/src/_includes/svg/pictograms/foreldrepenger.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om foreldrepenger digitalt
        Du bruker denne søknaden både når du søker om foreldrepenger første gang og hvis du skal søke om endring eller nytt uttak av foreldrepenger.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/foreldrepenger/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om foreldrepenger ved fødsel
        Hvis du ikke vil søke om foreldrepenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om foreldrepenger ved adopsjon
        Hvis du ikke vil søke om foreldrepenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om endring eller nytt uttak av foreldrepenger
        Hvis du ikke vil søke om endring eller nytt uttak av foreldrepenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn opplysninger om inntekt som selvstendig næringsdrivende eller frilanser`,
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
        data: `### Mer om`,
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
    title: "Stønad til barnetilsyn for enslig mor eller far",
    ingress:
      "Dekker deler av utgiftene til barnehage, skolefritidsordning (SFO) eller dagmamma når du er alene med barn og er i arbeid.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om stønad til barnetilsyn for enslig mor eller far
        Du kan søke så snart du har fått faktura fra barnepassordningen for måneden du søker stønad fra. Dersom du søker stønad til barnetilsyn fra august, må du legge ved faktura for august.`,
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
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Stønad til barnetilsyn for enslig mor eller far",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Stønad til skolepenger for enslig mor eller far",
    ingress:
      "Dekker utgifter til studieavgift, semesteravgift og eksamens-gebyr når du tar utdanning og er alene med barn.",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Pengestøtte"],
    area: ["Familie og barn"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om stønad til skolepenger
        Du kan søke så snart du har fått faktura eller betalingsvarsel fra skolen, og senest innen 6 måneder etter at du fikk dette.`,
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
        data: `### Mer om`,
      },
      {
        type: "microcards",
        data: [
          {
            text: "Stønad til skolepenger for enslig mor eller far",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Sykepengeforsikring for frilansere",
    ingress: "Ingress",
    icon: "/src/_includes/svg/pictograms/neutral.svg",
    type: ["Forsikring"],
    area: ["Arbeid"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Overskrift 1
        Tekst`,
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
        data: `### Overskrift 2
        Du kan søke om å kombinere dagpenger med utdanning eller opplæring.`,
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
        data: `### Mer om`,
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
    title: "Sykepengeforsikring for jordbrukere og reindriftsutøvere",
    ingress: "Ingress",
    icon: "/src/_includes/svg/pictograms/sykepenger.svg",
    type: ["Forsikring"],
    area: ["Arbeid"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Overskrift 1
        Tekst`,
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
        data: `### Overskrift 2
        Du kan søke om å kombinere dagpenger med utdanning eller opplæring.`,
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
        type: "markdown",
        data: `### Mer om`,
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
    title: "Sykepengeforsikring for selvestendig næringsdrivende",
    ingress: "Ingress",
    icon: "/src/_includes/svg/pictograms/sykepenger.svg",
    type: ["Forsikring"],
    area: ["Arbeid"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Overskrift 1
        Tekst`,
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
        data: `### Overskrift 2
        Du kan søke om å kombinere dagpenger med utdanning eller opplæring.`,
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
        type: "markdown",
        data: `### Mer om`,
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
    title: "Dagpenger",
    ingress:
      "Har du blitt arbeidsledig, kan du ha rett til dagpenger eller annen økonomisk støtte fra NAV, og hjelp til å komme i arbeid.",
    icon: "/src/_includes/svg/pictograms/dagpenger.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om dagpenger
        Du bruker samme søknad både hvis du er permittert og ikke. Du kan søke om dagpenger for første gang eller om å gjenoppta dagpenger.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "/soknad/dagpenger/",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om å beholde dagpengene mens du tar utdanning eller opplæring
        Du kan søke om å kombinere dagpenger med utdanning eller opplæring.`,
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
        data: `### Søk om å beholde dagpengene under etablering av egen virksomhet
        Dersom du allerede mottar dagpenger, kan du søke om å beholde disse under etablering av egen virksomhet i inntil 12 måneder.`,
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
        data: `### Søk om attest for overføring av dagpengerettigheter til et annet EØS-land
        Hvis du har opparbeidet deg rettigheter til dagpenger i Norge og flytter til et annet EØS-land, trenger du PD U1-attest for å dokumentere rettighetene dine.`,
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
        data: `### Søk om å beholde dagpengene mens du søker jobb i et annet EØS-land
        Dersom du allerede mottar dagpenger, kan du søke om å få beholde dagpengene i inntil tre måneder mens du søker arbeid i et annet EØS-land. Du må ha mottatt dagpenger i Norge i minst fire uker før du søker.`,
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
        type: "markdown",
        data: `### Send oversikt over arbeidstimer`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send egenerklæring for overdragelse av lønnskrav`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn næringsfaglig vurdering av etableringsplaner
        Dette sender du inn hvis du får dagpenger, arbeidsavklaringspenger (AAP) eller overgangsstønad og ønsker å beholde pengestøtten mens du etablerer egen virksomhet.
        Du må innhente en næringsfaglig vurdering av etableringsplanene dine fra fylkeskommunen, kommunen eller en annen kompetent instans, før NAV kan behandle søknaden.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
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
            text: "Dagpenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Dagpenger (testversjon)",
    ingress:
      "Har du blitt arbeidsledig, kan du ha rett til dagpenger eller annen økonomisk støtte fra NAV, og hjelp til å komme i arbeid.",
    icon: "/src/_includes/svg/pictograms/dagpenger.svg",
    type: ["Pengestøtte"],
    area: ["Arbeid"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om dagpenger
        Du bruker samme søknad både hvis du er permittert og ikke. Du kan søke om dagpenger for første gang eller om å gjenoppta dagpenger.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send digital søknad",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Søk om dagpenger ved permittering
        Hvis du ikke vil søke om dagpenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },

      {
        type: "markdown",
        data: `### Søk om dagpenger når du ikke er permittert
        Hvis du ikke vil søke om dagpenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },

      {
        type: "markdown",
        data: `### Søk om å gjenoppta dagpenger ved permittering
        Hvis du ikke vil søke om dagpenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },

      {
        type: "markdown",
        data: `### Søk om å gjenoppta dagpenger når du ikke er permittert
        Hvis du ikke vil søke om dagpenger digitalt, kan du sende søknaden i posten.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad i posten",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },

      {
        type: "markdown",
        data: `### Søk om å beholde dagpengene mens du tar utdanning eller opplæring
        Du kan søke om å kombinere dagpenger med utdanning eller opplæring.`,
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
        data: `### Søk om å beholde dagpengene under etablering av egen virksomhet
        Dersom du allerede mottar dagpenger, kan du søke om å beholde disse under etablering av egen virksomhet i inntil 12 måneder.`,
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
        data: `### Søk om attest for overføring av dagpengerettigheter til et annet EØS-land
        Hvis du har opparbeidet deg rettigheter til dagpenger i Norge og flytter til et annet EØS-land, trenger du PD U1-attest for å dokumentere rettighetene dine.`,
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
        data: `### Søk om å beholde dagpengene mens du søker jobb i et annet EØS-land
        Dersom du allerede mottar dagpenger, kan du søke om å få beholde dagpengene i inntil tre måneder mens du søker arbeid i et annet EØS-land. Du må ha mottatt dagpenger i Norge i minst fire uker før du søker.`,
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
        data: `### Send oversikt over arbeidstimer`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send egenerklæring for overdragelse av lønnskrav`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
            variant: "primary",
          },
        ],
      },
      {
        type: "line",
      },
      {
        type: "markdown",
        data: `### Send inn næringsfaglig vurdering av etableringsplaner
        Dette sender du inn hvis du får dagpenger, arbeidsavklaringspenger (AAP) eller overgangsstønad og ønsker å beholde pengestøtten mens du etablerer egen virksomhet.
        Du må innhente en næringsfaglig vurdering av etableringsplanene dine fra fylkeskommunen, kommunen eller en annen kompetent instans, før NAV kan behandle søknaden.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send inn",
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
            text: "Dagpenger",
            dot: "bg-green-300",
          },
        ],
      },
    ],
  },
  {
    title: "Parykk",
    ingress: "Erstatter eget hår på hele hodet, eller deler av hodet.",
    icon: "/src/_includes/svg/pictograms/parykk.svg",
    type: [
      "Hjelpemiddel",
      "Pengestøtte",
    ],
    area: ["Hjelpemidler og tilrettelegging"],
    contentBlocks: [
      {
        type: "markdown",
        data: `### Søk om støtte til parykk
        Hvis du har fått vedtak om stønad til parykk tidligere, kan leverandøren sende faktura direkte til NAV. Da trenger du ikke å sende inn dette søknadsskjemaet.
        Du skal bruke dette søknadsskjemaet hvis:
- Det er første gang du søker.
- Du har hatt utlegg og skal søke om refusjon.
- Du ønsker en bekreftelse på at folketrygden dekker utgiftene før du går til anskaffelse.`,
      },
      {
        type: "actions",
        data: [
          {
            text: "Send søknad",
            href: "https://www.nav.no/fyllut/nav100757",
            variant: "primary",
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
  typeFilter: getTags(products, "type"),
  areaFilter: getTags(products, "area"),
};
