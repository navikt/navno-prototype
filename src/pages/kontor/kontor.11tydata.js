export default {
  title: "Nav Andeby",
  offices: [
    {
      title: "Andeby",
      address: ["Kvakkegata 24", "1234 Andeby"],
      openingHours: [
        ["Mandag", "10.00–14.00"],
        ["Tirsdag", "10.00–14.00"],
        ["Onsdag", "10.00–14.00"],
        ["Torsdag", "Kun timeavtale"],
        ["Fredag", "10.00–14.00"],
      ],
    },
    {
      title: "Gåseby",
      address: ["Kvakkegata 24", "1234 Gåseby"],
      addressInfo: "Bruk inngangen til venstre for plaskedammen.",
      openingHours: [
        ["Mandag", "Kun timeavtale"],
        ["Tirsdag", "10.00–14.00"],
        ["Onsdag", "Kun timeavtale"],
        ["Torsdag", "10.00–14.00"],
        ["Fredag", "Kun timeavtale"],
      ],
    },
    {
      title: "Fjærby",
      address: ["Kvakkegata 24", "1234 Fjærby"],
      openingHours: [
        ["Mandag", "Kun timeavtale"],
        ["Tirsdag", "Kun timeavtale"],
        ["Onsdag", "Kun timeavtale"],
        ["Torsdag", "Kun timeavtale"],
        ["Fredag", "Kun timeavtale"],
      ],
    },
  ],
  boxes: [
    {
      icon: "/src/_includes/svg/icons/box-list.svg",
      title: "Dette kan vi hjelpe deg med",
      content: `* Hjelp i nødsituasjoner, for eksempel midlertidig botilbud eller økonomisk sosialhjelp
* Tilgang til PC
* Hjelp til å bruke digitale tjenester hvis du trenger det`,
    },
    {
      icon: "/src/_includes/svg/icons/box-handshake.svg",
      title: "Avtal møte med veilederen din",
      content: `Du kan avtale møte med veilederen din hvis du er registrert hos NAV.

### Hvis du er arbeidssøker
Avtal møte i [Aktivitetsplanen](#) din.
Du kan få hjelp til å avtale møte ved å ringe NAV på telefon 33 33 55 55 eller bruke [Skriv til oss](#) for å avtale møte.

### Hvis du er syk
Avtal møte i [Ditt sykefravær](#).
Du kan få hjelp til å avtale møte ved å ringe NAV på telefon 33 33 55 55 eller bruke [Skriv til oss](#) for å avtale møte.

### Hvis du får økonomisk sosialhjelp eller andre sosiale tjenester
Avtal møte ved å ringe NAV på 33 33 55 55`,
    },
  ],
};
