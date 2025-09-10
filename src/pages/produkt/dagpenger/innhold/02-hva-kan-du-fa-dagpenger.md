---
title: 'Hva kan du få?'
ingress: 'Hvor mye penger kan du få, og hvor lenge kan du få støtte.'
icon: '/src/_includes/svg/icons/calculator.svg'
order: 2
---

{%- from "macros/video.njk" import video -%}
{%- from "macros/microcard.njk" import microcard -%}
{%- from "macros/tile.njk" import tile -%}
{%- from "macros/readmore.njk" import readmore -%}
{%- from "macros/button.njk" import button -%}

### Hvor mye kan du få?

Vi beregner hvor mye du kan få i dagpenger basert på hva du har hatt i inntekt de siste 12 månedene, eller i gjennomsnitt de siste 36 månedene. Vi velger det alternativet som er best for deg.

<details class='readmore'>
  <summary>Disse inntektene avgjør hvor mye du kan få</summary>
  {% prose %}{% endprose %}
</details>

Du kan få 62,4 prosent av den tidligere inntekten din. Inntekt over 780 960 kroner (6 G) regnes ikke med. Les mer om [Grunnbeløp](#).

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Beregn dagpenger', variant: 'primary' }) }}
</div>

<div class='accordion'>
  <details>
    <summary>Forsørger du barn under 18 år?</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Er du nydimittert fra militæret?</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Mottar du annen pengestøtte?</summary>
    {% prose %}{% endprose %}
  </details>
</div>

### Husk å endre skattekortet ditt

Du må betale skatt av dagpengene du får fra Nav. Det er [lurt å endre skattekortet ditt](#) når du får mindre utbetalt i måneden. Les mer om [skattetrekk](#) på utbetalinger fra Nav.

### Når utbetales pengene?

#### Første utbetaling

Du får første utbetaling med dagpenger når du har fått svar på søknaden. Saksbehandlingstiden for dagpenger er for tiden 6 uker.

Du får **etterbetalt** pengene fra dagen du har rett til dagpenger.

#### Du blir trukket en egenandel

Når du får dagpenger, trekker Nav en egenandel. Egenandelen er samme sum som tre dager med dagpenger.

<details class='readmore'>
  <summary>Hvordan trekkes egenandelen?</summary>
  {% prose %}{% endprose %}
</details>

#### Regelmessige utbetalinger

Dagpengene blir utbetalt hver 14. dag. Du får pengene 1-3 virkedager etter at du har sendt inn meldekortet.

### Hvor lenge kan du få?

Hvor lenge du kan få dagpenger blir bestemt ut ifra inntekten du har hatt de siste 12 månedene, eller i gjennomsnitt de siste 36 månedene. Vi velger det alternativet som er best for deg.

* Har du hatt en inntekt på **260 320 kroner (2 G) eller mer** de siste 12 månedene, eller i gjennomsnitt de siste 36 månedene, kan du få dagpenger i inntil 104 uker.
* Har du hatt en inntekt på **under 260 320 kroner (2 G)** de siste 12 månedene, eller i gjennomsnitt de siste 36 månedene, kan du få dagpenger i inntil 52 uker.
* Hvis du har vært i militæret i minst 3 måneder, og er nydimittert, kan du få dagpenger i inntil 26 uker.

<details class='readmore'>
  <summary>Hvilke inntekter avgjør hvor lenge du kan få?</summary>
  {% prose %}{% endprose %}
</details>

#### Har du mottatt dagpenger de siste 52 ukene?

Har du mottatt dagpenger innenfor de siste 52 ukene, fortsetter du på de ukene du fikk innvilget sist du mottok dagpenger. For eksempel, hvis du tidligere fikk innvilget 52 uker med dagpenger, og var arbeidsledig eller permittert i 22 uker, har du nå inntil 30 uker igjen med dagpenger.

I svaret på søknaden står det hvor lenge du får dagpenger. Du kan også se hvor mange uker du har igjen på den siste utbetalingsmeldingen du har fått.

Hvis du har jobbet 12 uker eller mer siden du mottok dagpenger, beregner Nav dagpengene dine på nytt. Vi velger den beregningen som er best for deg.

#### Egne regler for deg som er permittert

I løpet av en periode på 18 måneder, kan arbeidsgiveren din som hovedregel permittere deg i maksimalt 26 uker. De 15 første dagene av permitteringen skal du få utbetalt lønn fra arbeidsgiveren din. Disse dagene kommer i tillegg til de 26 ukene du kan være permittert. Vi stanser dagpengene dine når perioden på 26 uker er over. Etter det får du som hovedregel lønn fra arbeidsgiveren igjen.

Blir du arbeidsledig etter å ha vært permittert, kan du søke om dagpenger på nytt. Du fortsetter da som hovedregel på ukene du fikk innvilget dagpenger. Fikk du for eksempel til sammen 104 uker med dagpenger, har du nå inntil 78 uker igjen.

<div class='accordion'>
  <details>
    <summary>Har du vært permittert de siste 18 månedene?</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Egne regler for deg som er permittert fra fiskeindustrien</summary>
    {% prose %}{% endprose %}
  </details>
</div>

### Andre tilbud

Mer informasjon til deg som

<div class="grid gap-3 mt-2">
{{ tile({
  title: 'Er arbeidsledig eller permittert',
  kicker: ['Dette kan du ha rett til']
}) }}
{{ tile({
  title: 'Søker jobb',
  kicker: ['Dette kan du ha rett til']
}) }}
{{ tile({
  title: 'Trenger hjelp til å komme i jobb',
  kicker: ['Dette kan du ha rett til']
}) }}
</div>
