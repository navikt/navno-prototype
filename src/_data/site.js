export default {
  title: "Prototype av enkelte nav.no-sider",
  audience: ["Privatperson", "Arbeidsgiver", "Samarbeidspartner"],
  language: [
    {
      full: "Norsk bokmål",
      short: "NO-NB",
    },
    {
      full: "Nynorsk",
      short: "NO-NN",
    },
    {
      full: "English",
      short: "EN",
    },
    {
      full: "Davvisámegiella",
      short: "SMI",
    },
  ],
  agents: [
    {
      type: "main",
      name: "Charlie Jensen",
      role: "Din egen profil",
      icon: "/src/assets/images/icon-person.svg",
    },
    {
      type: "agent",
      name: "Alex Jensen",
      role: "Du har foreldreansvar",
      icon: "/src/assets/images/icon-persongroup.svg",
    },
    {
      type: "agent",
      name: "Casey Jensen",
      role: "Du har foreldreansvar",
      icon: "/src/assets/images/icon-persongroup.svg",
    },
  ],
  notifications: [
    {
      title: "Du har mottatt et vedtak på søknaden din om foreldrepenger",
      time: "13.10.23 kl. 15.23",
      type: "Varslet på SMS",
    },
    {
      title: "Vi har mottatt søknaden din om arbeidsavklaringspenger",
      time: "13.10.23 kl. 15.23",
    },
  ],
};
