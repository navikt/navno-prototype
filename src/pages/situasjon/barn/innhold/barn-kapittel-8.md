---
title: 'Andre som kan hjelpe'
sectionType: 'varehylle'
---


{% set varekort = [
  {
    title: 'Foreldresupport fra Mental helse',
    description: 'Døgnåpen telefon- og chattetjeneste for deg som har barn under 18 år, og som trenger hjelp, veiledning eller har behov for å lufte tankene dine med noen.',
    kicker: 'Råd og veiledning fra mental helse'
  },
  {
    title: 'Home-Start Familiekontakten',
    description: 'Familiestøtteprogram for deg med barn under skolealder. Frivillige fra Home-start gir deg støtte og avlastning i hverdagen.',
    kicker: 'Støtte og avlastning fra Home-Start'
  }
] %}

<div class="grid gap-px mb-12 text-left sm:grid-cols-2 overflow-clip" style="--pictogram: #F5D3E2;">
  {% for item in varekort %}
  <div class="grid gap-3 pt-4 pb-6 sm:odd:pr-6 sm:even:pl-6 xs:flex xs:gap-6 xs:items-start ring-1 ring-slate-300">
    {{ item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0 text-[#99185E]') | safe if item.pictogram }}
    <div>
      <a href="#" class="text-lg font-semibold">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto tracking-widest small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {% endfor %}
</div>