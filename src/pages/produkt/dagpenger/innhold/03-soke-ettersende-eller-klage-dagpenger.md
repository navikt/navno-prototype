---
title: 'Søke, ettersende og klage'
ingress: 'Skjema for å søke, ettersende eller klage, og saksbehandlingstider.'
icon: '/src/_includes/svg/icons/tasks.svg'
order: 3
---

{%- from "macros/video.njk" import video -%}
{%- from "macros/microcard.njk" import microcard -%}
{%- from "macros/readmore.njk" import readmore -%}
{%- from "macros/button.njk" import button -%}
{%- from "macros/tile.njk" import tile -%}

### Når bør du søke?

Du bør søke 2 uker før siste dag du har krav på lønn. Du kan tidligst få dagpenger fra den dagen du sender inn søknaden om dagpenger, og registrerer deg som arbeidssøker.

<div class="flex flex-wrap gap-3 mb-12">
  {{ button({ text: 'Søk om dagpenger', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

Når du søker digitalt vil det ta omtrent 20-30 minutter. 

### Hvilke dokumenter skal du legge ved søknaden?

I søknaden laster du opp dokumentasjon som bekrefter opplysningene du gir oss. Hvis Nav har all dokumentasjonen når vi starter behandlingen, får du raskere svar på søknaden. Ut fra hva du svarer i søknaden får du beskjed om hvilke dokumenter vi trenger fra deg. Det er likevel noen dokumenter de aller fleste skal legge ved.

#### Sjekk hva disse dokumentene skal inneholde:

<div class='accordion'>
  <details>
    <summary>Arbeidskontrakt</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Oppsigelse</summary>
    {% prose %}{% endprose %}
  </details>
  <details>
    <summary>Permitteringsvarsel</summary>
    {% prose %}{% endprose %}
  </details>
</div>

#### Hvordan laster du opp dokumenter du har på papir?

Du kan ta bilder av dokumenter du har på papir, og laste opp bildene i søknaden. Pass på at hele dokumentet er med på bildet og at all tekst er lesbar. Du kan bruke filformatene PDF, JPG og PNG. Filen kan ikke være større enn 10 MB.

#### Har du ikke alle dokumentene nå?

Har du ikke alle dokumentene Nav trenger akkurat nå? Send inn det du har, og ettersend resten av dokumentene innen 14 dager. Hvis du ikke ettersender i tide, risikerer du å få avslag på søknaden din. Får du ikke tak i dokumentasjonen, må du [ta kontakt med Nav](#).

### Når får du svar på søknaden?

<details class='readmore'>
  <summary>Saksbehandlingstider for dagpenger</summary>
  {% prose %}{% endprose %}
</details>

Når søknaden din er ferdig behandlet, får du beskjed på SMS. Svaret finner du ved å logge inn på nav.no

Du får første utbetaling med dagpenger når du får svar på søknaden.

#### Send meldekort mens du venter på svar

Fra du har registrert deg som arbeidssøker, og mens du venter på svar på søknaden, må du sende meldekort hver 14. dag. Logg inn for å se når du skal sende ditt neste meldekort.

Det er flere krav til hva du må gjøre etter du har søkt. [Sjekk hva du må gjøre mens du venter på svar](#).

### Tilleggssøknader

**Søknad om attest PD U1/N-301 til bruk ved overføring av dagpengerettigheter**

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

**Søknad om attest PD U2 for å beholde dagpengene mens du søker jobb i et annet EØS-land**

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

**Søknad om å beholde dagpengene under etablering av egen bedrift**
<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send skjema', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

**Søknad om å beholde dagpengene mens du tar utdanning eller opplæring**
<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send søknad', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

### Klagerettigheter

Har du fått et vedtak fra oss som du mener er feil? Da kan du klage til Nav-enheten som skrev vedtaket. De vil vurdere saken din på nytt. Hvis de ikke er enig i klagen din, sender de den videre til Nav klageinstans.

#### Klage på vedtak om dagpenger

I vedtaket står det hvordan du går fram hvis du skal klage, hvem du skal klage til og klagefrist. Hvis du har spørsmål om vedtaket, kan du [kontakte oss](#).

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send klage', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

#### Anke vedtak om dagpenger

Hvis du er uenig i svaret på klagen din fra Nav klageinstans, kan du med noen unntak anke vedtaket. Fristen for å anke står i vedtaket.

<div class="flex flex-wrap gap-3 mt-2 mb-12">
  {{ button({ text: 'Send anke', variant: 'primary' }) }}
  {{ button({ text: 'Ettersend dokumentasjon', variant: 'primary' }) }}
</div>

Du kan også bruke advokat eller gi fullmakt til en person som klager på dine vegne.

<div class="grid gap-3 mt-2">
{{ tile({
  title: 'Klagerettigheter',
  kicker: ['Slik gjør du det']
}) }}
</div>
