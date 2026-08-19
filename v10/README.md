# Lokomoto centar — Homepage koncept V10

Kopija V9 sa dve izmene.

## 1. Logo

Znak i tekstualni natpis su zamenjeni jednim logom koji sadrži i jedno i drugo.
Koristi se u zaglavlju i u futeru.

- `logo-lockup-horiz.png` — vodoravni sklop, ovaj je u upotrebi
- `logo-lockup.png` — originalni uspravni sklop, rezerva

Vodoravni je napravljen iz uspravnog jer se uspravni na visini zaglavlja
(oko 45 px) sabija u kvadratić i natpis postaje nečitljiv.

Da vratiš stari logo: obriši V10 blok na kraju `styles.css` i u `index.html`
vrati `<img src="../v8/assets/images/logo-white.png" ...>` uz `<span class="brand-copy">`.

## 2. Popravljene putanje do fontova

`styles.css` je tražio `assets/fonts/...`, a taj folder u V9 i V10 ne postoji —
fontovi se nisu učitavali i stranica je koristila zamenski font.
Sada pokazuje na `../v8/assets/fonts/`.

## Napomena o fajlovima

V10 koristi slike i video iz `../v8/assets/`. V8 ne brisati.

## Status

Radni koncept. `noindex, nofollow` je i dalje aktivan — obrisati pri prelasku
na pravi domen.
