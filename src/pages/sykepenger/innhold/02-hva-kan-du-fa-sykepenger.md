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

### Hvor mye kan du få?

Sykepengene skal dekke inntekten du vanligvis har, opp til 711 720 kroner (6 ganger folketrygdens grunnbeløp). 

Når NAV skal utbetale sykepenger, fastsetter vi et sykepengegrunnlag som sykepengene regnes ut etter. I noen saker må NAV bruke skjønn for å beregne sykepengegrunnlaget ditt, det vil si inntekten som NAV kommer fram til at du ville hatt om du ikke hadde blitt syk.

Inntekt fra overtid regnes ikke med i sykepengegrunnlaget.

Hvis du starter i ny jobb eller får ny inntekt mens du er sykmeldt, vil sykepengene dine bli gradert.

Hvis du fyller vilkårene for både sykepenger og AAP, må du først bruke sykepengene dine fullt ut. Hvis sykepengegrunnlaget ditt er mindre enn to ganger grunnbeløpet (2G), kan du likevel velge mellom sykepenger og AAP.

<div class="accordion">
  <details>
    <summary>Arbeidstaker</summary>
      {% prose %}
Arbeidsgiveren din utbetaler sykepengene for de første 16 dagene du er syk. Dette kalles arbeidsgiverperioden. Hvis du er sykmeldt lenger enn dette, er det NAV som utbetaler sykepengene. NAV utbetaler opp til 711 720 (6G) i sykepenger. 

Sykepengene beregnes med utgangspunkt i lønnen din de siste tre månedene før du ble sykmeldt.

Hvis sykmeldingen din skyldes yrkesskade, kan du ha andre rettigheter i tillegg. Sykmeldingen din må i tilfelle helt og fullt skyldes yrkesskaden, og NAV må ha godkjent [yrkesskaden](#).

Du får utbetalt [feriepenger](#) fra NAV. Feriepengene beregnes på grunnlag av de første 48 dagene med sykepenger per kalenderår.

#### Hvis du har et tidsbegrenset arbeidsforhold

Du får sykepenger som arbeidstaker i den perioden arbeidsforholdet er avtalt å vare. Hvis du er sykmeldt lenger enn dette, kan sykepengene dine bli vurdert på nytt.
      {% endprose %}
  </details>

  <details>
    <summary>Selvstendig næringsdrivende</summary>
    {% prose %}
Som selvstendig næringsdrivende har du rett til sykepenger fra 17. fraværsdag. Sykepengene utgjør 80 prosent av sykepengegrunnlaget. Men du kan forsikre deg for å få dekket større deler av inntektstapet.

Beregningen av sykepengegrunnlaget tar som regel utgangspunkt i gjennomsnittet av den pensjonsgivende årsinntekten for de siste 3 årene du har fått skatteoppgjør for. Dette gjelder hvis det ikke har skjedd en varig endring.

Har det skjedd varige endringer i arbeidssituasjonen din eller virksomheten? Eller har du nylig startet opp som selvstendig næringsdrivende?

NAV regner ut sykepengegrunnlaget ditt ut fra det du kan dokumentere av næringsinntekt.

I slike tilfeller bør du sammen med søknaden legge ved dokumentasjon på forventet inntekt.

Eksempler på dokumentasjon kan være

* resultatregnskap for inneværende år som opplyser om brutto inntekt, fradrag og netto næringsinntekt
* personinntektsskjema fra forrige år
* dokumentasjon på innbetalt forskuddsskatt
* utskrevet grunnlag for forskuddsskatt for næring fra Skatteetaten

Selvstendig næringsdrivende har ikke rett til feriepenger av sykepengene.

Du kan [forsikre])(#) deg for å få dekket større deler av inntektstapet ditt.

Hvis sykmeldingen din skyldes yrkesskade, og du har tegnet en egen yrkesskadeforsikring, kan du ha andre rettigheter i tillegg. Sykmeldingen din må i tilfelle helt og fullt skyldes yrkesskaden, og NAV må ha godkjent yrkesskaden.

#### Jordbrukere og reindriftsutøvere

Du har rett til sykepenger fra dag 17 av sykefraværet ditt, og du kan få sykepenger som tilsvarer 80 prosent av lønnen din.

* Du kan ha en kollektiv forsikring som gir deg rett til syke­penger med full lønn opp til 711 720 (6G). Sjekk med Skatteetaten om du er omfattet av denne forsikringen.
* Du kan i tillegg tegne individuell forsikring for jordbrukere og reindriftsutøvere som gir deg full lønn de 16 første sykefraværsdagene.

{{ tile({ title: 'Forsikring for jordbrukere og reindriftsutøvere', mark: 'bg-green-200', kicker: ['Forsikring'] }) }}
    {% endprose %}
  </details>

  <details>
    <summary>Frilanser</summary>
    {% prose %}
Som frilanser har du rett til sykepenger fra 17. fraværsdag. Hvis du har tegnet [forsikring](#), kan du få sykepenger de første 16 kalenderdagene, men da må du levere sykmelding.

Sykepengene utgjør 100 prosent av sykepengegrunnlaget. Beregningen tar utgangspunkt i gjennomsnittet av frilansinntekten som rapporteres til a-ordningen for de siste 3 kalendermånedene før du ble syk. Reglene for beregning av sykepenger er de samme som for arbeidstakere.

Frilansere har ikke rett til [feriepenger](#) av sykepengene.

Hvis sykmeldingen din skyldes yrkesskade, og du har tegnet en egen yrkesskadeforsikring, kan du ha andre rettigheter i tillegg. Sykmeldingen din må i tilfelle helt og fullt skyldes yrkesskaden, og NAV må ha godkjent yrkesskaden.
    {% endprose %}
  </details>

 
  <details>
    <summary>Fisker</summary>
    {% prose %}
Hvis du mottar lott, får du beregnet sykepenger etter reglene for selvstendig næringsdrivende. Hvis du har hyre, beregnes sykepengene etter de samme reglene som for arbeidstakere. Hvis du både mottar lott og er på hyre, beregnes sykepengene på grunnlag av begge disse, les mer under avsnittet hvis du har flere jobber.

Hvis du er registrert i fiskermanntallet på blad B, er du omfattet av en kollektiv forsikring som gir rett til sykepenger med 100 prosent dekning fra første sykefraværsdag. Du har rett til sykepenger selv om du har vært i arbeid i mindre enn fire uker.
    {% endprose %}
  </details>

  <details>
    <summary>Tilkallingsvikar</summary>
    {% prose %}
Hvis du er tilkallingsvikar er du normalt arbeidstaker, og det er disse reglene som gjelder for deg.

Hvis du jobber som tilkallingsvikar i egen næringsvirksomhet eller som frilanser, beregnes sykepengene på samme måte som for øvrige næringsdrivende eller frilansere.
    {% endprose %}
  </details>

  <details>
    <summary>Har flere arbeidsforhold</summary>
    {% prose %}
Hvis du har flere arbeidsforhold, blir sykepengene beregnet ut fra den samlede inntekten din, begrenset til 711 720 (6G). Dette gjelder selv om du ikke er sykmeldt fra alle arbeidsforholdene.

Hvis den samlede inntekten din er mindre enn 6G vil utbetaling av sykepenger være lik inntektstapet ditt.

Hvis den samlede inntekten din er mer enn 6G og

1. du har flere arbeidsgivere som alle utbetaler sykepenger mens du er syk, og du er syk fra alle arbeidsforholdene: Da blir sykepengene dine forholdsmessig fordelt ut fra hvor stor andel du jobber i de ulike arbeidsforholdene.
2. du har én arbeidsgiver som utbetaler sykepenger mens du er syk, og én arbeidsgiver som ikke gjør det: Den arbeidsgiveren som utbetaler sykepenger får dekket hele refusjonskravet sitt, begrenset til 6G. Hvis du tjener mindre enn 6G hos denne arbeidsgiveren, får du utbetalt resten.
3. du er selvstendig næringsdrivende i tillegg til at du har en arbeidsgiver som utbetaler sykepenger mens du er syk. Se punkt 2.  
4. du har frilansinntekt i tillegg til at du har en arbeidsgiver som utbetaler sykepenger mens du er syk. Se punkt 2.
    {% endprose %}
  </details>

  <details>
    <summary>Midlertidig ute av arbeid</summary>
    {% prose %}
Hvis du har vært ute av arbeid i under en måned kan du få sykepenger fra og med den 15. dagen etter at du ble sykmeldt. Sykepengene utgjør 65 prosent av sykepengegrunnlaget hvis du ikke jobber, og 100 prosent hvis du jobber når du blir sykmeldt.
    {% endprose %}
  </details>

  <details>
    <summary>Arbeidsledig (dagpengemottaker)</summary>
    {% prose %}
Hvis du får dagpenger, vil du få sykepenger fra den første dagen du er sykmeldt. Du får det samme utbetalt per dag i sykepenger som du får utbetalt i dagpenger.
    {% endprose %}
  </details>

  <details>
    <summary>Permittert</summary>
    {% prose %}
Hvis du er permittert og mottar dagpenger, vil du få sykepenger fra den første dagen du er sykmeldt. Du får det samme utbetalt per dag i sykepenger som du får utbetalt i dagpenger.
    {% endprose %}
  </details>

  <details>
    <summary>Har avtjent militærtjeneste</summary>
    {% prose %}
Hvis du har avtjent militær eller sivil tjeneste, har du samme rett til sykepenger som arbeidstakere, men med følgende særbestemmelser:

* Sykepengegrunnlaget beregnes på grunnlag av det arbeids – og inntektsforholdet du var i før du begynte i tjenesten.
* Hvis tjenesten har vart, eller var ment å vare mer enn 28 dager, får du et minstegrunnlag som tilsvarer 237 240 (2G).
    {% endprose %}
  </details>

  <details>
    <summary>Innlagt på helseinstitusjon</summary>
    {% prose %}
Du får sykepenger for måneden du er innlagt og de tre påfølgende månedene. Deretter blir sykepengene redusert med 50 prosent, men skal likevel ikke være lavere enn et sykepengegrunnlag på 50 prosent av grunnbeløpet.

Hvis du fortsatt har faste og nødvendige utgifter til bolig eller forsørgingsansvar, kan du likevel få utbetalt sykepengene uten reduksjon.
    {% endprose %}
  </details>

  <details>
    <summary>Tar utdanning</summary>
    {% prose %}

#### Studier på deltid

* Er du sykmeldt fra en deltidsjobb, men klarer likevel å fortsette studiene? Da kan du få sykepenger basert på inntekten din hvis du har kombinert jobb og studier over et visst tidsrom. 
* Klarer du å fortsette i jobben, men må avbryte studiene på grunn av sykdom? Da kan du ha rett til [arbeidsavklaringspenger](#) som student. Pengene blir beregnet etter hvor mange timer du jobber.
* Hvis du blir sykmeldt fra deltidsjobben og må avbryte studiene, kan du ha rett til sykepenger i kombinasjon med arbeidsavklaringspenger.

#### Sykestipend fra Lånekassen

Hvis du blir syk og ikke kan møte til undervisningen, kan du få [sykestipend fra Lånekassen](#).
    {% endprose %}
  </details>
</div>

### Hvis arbeidsgiveren ikke godtar sykmeldingen din

Noen ganger kan en arbeidsgiver nekte å betale sykepenger de første 16 dagene av sykefraværet. Hvis arbeidsgiveren din ikke godkjenner sykmeldingen, kan du søke om at NAV betaler deg sykepenger disse 16 dagene.

#### Når kan arbeidsgiveren tvile på sykmeldingen?

Arbeidsgiveren din har ikke rett til å få vite sykdomshistorien eller diagnosen din. Det hender likevel at arbeidsgiveren kan stille spørsmål ved om du har rett til sykepenger.

Her ser du eksempler på situasjoner som kan gi arbeidsgiveren grunnlag for å tvile på sykmeldingen:

* Hvis sykmeldingen kommer i forbindelse med permittering, streik, konkurs, oppsigelse, arbeidskonflikt, livskriser, vanskelige livssituasjoner eller ferie.
* Hvis du gjennomfører aktiviteter som tilsier at du hadde klart å jobbe.
* Hvis du har latt være å si fra om at du var syk, eller sagt fra først etter 14 dager.
* Hvis sykmeldingen er tilbakedatert selv om du har hatt mulighet til å oppsøke lege.
* Hvis legen din uttrykker tvil om du er for syk til å jobbe.

<details class="readmore">
  <summary>Slik søker du om at NAV betaler sykepengene de første 16 dagene</summary>
  {% prose "py-2 pl-5 ml-6 border-l-2 border-slate-400" %}
NAV vil vurdere om du har rett til sykepenger, både for disse 16 dagene og for eventuelle påfølgende dager du også er syk.

Du kan logge deg inn og bruke [Send beskjed til NAV](#). Velg kategorien «Syk». Her skriver du:

«Arbeidsgiveren min vil ikke betale sykepenger i arbeidsgiverperioden. Jeg søker om at NAV betaler sykepengene.» Deretter skriver du disse opplysningene:

* Navnet, adressen og telefonnummeret til arbeidsgiveren
* Datoen du sa fra til arbeidsgiveren at du var syk
* Måten du sa fra på (telefon, SMS, e-post eller liknende)
* Hvem du sa fra til
* Datoen du leverte sykmeldingen
* Om du har vært i utlandet mens du var sykmeldt – i tilfelle hvor og når
* Om du har jobbet noe i perioden – for hvem og hvor mye
* Din versjon og kommentar til hvorfor arbeidsgiveren din ikke har betalt sykepenger til deg 

Hvis du ønsker det, kan du i stedet be oss om å sende deg et søknadsskjema på papir. Etter at du har fylt ut søknadsskjemaet, kan du sende det til oss digitalt eller i posten. Ta [kontakt med oss](#) hvis du ønsker dette.

Når du har søkt, vil vi avgjøre om du har rett til sykepenger. Du får et skriftlig svar når søknaden er ferdig behandlet. Saksbehandlingstiden kan ofte være lengre i disse sakene.
  {% endprose %}
</details>

#### Hva gjør NAV?
Vi undersøker saken når du har sendt oss søknaden, se beskrivelsen over. Da innhenter vi opplysninger fra arbeidsgiveren din, eventuelt fra den som har sykmeldt deg.

Ofte må vi innhente utskrift av pasientjournalen din. Som regel ber vi om utskrift for en periode før du ble sykmeldt, og i tiden du var sykmeldt.

Hvis vi mener at du har rett til sykepenger, vil vi utbetale sykepengene til deg og kreve dem tilbake fra arbeidsgiveren etterpå.

Hvis vi derimot kommer til samme konklusjon som arbeidsgiveren din, kan vi ikke utbetale sykepenger for de første 16 dagene av sykefraværet. Vi må også vurdere om du har rett til sykepenger fra dag 17 når vi overtar ansvaret for å utbetale sykepenger.

### Hvor lenge kan du få?

Hvor lenge du kan få sykepenger avhenger av alderen din.

<div class="accordion">
  <details>
    <summary>Under 67 år</summary>
    {% prose %}
Du kan maksimalt få sykepenger i 52 uker. Grensen er den samme enten du er helt eller delvis sykmeldt.

* Sykefravær 3 år tilbake i tid blir lagt sammen hvis det er mindre enn 26 uker mellom noen av fraværene. 
* Hvis du har brukt opp de 52 ukene, må det gå 26 uker uten sykepenger eller arbeidsavklaringspenger for at du kan få sykepenger på nytt.
* Hvis du mottar [arbeidsavklaringspenger](#) som arbeidssøker, vil du likevel starte opptjeningen av ny rett til sykepenger. 

Hvis du har fått sykepenger i 52 uker og fortsatt ikke kan arbeide på grunn av sykdom eller skade, kan du ha rett til arbeidsavklaringspenger eller uføretrygd.
    {% endprose %}
  </details>

  <details>
    <summary>Mellom 67 og 70 år</summary>
    {% prose %}
Du kan få sykepenger i opptil 60 dager, uavhengig av om du har tatt ut alderspensjon.

60-dagersregelen gjelder fra og med dagen etter du fylte 67 år og til og med dagen før du fyller 70 år. Hvis du har fylt 70 år, har du ikke rett til sykepenger.
    {% endprose %}
  </details>
</div>

### Ulike former for sykmelding

<div class="accordion">
  <details>
    <summary>Sykmelding</summary>
    {% prose %}
Du kan få [sykmelding](#) av fastlegen eller en annen som har rett til å sykmelde deg hvis det er medisinske grunner til at du ikke kan jobbe.
    {% endprose %}
  </details>

  <details>
    <summary>Gradert sykmelding</summary>
    {% prose %}
[Hvis du kan være delvis i arbeid](#), skal du bli delvis sykmeldt. Hensikten er å holde kontakten med arbeidsplassen og bruke de mulighetene du har til å jobbe – hvis det er medisinsk forsvarlig.

Den som sykmelder deg skal alltid vurdere om du kan jobbe. Ofte kan det være behov for å  tilrettelegge arbeidet.
    {% endprose %}
  </details>

  <details>
    <summary>Sykmelding for enkeltstående behandlingsdager</summary>
    {% prose %}
Du kan få sykmelding hvis [behandlingen](#) har en slik virkning på deg at du ikke kan jobbe noe den samme dagen.
    {% endprose %}
  </details>
  <details>
    <summary>Avventende sykmelding</summary>
    {% prose %}
[Avventende sykmelding](#) er en beskjed til arbeidsgiveren din om at du kan unngå sykmelding hvis det blir lagt til rette for deg på arbeidsplassen.
    {% endprose %}
  </details>
</div>

### Reisetilskudd som alternativ til sykepenger

Klarer du å jobbe, men har problemer med å reise til og fra arbeidsstedet? Da kan du ha rett til reisetilskudd i stedet for sykepenger fra 17. dag etter at du ble sykmeldt.

{{ tile({
  title: 'Reisetilskudd',
  content: 'Tilskudd i stedet for sykepenger eller sammen med graderte sykepenger når det gjør at du kan jobbe helt eller delvis.',
  kicker: ['Pengestøtte'],
  mark: 'bg-green-300'
}) }}


### Andre tilbud

Mer informasjon til deg som

<div class="grid gap-3 mt-2">
  {{ tile({ 
    title: 'Har blitt sykmeldt', 
    mark: 'bg-orange-300', 
    kicker: ['Helse og sykdom']
  }) }}
  {{ tile({ 
    title: 'Kan bare jobbe noe på grunn av langvarig sykdom eller skade', 
    mark: 'bg-orange-300', 
    kicker: ['Arbeid', 'Helse og sykdom'] 
  }) }}
  {{ tile({ 
    title: 'Har vært syk eller skadet lenge', 
    mark: 'bg-orange-300', 
    kicker: ['Arbeid', 'Helse og sykdom'] 
  }) }}
  {{ tile({ 
    title: 'Har en varig sykdom eller skade og kan ikke jobbe', 
    mark: 'bg-orange-300', 
    kicker: ['Helse og sykdom'] 
  }) }}
</div>
