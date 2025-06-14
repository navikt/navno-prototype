export default [
  {
    type: "chat",
    icon: "/src/_includes/svg/icons/chat2.svg",
    title: "Chat med oss",
    description:
      "Du møter først chatbot Frida som har døgnåpent. Mellom klokken 9 og 15 på hverdager kan du be Frida om å få chatte med en veileder.",
    options: [
      {
        name: "Chatbot",
        status: "Alltid åpen",
        isOpen: true,
      },
      {
        name: "Chat med veileder",
        status: "Stengt nå, åpner i morgen kl. 9",
        isOpen: false,
      },
    ],
  },
  {
    type: "skriv",
    icon: "/src/_includes/svg/icons/paperplane.svg",
    title: "Skriv til oss",
    description:
      "Send beskjed eller nye opplysninger i saken din. Du kan også sende spørsmål. Svartid er noen arbeidsdager. \n\n Hvis du vil ha svar raskere, kan du bruke chat.",
  },
  {
    type: "ring",
    icon: "/src/_includes/svg/icons/phone.svg",
    title: "Ring oss på 55 55 33 33",
    description:
      "Åpent hverdager kl. 9–15. Vi kan ringe deg tilbake hvis ventetiden er over 5 min.",
    options: [
      {
        name: "",
        status: "Stengt nå, åpner i morgen kl. 9",
        isOpen: false,
      },
    ],
  },
  // {
  //   type: "some",
  //   title: "Spør NAV _navn på støtte_ på Facebook",
  //   description:
  //     "Vi svarer på spørsmål om foreldrepenger, omsorgsdager, kontantstøtte og barnetrygd.",
  // },
];
