# v13 — naslovna sa pravim linkovima + šablon stranice usluge

Demo klik-toka: sa naslovne se sada **stvarno otvaraju** stranice usluga.
`v12/` nije diran — v13 čita `v12/styles.css`, ostalo je svoje.

**Lokalno otvaranje:** pokreni server u korenu repoa, ne otvaraj dvoklikom.
Adrese su čiste (`usluge/fizikalna-terapija/`), a `file://` ne ume da servira
`index.html` iz foldera — pokazao bi spisak fajlova.

```
cd C:\Users\Mladen\source\repos\lokomoto-koncept
py -m http.server 8000
```

Zatim: `http://localhost:8000/v13/`
Na GitHub Pages posle pusha sve radi bez servera.

## Fajlovi

| Fajl | Šta je |
|---|---|
| `v13/index.html` | naslovna — kopija v12 sa linkovima umesto dugmadi |
| `v13/app.js` | skripta naslovne — v12 skripta bez koda koji je izgubio svrhu |
| `v13/stranica.js` | skripta podstranica (header, meni, reveal, godina) |
| `v13/usluga.css` | dodatak na `v12/styles.css` — sve nove komponente |
| `v13/usluge/index.html` | lista usluga |
| `v13/usluge/fizikalna-terapija/index.html` | **jedina popunjena stranica** |
| `v13/usluge/<ostalih 5>/index.html` | stranice sa oznakom „u pripremi" |

Oznaka verzije: `usluga.css?v=1.9`, `app.js?v=1.0`, `stranica.js?v=1.0`.
**Kad menjaš CSS ili skriptu, podigni broj** u svakom HTML-u koji je koristi.

## Šta je promenjeno na naslovnoj

Po odluci iz modela sadržaja 1.2, odeljak 4b:

- **12 čipova tegoba** — `<button data-complaint-target>` → `<a href="usluge/<slug>/">`.
  Vode na uslugu koju je taj čip i ranije isticao; mapa je prepisana iz v12, nije nova.
- **6 stavki panela usluga** — takođe linkovi. Prelaz mišem i dalje menja sliku u
  pregledu; klik sada otvara stranicu umesto da samo prebaci panel.
- **Tekst prvog čipa**: „Bol u donjem delu leđa" → **„Bol u krstima"** (odobreni izuzetak).
- **Meni „Usluge"** vodi na `/usluge/`, ne na sidro `#usluge`.
- **Futer** — šest usluga ima prave adrese.

### Sekcija 04: „Edukacije" → „Oprema" (26.08.2026, zahtev klijenta)

Klijent više ne drži edukacije. Sekcija nije obrisana nego prenamenjena — to je
jedini tamni predah između Tima i Pitanja, i poslednji argument pre kontakta.

- Oznaka `04 OPREMA`, naslov „Uređaji koje nema *svaka ambulanta.*", tekst nabraja
  INDIBA / Triton DTS / NeuFit pa odmah relativizuje („nijedan ne bira sam šta tretira").
- Dugme „Kako to izgleda u praksi" → `usluge/fizikalna-terapija/` (interni link,
  umesto spoljnog na `lokomoto-edukacija`, koji je uklonjen).
- Potpis na fotografiji je **„Odluku donosi čovek."** (od 26.08. — klijent je
  izbacio raniji „Metod, ne recept.", a potpis je vraćen jer bez njega desna
  trećina fotografije ostaje prazna). Nosi drugi deo argumenta sekcije: naslov
  kaže šta imamo, potpis šta time upravlja. Namerno nije „Nalaz, pa aparat" —
  pasus pored završava tim istim rečima. Oznaka iznad njega
  „LOKOMOTO SYSTEM" → **„LOKOMOTO CENTAR"** („System" je bio brend edukacija).
- **Fotografija**: `v8/assets/images/oprema.webp` (1774×887, 80 kB) — terapijska sala
  sa Triton DTS stolom, INDIBA aparatom i NeuFit-om, prava fotografija iz centra.
  Zamenila je `manifesto.webp`, koji je sekcija nasleđivala iz v12. Zamena je u
  `usluga.css`, `v12/styles.css` nije diran. Promenjen je i `aria-label` figure.
- **Paralaksa (`background-attachment: fixed`) je ostala**, kako je v12 postavlja.
  Prva verzija fotografije bila je 2,6:1 i uz `fixed` se secao NeuFit — na
  laptopu se videlo 62 % slike. Druga verzija je proširena po vertikali na
  **2:1**, i na uobičajenim prozorima se vidi 80–89 %, sa sva tri aparata u kadru.
  Ako se fotografija ikad opet menja, taj odnos je uslov — približno 16:9 ili širi
  od toga najviše do 2:1.
- **Ime fajla nosi `?v=2` u CSS-u.** Prva verzija slike je već bila objavljena pod
  istim imenom, a slike se ne verzionišu kroz `index.html`. Kad se slika menja,
  podigni taj broj, inače posetiocima ostaje keširana stara.
- Na telefonu v12 gasi paralaksu; kadar je pomeren sa `56% 37%` na `68% center`,
  jer prvi na ovoj fotografiji pokaže plakare umesto aparata.
- Sidro `#edukacije` → `#oprema` u meniju (desktop i mobilni) i futeru, na svih 8 stranica.
- Beleška u sekciji Tim više ne pominje edukacije:
  „Isti tim radi i pregled i terapiju — nalaz ne prelazi iz ruke u ruku."

CSS klasa ostaje `.education` — ona živi u `v12/styles.css`, koji je zamrznut.
Preimenuje se kad naslovna pređe na Eleventy. Reč „edukacij" posle izmene ne
postoji nigde u v13, provereno pretragom.

Iz `app.js` je obrisano, ne prepravljeno:

- rukovanje `data-complaint-target` i skrolovanje do panela,
- zaključavanje hovera (postojalo je samo zbog tog skrolovanja),
- svetlucanje izabrane usluge,
- `aria-selected` (stavke više nisu tabovi nego linkovi).

### Kineziterapija nosi i drugo ime (26.08.2026)

Puno ime je sada **„Kineziterapija / Rehabilitacioni trening"**. Drugo ime je
klasa `.name-alt` — ista boja, manja težina, `opacity: .58`, pa naslov i dalje
čita kao jedan pojam a ne kao dve usluge. U `h1` je posebno pravilo: ide u svoj
red na `0.42em`, jer bi u punoj veličini naslova prelomilo u dva reda.

Gde stoji puno ime: panel usluga na naslovnoj, lista `/usluge/`, `h1` i `<title>`
stranice, padajuća lista u kontakt formi, `meta description` liste usluga.

Gde je namerno ostalo kratko: futer (sve stranice), mrvice, unakrsni linkovi među
stranicama usluga. To su navigacione oznake — treba da se skeniraju, a
„Postoperativna rehabilitacija" već lomi kolonu futera u dva reda.

**Slug je i dalje `kineziterapija`.** Adresa se ne menja; da se menjala, trebalo
bi i preusmerenje, a stranica još nije objavljena pod tim imenom.

### Prvi krug klijentovih ispravki (26.08.2026)

Nikola je poslao 17 primedbi preko WhatsAppa. Urađeno je 10 koje ne traže ničiju
odluku; spisak svih 17 sa statusom je u dokumentu projekta
`claude/9-ispravke-klijent-1.md`.

| Šta | Gde |
|---|---|
| Razmak slika→ime na kartici tima bio je 0 px | `.team-copy` dobio `padding-top` |
| Mrvice uklonjene | svih 7 stranica pod `/usluge/` |
| Hero usluge poravnat na vrh (bio `align-items: end`) | `.service-hero-grid` |
| Potpis „Metod, ne recept." zamenjen sa **„Odluku donosi čovek."** | sekcija Oprema |
| Novi naslov: „Najmodernija terapija, dostupna u Beogradu." | sekcija Oprema |
| „Tražimo put nazad" → „Želimo da rešimo problem zauvek" | Naš pristup |
| Tri tvrdnje podebljane u dugom tekstu | „Šta je ovo", fizikalna terapija |
| „Za koga je" izašlo iz bočne kartice u svoju sekciju | nova `.for-whom-section` |
| Cene i Pitanja: skinuta oznaka, kitnjast naslov i pasus | ostao samo naslov |

Pravilo je zatim primenjeno na **svih šest sekcija** stranice usluge, ne samo
na te dve: Kako izgleda, Sedam procedura, Tegobe, Za koga je, Cena, Česta pitanja.
Sve nose miran naslov bez oznake i bez pasusa objašnjenja. Izuzeci su dva:

- **Poziv na kraju** zadržava izjavu („Opišite tegobu u jednoj rečenici…") — tu
  naslov jeste sadržaj, ne uvod u spisak. Pala je samo oznaka SLEDEĆI KORAK.
- **„Šta je ovo"** zadržava bočnu oznaku, jer je to jedina sekcija bez naslova i
  oznaka joj služi kao naslov. Bočna oznaka je drugi postupak od one koju je
  klijent zamerio — ta je stajala naslagana iznad naslova.

Usput uklonjeno: ispod naslova sekcije Tegobe stajalo je **„Spisak nije ručno
pisan — sastavlja ga sajt iz fajlova tegoba."** To je beleška za mene, a bila je
vidljiva posetiocima.

**Naslovi tih sekcija su namerno manji** od `.section-intro h2` iz v12. Taj stepen
nosi izjavu („Bez skrivenih stavki. Cena je cena."), a klijent je tražio oznaku
(„Cena fizikalne terapije"). Kad se u `.section-intro` ostavi samo naslov, on
padne u prvi stubac mreže od 0.38fr i prelomi se u četiri reda — zato te dve
sekcije više nisu mreža.

### Crtice (26.08.2026, tačka 12 sa klijentovog spiska)

U vidljivom tekstu bilo je **97 em crtica**. Podeljene su na dve stvari:

- **28 je bio raspon** — „Pon — Pet", „08:00 — 20:00", „01—03". Za raspon ide
  **en crtica bez razmaka**, ne em: sada `Pon–Pet`, `08:00–20:00`, `01–03`.
  Nije stvar ukusa nego pravopisa, pa je urađeno bez čekanja odluke.
- **69 je bila proza.** Od toga je **48 zamenjeno** zapetom, dvotačkom ili
  tačkom — svuda gde je crtica radila posao koji zapeta radi jednako dobro.

**Ostalo je 17 u vidljivom tekstu**, i one nose obrt: „Ne birate vi terapiju —
biramo je zajedno", „Znanje ne stoji na diplomi — proverava se na svakom
pacijentu", „menjamo pristup — ne produžavamo isto". Tu crtica pravi pauzu pa
okret; zapeta bi je ubila. Odluka (opcija B) je da crtica prestane da bude tik,
a ostane tamo gde nešto znači.

**Nije dirano:** `<title>`, `meta description`, `aria-label` (crtica je tamo
razdvajač imena, standardna), i „REHAB paket — N terapija" u cenovniku, gde
razdvaja naziv od specifikacije.

## Provereno pre isporuke

Puštena skripta kroz browser:

- 51 lokalni link sa naslovne — **svi ciljevi postoje**, nijedan 404
- klik na prvu tegobu → otvara „Fizikalna terapija"
- klik na treću uslugu → otvara „Kineziterapija"
- „Sve usluge" → lista → fizikalna terapija → logo → naslovna
- prelaz mišem preko panela usluga i dalje menja sliku
- svih 8 stranica bez JS grešaka i bez horizontalnog pomeranja

Jedini 404 u testu je hero video, koji u testno okruženje nije prenet — u repou postoji.

## PLACEHOLDER — čeka klijenta

Na stranici fizikalne terapije žuto označeno, oznaka „ZA POTVRDU":

| Šta | Stanje |
|---|---|
| „Prvi pomak posle 3–4 dolaska" | izmišljeno kao primer, mora potvrditi struka |
| FAQ „Koliko košta?" na naslovnoj | rečenica stoji bez brojeva, oznaka „CENE ZA POTVRDU" |
| RFZO: da / ne / delimično | nema odgovora |
| Cene | prepisane sa `lokomoto.rs/cenovnik-2/`, traže potvrdu |

Opisi procedura nisu placeholder, ali su medicinski sadržaj — **mora ih pročitati
neko iz struke pre objave**.

## Privremena rešenja, da nijedan link ne bude mrtav

| Gde | Sada vodi | U fazi 2 |
|---|---|---|
| Tegobe na stranici usluge | mreža tegoba na naslovnoj (`#usluge`) | `/tegobe/<slug>/` |
| Pet usluga bez sadržaja | stranica „u pripremi" | popunjena stranica |
| Politika privatnosti | naslovna | `/politika-privatnosti/` |
| Cenovnik, O nama, Tim | nisu u meniju | svoje stranice |

## Nesklad koji je stranica otkrila

**Trajanje se ne slaže.** v12 čipovi kažu „30–40 min" za fizikalnu terapiju, cenovnik
na `lokomoto.rs` kaže da je terapijski dan **60 minuta**. Na stranici stoji 60, po
cenovniku. Jedno od ta dva je pogrešno.

## Dva polja koja modelu 1.2 nedostaju

1. **`metode`** — procedure unutar usluge (7 kod fizikalne terapije). Bez toga
   stranica nema svoj najvažniji blok. Predlog: lista `{ oznaka, naziv, opis }`.
2. **`pitanja`** — dva do četiri pitanja specifična za uslugu.

## Fotografije

Stranica koristi tri postojeće (`clinical-work`, `assessment`, `manifesto`), sve tri
prave i snimljene u centru. Sekcija „Oprema" na naslovnoj koristi četvrtu, `oprema.webp`. Sajt faze 1 ima **25 mesta za fotografiju**, a postoji ih
6 — brief za snimanje je u zasebnom dokumentu projekta.

U `usluga.css` je pripremljena klasa `.method-photo`: kartica procedure prima
fotografiju čim je bude, bez ikakve druge izmene.

## Šta ovo nije

Naslovna u `v13/index.html` je **kopija** v12 naslovne. To je privremeno i namerno:
kad dođe Eleventy, naslovna se generiše iz `sadrzaj/naslovna.yml`, a ova kopija se
briše. Do tada dve naslovne ne smeju da se razilaze — ako se menja tekst, menja se
u v13, a v12 ostaje zamrznut kao referenca prepisa.
