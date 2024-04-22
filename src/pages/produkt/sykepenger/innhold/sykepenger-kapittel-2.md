---
title: 'Hva kan du få?'
ingress: 'Hvor mye penger kan du få, og hvor lenge kan du få støtte.'
order: 2
---

{%- from "macros/video.njk" import video -%}
{%- from "macros/microcard.njk" import microcard -%}
{%- from "macros/tile.njk" import tile -%}
{%- from "macros/readmore.njk" import readmore -%}

### Hvor mye kan du få?

Sykepengene skal dekke inntekten du vanligvis har, opp til 711 720 kroner (6 ganger folketrygdens grunnbeløp).

Når NAV skal utbetale sykepenger, fastsetter vi et sykepengegrunnlag som sykepengene regnes ut etter. Sykepengegrunnlaget kan ikke overstige 6 ganger grunnbeløpet.

Hvis lønnen din er varig endret i løpet av de 3 siste månedene, regnes vanligvis inntekten fra det tidspunktet lønnen ble endret.

Inntekt fra overtid regnes ikke med i sykepengegrunnlaget.

Hvis du starter i ny jobb eller får ny inntekt mens du er sykmeldt, vil sykepengene dine bli gradert.

Se hva som gjelder for deg:

<div class="accordion">
  <details>
    <summary>Arbeidstaker</summary>
      {% prose %}
Arbeidsgiveren din utbetaler sykepengene for de første 16 dagene du er syk. Dette kalles arbeidsgiverperioden. Hvis du er sykmeldt lenger enn dette, er det NAV som utbetaler sykepengene. NAV utbetaler opp til 711 720 (6G) i sykepenger. Hvis du tjener mer enn 6G, får du mindre utbetalt i sykepenger enn det du normalt har i lønn.

Noen arbeidsgivere gir imidlertid sykepenger etter et sykepengegrunnlag som overstiger 6G. Kontakt arbeidsgiveren din for å undersøke hva som gjelder på din arbeidsplass.

Hvis sykmeldingen din skyldes yrkesskade, kan du ha andre rettigheter i tillegg. Sykmeldingen din må i tilfelle helt og fullt skyldes yrkesskaden, og NAV må ha godkjent yrkesskaden.

#### Hvis du har et tidsbegrenset arbeidsforhold

Du får sykepenger som arbeidstaker i den perioden arbeidsforholdet er avtalt å vare. Hvis du er sykmeldt lenger enn dette, kan sykepengene dine bli vurdert på nytt.

Du får utbetalt feriepenger fra NAV. Feriepengene beregnes på grunnlag av de første 48 dagene med sykepenger per kalenderår.

#### Hvis du er arbeidstaker på skip

Hvis du jobber på et norskregistrert skip (NOR), har du rett til sykepenger etter de samme reglene som gjelder for andre arbeidstakere. Dette gjelder også om du jobber på et norsk skip i utenriksfart.

Hvis du jobber på et skip som registrert i Norsk internasjonalt skipsregister (NIS), kan du ha rett til sykepenger hvis skipet seiler under norsk flagg på det tidspunktet du ble arbeidsufør.
      {% endprose %}
  </details>
  <details>
    <summary>Selvstendig næringsdrivende</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Frilanser</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Fisker</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Tilkallingsvikar</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Flere jobber</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Jobber i flere land</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Midlertidig ute av arbeid</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Arbeidsledig</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Avtjent militær- eller siviltjeneste</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>I utdanning</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Innlagt på helseinstitusjon</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>I fengsel</summary>
    <p>Innhold mangler</p>
  </details>
</div>

### Hvor lenge kan du få sykepenger?

Hvor lenge du kan få avhenger av alderen din.

<div class="accordion">
  <details>
    <summary>Hvis du er under 67 år</summary>
    <p>Innhold mangler</p>
  </details>
  <details>
    <summary>Hvis du er mellom 67 og 70 år</summary>
    <p>Innhold mangler</p>
  </details>
</div>

### Reisetilskudd

Klarer du å jobbe, men har problemer med å reise til og fra arbeidsstedet? Da kan du ha rett til reisetilskudd i stedet for sykepenger fra 17. dag etter at du ble sykmeldt.

{{ tile({
  title: 'Reisetilskudd',
  content: 'Tilskudd i stedet for sykepenger eller sammen med graderte sykepenger når det gjør at du kan jobbe helt eller delvis.',
  kicker: 'Pengestøtte'
}) }}

### Andre tilbud

Mer informasjon til deg som

<div class="grid gap-2 mt-2 justify-items-start">
  {{ microcard({ text: 'Har blitt sykmeldt', dot: 'bg-orange-400' }) }}
  {{ microcard({ text: 'Kan bare jobbe noe på grunn av langvarig sykdom eller skade', dot: 'bg-orange-400' }) }}
  {{ microcard({ text: 'Har vært syk eller skadet lenge', dot: 'bg-orange-400' }) }}
  {{ microcard({ text: 'Har en varig sykdom eller skade og kan ikke jobbe', dot: 'bg-orange-400' }) }}
</div>
