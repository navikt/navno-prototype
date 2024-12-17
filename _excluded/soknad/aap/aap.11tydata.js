const preSteps = [
  {
    question: "Hvordan vil du sende søknaden?",
    answers: [
      {
        title: "Send digitalt",
        description:
          "Det er enklest og raskest å søke digitalt. Du blir bedt om å logge inn.",
        href: "/soknad/aap/intro/",
      },
      {
        title: "Send i posten",
        description: "Du fyller ut søknaden før du skriver den ut.",
        href: "#",
      },
    ],
  },
];

export default { preSteps };
