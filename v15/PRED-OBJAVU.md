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
