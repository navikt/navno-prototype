---
title: 'Søke, ettersende og klage'
ingress: 'Skjema for å søke, ettersende eller klage, og saksbehandlingstider.'
order: 3
---

{%- from "macros/video.njk" import video -%}
{%- from "macros/microcard.njk" import microcard -%}
{%- from "macros/readmore.njk" import readmore -%}
{%- from "macros/button.njk" import button -%}
{%- from "macros/tile.njk" import tile -%}

### Når skal du søke?

Du søker om sykepenger etter at sykmeldingsperioden er over. I søknaden oppgir du hvor mange timer du har jobbet i perioden. Det gjør at vi kan justere sykepengene i tråd med dette, slik at utbetalingene blir riktig.

Hvis sykmeldingen er lengre enn 31 dager, vil den deles opp automatisk, og du kan levere søknaden om sykepenger før hele sykefraværet er over.  Du får en melding når søknaden er klar til å fylles ut. Du kan også sjekke datoen ved å logge inn på Ditt sykefravær.

Som hovedregel må du søke om sykepenger innen tre måneder.

Du kan fortsatt sende inn søknad etter fristen, men du vil kun få sykepenger hvis du oppfyller unntaksreglene:

* Du har åpenbart ikke vært i stand til å sende inn søknaden tidligere, eller
* Du har ikke søkt tidligere fordi du har fått misvisende opplysninger fra NAV

Eksempel:  
Hvis du vil ha sykepenger for dager i mai, må du søke senest i løpet av august. Hvis du også var sykmeldt i april, må du søke for disse dagene senest i løpet av juli.

Se hva du må vite i ulike situasjoner:

<div class="accordion">
  <details>
    <summary>Arbeidstaker</summary>
    {% prose %}
Først leverer du sykmeldingen til arbeidsgiveren din. Du logger deg inn på [Ditt sykefravær](#) på nav.no og sender sykmeldingen derfra. Hvis du har fått en [papirsykmelding](), venter du noen dager, så vil den også komme digitalt på Ditt sykefravær.

1. Når perioden for sykmeldingen er over, søker du om sykepenger. Du får en melding når den er klar til å fylles ut på Ditt sykefravær. Du sender søknaden fra Ditt sykefravær. Merk! Du må sende søknad om sykepenger selv om arbeidsgiveren din betaler deg lønn mens du er syk. Arbeidsgiveren krever pengene tilbake fra NAV basert på søknaden din. 

2. I søknaden oppgir du om du har jobbet litt mens du har vært sykmeldt, om du kom tilbake tidligere enn forventet, om du har jobbet i utlandet, om du var på reise utenfor EØS og andre opplysninger vi trenger for å behandle søknaden din.

3. Når du har sendt inn søknaden om sykepenger, kan NAV behandle søknaden din. Det skjer først når arbeidsgiveren din har sendt oss opplysninger om inntekten (inntektsmelding). Hvis du har pålegg om faste trekk, må arbeidsgiveren din også fylle ut skjemaet for trekkopplysninger.
    {% endprose %}
  </details>

  <details>
    <summary>Selvstendig næringsdrivende</summary>
    {% prose %}
Du søker om sykepenger etter at sykmeldingsperioden er over. Du vil få en melding fra oss når den digitale søknaden er klar til å fylles ut. 

Du logger deg inn på nav.no og sender søknaden derfra. 

* I søknaden oppgir du om du har vært i delvis arbeid, om du kom tilbake i full jobb tidligere enn forventet, om du har vært i utlandet og andre opplysninger NAV trenger for å behandle søknaden din. 

* På den første søknaden i sykefraværet får du noen ekstra spørsmål for å avgjøre om du trenger å sende inn dokumentasjon på inntekten din eller annen informasjon. Hvis vi trenger dokumentasjon på inntekten din, blir du videreført til siden for innsending. Der vil det også stå hva vi trenger fra deg.

Hvis du ikke har det vi trenger lett tilgjengelig, kan du velge å sende inn søknaden uten dokumentasjonen. Da får du en oppgave på Min side på nav.no om dette senere. Vi kan ikke behandle søknaden din før du har sendt inn nødvendig dokumentasjon. 
    {% endprose %}
  </details>

  <details>
    <summary>Flere jobber</summary>
    {% prose %}
Hvis du er sykmeldt fra flere jobber, må du ha en sykmelding for hver av dem.

Sykepengene blir beregnet ut fra den samlede inntekten din. [Fosterhjemsgodtgjørelse](#) eller [kommunal omsorgslønn](#) / [omsorgsstønad](#) i kombinasjon med annen inntekt, blir regnet som flere jobber.
    {% endprose %}
  </details>
</div>

==Er «Flere jobber» det samme som «Har flere arbeidsforhold», som er brukt i en tidligere Accordion?==

### Søknad og dokumentasjon

Hvis du mangler BankID, ikke har legitimasjon på høyeste sikkerhetsnivå eller har fortrolig adresse i Folkeregisteret, må du bruke del D av papirsykmeldingen til å søke om sykepenger. [Finn riktig adresse](#).

Hvis du har en arbeidsgiver, må du levere del C av sykmeldingen til arbeidsgiveren din. Del D – søknaden – leverer du til den som skal utbetale sykepenger.

#### Søknad om sykepenger for arbeidstakere

Du søker du om sykepenger når perioden for sykmeldingen er over.

Du får en melding når søknaden er klar til å fylles ut på [Ditt sykefravær](#) og sender den derfra.

Du må sende søknad om sykepenger selv om arbeidsgiveren din betaler deg lønn mens du er syk. Arbeidsgiveren krever pengene tilbake fra NAV basert på søknaden din.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

#### Trekkopplysninger for arbeidstakere

Arbeidsgiver bruker dette skjemaet for å opplyse NAV om trekk hos arbeidstaker i forbindelse med utbetaling av sykepenger, foreldrepenger, svangerskapspenger eller pleie-/ opplærings- og omsorgspenger.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send inn', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

#### Inntektsopplysninger for selvstendig næringsdrivende eller frilansere som skal ha sykepenger

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send inntektsopplysninger', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

#### Søknad om sykepenger når du midlertidig er ute av arbeid

Dette skjemaet bruker du hvis det er under en måned siden forrige arbeidsforhold opphørte, du mottar etterlønn/sluttvederlag, er i utdanningspermisjon, eller du har startet i nytt arbeidsforhold uten å ha ny opptjening til sykepenger.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Søk om sykepenger', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

#### Søknad om å beholde sykepenger under opphold i utlandet

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
 </div>

#### Dokumentasjon for sykepenger når du bor i utlandet

Hvis du er fast bosatt i utlandet og skal sende inn dokumentasjon som gjelder sykepenger, sender du dette sammen med en førsteside.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Hent førsteside', variant: 'secondary' }) }}
</div>

#### Egenerklæring for utenlandske sykmeldinger

Du må fylle ut dette skjemaet hvis du har sykmelding fra lege utenfor Norge. Legg ved sykmeldingen din og send skjemaet til NAV.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send skjema', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
 </div>

[Slik behandler vi personopplysningene dine](#)

### Etter at du har søkt

Vi starter å behandle søknaden din om sykepenger når vi har fått søknaden fra deg og inntektsmeldingen fra arbeidsgiveren din. Hvis du er selvstendig næringsdrivende må du sende inn skjema for inntektsopplysninger.

Du får skriftlig vedtak når søknaden er behandlet. [bør det være noe her om at du kan endre søknaden?]

Du finner sykmeldingen og søknaden om sykepenger ved å logge deg inn på nav.no. 

<details class="expander">
  <summary>
    {{ '/src/_includes/svg/icons/briefcase-clock.svg' | svgContents('mr-1 -my-1 w-8 h-8') | safe }}
    <span>Saksbehandlingstider for søknader</span>
  </summary>
  <div class="py-2 pl-5 -ml-5 prose -translate-x-px border-l-2 border-blue-500">
    {% prose %}
Saksbehandlingstiden er tiden fra vi får søknaden din og til vi har gjort et vedtak. Husk at vi trenger all nødvendig dokumentasjon for å behandle søknaden din. 

Det gjelder også inntektsmeldingen fra arbeidsgiveren din.

| Saken gjelder	| Forventet saksbehandlingstid |
| ------------- | ---------------------------- |
| Førstegangssøknad |	4 uker |
| Forlengelse |	3 uker |
| Utenlandsk sykmelding - førstegangssøknad |	10 uker |
| Utenlandsk sykmelding - forlengelse |	10 uker |
| Arbeidsgiver godtar ikke sykmeldingen (bestridelse) |	6 måneder |
    {% endprose %}
  </div>
</details>

{{ video({ 
  title: 'Hva skjer etter jeg har sendt sykemeldingen?', 
  duration: '1,5 min', 
  image: '/assets/images/video-sykemelding.webp' 
}) }}

### Klagerettigheter

Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til NAV-enheten som skrev vedtaket. De vil vurdere saken din på nytt. Hvis de ikke er enig i klagen din, sender de den videre til NAV Klageinstans.

Hvis det er feil i søknaden din om sykepenger, kan du selv korrigere dette innen ett år på [Ditt sykefravær](#).

==I hvilke tilfeller er det riktig å lenke til Ditt sykefravær, og når er det ok å bare nevne «produktet»?==

#### Klage på vedtak

I vedtaket står det hvordan du går fram hvis du skal klage, hvem du skal klage til og klagefrist. Hvis du har spørsmål om vedtaket, kan du [kontakte oss](#).

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send klage', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

#### Anke vedtak

Hvis du er uenig i svaret på klagen din fra NAV klageinstans, kan du med noen unntak anke vedtaket. Fristen for å anke står i vedtaket.

<div class="grid gap-2 mt-3">
  {{ button({ text: 'Send anke', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'secondary' }) }}
</div>

Du kan også bruke advokat eller gi fullmakt til en person som klager på dine vegne.

{{ tile({
  title: 'Klagerettigheter',
  content: '…',
  kicker: 'Slik gjør du det'
}) }}

<details class="expander">
  <summary>
    {{ '/src/_includes/svg/icons/briefcase-clock.svg' | svgContents('mr-1 -my-1 w-8 h-8') | safe }}
    <span>Saksbehandlingstider for klage og anke</span>
  </summary>
  <div class="py-2 pl-5 -ml-5 prose -translate-x-px border-l-2 border-blue-500">
    {% prose %}
Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til NAV-enheten som skrev vedtaket. De vil vurdere saken din på nytt. Hvis de ikke er enig i klagen din, sender de den videre til NAV Klageinstans.

| Saken gjelder	| Forventet saksbehandlingstid |
| ------------- | ---------------------------- |
| Klage til NAV-enhet	| 12 uker |
| Klage til NAV Klageinstans	| 12 uker |
| Anke til NAV Klageinstans	| 12 uker |
    {% endprose %}
  </div>
</details>

