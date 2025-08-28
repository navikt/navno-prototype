---
title: 'Andre som kan hjelpe'
sectionType: 'varehylle'
order: 8
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

<div class="grid gap-3 text-left" style="--pictogram: #F5D3E2;">
  {% for item in varekort %}
  <div class="relative border rounded-lg border-slate-300 has-[a:hover]:bg-blue-50 grid w-full gap-3 px-5 py-4 xs:flex xs:gap-6 xs:items-start">
    {{ item.pictogram | svgContents('mt-3 w-[6ch] h-[6ch] shrink-0 text-brand-purple-deep') | safe if item.pictogram }}
    <div>
      <a href="#" class="text-fluid-20-22 font-semibold after:absolute after:inset-0">{{ item.title }}</a>
      <p>{{ item.description }}</p>
      <div class="pt-4 mt-auto font-normal tracking-wider text-gray-700 small-caps">{{ item.kicker }}</div>
    </div>
  </div>
  {% endfor %}
</div>