---
title: 'Aktuelle pengestøtter'
order: 7
---


{% set varekort = [
  {
    title: 'Sykepenger',
    description: 'Erstatter inntekten din når du ikke kan jobbe på grunn av sykdom eller skade.',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Arbeidsavklarings­penger (AAP)',
    description: 'Sikrer deg inntekt i perioder du har behov for hjelp fra Nav på grunn av sykdom eller skade.',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Svangerskapspenger',
    description: 'Erstatter inntekt når du er frisk, men ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for barnet.',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Dekking av sykepenger i arbeidsgiverperioden',
    description: 'Nav dekker sykepenger i arbeidsgiverperioden hvis du har hyppig sykefravær fordi du er kronisk syk eller gravid.',
    kicker: 'Tiltak'
  },
  {
    title: 'Uføretrygd',
    description: 'Skal sikre deg inntekt når inntektsevnen din er varig redusert på grunn av sykdom eller skade.',
    kicker: 'Pengestøtte'
  }
] %}

<div class="grid gap-3 text-left sm:gap-6 sm:grid-cols-2" style="--pictogram: var(--color-blue-100);">
  {%- for item in varekort %}
  <div class="relative border rounded-lg sm:aspect-[4/5] border-slate-300 has-[a:hover]:bg-blue-50 grid w-full gap-3 px-5 py-4 xs:flex xs:gap-6 xs:items-start">
    {{- item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0') | safe if item.pictogram -}}
    <div class="flex flex-col h-stretch">
      <a href="#" class="font-semibold text-fluid-20-22 after:absolute after:inset-0">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto font-normal tracking-wider text-gray-700 small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {%- endfor %}
</div>
