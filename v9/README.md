# Lokomoto centar — Homepage koncept V9

Kopija V8 sa jednom izmenom: sekcija **Edukacije** radi kao prozor u fiksiranu fotografiju.
Slika stoji zakačena za ekran, a sekcija putuje preko nje od vrha do dna.
Tekst i dugme se ponašaju normalno i skroluju sa stranicom.

## Kako je urađeno

`.education-media` dobija fotografiju kao pozadinu sa `background-attachment: fixed`.
Element je otvor, pozadina je zakačena za ekran — otud efekat prozora.
Ispod 900 px `background-attachment` se vraća na `scroll`, jer iOS i deo Android
pregledača ne podržavaju fiksnu pozadinu pouzdano.

## Napomena o fajlovima

V9 koristi slike i video iz `../v8/assets/` da se 20 MB materijala ne duplira.
Ako V8 ikad bude obrisan, treba prekopirati `assets` folder u V9 i vratiti
putanje sa `../v8/assets/` na `assets/`.

## Status

Radni koncept. `noindex, nofollow` je i dalje aktivan — obrisati pri prelasku
na pravi domen.
