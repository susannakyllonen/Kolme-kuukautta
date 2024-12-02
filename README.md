# React Calculator

Tämä on yksinkertainen laskinsovellus, joka on rakennettu Reactilla. Sovellus käyttää moderneja React-ominaisuuksia,
kuten komponentteja, tilanhallintaa (`useState`) ja styled-components-tyylikirjastoa.

## Ominaisuudet

- Käyttäjä voi syöttää kaksi numeroa ja laskea niiden summan.
- Virheilmoitus näytetään, jos syötteet eivät ole kelvollisia numeroita.
- Responsiivinen ja moderni käyttöliittymä, jossa käytetään styled-components-tyylittelyä.

## Teknologiat

- **React**: Komponenttipohjainen käyttöliittymäkehitys.
- **styled-components**: CSS-tyylit suoraan JavaScriptissä.
- **Vite**: Nopea kehitysympäristö React-sovelluksille.

## Asennus

Seuraa näitä ohjeita asentaaksesi ja suorittaaksesi projektin paikallisesti.

1. **Kloonaa repositorio:**

   git clone <repository-url>
   cd <project-directory>

Asenna riippuvuudet:

npm install
Käynnistä kehityspalvelin:

npm run dev
Avaa selaimessa: Sovellus löytyy osoitteesta: http://localhost:5173

Käyttö
Syötä kaksi numeroa tekstikenttiin.
Paina "Laske" painiketta.
Näet laskutoimituksen tuloksen tai virheilmoituksen, jos syöte ei kelpaa.

Kehitys
Tämä projekti on rakennettu Viten avulla, joten kehitysympäristö latautuu nopeasti ja päivittyy automaattisesti muutosten yhteydessä.

Komennot:
npm run dev: Kehityspalvelimen käynnistäminen.
npm run build: Sovelluksen tuotantoversio.
npm run preview: Tuotantoversion esikatselu.

Tulevaisuuden parannukset
Tukea muille laskutoimituksille (vähennys, kertolasku, jakolasku).
Lisää testausta, esimerkiksi yksikkö- ja integraatiotestit.
Responsiivisuuden parantaminen mobiililaitteilla.

Lisenssi
Tämä projekti on julkaistu MIT-lisenssillä. Lue lisää tiedostosta LICENSE.
