# Šta sajt dira od podataka o posetiocu

Popis napravljen 26.10.2026, merenjem kroz kod — ne po sećanju. Služi kao
podloga onome ko piše politiku privatnosti, da ne mora da nagađa.

**Stanje se odnosi na v16 pre nego što je dodat piksel.**

---

## 1. Kontakt formular na naslovnoj

Jedini formular na celom sajtu. Nalazi se na naslovnoj; stranice usluga ga
nemaju.

**Polja koja posetilac popunjava:**

| Polje | Šta se traži |
|---|---|
| `name` | ime i prezime |
| `phone` | telefon |
| `email` | mejl adresa |
| `service` | izbor usluge iz spiska |
| `message` | *„Ukratko opišite razlog javljanja…"* |
| `consent` | kvačica: *„Saglasan/na sam da me Lokomoto kontaktira u vezi sa ovim upitom."* |

**Kuda ide.** Formular nema server. Postavljen je kao
`action="mailto:lokomoto.centar@gmail.com"` sa `enctype="text/plain"` — znači
otvara **posetiočev sopstveni program za poštu** i tamo se poruka sastavlja.

Posledica: **sajt ne čuva ništa.** Podatak prelazi iz posetiočevog mejla u
sanduče ordinacije i dalje živi tamo, u Gmail-u.

**Zašto je ovo osetljivo.** Polje `message` traži razlog javljanja, a izbor
usluge nudi stavke tipa „Fizijatrijski pregled" i „Sportska rehabilitacija".
Spoj imena, telefona i razloga javljanja kod zdravstvene ustanove je **podatak
o zdravlju**, ne običan kontakt podatak.

---

## 2. Google mapa — jedino što se učitava sa tuđeg servera samo od sebe

Na naslovnoj (i na probnoj `hero-test`) stoji ubačen prozor sa Google-ovog
sajta:

```
https://www.google.com/maps?q=Tabanovačka+27b,+Autokomanda,+Beograd&output=embed
```

**Učitava se čim se stranica otvori**, bez ikakvog klika. U tom trenutku Google
dobija adresu posetioca i podatke o pregledaču, pre nego što je on bilo šta
pitao ili prihvatio.

**Ovo je jedini takav slučaj na sajtu.** Sve ostalo sa tuđih servera su obične
veze na koje se mora kliknuti.

---

## 3. Šta sajt pamti u pregledaču

Samo jedna stavka, u `app.js`: ključ u `sessionStorage` koji vraća posetioca na
mesto gde je stao kad se vrati na stranicu.

- **nije kolačić**
- **nestaje čim se zatvori prozor**
- ne sadrži ništa lično
- u privatnom režimu se jednostavno ne koristi

**Kolačića nema nijednog. Piksela nema nijednog. Google Analytics nema.**
Provereno pretragom kroz sav HTML i JavaScript.

---

## 4. Fontovi su lokalni

Sva slova se učitavaju sa samog sajta (`@font-face` u `styles.css`), ne sa
Google Fonts. Znači **nema skrivenog odlaska podataka** preko fontova, što je
inače čest previd.

---

## 5. Veze koje vode van sajta (samo na klik)

| Kuda | Koliko mesta | Šta se tamo dešava |
|---|---|---|
| `lokomotocentar.alpinbook.com` | 35 | **zakazivanje** — ime, telefon, razlog dolaska unose se kod njih |
| `kviz.lokomoto.rs` | 11 | kviz; **na njemu već stoji Meta piksel** |
| `instagram.com/lokomoto.centar` | 8 | profil |
| `google.com/maps` | 13 | otvaranje mape u novom prozoru |

**Alpin je ovde najvažniji.** Zakazivanje se ne dešava na ovom sajtu nego kod
njih, ali ih posetilac dobija preko Lokomoto sajta. Ko god piše politiku treba
da zna da li sa Alpinom postoji ugovor o obradi podataka.

---

## 6. Snimci pacijenata na ACL stranici

Četiri imenovane osobe sa licem i podatkom o lečenju, plus peti slučaj koji se
pominje imenom:

- Nađa Tešić · taekwondo
- Maja Gajić · atletika, 400 m
- Strahinja · fudbal
- Luka Sekulić · fudbal
- „Kako se Luka vratio na teren" — ceo slučaj kroz snimak od 2:46

To je **najosetljiviji podatak na celom sajtu**. Pismene saglasnosti su
tražene od Novaka i **još nisu stigle**.

---

## 7. Šta se menja kad dođe piksel

Sve gore opisano je stanje **bez praćenja**. Čim Meta piksel ode na stranicu:

- prati se ko je došao, šta je gledao i da li je kliknuo na zakazivanje
- ti podaci odlaze Meti, u inostranstvo
- kod ordinacije se iz ponašanja čita i zdravstveni podatak — ko gleda ACL
  stranicu najverovatnije ima problem sa kolenom

Zato baner za kolačiće i politika privatnosti idu **zajedno sa pikselom**, ne
posle njega.

---

## Šta ovaj popis NE može da kaže

Ovo su činjenice iz koda. Sledeće zna samo ordinacija i **mora da dođe od njih**:

1. **Pun pravni naziv, adresa i matični broj** rukovaoca podacima
2. **Koliko dugo** se čuvaju upiti iz formulara u Gmail sandučetu
3. **Ko sve u ordinaciji** ima pristup tim porukama
4. Postoji li **ugovor o obradi podataka sa Alpinom**
5. Ima li ordinacija **lice za zaštitu podataka**
6. Kako pacijent traži **uvid ili brisanje** svojih podataka i kome se javlja

Bez ovih šest stavki politika privatnosti ne može da bude tačna, a netačna je
gora od nikakve — jer tvrdi nešto u ime ordinacije.

---

## Odluka o saglasnostima — 26.10.2026

Mladen: *„Pismenu saglasnost za testimonial nećemo tražiti. Sve ćemo svesti na
minimum, samo ono najpotrebnije."*

**Odluka je njegova i upisana je ovde da se zna da nije propust nego izbor.**

Stanje na koje se odnosi: četiri imenovane osobe sa licem i podatkom o lečenju
na javnoj adresi, plus peti slučaj koji se pominje imenom u naslovu case
study-ja. Snimke je poslao sam klijent, preko Novaka.

Rizik koji ostaje, rečeno jednom i bez vraćanja na temu: ako se neko od njih
četvoro kasnije predomisli, nema papira koji pokazuje da je pristao. Teret je
tada na ordinaciji, ne na sajtu.

## Pitanja svedena na minimum

Od prvobitnih šest ostaju **dva**. Ostalo se izvodi iz onoga što sajt već
tvrdi:

| Bilo pitanje | Sada |
|---|---|
| Kontakt za zahteve pacijenata | **ne pita se** — sajt već navodi `lokomoto.centar@gmail.com` i `011 / 40 95 924` |
| Ko ima pristup sanducetu | **ne pita se** — ne mora da stoji u politici |
| Ugovor sa Alpinom | **ne pita se** — politika samo navodi da se zakazivanje obavlja kod njih |
| Lice za zaštitu podataka | **ne pita se** — navodi se samo ako postoji |
| **Pun pravni naziv i matični broj** | **ostaje** — politika mora da imenuje ko je odgovoran, a „Lokomoto centar" je ime u opticaju, ne pravno lice |
| **Koliko se čuvaju upiti** | **ostaje**, ali kao potvrda predloga, ne kao otvoreno pitanje |
