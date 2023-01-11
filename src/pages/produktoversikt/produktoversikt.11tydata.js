module.exports = {
  filters: {
    taxonomy: {
      title: "Velg type",
      items: [
        "Hjelpemiddel",
        "Pengestøtte",
        "Tiltak",
        "Tjeneste",
        "Veiledning",
        "Forsikring",
        "Skjema",
      ],
    },
    area: {
      title: "Velg område",
      items: [
        "Arbeid",
        "Familie og barn",
        "Helse og sykdom",
        "Hjelpemidler og tilrettelegging",
        "Pensjon",
        "Sosiale tjenester og veiledning",
        "Annet",
      ],
    },
  },
  products: [
    {
      title: "Alderspensjon",
      ingress:
        "Alderspensjon fra folketrygden sikrer at du har en inntekt når du er pensjonist.",
      icon: "/src/_includes/svg/pictograms/alderspensjon.svg",
      area: ["Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Ansiktsprotese",
      ingress:
        "Personer som har en ansiktsdefekt, kan få stønad til ansiktsprotese. Protesene består av naturtro etterligninger av delen av ansiktet som mangler eller er skadet.",
      icon: "/src/_includes/svg/pictograms/ansiktsprotese.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel", "Pengestøtte"],
    },
    {
      title: "Arbeidsavklaringspenger (AAP)",
      ingress:
        "AAP skal sikre deg inntekt i perioder du har behov for hjelp fra NAV for å komme i eller beholde arbeid på grunn av sykdom eller skade.",
      icon: "/src/_includes/svg/pictograms/aap.svg",
      area: ["Arbeid", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Arbeidsforberedende trening",
      ingress:
        "Arbeidsforberedende trening er et tilbud for deg som trenger å jobbe i et tilrettelagt arbeidsmiljø før du starter arbeidstrening i en vanlig bedrift.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Arbeids- og utdanningsreiser",
      ingress:
        "Hvis du har varige forflytningsvansker og ikke kan reise til og fra arbeids- eller utdanningssted med offentlige kommunikasjonsmidler, kan du søke om stønad til arbeids- og utdanningsreiser. Ordningen innebærer at du kan få transport med drosje til og fra arbeid eller skole.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Arbeidsrettet rehabilitering",
      ingress:
        "Arbeidsrettet rehabilitering er et tilbud for deg som har helseplager eller sosiale problemer. Du får veiledningssamtaler og individuelt tilpassede aktiviteter.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Arbeidsrettet veiledningstjeneste",
      ingress:
        "NAV-kontor og NAV Hjelpemiddelsentral gir råd og veiledning om hva som skal til for å delta i arbeid.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Arbeidssøker - registrer deg",
      ingress:
        "Når du har registrert deg, kan vi sammen med deg vurdere situasjonen din og finne ut hva du trenger hjelp til.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Arbeidstrening",
      ingress:
        "I arbeidstrening får du prøvd deg i en vanlig jobb for en kort periode. Det  kan være aktuelt for deg som trenger arbeidserfaring for å mestre en bestemt type jobb, eller trenger en referanse mens du søker vanlige jobber.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Arm- og benproteser",
      ingress:
        "En protese er et ortopedisk hjelpemiddel som skal erstatte en manglende kroppsdel. Folketrygden dekker hele beløpet for deg som trenger protese.",
      icon: "/src/_includes/svg/pictograms/arm-og-benprotese.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Avklaring",
      ingress:
        "Avklaring er rettet mot deg som er usikker på hva du kan jobbe med, for eksempel fordi du har fått dårligere helse eller har vært lenge ute av arbeidslivet.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Avtalefestet pensjon (AFP) i offentlig sektor",
      ingress:
        "AFP i offentlig sektor er en tidligpensjonsordning for deg som er mellom 62-67 år og er født før 1963. Ordningen er i hovedsak for ansatte i stat, fylke og kommune.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Avtalefestet pensjon (AFP) i privat sektor",
      ingress:
        "AFP i privat sektor er en pensjonsordning for deg som er ansatt i en privat bedrift med en tariffavtale som har AFP som en del av avtalen. Denne pensjonsytelsen kommer i tillegg til alderspensjon fra folketrygden.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Barnebidrag",
      ingress:
        "Om hvordan dere kan utforme en privat avtale og forslag til beregning av bidrag som avtales mellom foreldrene.",
      icon: "/src/_includes/svg/pictograms/barnebidrag.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Barnepensjon",
      ingress:
        "Hvis du er barn og mister en eller begge foreldrene dine, kan du få økonomisk støtte. Pensjonen skal sikre deg inntekt til å leve og bo.",
      icon: "/src/_includes/svg/pictograms/barnepensjon.svg",
      area: ["Familie og barn", "Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Barnetrygd",
      ingress: "Månedlig utbetaling for deg som har barn under 18 år.",
      icon: "/src/_includes/svg/pictograms/barnetrygd.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Bestillingsordningen",
      ingress:
        "Bestillingsordningen har forenklet saksbehandling i NAV. Hjelpemidler man kan bestille gjennom denne ordningen er enkle produkter som ikke krever individuelle tilpasninger.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Bevegelseshjelpemidler",
      ingress:
        "Har du motoriske utfordringer, kan tilrettelegging og hjelpemidler gjøre hverdagen enklere.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Bidragsforskudd",
      ingress:
        "Sikrer deg utbetaling av barnebidrag. Dette kan du også få selv om far er ukjent eller hvis du har fått barn ved hjelp av sæddonasjon.",
      icon: "/src/_includes/svg/pictograms/bidragsforskudd.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Bidrag til særlige utgifter",
      ingress:
        "Den andre forelderen betaler sin del av utgifter som tannregulering, konfirmasjon og briller.",
      icon: "/src/_includes/svg/pictograms/bidrag-sarlige-utgifter.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Bilstønad",
      ingress:
        "Støtte til bil, tilpasning av bil og spesialutstyr til bruk i bil.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Briller og kontaktlinser for synshemmede",
      ingress:
        "Har du en øyetilstand, sykdom eller lidelse som utløser behov for briller, kan du søke støtte til briller eller kontaktlinser.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Briller til barn",
      ingress:
        "Barn og unge under 18 år som trenger briller, kan få støtte til dette.",
      taxonomy: ["benefits"],
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn", "Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Briller til behandling eller forebygging av amblyopi",
      ingress:
        "Amblyopi er synsnedsettelse på ett eller begge øynene, uten påviselig sykdom i selve øyet. Briller kan være viktig for å behandle eller forebygge amblyopi hos barn som har utviklet eller har økt risiko for å utvikle tilstanden. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Brystprotese",
      ingress:
        "En brystprotese etterligner et bryst i form og størrelse. Brystprotesene kan klebes direkte til huden, legges løst i brystholdere eller i spesialtilpassede lommer i brystholdere. De finnes i mange ulike størrelser, tykkelser og fasonger.",
      icon: "/src/_includes/svg/pictograms/brystprotese.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Dagpenger",
      ingress:
        "Har du blitt arbeidsledig, kan du ha rett til dagpenger eller annen økonomisk støtte fra NAV, og hjelp til å komme i arbeid.",
      icon: "/src/_includes/svg/pictograms/dagpenger.svg",
      taxonomy: ["Pengestøtte"],
      area: ["Arbeid"],
      contentBlocks: [
        {
          type: "markdown",
          data: [
            "### Søk om dagpenger",
            "Du bruker samme søknad både hvis du er permittert og ikke. Du kan søke om dagpenger for første gang eller om å gjenoppta dagpenger.",
          ],
        },
        {
          type: "actions",
          title: "Søknad om dagpenger",
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
          type: "markdown",
          data: [
            "### Søk om å beholde dagpengene mens du tar utdanning eller opplæring",
            "Du kan søke om å kombinere dagpenger med utdanning eller opplæring.",
          ],
        },
        {
          type: "actions",
          title:
            "Søknad om å beholde dagpengene mens du tar utdanning eller opplæring",
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
          type: "markdown",
          data: [
            "### Søk om å beholde dagpengene under etablering av egen virksomhet",
            "Dersom du allerede mottar dagpenger, kan du søke om å beholde disse under etablering av egen virksomhet i inntil 12 måneder.",
          ],
        },
        {
          type: "actions",
          title:
            "Søknad om å beholde dagpengene mens du tar utdanning eller opplæring",
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
          type: "markdown",
          data: [
            "### Søk om attest for overføring av dagpengerettigheter til et annet EØS-land",
            "Hvis du har opparbeidet deg rettigheter til dagpenger i Norge og flytter til et annet EØS-land, trenger du PD U1-attest for å dokumentere rettighetene dine.",
          ],
        },
        {
          type: "actions",
          title:
            "Søknad om attest PD U1/N-301 for overføring av dagpengerettigheter til et annet EØS-land",
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
          type: "markdown",
          data: [
            "### Søk om å beholde dagpengene mens du søker jobb i et annet EØS-land",
            "Dersom du allerede mottar dagpenger, kan du søke om å få beholde dagpengene i inntil tre måneder mens du søker arbeid i et annet EØS-land. Du må ha mottatt dagpenger i Norge i minst fire uker før du søker.",
          ],
        },
        {
          type: "actions",
          title:
            "Søknad om attest PD U2 for å beholde dagpengene mens du søker jobb i et annet EØS-land",
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
      ],
    },
    {
      title: "Egenerklæring for utenlandske sykmeldinger",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      ingress:
        "Hvis du har sykmelding fra lege utenfor Norge, må du fylle ut dette skjemaet, vedlegge sykmeldingen og sende til NAV.",
      area: ["Helse og sykdom"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Ektefellebidrag",
      ingress:
        "Dette kan du i noen tilfeller få hvis muligheten din til å forsørge deg selv er svekket på grunn av ekteskapet eller omsorg for barna.",
      icon: "/src/_includes/svg/pictograms/ektefellebidrag.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Engangsstønad",
      ingress:
        "En engangssum du kan få i forbindelse med fødsel eller adopsjon hvis du ikke har hatt inntekt i 6 av de siste 10 månedene. Dette får du istedenfor foreldrepenger.",
      icon: "/src/_includes/svg/pictograms/engangsstonad.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Enslig mor eller far som er arbeidssøker - send inn opplysninger",
      ingress:
        "Dette skjemaet må du fylle ut dersom du er arbeidssøker og søker om overgangsstønad til enslig mor eller far. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn", "Arbeid"],
      taxonomy: ["Skjema"],
    },
    {
      title:
        "Farskap eller medmorskap fastsatt i utlandet - søknad om anerkjennelse i Norge",
      ingress:
        "Hvis farskapet eller medmorskapet for barnet ditt er fastsatt utenfor Norden, kan du søke om at den utenlandske avgjørelsen anerkjennes i Norge.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Farskapsregistrering",
      ingress:
        "Far kan erklære farskapet både, før og etter fødsel. Erklæring av farskap skal gjøres skriftlig enten ved å erklære digitalt eller ved oppmøte på et offentlig kontor. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Foreldrepenger",
      ingress:
        "Foreldrepengene skal erstatte inntekten din når du skal være hjemme med barnet i forbindelse med fødsel eller adopsjon.",
      icon: "/src/_includes/svg/pictograms/foreldrepenger.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Forhøyet hjelpestønad",
      ingress:
        "Økonomisk støtte til barn under 18 år som har et vesentlig større behov for pleie og tilsyn, enn det som dekkes av ordinær hjelpestønad.",
      icon: "/src/_includes/svg/pictograms/forhoyet-hjelpestonad.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Frivillig skattetrekk",
      ingress:
        "Et frivillig skattetrekk vil si at du blir trukket mer skatt enn det skattekortet ditt viser. Det blir også kalt ekstra skattetrekk. ",
      icon: "/src/_includes/svg/pictograms/slik-gjor-du-det.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Frivillig yrkesskadetrygd",
      ingress:
        "Yrkesskadetrygd er en frivillig forsikring for selvstendig næringsdrivende og frilansere.",
      icon: "/src/_includes/svg/pictograms/frivillig-yrkesskadetrygd.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Forsikring"],
    },
    {
      title: "Funksjonsassistanse i arbeidslivet",
      ingress:
        "Ordningen skal bidra til at du kan skaffe deg eller beholde ordinært arbeid hvis du har fysiske funksjonsnedsettelser. Ordningen dekker utgifter til nødvendig, praktisk hjelp i arbeidssituasjonen. Blinde og svaksynte kan også få funksjonsassistanse til ledsaging.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid", "Hjelpemidler og tilrettelegging"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Førerhund",
      ingress:
        "En førerhund er spesialtrent til å hjelpe deg som er blind eller svært svaksynt til å ta deg frem innendørs og utendørs.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Gjenlevendepensjon",
      ingress:
        "Gjenlevendepensjon sikrer deg inntekt hvis du mister ektefelle, partner eller samboer med felles barn. I noen tilfeller kan du få støtte hvis dere tidligere har vært gift.",
      icon: "/src/_includes/svg/pictograms/gjenlevendepensjon.svg",
      area: ["Familie og barn", "Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Gravferdsstønad",
      ingress:
        "Gravferdsstønad skal bidra til å dekke faktiske og nødvendige utgifter til gravferden. Stønaden er behovsprøvd.",
      icon: "/src/_includes/svg/pictograms/gravferdsstonad.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Grunnmønster og søm av klær",
      ingress:
        "Et grunnmønster er et grunnriss av kroppens form og mål som brukes som grunnlag for å skreddersy klær. Spesialsøm innebærer at klærne blir sydd med utgangspunkt i et grunnmønster.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Grunnstønad",
      ingress:
        "Du eller barnet ditt kan få dekket ekstrautgifter som skyldes en varig skade, sykdom eller funksjonsnedsettelse.",
      icon: "/src/_includes/svg/pictograms/grunnstonad.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Grønt arbeid",
      ingress:
        "Grønt arbeid er et tilbud til deg som har psykiske helseproblemer og/eller rusproblemer, og som ønsker hjelp til å komme i jobb. Du deltar i den daglige driften på et gårdsbruk og der får arbeidsoppgaver som passer til situasjonen din. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Hjelpestønad",
      ingress:
        "Økonomisk støtte til barn eller voksne som trenger langvarig, privat pleie og tilsyn.",
      icon: "/src/_includes/svg/pictograms/hjelpestonad.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Honnørkort",
      ingress:
        "Med honnørkort får du redusert billettpris på kollektive transportmidler. Kortet gir også rett til honnørrabatt for ektefelle eller registrert partner som reiser sammen med deg, uansett alder.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Huske, planlegge og organisere – hjelpemidler",
      ingress:
        "Kognisjon handler om hjernens evne til å motta, bearbeide og uttrykke informasjon. Hjelpemidler kan bedre situasjonen for mange.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Høreapparat",
      ingress:
        "Er festet til øret ditt, og forsterker lyden rundt deg. Det finnes mange ulike typer, teknologier og modeller.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Idretts- og funksjonsaktiviteter – hjelpemidler",
      ingress:
        "Barn og ungdom under 26 år kan få stønad til spesialprotese og ortopedisk fottøy for idretts- og mosjonaktivitet.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Individuell jobbstøtte (IPS)",
      ingress:
        "IPS er et tilbud til deg som har det vanskelig psykisk eller har utfordringer med rus. Du ønsker hjelp til å komme i jobb og få støtte til å bli værende i jobben. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Inkluderingstilskudd",
      ingress:
        "Inkluderingstilskudd er for deg som trenger å tilrettelegge arbeids- eller tiltaksplassen. Det er arbeidsgiveren som søker om tilskuddet.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Introduksjonsstønad",
      ingress:
        "Deltakere i introduksjonsprogram har rett til introduksjonsstønad. Stønaden er ment som inntektssikring mens de deltar i programmet. Det er kommunen som utbetaler stønaden.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Pengestøtte", "Veiledning"],
    },
    {
      title: "IPS ung – individuell karrierestøtte",
      ingress:
        "IPS ung er et tilbud til deg mellom 16-30 år, som har det vanskelig psykisk eller har utfordringer med rus, og som trenger hjelp til å starte eller komme tilbake til jobb eller skole. IPS ung er et tilbud i samarbeid mellom NAV og helsetjenesten.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Irislinse",
      ingress:
        "En irislinse er en kontaktlinse med påmalt iris. Formålet er å dekke over en deformert iris.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Jobbklubb",
      ingress:
        "Jobbklubb er et kortvarig tiltak for deg som søker jobb. Når du deltar på jobbklubb, får du støtte og hjelp til å orientere deg på arbeidsmarkedet og være en aktiv jobbsøker.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Jobbmestrende oppfølging",
      ingress:
        "Jobbmestrende oppfølging er et tilbud til deg med alvorlige psykiske helseproblemer. Du får arbeidstrening og oppfølging. Målet er at du skal komme ut i vanlig jobb.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Jobbsøkerkurs (digitalt)",
      ingress:
        "Digitalt jobbsøkerkurs er for deg som er arbeidssøker eller permittert.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Kjøreliste for godkjent bruk av egen bil",
      ingress:
        "Hvis NAV har godkjent at du kan bruke din egen bil i til arbeid, utdanning eller til tilpasning av hjelpemidler, kan du sende inn kjøreliste for å få tilbakebetalt utleggene dine.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Klagerettigheter",
      ingress:
        "Når du søker NAV om økonomisk støtte eller en tjeneste, får du et svar. Dette er vedtaket i saken din. I vedtaket står det hvordan du skal gå fram hvis du skal klage, hvem du skal klage til og klagefrist. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: [],
    },
    {
      title: "Kontaktinformasjon – slik endrer du",
      ingress:
        "Når NAV sender deg post, sender vi posten til kontaktinformasjonen du har registrert i kontakt- og reservasjonsregisteret, eller til adressen du har oppgitt til folkeregisteret.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Kontantstøtte",
      ingress:
        "Kontantstøtte er penger du kan få hvis du har barn mellom 1 og 2 år som ikke har fått tildelt fulltidsplass i barnehage.",
      icon: "/src/_includes/svg/pictograms/kontantstotte.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Kontonummer internasjonalt – slik endrer du",
      ingress: "Om kontoendringer (internasjonalt). ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Kontonummer – slik endrer du",
      ingress:
        "Når du søker om pengestøtte fra NAV, må du kontrollere at vi har korrekt kontonummer. Du kan sjekke kontonummeret som er registrert på deg ved å logge inn på nav.no.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Krigspensjon",
      ingress:
        "Krigspensjon er en kompensasjon for nedsatt arbeidsevne på grunn av skader som følge av krigen 1939-45.",
      icon: "/src/_includes/svg/pictograms/krigspensjon.svg",
      area: ["Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Kronisk syk eller gravid arbeidstaker",
      ingress:
        "Har du en langvarig eller kronisk sykdom som kan føre til hyppige sykefravær? Eller er du sykmeldt på grunn av årsaker som henger sammen med graviditeten? Du eller arbeidsgiveren din kan søke om at NAV dekker sykepenger i arbeidsgiverperioden.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid", "Helse og sykdom"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Kvalifiserings­programmet",
      ingress:
        "Kvalifiseringsprogrammet er for deg mellom 18 og 67 år som ønsker å komme i jobb, men trenger ekstra oppfølging for å klare det.",
      icon: "/src/_includes/svg/pictograms/kvalifiseringsprogrammet.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Pengestøtte", "Veiledning"],
    },
    {
      title: "Lese- og sekretærhjelp",
      ingress:
        "En lese- og sekretærhjelp er en person som kan hjelpe deg med å lese og skrive. Dette er et tilbud til deg som er blind eller svaksynt.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Lese og skrive – hjelpemidler",
      ingress:
        "Har du lese- og/eller skrivevansker, kan du ha rett på hjelpemidler som gjør det lettere for deg å lese og/eller skrive.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Leveattest for deg som får pensjon og uføretrygd i utlandet",
      ingress:
        "Hvis du er bosatt i utlandet og får pensjon eller uføretrygd fra NAV, kan vi be deg om å levere leveattest.\nVi gjennomfører årlig leveattestkontroller for å sikre at utbetalingene går til riktig mottaker.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Lydutjevningsanlegg",
      ingress:
        "Fastmontert eller mobilt utstyr som bidrar til at du får med deg det som blir sagt i rom med mange lydforstyrrelser.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Lyttehjelpemidler for telefon",
      ingress:
        "Forsterker lyden fra telefonen slik at du kan høre telefonsamtalen bedre.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Lyttehjelpemidler til TV og radio",
      ingress:
        "Sender lyden fra det du vil lytte til, til ønsket mottaker hos deg.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Lønnsgaranti",
      ingress:
        "Lønnsgarantien skal sikre at du får utbetalt lønn, feriepenger og annen betaling for arbeid som du har til gode når arbeidsgiveren ikke kan betale ved for eksempel konkurs.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Medlemskap i folketrygden",
      ingress:
        "Skal du arbeide eller oppholde deg i utlandet, kan det medføre at medlemskapet ditt i folketrygden opphører. I slike tilfeller bør du sende inn en søknad til NAV for å få en vurdering av medlemskapet. \n\nHvis du bor i et annet EØS-land og arbeider i Norge, eller nylig har flyttet til Norge, kan et annet land be om dokumentasjon på at du er medlem i folketrygden. I slike tilfeller kan du også sende inn en søknad. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Meldekort",
      ingress:
        "For å være registrert som arbeidssøker eller for å få dagpenger, AAP og tiltakspenger, må du sende meldekort hver 14. dag.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid", "Helse og sykdom"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Meld fra om endringer",
      ingress:
        "Meld straks fra hvis du får endringer i inntekten, familiesituasjonen, jobbsituasjonen eller planlegger opphold i utlandet. Det kan ha betydning for pengestøtte du får fra NAV.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: [
        "Arbeid",
        "Familie og barn",
        "Hjelpemidler og tilrettelegging",
        "Pensjon",
      ],
      taxonomy: ["Skjema"],
    },
    {
      title: "Menerstatning ved yrkesskade eller yrkessykdom",
      ingress:
        "Du kan søke om menerstatning ved yrkesskade eller yrkessykdom hvis du har fått varig medisinsk invaliditet.",
      icon: "/src/_includes/svg/pictograms/menerstatning.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Mentor",
      ingress:
        "Mentor er et tilskudd fra NAV for å frikjøpe en kollega eller en medstudent som  hjelper deg med å mestre en jobb eller utdanning.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Midlertidig botilbud (nødssituasjon)",
      ingress:
        "Hvis du ikke klarer å finne et sted å bo selv, skal NAV hjelpe deg med å finne et midlertidig botilbud.",
      icon: "/src/_includes/svg/pictograms/midlertidig-botilbud.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Pengestøtte", "Veiledning"],
    },
    {
      title: "Midlertidig lønnstilskudd",
      ingress:
        "Midlertidig lønnstilskudd skal bidra til å øke mulighetene for å få jobb. Du får ordinær lønn og ansettelse i hel- eller deltidsstilling, mens arbeidsgiveren din får et tilskudd til lønnen din.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Omsorgspenger (hjemme med sykt barn-dager)",
      ingress:
        "Sikrer deg inntekt når du må være borte fra jobb fordi barnet ditt for eksempel \nhar fått omgangssyke.",
      icon: "/src/_includes/svg/pictograms/omsorgspenger.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Omsorgsstønad og utbetalinger fra NAV",
      ingress:
        "Hvis du mottar kommunal omsorgsstønad (tidligere omsorgslønn), må du melde fra til NAV hvis du søker om/har en pengestøtte fra NAV. Omsorgsstønaden kan påvirke beregningen av pengestøtten din.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Oppfostringsbidrag",
      ingress:
        "Hvis kommunen overtar omsorgen for barnet ditt, kan det bli krevd oppfostringsbidrag fra deg som forelder.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Oppfølging",
      ingress:
        "Du kan få oppfølging hvis du trenger omfattende støtte for å klare å skaffe eller beholde en jobb.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Opplæring",
      ingress:
        "Opplæring er tiltak for deg som trenger kvalifisering for å kunne få jobb. Hensikten er at du skal bli kvalifisert for ledige jobber.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Opplæringspenger",
      ingress:
        "Sikrer deg inntekt når du må være borte fra jobb fordi du deltar i opplæring for å kunne ta vare på et barn eller en voksen.",
      icon: "/src/_includes/svg/pictograms/opplaeringspenger.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Opplysning, råd og veiledning",
      ingress:
        "Du kan få veiledning hos NAV for å forebygge eller løse utfordringer med hjemmeforhold, bosituasjon, omsorg for barn, arbeid eller økonomi. ",
      icon: "/src/_includes/svg/pictograms/opplysning-rad-og-veiledning.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Veiledning"],
    },
    {
      title: "Ortopediske sko",
      ingress:
        "Ortopediske sko kan hjelpe deg som har en feilstilling i fot eller ankel, har problemer med føttene på grunn av diabetes eller revmatisme, eller har en annen funksjonsnedsettelse i føttene.",
      icon: "/src/_includes/svg/pictograms/ortopediske-sko.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Ortoser",
      ingress:
        "En ortose er en støtteskinne, et korsett eller en spesiallaget innleggssåle (fotseng). Ortoser brukes for å stabilisere eller gi bedre funksjon til en kroppsdel som er lammet eller svekket på andre måter. ",
      icon: "/src/_includes/svg/pictograms/ortoser.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte", "Hjelpemiddel"],
    },
    {
      title: "Overgangsstønad for enslig mor eller far",
      ingress:
        "Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år.",
      icon: "/src/_includes/svg/pictograms/overgangsstonad-enslig-foreldre.svg",
      taxonomy: ["Pengestøtte"],
      area: ["Familie og barn"],
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
          title: "Søk om overgangs&shy;stønad",
          data: [
            {
              text: "Søk digitalt",
              variant: "primary",
            },
            {
              text: "Søk på papir",
              variant: "secondary",
            },
          ],
        },
        {
          type: "markdown",
          data: [
            "### Forlengelse av overgangsstønad som følge av koronasituasjonen",
            "Dette er en midlertidig ordning som er opprettet som følge av koronasituasjonen. Dette skjemaet gjelder kun søknad om forlengelse av overgangsstønaden som følge av koronasituasjonen.",
          ],
        },
        {
          type: "actions",
          title: "Søk om forlengelse av overgangsstønad (korona)",
          data: [
            {
              text: "Søk digitalt",
              variant: "primary",
            },
            {
              text: "Søk på papir",
              variant: "secondary",
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
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Parykk",
      ingress:
        "En parykk kan erstatte eget hår på hele hodet, eller deler av hodet. Parykken kan være laget av ekte eller syntetisk hår, og den kan være masseprodusert eller laget til en bestemt person.",
      icon: "/src/_includes/svg/pictograms/parykk.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel", "Pengestøtte"],
    },
    {
      title: "Pensjonsopptjening ved omsorg for barn",
      ingress:
        "Har du eller har du hatt daglig omsorg for små barn fra 0 til og med 5 år, kan du ha rett på pensjonsopptjening. Dette kalles omsorgsopptjening.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Skjema"],
    },
    {
      title:
        "Pensjonsopptjening ved omsorg for syke, eldre og personer med funksjonsnedsettelser",
      ingress:
        "Hvis du tar deg av en person som er syk, eldre eller har en funksjonsnedsettelse, kan du ha rett på pensjonsopptjening. Dette kalles omsorgsopptjening.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Pleiepenger for en utviklingshemmet person over 18 år",
      ingress:
        "Sikrer deg inntekt når du må være borte fra jobb for å ta vare på en person over 18 år som er utviklingshemmet og svært alvorlig syk.",
      icon: "/src/_includes/svg/pictograms/pleiepenger-utviklingshemmet.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Pleiepenger for sykt barn",
      ingress:
        "Sikrer deg inntekt når du må være borte fra jobb for å pleie og ta vare på et barn som har vært innlagt eller til behandling på sykehus.",
      icon: "/src/_includes/svg/pictograms/pleiepenger-sykt-barn.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Pleiepenger i livets sluttfase",
      ingress:
        "Sikrer deg inntekt når du må være borte fra jobb for å ta vare på en person som er i livets sluttfase.",
      icon: "/src/_includes/svg/pictograms/pleiepenger-livets-sluttfase.svg",
      area: ["Familie og barn", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Reisetilskudd",
      ingress:
        "Du kan få reisetilskudd i stedet for sykepenger hvis det gjør at du kan være i arbeid helt eller delvis. Du kan også få reisetilskudd sammen med graderte sykepenger.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Reiseutgifter",
      ingress:
        "Du kan få dekket reiseutgiftene dine når du skal prøve, tilpasse eller reparere et hjelpemiddel.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Samtale – hjelpemidler",
      ingress:
        "Personlig og mobilt utstyr som bidrar til at du får med deg det som blir sagt når du har nedsatt hørsel.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Seksualtekniske hjelpemidler",
      ingress:
        "Et seksualteknisk hjelpemiddel kan gi et bedre sexliv dersom du har nedsatt seksualfunksjon.",
      icon: "/src/_includes/svg/pictograms/seksualtekniske-hjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel", "Pengestøtte"],
    },
    {
      title: "Senter for jobbmestring",
      ingress:
        "Senter for jobbmestring er et tilbud for deg som har angst og/eller depresjon. Målet er å hjelpe deg med å mestre symptomene slik at du kan bli værende i jobb eller komme i jobb. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Servicehund",
      ingress:
        "En servicehund er spesialtrent til å hjelpe deg som har fysiske funksjonsnedsettelser i hverdagen. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Studier med støtte",
      ingress:
        "Studier med støtte er et tilbud for deg som har psykiske helseproblemer og behov for støtte til å gjennomføre skolegang eller studier. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Stønad til barnetilsyn for enslig mor eller far",
      ingress:
        "Dekker deler av utgiftene til barnehage, skolefritidsordning (SFO) eller dagmamma når du er alene med barn og er i arbeid.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Stønad til barnetilsyn for gjenlevende ektefelle",
      ingress:
        "Dekker deler av utgiftene til barnepass, når du er gjenlevende ektefelle som er alene om omsorgen for barnet ditt og er i arbeid.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Stønad til skolepenger for enslig mor eller far",
      ingress:
        "Dekker utgifter til studieavgift, semesteravgift og eksamens-gebyr når du tar utdanning og er alene med barn.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Stønad til skolepenger for gjenlevende ektefelle",
      ingress:
        "Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er alene med barn.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Stønad til skolepenger for tidligere familiepleiere",
      ingress:
        "Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er tidligere familiepleier.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Stønad ved båretransport",
      ingress:
        "Stønad ved båretransport skal bidra til å dekke utgifter i forbindelse med gravlegging. Stønaden blir gitt når båren med den avdøde må transporteres over lengre avstander.",
      icon: "/src/_includes/svg/pictograms/stonad-baretransport.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Støtte til folkehøyskole",
      ingress:
        "Hvis du ønsker et tilrettelagt tilbud med opplæring i daglige aktiviteter, for eksempel en bo- og arbeidstreningslinje, kan du søke om støtte til ekstrautgiftene dine.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title:
        "Supplerende stønad for personer over 67 år med kort botid i Norge",
      ingress:
        "Supplerende stønad er for deg som har bodd kort i Norge. Det er en pengestøtte som kan gi deg høyere pensjon.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Supplerende stønad for uføre flyktninger under 67 år",
      ingress:
        "Hvis du er både ufør og har flyktningstatus, er du dermed garantert en samlet inntekt som tilsvarer minste ytelse for uføretrygd. Har du søkt om uføretrygd i 2020 eller tidligere, har du ikke rett til denne stønaden. Det er et vilkår at du har søkt om uføretrygd i januar 2021 og senere.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon", "Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Svangerskapspenger",
      ingress:
        "Erstatter inntekten din når du er frisk, men ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for barnet.",
      icon: "/src/_includes/svg/pictograms/svangerskapspenger.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Sykepenger",
      ingress:
        "Sykepenger erstatter arbeidsinntekt når du ikke kan jobbe på grunn av sykdom eller skade.",
      icon: "/src/_includes/svg/pictograms/sykepenger.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Sykkel",
      ingress:
        "NAV Hjelpemiddelsentral låner ut mange ulike typer sykler. En spesialsykkel kan for mange gi bedre framkommelighet, mulighet for fysisk aktivitet og økt sosial deltakelse i samfunnet.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Synshjelpemidler",
      ingress:
        "Har du en varig synsnedsettelse kan du ha rett til hjelpemidler som kan bedre funksjonsevnen din.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title:
        "Søk om frivillig medlemskap i folketrygden under jobb eller opphold i utlandet",
      ingress:
        "Hvis du er medlem i folketrygden og skal oppholde deg i utlandet, kan det føre til at du mister medlemskapet i folketrygden. Du kan på visse vilkår søke om frivillig medlemskap i folketrygden.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Tale og språk – hjelpemidler",
      ingress:
        "Har du vansker med tale og språk, kan hjelpemidler gjøre det lettere å kommunisere.",
      icon: "/src/_includes/svg/pictograms/tegnspraak.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Taushetsplikt, samtykke og fullmakt",
      ingress:
        "NAV har taushetsplikt om all kontakt du har med NAV, inkludert opplysninger om hvilke tjenester og utbetalinger du mottar. Hvis andre skal få tilgang til de opplysningene som NAV har om deg, må de ha lovhjemmel eller samtykke fra deg. ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Teleslynge",
      ingress:
        "Forsterker lyd slik at du kan høre eller oppfatte tale. Det finnes ulike typer teleslynger til bruk på ulike arenaer, og som er tilpasset deg og dine behov.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Tilbehør til høreapparat",
      ingress:
        "Dette kan være eksterne mikrofoner, eller et mellomledd som kobler høreapparatet til andre hørselshjelpemidler eller lydkilder.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Tilleggsstønader",
      ingress:
        "Støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking.",
      icon: "/src/_includes/svg/pictograms/tilleggsstonad.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tilleggsstønader til enslig mor eller far",
      ingress:
        "Støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking når du er alene med barn.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøte"],
    },
    {
      title: "Tilleggsstønader til gjenlevende ektefelle",
      ingress:
        "Tar du utdanning eller søker jobb, kan du ha rett til støtte til barnepass og utgifter du har i forbindelse med utdanning eller jobbsøking.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøte"],
    },
    {
      title: "Tilleggsstønader til tidligere familiepleiere",
      ingress:
        "Støtte til utgifter hvis du gjennomfører nødvendig og godkjent utdanning  for å komme i eller beholde arbeid.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøte"],
    },
    {
      title: "Tilpasning av bolig",
      ingress:
        "Hvis du har en vesentlig og varig funksjonsnedsettelse, kan tilpasning og hjelpemidler gjøre deg mer selvhjulpen og i stand til å bli boende hjemme.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Tilpasningskurs - nedsatt syn og hørsel",
      ingress:
        "Tilpasningskurs er et tilbud til deg som har nedsatt syn eller nedsatt hørsel. Kursene gir deg verktøy og kunnskap som kan hjelpe deg både i jobben og på fritiden.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tilskudd til apper og programvare",
      ingress:
        "Gjelder apper og programvare som er spesielt utviklet for ulike funksjonsnedsettelser.",
      icon: "/src/_includes/svg/pictograms/tilskudd.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tilskudd til ekspertbistand",
      ingress:
        "Er du sykemeldt, eller har du vært sykemeldt? Har du utfordringer med å mestre jobben din? Du og arbeidsgiveren din kan få hjelp fra en nøytral ekspert med kompetanse på sykefravær og arbeidsmiljø. Eksperten skal bidra til å avklare utfordringene som fører til sykefravær og foreslå tiltak.",
      icon: "/src/_includes/svg/pictograms/tilskudd.svg",
      area: ["Arbeid", "Helse og sykdom"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Tilskudd til kjøp av PC eller nettbrett ved dysleksi",
      ingress:
        "Du kan søke om tilskudd til kjøp av PC eller nettbrett hvis du har spesifikke lese- og skrivevansker (dysleksi).",
      icon: "/src/_includes/svg/pictograms/tilskudd.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tilskudd til rimelige hjelpemidler",
      ingress:
        "Økonomisk tilskudd som kan dekke de ekstrautgifter du har til rimelige tekniske hjelpemidler som ikke er en del av hjelpemiddelsentralens sortiment.",
      icon: "/src/_includes/svg/pictograms/tilskudd.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tilskudd til sommerjobb",
      ingress:
        "Tiltaket er et tilbud til deg som ønsker å få nyttig arbeidserfaring i sommer og har behov for hjelp fra NAV med å finne en aktuell arbeidsgiver.",
      icon: "/src/_includes/svg/pictograms/tilskudd.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Tiltakspenger",
      ingress:
        "Når du deltar i et arbeidsmarkedstiltak, kan du ha rett til tiltakspenger.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Tinnitusmaskerer",
      ingress:
        "Lager motlyd for å dempe tinnitus (også kalt øresus) hvis du plages av tinnitus når det er stille eller når du skal sove.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel", "Pengestøtte"],
    },
    {
      title: "Tolketjenester",
      ingress: "Utfører tolkeoppdrag for døve, døvblinde og hørselshemmede.",
      icon: "/src/_includes/svg/pictograms/tegnspraak.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Tolk for ulike språk",
      ingress:
        "Du har rett til tolk i en samtale med NAV hvis du ikke forstår det som blir sagt og ikke kan formidle hva du trenger. Dette gjelder både tolk i ulike språk og tolk for døve, hørselshemmede og døvblinde.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Annet"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Uføretrygd",
      ingress:
        "Uføretrygd skal sikre deg inntekt hvis inntektsevnen din er varig redusert på grunn av sykdom eller skade.",
      icon: "/src/_includes/svg/pictograms/uforetrygd.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Utvidet barnetrygd",
      ingress:
        "Et tillegg til ordinær barnetrygd når du bor alene med barn under 18 år.",
      icon: "/src/_includes/svg/pictograms/utvidet-barnetrygd.svg",
      area: ["Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Varig lønnstilskudd",
      ingress:
        "Varig lønnstilskudd er for deg med en varig og vesentlig nedsatt arbeidsevne. Tiltaket skal øke mulighetene for at du kan få en vanlig jobb. Du blir ansatt med vanlig lønn i en hel- eller deltidsstilling, mens arbeidsgiveren får et tilskudd til lønnen din.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Varig tilrettelagt arbeid",
      ingress:
        "Varig tilrettelagt arbeid er et tilbud for deg som får uføretrygd. Du jobber i en skjermet bedrift med arbeidsoppgaver som er tilpasset deg. Du kan også jobbe i en ordinær bedrift.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid", "Helse og sykdom"],
      taxonomy: ["Tiltak"],
    },
    {
      title: "Varslingsutstyr for hørsel",
      ingress:
        "Hjelper deg å oppfatte varsler fra for eksempel røykvarsler, dørklokke, barnegråt eller telefon.",
      icon: "/src/_includes/svg/pictograms/horselshjelpemidler.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
    {
      title: "Ventelønn",
      ingress:
        "Ventelønn er en ordning for ansatte i statlige virksomheter som har blitt uforskyldt oppsagt. Ordningen er bare aktuell hvis du allerede får ventelønn.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Arbeid"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Yrkesskade eller yrkessykdom - meld fra til NAV",
      ingress:
        "Arbeidsgivere, Forsvaret, rektorer eller andre i lignende stillinger har plikt til å sende skademelding for deg ved arbeidsulykker og skadelig påvirkning av stoffer under arbeid. Hvis den meldepliktige ikke sender inn skademelding til NAV, kan du selv gjøre det selv.",
      icon: "/src/_includes/svg/pictograms/yrkesskade.svg",
      area: ["Helse og sykdom"],
      taxonomy: ["Skjema"],
    },
    {
      title: "Ytelser til tidligere familiepleiere",
      ingress:
        "Du kan ha rett til pengestøtte hvis du er en tidligere familiepleier. En familiepleier har hatt tilsyn og pleie av personer som har stått nære.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Pensjon", "Familie og barn"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Økonomi- og gjeldsrådgivning",
      ingress:
        "NAV kan gi deg råd om privatøkonomien din. Tjenesten er gratis og du bør søke hjelp så tidlig som mulig.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Sosiale tjenester og veiledning"],
      taxonomy: ["Tjeneste"],
    },
    {
      title: "Økonomisk sosialhjelp",
      ingress:
        "Økonomisk sosialhjelp er en midlertidig støtte du kan få hvis du ikke kan forsørge deg selv.  ",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Sosiale tjenster og veiledning"],
      taxonomy: ["Pengestøtte"],
    },
    {
      title: "Øyeprotese",
      ingress:
        "Personer som helt eller delvis mangler et øye, eller har skadet øyet, kan få støtte til øyeprotese.",
      icon: "/src/_includes/svg/pictograms/neutral.svg",
      area: ["Hjelpemidler og tilrettelegging"],
      taxonomy: ["Hjelpemiddel"],
    },
  ],
};
