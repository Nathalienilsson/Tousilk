# TOUSILK — webbshop starter

En responsiv, kodad storefront i HTML/CSS/JavaScript som kan hostas gratis på GitHub Pages. Innehåller tre redigerbara produkter, mobilanpassning, lokal varukorg och design. **Det är inte en färdig produktionskassa.**

## Snabbstart
1. Packa upp ZIP-filen och skapa ett nytt GitHub-repo, t.ex. `tousilk-webshop`.
2. Ladda upp **innehållet** i mappen (inte zip-filen) till repots rot och committa till `main`.
3. Gå till **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. När workflow är grönt öppnar du GitHub Pages-adressen.
5. För egen domän: kontrollera DNS hos domänleverantören. För apex `tousilk.se`, använd GitHub Pages officiella A-poster `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. För `www` kan CNAME peka på `<github-användarnamn>.github.io`. Ställ in Custom domain `tousilk.se` under Pages och aktivera HTTPS när det går. Följ GitHubs aktuella instruktioner och verifiera DNS innan lansering.

## Ändra produkter
- Öppna `products.js`. Redigera namn, priser, material, storlek, lager, bildsökvägar och Instagramlänk.
- Lägg riktiga produktfoton i `assets/` och ändra `image` i `products.js`.
- Nuvarande bilder är **illustrationer**, inte foton av era sjalar. Nuvarande produkter och priser är **exempel**.

## Viktigt om betalning
- Den här statiska sidan har **ingen säker gemensam checkout, orderdatabas eller automatisk lagersynk**.
- En Stripe Payment Link kan anges i `paymentLink` per produkt. Länken öppnas vid checkout. **Den lokala varukorgen kan innehålla flera varor, men Stripe Payment Links stöder inte automatiskt den kombinationen här.** Köp hanteras per produkt, och antal från varukorgen överförs inte automatiskt.
- För riktig varukorg med flera varor, korrekt frakt, lager, moms, orderbekräftelser och återbetalningar: integrera Shopify Buy Button/Shopify storefront eller bygg en säker serverbaserad Stripe Checkout med orderhantering. Lägg aldrig hemliga Stripe-nycklar i GitHub-kod eller frontend.
- Rekommendation: använd webbplatsen som design- och produktkatalog tills riktig checkout är klar.

## Före lansering
- Verifiera att ni får använda namnet Tousilk och att domänen är rätt kopplad.
- Fyll i riktiga företagsuppgifter, köpvillkor, integritetspolicy, frakt, returer och kontaktuppgifter (`policies.html` är endast en checklista).
- Säkerställ korrekt fibersammansättning och märkning för varje sjal; verifiera silkesanspråk.
- Kontrollera produktkrav, import, förpackningsansvar, moms och skatt.
- Lägg in riktig Instagram-URL och fungerande kontaktadress.
- Byt ut exempelbilder och produktuppgifter.
- Lägg till riktiga lager- och orderrutiner innan ni tar betalt.
