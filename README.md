[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3xRw79B0)

<br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/32a9da6f-0c0e-4c67-84de-d2497aad4700/deploy-status?branch=main)](https://app.netlify.com/sites/tmdb-ncj/deploys)


# Javascript Fördjupning - Inlämningsuppgift 2 - The Movie DB
## Code Hunt
## Jakten på den försvunna koden
### En kod borta, en värld i chock – upplev jakten där varje kodrads öde räknas!


## Beskrivning
Ni ska skapa ett gränssnitt mot The Movie DB (TMDB) där man ska kunna se vilka som är de senaste bioaktuella filmerna, de populäraste filmerna, och de topplistade filmerna i Sverige (eller USA, välj själv). Man ska även kunna bläddra efter filmer baserat på genre.

Man ska också (varhelst en film visas) kunna klicka in på den och se information om filmen samt vilka skådespelare som medverkat. Det ska även gå att klicka in på en skådespelare och se vilka filmer hen har medverkat i.

## Hygienkrav
Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.

- Använda React, React Router och React Query
- Responsive (mobile first, så klart)
- Komponentbaserad
- Kommunikationen med API:et ska finnas i ett eget mellanlager (alltså en ”service”, där själva Fetch/axios-kommunikationen sker)
- Ha loading & felhantering
- Skriven i TypeScript, korrekt indenterad och städad och versionshanterad
- Deploy:ad till Netlify

All kod ska vara skriven av dig själv, och oanvänd kod ska vara bortstädad (du ska alltså skapa en helt ny, tom app och koda upp den från grunden, och inte bara modifiera ett av mina exempel!)

## Kravspecifikation

- Samtliga frågor efter filmer ska (där API:ets endpoint stödjer detta) innehålla flaggan include_adult=false!

- På samtliga ställen som en film eller skådespelare visas ska antingen filmens poster eller skådespelarens profilbild visas (detta finns i svaren ni får från TMDB).

- Webbläsarens bakåt/framåt-knappar ska fungera för att navigera på sidan. Det ska även gå att ladda om sidan och då återgå till samma vy som före omladdning!

### Som besökare ska jag
- kunna se vilka som är de 10-20 senaste biofilmerna.
- kunna se vilka som är de 10-20 mest populära filmerna.
- kunna se vilka som är de 10-20 mest topplistade filmerna.
- kunna bläddra efter filmer (med paginering) baserat på genre (man ska kunna se genrens titel).

### Som besökare ska jag även
- kunna klicka in på en film och få detaljerad information om filmen.
- kunna klicka in på en film och få reda på vilka som var skådespelare i filmen.
- kunna klicka på en skådespelare och få detaljerad information om skådespelaren.
- kunna klicka på en skådespelare och få reda på vilka filmer som hen har medverkat i.

För godkänt krävs paginering bara på bläddringen av filmer baserat på genre. Skulle ni implementera det ändå på senaste/populära/topplistade filmer är det självklart ett plus.
 
Pagineringen måste överleva en omladdning av sidan!

### Kravspecifikation VG
För väl godkänt krävs (förutom kraven för godkänt) att:

- Du använder dig av Custom Hooks på lämpliga ställen.
- Besökaren ska kunna se relaterade/liknande filmer på en enskild film.
- Besökaren ska kunna söka efter filmer och se vilka filmer (med paginering) som matchar sökfrågan, eller om inga filmer matchar min sökfråga. Både sökfråga och paginering ska bibehållas vid omladdning av sidan.
- Se de 10 senaste filmerna man visat. Historiken ska överleva mellan sessioner.
- Besökaren ska kunna välja om hen vill se populära filmer för dagen eller för veckan (ska bibehållas vid omladdning av sidan).

## Deadline
## Senast fredag 1 september kl. 23.59.

### Skicka in
- Länk till ditt GitHub-repo på GitHub Classroom
- URL till din deploy:ade app
- Ange om du gjort G eller VG-nivå
- Ev. kända buggar eller kommentarer du tror jag skulle ha nytta av när jag granskar din inlämning

Bedömningskriterier
Godkänt
Följer kravspecifikationen ovan.
Väl Godkänt
Följer kravspecifikationen för VG ovan.

# _Lycka till!_
