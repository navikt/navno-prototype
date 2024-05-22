---
title: 'Pengestøtte når du får barn'
sectionType: 'varehylle'
---

{% set varekort = [
  {
    title: 'Svangerskapspenger',
    description: 'Erstatter inntekt når du er frisk, men ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for barnet.',
    pictogram: '/src/_includes/svg/piktogrammer/produkter/svangerskapspenger.svg',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Foreldrepenger',
    description: 'Erstatter inntekten din når du skal være hjemme med barnet ved fødsel eller adopsjon.',
    pictogram: '/src/_includes/svg/piktogrammer/produkter/foreldrepenger.svg',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Engangsstønad',
    description: 'En engangssum i stedet for foreldrepenger ved fødsel eller adopsjon når du ikke har hatt inntekt i 6 av de siste 10 månedene.',
    pictogram: '/src/_includes/svg/piktogrammer/produkter/engangsstonad.svg',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Barnetrygd',
    description: 'Pengestøtte når du har barn under 18 år.',
    pictogram: '/src/_includes/svg/piktogrammer/produkter/barnetrygd.svg',
    kicker: 'Pengestøtte'
  },
  {
    title: 'Kontantstøtte',
    description: 'Pengestøtte når du har barn mellom 1 og 2 år som ikke er i barnehage på full tid.',
    pictogram: '/src/_includes/svg/piktogrammer/produkter/kontantstotte.svg',
    kicker: 'Pengestøtte'
  }
] %}

<div class="grid gap-px mb-4 text-left sm:grid-cols-2 overflow-clip" style="--pictogram: #F5D3E2;">
  {% for item in varekort %}
  <div class="grid gap-3 pt-4 pb-6 sm:odd:pr-6 sm:even:pl-6 xs:flex xs:gap-6 xs:items-start ring-1 ring-slate-300">
    {{ item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0 text-[#99185E]') | safe }}
    <div>
      <a href="#" class="text-lg font-semibold">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto tracking-widest small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {% endfor %}
</div>