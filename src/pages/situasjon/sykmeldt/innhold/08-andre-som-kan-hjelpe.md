---
title: 'Andre som kan hjelpe'
order: 8
---

{% set varekort = [
  {
    title: 'Helse, livsstil og sykdom',
    description: 'Om helse, livsstil, sykdom, behandling og rettigheter.',
    kicker: 'Informasjon fra Helsnorge.no'
  },
  {
    title: 'Fastlegen din',
    description: 'Se timeavtaler hos fastlege, sykehus, helsestasjon og kommunal helse- og omsorgstjeneste.',
    kicker: 'Tjenester fra Helsenorge.no'
  }
] %}

<div class="grid gap-3 text-left" style="--pictogram: var(--color-blue-100);">
  {% for item in varekort %}
  <div class="relative border rounded-lg border-slate-300 has-[a:hover]:bg-blue-50 grid w-full gap-3 px-5 py-4 xs:flex xs:gap-6 xs:items-start">
    {{ item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0') | safe if item.pictogram }}
    <div>
      <a href="#" class="font-semibold text-fluid-20-22 after:absolute after:inset-0">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto font-normal tracking-wider text-gray-700 small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {% endfor %}
</div>
