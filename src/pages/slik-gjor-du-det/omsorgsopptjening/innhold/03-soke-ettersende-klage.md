---
title: 'Søke, ettersende eller klage'
order: 3
---

{%- from "macros/button.njk" import button -%}
{%- from "macros/tile.njk" import tile -%}


### Søknad ved omsorg for små barn og barn med hjelpestønad

Den forelderen som mottar barnetrygd for barnet, får automatisk pensjonsopptjening ved omsorg for små barn under 6 år eller barn under 17 år som har hjelpestønad sats 3 eller 4. Alle andre må søke.

I noen tilfeller må du selv søke om omsorgsopptjening selv om du skulle fått det automatisk. Det gjelder hvis:

* Du har gått glipp av opptjeningen selv om du har fått barnetrygd.
* Du kan ha rett på omsorgsopptjening uten å ha fått barnetrygd.

#### Søk om godskriving av omsorgsopptjening

Hvis du ikke har fått omsorgsopptjening automatisk, må du søke om å få godskrevet omsorgsopptjeningen.

Det er ingen tidsfrist for når du kan søke om å få pensjonsopptjening for omsorg for små barn under 6 år eller når barnet har hjelpestønad med sats 3 eller 4.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
</div>

### Søknad ved omsorg for barn som er syke eller har funksjonsnedsettelser

Du må selv søke for å få omsorgsopptjening ved omsorg for barn mellom 6 og 18 år som er syke eller har funksjonsnedsettelser, og som ikke får hjelpestønad med sats 3 eller 4.

Du kan søke når det har gått et halvt kalenderår, det vil si tidligst i juli.

Søknaden må sendes inn senest i løpet av det andre året etter at du utførte omsorgsarbeidet. Det vil si at det bare er mulig å søke om omsorgsopptjening for de to foregående kalenderår.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

<details class='readmore'>
  <summary>Dette må du dokumentere</summary>
  {% prose %}{% endprose %}
</details>

#### Overføring av omsorgsopptjening for barn

Hvis du har fått omsorgspoeng for et barn under 7 år og ønsker å overføre dette til den andre forelderen, kan du gjøre det.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Overfør omsorgsopptjening', variant: 'primary' }) }}
</div>


### Etter at du har søkt

Du får et vedtak fra Nav når vi har behandlet søknaden din.

<details class='readmore'>
  <summary>Saksbehandlingstider</summary>
  {% prose %}{% endprose %}
</details>

#### Har du spørsmål om saken din?

Hvis du har spørsmål om søknaden eller vedtaket, kan du [kontakte oss](#).

### Klagerettigheter


Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til Nav-enheten som skrev vedtaket. De vil vurdere saken din på nytt. Hvis de ikke er enig i klagen din, sender de den videre til Nav klageinstans.

#### Klage på vedtak

I vedtaket står det hvordan du går fram hvis du skal klage, hvem du skal klage til og klagefrist. Hvis du har spørsmål om vedtaket, kan du kontakte oss.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Send klage', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

#### Anke vedtak
Hvis du er uenig i svaret på klagen din fra Nav klageinstans, kan du med noen unntak anke vedtaket. Fristen for å anke står i vedtaket.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Send anke', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

Du kan også bruke advokat eller gi fullmakt til en person som klager på dine vegne.

<div class="grid gap-3">
{{ tile({
  title: 'Klagerettigheter',
  kicker: ['Slik gjør du det']
}) }}
</div>
