---
title: 'Pengestøtte når du får barn'
sectionType: 'varehylle'
order: 3
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

<div class="grid gap-3 text-left" style="--pictogram: #F5D3E2;">
  {% for item in varekort %}
  <div class="relative border rounded-lg border-slate-300 has-[a:hover]:bg-blue-50 grid w-full gap-3 px-5 py-4 xs:flex xs:gap-6 xs:items-start">
    {{ item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0 text-brand-purple-deep') | safe }}
    <div>
      <a href="#" class="text-fluid-20-22 font-semibold after:absolute after:inset-0">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto font-normal tracking-wider text-gray-700 small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {% endfor %}
</div>