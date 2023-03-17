module.exports = {
  sections: [
    {
      title: "Kort om utvidet barnetrygd",
      contentBlocks: [
        {
          type: "markdown",
          data: `Du kan få utvidet barnetrygd når du bor alene med barn under 18 år. Dette er barnetrygd for et barn mer enn du faktisk bor sammen med.

          Du kan også få småbarnstillegg. Dette er et tillegg til utvidet barnetrygd for enslige forsørgere som har barn mellom 0 og 3 år, og som også mottar full overgangsstønad.`,
        },
        {
          type: "microcards",
          title: "Utvidet barnetrygd er aktuelt for deg som",
          data: [
            {
              text: "Er helt eller delvis alene med barn",
              dot: "bg-orange-300",
            },
            {
              text: "Er alene med barn fordi den andre forelderen er død",
              dot: "bg-orange-300",
            },
          ],
        },
      ],
    },
    {
      title: "Hvem kan få?",
      icon: "/src/_includes/svg/icons/enslig.svg",
      contentBlocks: [
        {
          type: "markdown",
          data: `Du kan få utvidet barnetrygd i tillegg til den ordinære barnetrygden.

          Du kan få utvidet barnetrygd hvis du bor alene med barn og

- er ugift, og ikke lever sammen med den andre forelderen til barnet. Samlivsbrudd mellom samboere som har felles barn under 16 år, må bekreftes med meklingsattest
- er separert, skilt eller gjenlevende ektefelle, og ikke lever sammen med den andre forelderen til barnet
- har vært faktisk separert i minst 6 måneder uten separasjonsbevilling eller dom
- har en ektefelle/samboer som har vært forsvunnet i minst 6 måneder
- har en ektefelle/samboer som er fengslet med ubetinget straff på minst 6 måneder, eller som har sittet i varetekt i minst 6 måneder

Hvis du bor alene med barn mellom 0 og 3 år og får full overgangsstønad, kan du få småbarnstillegg i tillegg til utvidet barnetrygd.`,
        },
        {
          type: "tiles",
          data: [
            {
              title: "Overgangsstønad til enslig mor eller far",
              icon: "/src/_includes/svg/pictograms/overgangsstonad-enslig-foreldre.svg",
              theme:
                "fine:hover:bg-green-200 fine:hover:ring fine:hover:ring-green-200 fine:hover:rounded-lg fine:hover:border-t-0",
            },
            {
              title: "Finn ut hva du kan ha rett til når du er alene med barn",
              icon: "/src/_includes/svg/pictograms/veiviser-neutral.svg",
              theme:
                "fine:hover:bg-deepblue-200 fine:hover:ring fine:hover:ring-deepblue-200 fine:hover:rounded-lg fine:hover:border-t-0",
            },
          ],
        },
      ],
    },
    {
      title: "Hvor mye kan du få?",
      icon: "/src/_includes/svg/icons/calculator.svg",
      contentBlocks: [
        {
          type: "markdown",
          data: `Fra 1. januar 2022 får du 1 054 kroner i måneden. Dette får du i tillegg til den ordinære barnetrygden. Du må ikke betale skatt av barnetrygd.

          Når du har delt barnetrygd får du 527 kroner i måneden. Dette får du i tillegg til den ordinære delte barnetrygden.

          Småbarnstillegget er 660 kroner måneden og blir utbetalt sammen med barnetrygden.`,
        },
      ],
    },
    {
      title: "Når utbetales pengene?",
      icon: "/src/_includes/svg/icons/wallet.svg",
      contentBlocks: [
        {
          type: "markdown",
          data: `Barnetrygden blir utbetalt en gang per måned.
          I din utbetalingsoversikt kan du se den kommende utbetalingen din flere dager før utbetalingsdatoen.

          Når på dagen pengene er på konto, vil variere fordi det er banken din som overfører pengene til deg. Utbetalingen kan derfor komme på kontoen din først på ettermiddagen eller kvelden.

### Feriepenger
Det er ikke feriepenger på denne pengestøtten.

### Skatt
Det blir ikke trukket skatt.`,
        },
      ],
    },
    {
      title: "Hvor lenge kan du få?",
      icon: "/src/_includes/svg/icons/hourglass.svg",
      contentBlocks: [
        {
          type: "markdown",
          data: `Du får som regel utvidet barnetrygd fra måneden etter at du blir alene med barn.

          Når du regnes for å være alene med barn, vil variere etter hvilken situasjon du er i. Her er noen eksempler:

* Du har vært gift og er nå separert: Du kan tidligst få utvidet barnetrygd fra måneden etter separasjonsbevilling.
* Du har vært samboer med felles barn under 16 år: Du kan tidligst få utvidet barnetrygd fra måneden etter at du har fått meklingsattest.
* Du er ugift og alene med barn fra fødselen: Du kan ha rett til utvidet barnetrygd fra måneden etter fødselen.
* Du kan få utvidet barnetrygd for inntil 3 år før du søker hvis du har rett til støtten i denne perioden.

Hvis situasjonen din endrer seg slik at du ikke lenger regnes for å være alene med barn, har du ikke lenger rett til utvidet barnetrygd. Utvidet barnetrygd opphører fra måneden etter endringen.`,
        },
      ],
    },
    {
      title: "Meld fra om endringer",
      icon: "/src/_includes/svg/icons/chat.svg",
    },
    {
      title: "Til eller fra utlandet",
      icon: "/src/_includes/svg/icons/takeoff.svg",
    },
    {
      title: "Søknad og dokumentasjon",
      icon: "/src/_includes/svg/icons/tasks.svg",
    },
  ],
};
