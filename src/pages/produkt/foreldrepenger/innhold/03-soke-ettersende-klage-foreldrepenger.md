---
title: 'Søke, ettersende eller klage'
order: 3
---

{%- from "macros/video.njk" import video -%}
{%- from "macros/microcard.njk" import microcard -%}
{%- from "macros/tile.njk" import tile -%}
{%- from "macros/button.njk" import button -%}
{%- from "macros/readmore.njk" import readmore -%}

### Søknadsfrist

Her finner du informasjon om når du tidligst kan søke om foreldrepenger, samt når du senest må søke om foreldrepenger.

Vi anbefaler at du søker 4 - 6 uker før perioden din med foreldrepenger starter.

Du må søke senest 3 måneder etter måneden du skal ha foreldrepenger for å være hjemme med barnet. Søker du på et senere tidspunkt får du tilsvarende færre dager med foreldrepenger.

Eksempel: Du ønsker foreldrepenger fra 1. desember 2024. Du må senest sende søknad om foreldrepenger innen utgangen av mars, altså senest 31. mars 2025. 

Det kan i tillegg gjelde andre regler i din situasjon:


<div class='accordion'>
  <details>
    <summary>Mor</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Far eller medmor</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Hvis bare far eller medmor har rett</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Adopsjon</summary>
    {% prose %}{% endprose %}
  </details>
</div>

### Søknad og ettersendelse

Det kan være lurt å sjekke om det er relevant dokumentasjon som skal legges ved søknaden. 

<details class='readmore'>
  <summary>Dette må du dokumentere</summary>
  {% prose %}{% endprose %}
</details>

#### Søknad om foreldrepenger

Du bruker denne søknaden både når du søker om foreldrepenger første gang, og hvis du skal søke om endring eller nye perioder med foreldrepenger.

Du kan søke om foreldrepenger digitalt eller papirsøknad som du sender i posten. Du kan også ettersende dokumentasjon i saken din.

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send søknad' }) }}
  {{ button({ text: 'Ettersend dokumentasjon' }) }}
</div>

### Etter at du har søkt

Du kan tidligst få svar på søknaden din 4 uker før foreldrepengeperioden din starter. Dette er fordi vi bruker de nyeste opplysningene om inntekten din når vi skal beregne hva du skal få i foreldrepenger.

Du får skriftlig vedtak når søknaden er behandlet

<details class='readmore'>
  <summary>Saksbehandlingstider</summary>
  {% prose %}{% endprose %}
</details>

### Følg saken din

Etter du har søkt kan du logge deg inn på [Dine foreldrepenger](#).

Her kan du se:

* en oversikt over og informasjon om saken din
* søke om endring
* ettersende dokumentasjon til søknaden din
* se dokumenter i saken
* søkte perioder med foreldrepenger
* hvis du får innvilget foreldrepenger en enkel oversikt over periodene dine med foreldrepenger.

Det gjelder kun i de saker hvor mor har startet med foreldrepenger 01.01.2019 eller senere.

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Logg inn på Dine foreldrepenger' }) }}
</div>

### Klagerettigheter

Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til Nav-enheten som skrev vedtaket. De vil vurdere saken din på nytt.

#### Klage på vedtak

I vedtaket står det hvordan du går fram hvis du skal klage, hvem du skal klage til og klagefrist. Hvis du har spørsmål om vedtaket, kan du [kontakte oss](#).

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send klage' }) }}
  {{ button({ text: 'Ettersend dokumentasjon' }) }}
</div>

#### Anke vedtak

Hvis du er uenig i svaret på klagen din fra Nav klageinstans, kan du med noen unntak anke vedtaket. Fristen for å anke står i vedtaket.

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send anke' }) }}
  {{ button({ text: 'Ettersend dokumentasjon' }) }}
</div>

Her kan du lese mer om dine klage- og ankerettigheter

{{
  tile({ title: 'Klagerettigheter',
  kicker: ['Slik gjør du det']
}) }}

<details class='readmore'>
  <summary>Saksbehandlingstider</summary>
  {% prose %}{% endprose %}
</details>