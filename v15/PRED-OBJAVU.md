# Pred objavu — kontrolna lista

v15 je **namerno `noindex`**. Ovaj fajl je popis svega što se prebacuje
na dan objave, i svega što čeka odgovor klijenta.

---

## 1. Prekidač indeksiranja — POSLEDNJI korak

Svih 7 stranica nosi, u 7. liniji `<head>`-a:

```html
<meta name="robots" content="noindex, nofollow" />
```

**Dok sajt stoji na `mladen-ai711.github.io`, ovo mora da ostane.** Skidanje
bi indeksiralo koncept na pogrešnom domenu i napravilo duplikat `lokomoto.rs`-u.

Briše se tek kad sajt bude na produkcionom domenu, i to kao poslednja izmena,
pa se odmah proveri kroz Search Console → Provera URL-a uživo.

## 2. `robots.txt` — u koren sajta

```
User-agent: *
Allow: /

Sitemap: https://lokomoto.rs/sitemap.xml
```

## 3. `sitemap.xml` — u koren sajta

URL-ovi ispod prate **sadašnju** strukturu v15. Ako se u fazi 1 pređe na
plitke slugove, menjaju se i ovde i u `BreadcrumbList` blokovima.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lokomoto.rs/</loc><priority>1.0</priority></url>
  <url><loc>https://lokomoto.rs/usluge/</loc><priority>0.8</priority></url>
  <url><loc>https://lokomoto.rs/usluge/dijagnostika/</loc><priority>0.9</priority></url>
  <url><loc>https://lokomoto.rs/usluge/fizikalna-terapija/</loc><priority>0.9</priority></url>
  <url><loc>https://lokomoto.rs/usluge/kineziterapija/</loc><priority>0.9</priority></url>
  <url><loc>https://lokomoto.rs/usluge/manualna-terapija/</loc><priority>0.9</priority></url>
  <url><loc>https://lokomoto.rs/usluge/postoperativna-rehabilitacija/</loc><priority>0.9</priority></url>
</urlset>
```

## 4. `canonical` — namerno još nije dodat

Nije propust. Stranice su `noindex`, pa je canonical bespredmetan, a odluka o
URL-ovima pripada fazi 1. Dodaje se **tek pošto struktura bude zaključana**,
jer canonical na URL koji će se menjati je gore nego da ga nema.

## 5. `og:image` — relativna putanja

Sada stoji kao `assets/images/og-lokomoto.jpg`, da bi pregled radio i na
konceptu i u produkciji. Većina skrejpera to razreši, ali specifikacija traži
apsolutnu adresu. Na dan objave prebaciti na
`https://lokomoto.rs/assets/images/og-lokomoto.jpg` u svih 7 fajlova.

---

## 6. Čeka odgovor klijenta — blokira objavu

### 6.1 Osam označenih mesta u tekstu

Ovo **nisu rupe** — tekst je napisan. Označen je žutom i značkom `ZA POTVRDU`
jer traži potvrdu činjenice. Kad klijent potvrdi, skida se `<mark class="ph">`
i `<span class="ph-note">`, a tekst ostaje.

| Fajl | Linija | Pitanje |
|---|---|---|
| `usluge/dijagnostika/` | ~374 | Da li ultrazvučni pregled ulazi u cenu pregleda specijaliste ili se plaća posebno? |
| `usluge/kineziterapija/` | ~422 | Trajanje termina: cenovnik kaže 60 i 60+ min, panel je govorio 45–60. Šta važi? |
| `usluge/kineziterapija/` | ~476 | Vežbe za kuću — daju li se, i od kog trenutka? |
| `usluge/manualna-terapija/` | ~288 | Da li se razlika u pokretu zaista oseti posle prvog tretmana? |
| `usluge/manualna-terapija/` | ~389 | Masaže su u cenovniku pod „Oporavak i masaža" — prikazati ih uz manualnu ili odvojeno? |
| `usluge/postoperativna-.../` | ~389 | Postoperativna nema svoju grupu u cenovniku. Važe li cene terapijskog dana i REHAB paketa? |
| `usluge/postoperativna-.../` | ~428 | Potvrditi opis saradnje sa hirurgom. |

> **Parking — REŠENO 13.09.** Novak je potvrdio: parking je ispred zgrade.
> Tekst je popunjen, a pitanje „Gde ste i ima li parkinga?" vraćeno u
> `FAQPage` shemu. Shema sada nosi svih 10 pitanja.
>
> Naslovna više nema nijedno nepopunjeno mesto. Preostalih **sedam** je na
> uslužnim stranicama.

### 6.2 Podaci koji se ne slažu između izvora

| Podatak | Verzije u opticaju | Šta je upisano u shemu |
|---|---|---|
| **Adresa** | ~~dve adrese~~ — **REŠENO 13.09:** samo Tabanovačka 27b, Autokomanda | Tabanovačka 27b ✓ |
| **Radno vreme** | ~~tri verzije~~ — **REŠENO 15.09:** Pon–Pet 08–20, Sub 09–**15** | 08–20, Sub 09–15 ✓ |
| **Telefon** | ~~dva broja~~ — **REŠENO 15.09:** 063 nije njihov, skinut | samo 011/40 95 924 ✓ |
| **Godina osnivanja** | ~~2016 · 2013~~ — **REŠENO 15.09:** 2016. v15 je čist; 2013 je greška **na starom sajtu, stranica dijagnostike**, odatle prepisana u imenike | 2016 ✓ |

Upisano je ono što v15 sam tvrdi. **Ako je bilo šta od ovoga netačno, ispravlja
se i u tekstu i u `MedicalClinic` shemi na naslovnoj.**

### Adresa — potvrđeno, ali posao tek počinje

Novak je potvrdio 13.09. da centar radi **samo na Autokomandi**. Sajt i sheme su
time tačni i ovo više ne blokira ništa.

Ali stara adresa (Gen. Lj. Milića 3/2, Stepa Stepanović) i dalje stoji na
najmanje četiri mesta i u samom nazivu Facebook stranice. **To se sada ispravlja,
i to ovim redom:**

1. **Prvo Google profil.** Ako postoji stari listing na Stepi Stepanoviću, ne sme
   se obrisati — ide „Move business" ili spajanje, inače nestaju sve recenzije
   koje je centar zaradio.
2. Tek kad Google prihvati novu adresu, idu ostali imenici (Hipokratija,
   PlanPlus, Mirandre, fiz.ioi.rs) — obrnutim redom bi se posao radio dvaput.
3. Facebook stranica: slug `/lokomotostepastepanovic/` nosi ime stare lokacije.
   Proveriti da li se može preimenovati.

### 6.3 Politika privatnosti

Link u futeru je i dalje `href="#"`. Kod zdravstvene ustanove taj tekst opisuje
obradu podataka pacijenata i podleže ZZPL-u — mora ga napisati neko ko odgovara
za to, ne dizajner ni alat. Do tada link ostaje mrtav.

### 6.4 Facebook profil — REŠENO 15.09

Novak je potvrdio: stranica **jeste njihova**, ali **nije aktivna dugo**, a sa
Stepe Stepanovića su se odselili pre tri godine. Slug i dalje nosi ime te lokacije.

**Link je skinut sa sajta** — sa svih 7 stranica iz futera i iz `sameAs` u
`MedicalClinic` shemi. Razlog: posetilac bi stigao na stranicu koja godinama ćuti
i u adresi nosi mesto gde centra više nema. To šteti više nego što ikonica vredi.

Stranica ostaje njihova. Link se vraća čim je ožive, ili se pravi nova sa pravim
imenom. U futeru je ostao samo Instagram.

---

## 7. Ostaje za fazu 1

- **Struktura URL-ova.** Stari sajt već rangira na plitkim adresama
  (`/kineziterapija/`, `/manuelna-terapija/`, `/dijagnostika/`,
  `/postoperativna-rehabilitacija/`). Preporuka iz plana je da se zadrže, čime
  četiri najvrednije stranice migriraju sa nula redirekcija.
- **`manualna` ili `manuelna`.** v15 koristi `manualna`; stari sajt rangira na
  `manuelna`. Preporuka: zadržati stari slug, proveriti u Search Console →
  Queries pre konačne odluke.
- **Nedostaju kao URL:** `/cenovnik/`, `/kontakt/`, `/o-nama/`, `/tim/`,
  `/politika-privatnosti/`. Sadržaj za prve četiri već postoji na naslovnoj,
  zarobljen u sidrima koja ne mogu da rangiraju.
- **Hosting.** GitHub Pages ne ume 301 redirekcije, a one su za migraciju
  obavezne. Preporuka: Cloudflare Pages.
- **Stranice po tegobama** — najveći dugoročni dobitak, cela faza 2.

---

## 9. Mapa migracije — popisano sa živog starog sajta (15.09.2026)

Popis je urađen **direktno sa `lokomoto.rs`**, iz njegove mape sajta, a ne iz
ranijih beleški. Stari sajt je WordPress sa Yoast dodatkom, mapa je podeljena na
četiri dela.

### Šta stari sajt stvarno ima

| Deo | Broj adresa |
|---|---|
| stranice | 19 |
| tegobe (`/portfolio/`) | 16 |
| članci | 5 |
| kategorija tegoba | 1 |
| **ukupno u mapi sajta** | **41** |

Uz to postoje i adrese **koje nisu u mapi sajta**: `/blog/` (spisak članaka) i tri
autorske stranice `/author/…`. Ranija beleška je govorila o 36 stranica; stvarno
stanje je 41 plus te dodatne.

### A. Sedam stranica koje se poklapaju — nula preusmerenja

Stari i novi sajt imaju istu stranicu; treba samo da budu na **istoj adresi**.

| Stara adresa | Nova stranica |
|---|---|
| `/` | naslovna |
| `/usluge/` | `/usluge/` |
| `/dijagnostika/` | dijagnostika |
| `/fizikalna-terapija/` | fizikalna terapija |
| `/kineziterapija/` | kineziterapija |
| `/manuelna-terapija/` | manualna terapija |
| `/postoperativna-rehabilitacija/` | postoperativna |

**Ispravka ranije beleške:** stajalo je „četiri od pet uslužnih stranica". Provereno
na živom sajtu — **svih pet postoji**, uključujući `/fizikalna-terapija/`.

Da bi ovo prošlo bez ijednog preusmerenja, v15 mora dve stvari:

1. **Spustiti uslužne stranice iz `/usluge/ime/` u `/ime/`.** Sada su na
   `/usluge/dijagnostika/`, a stari sajt rangira na `/dijagnostika/`.
2. **Preimenovati `manualna-terapija` u `manuelna-terapija`.** Razlika je jedno
   slovo, ali za pretraživač je to druga adresa, a stara rangira.

Alternativa je zadržati `/usluge/ime/` i postaviti pet preusmerenja. Radi, ali se
deo snage gubi na svakom skoku. **Preporuka je spuštanje.**

### B. Stranice koje nemaju svoj par — preusmerenje

| Stara adresa | Kuda | Napomena |
|---|---|---|
| `/triton-dts/` | `/fizikalna-terapija/` | aparat je opisan tamo |
| `/indiba-nov-nacin-rehabilitacije/` | `/fizikalna-terapija/` | isto |
| `/neubie/` | `/fizikalna-terapija/` | isto |
| `/neufit-neubie/` | `/fizikalna-terapija/` | isto; dve adrese za isti aparat |
| `/medicinski-fitnes/` | `/kineziterapija/` | najbliža usluga na novom sajtu |
| `/o-nama-2/` | `/o-nama/` | **nova stranica se mora napraviti** |
| `/cenovnik-2/` | `/cenovnik/` | **nova stranica se mora napraviti** |
| `/kontakt/` | `/kontakt/` | **nova stranica se mora napraviti** |
| `/besplatan-vodic/` | odluka | vodič za preuzimanje; ostaje ili ide na naslovnu |

### C. Četiri stranice koje nedostaju novom sajtu

`/o-nama/`, `/cenovnik/`, `/kontakt/`, `/tim/`.

Sadržaj za sve četiri **već postoji** u v15, ali je zarobljen unutar naslovne kao
odeljak sa sidrom. Takav sadržaj pretraživač ne može posebno da rangira, a stari
sajt te adrese ima i one rangiraju.

**Treba ih izvući u zasebne stranice pre objave.** To je pisanje, ne prepisivanje —
tekst postoji.

### D. Tegobe i članci — NE dirati u prvom prolazu

16 stranica `/portfolio/…` i 5 članaka. To su **najvrednije adrese** jer nose reči
kojima ljudi zaista pretražuju: „bol u leđima", „smrznuto rame", „teniski lakat".

Ostaju **žive, nepromenjene**. Preusmerenje sa stranice o konkretnoj tegobi na opštu
stranicu usluge pretraživač čita kao „ovoga više nema" i izbaci je. Bolje da stoje
stare nego da se izgube.

Prepisuju se u fazi 2 i tek tada preusmeravaju, jedna na jednu.

Isto važi za `/izlecite-diskus-herniju-bez-operacije/` i
`/portfolio_category/sta-lecimo/`.

### E. Tri adrese koje uopšte ne bi trebalo da postoje

| Adresa | Šta je | Šta s njom |
|---|---|---|
| `/footer/` | ostatak šablona, 965 znakova | skloniti iz mape sajta, zabraniti indeksiranje |
| `/hvala/` | stranica posle slanja forme | zabraniti indeksiranje, bez preusmerenja |
| `/author/…` (3) | autorske stranice WordPressa | zabraniti indeksiranje |

Ove se ne preusmeravaju — one su smeće u pretrazi i treba ih samo skloniti.

### F. Hosting

Ovo gde sajt sada stoji **ne ume preusmerenja**. Nije stvar podešavanja — ta usluga
to nema.

Pre objave se mora preći na hosting koji to ume. Preporuka ostaje **Cloudflare
Pages**: besplatan, ume preusmerenja, brz. Odluka o tome je prvi korak, jer sve
ostalo zavisi od nje.

### G. Redosled na dan objave

1. Prebaciti na hosting koji ume preusmerenja
2. Spustiti uslužne stranice u plitke adrese i preimenovati `manualna` → `manuelna`
3. Napraviti četiri stranice koje nedostaju
4. Postaviti spisak preusmerenja iz odeljka B
5. Zabraniti indeksiranje za `/footer/`, `/hvala/`, `/author/…`
6. **Tek na kraju skinuti `noindex`** sa svih sedam stranica v15
7. Prijaviti novu mapu sajta u Search Console i pratiti dve nedelje

### H. Usput, sa starog sajta

Na staroj stranici dijagnostike stoji **2013** kao godina osnivanja, i odatle se
prepisalo u imenike. Ispraviti na starom sajtu **pre** migracije, pa proći imenike.
