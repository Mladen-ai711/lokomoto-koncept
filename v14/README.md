# v14 — Lokomoto boje

Doslovna kopija `v13/` od 28. 8. 2026, sa jednom razlikom: **tirkiz je zamenjen
plavom iz Lokomoto logoa** (Nikolina stavka 1, druga runda).

`v13/` je zamrznuta i ostaje na svojoj adresi. Ako se plava ne primi, ništa nije
izgubljeno — dve adrese žive paralelno i mogu da se pokažu jedna do druge.

**Radna adresa:** `mladen-ai711.github.io/lokomoto-koncept/v14/`

---

## Boje — izmereno, ne procenjeno

Bojazan je bila da brend plava „nikako ne ide" uz postojeću paletu. Izmereno iz
`v8/assets/images/logo-color.png`, po tonu:

| Udeo piksela | Ton | Prosečna boja | Šta je |
|---|---|---|---|
| **85%** | 180–220° | `#2c9ecb` i `#1f7db6` | plava |
| **14%** | 80–100° | `#95d15e` | žuto-zelena |

**Logo je plav i žuto-zelen.** Nikolina `#057eb6` (ton 199°) je tamnija plava iz
tog istog logoa.

A paleta v12 je već imala `--blue: #279cd1` — **ton 198,7°, ista porodica**.
Tirkiz `--teal` je na 172,7°, dakle **26° od brend plave**: susedi u cijan
porodici, ne sudar. `--lime` `#c9f25f` je na 76,7° — **ista porodica kao zelena
iz logoa**, samo svetlija.

Drugim rečima: paleta je bila bliža brendu nego što je izgledalo. Pomerena je za
26°, nije menjana.

## Šta je tačno promenjeno

Jedan blok na vrhu `usluga.css`, sekcija 0:

```css
:root {
  --teal: #2c9ecb;       /* svetlija plava iz logoa — tačke i naglasci na tamnom */
  --teal-deep: #057eb6;  /* Nikolina brend plava — tekst na svetlom */
  --blue: #2c9ecb;
}
```

**Dve vrednosti, jer ih i logo ima dve.** Jedna boja ne može da nosi i tačku na
tamnoj fotografiji i tekst na papiru.

**Kontrast je proveren, ne pogoršava se.** Na `--paper` (#f1f0e9):
stari `--teal-deep` #078b7d = **3,68:1**, novi #057eb6 = **3,94:1**.

**`--lime` nije diran.** Zelena iz logoa (#95d15e) je ista porodica kao postojeći
#c9f25f, samo tamnija — a lime mora da ostane svetao da bi se video na `--ink`
pozadini. Ako Nikola traži doslovnu zelenu iz logoa, menja se jednim redom u
sekciji 0.

### Traka sa brojevima — lajm, ne plava

Znaci `+`, `:` i `h` u traci iznad („4.000+", „1:1", „48h") ostaju **lajm**.
Nije stvar ukusa nego svetline. Kontrast na podlozi trake (`--ink-2` #26322f):

| | Odnos |
|---|---|
| tirkiz #13c9b3 (v13) | 6,35:1 |
| plava #2c9ecb (v14) | **4,34:1** — zamena boje ih je prigušila |
| lajm #c9f25f | **10,35:1** |

Dvotačka u „1:1" je jedan potez na cifri od 3,35rem; pri 4,34:1 se praktično
gubi. Uz to je **na tamnoj podlozi lajm svuda drugde nosilac naglaska** — broj
sekcije u Opremi, crtice na mapi tela, oznaka na fotografiji u „Naš pristup".
Traka je bila izuzetak; sada nije. Lajm se nastavlja u traku ciljeva odmah
ispod, pa se dva pojasa vežu.

### Hero — zamenjen i prvi kadar (ispravka st. 15)

U v13 je zamenjen **kadar 4** (sala za vežbe), jer mu je kamera bila nakrivljena
−2,5°. Mladen je posle primetio da je Nikola rekao **„slika ordinacije"** — a
ordinacija je kadar 1, ne sala. Merenje je to potvrdilo, ali tek kad se merilo
ono pravo:

| Šta je mereno u kadru 1 | Rezultat |
|---|---|
| Vertikale cele prostorije | +0,00° — **prava** |
| Stub aparata (INDIBA) | 0,00 do +1,09° — **prav** |
| **Glava aparata** (ekran + narandžasti poklopac) | **+2,3°** — **nakrivljena** |

Prvi put je mereno soba i telo aparata, i kadar je proglašen ispravnim. Krivo je
bilo **ono na šta oko prvo padne** — ekran na podesivoj ruci, u gornjoj trećini
kadra. **Pouka: meri predmet na koji se gleda, ne samo okvir oko njega.**

To se ne da ispraviti rotacijom — soba je prava, pa bi ispravljanje ekrana
nakrivilo sobu. Isti aparat je pod istim uglom i na fotografijama sa snimanja
27. 8. (`L-8`: glava +2,1°). Jedini izlaz je drugi kadar.

**Novi kadar 1: `L-9`** — druga terapijska soba, vertikale **+0,17°**, bez
aparata sa nakrivljenim ekranom, sa modelom kičme na prozorskoj dasci.

Tehnički: zadržano je sve od 4,0 s postojećeg videa, a novi kadar (4,6 s, spor
prilaz `z 1,00 → 1,09`) ubačen je prelivom od 0,6 s. Gradacija ista
(`saturation 0.82`, `contrast 0.96`), svetlina izjednačena gamom.

| Kadar | Svetlina |
|---|---|
| 1 — L-9, terapijska soba (novi) | 136,7 |
| 2 — IASTM na vratu | 130,8 |
| 3 — pojas na kolenu | 144,8 |
| 4 — L-17, čekaonica | 143,7 |

Novi fajlovi, **v5 nisu brisani** (v13 i dalje čita njih):

- `v8/assets/media/hero-loop-v6.mp4` — 1600×900, 16,2 s, 2,3 MB
- `v8/assets/media/hero-loop-v6-mobile.mp4` — 900×1600, 16,2 s, 2,0 MB
- `v8/assets/images/hero-poster-v6.jpg` i `hero-poster-v6-mobile.jpg`

**Sada su oba kadra prostorije iz snimanja 27. 8. i oba su merena kao prava** —
pa nije ni bitno na koji je Nikola mislio.

**Ništa drugo nije dirano.** Nema izmena u rasporedu, tekstu ni skripti.
Razlika prema v13 su ta dva bloka u sekciji 0 i oznake verzije.

## Oznake verzije

v14 kreće od `?v=14.0` (`usluga.css` je na **14.1** posle izmene trake) za `usluga.css`, `app.js` i `stranica.js` — namerno daleko
od v13 brojeva, da keš jedne verzije ne servira drugu.

## Provereno

7 stranica na 1440 px: `--teal` i `--teal-deep` čitaju nove vrednosti na svakoj,
bez horizontalnog preliva, bez JS grešaka, **90 lokalnih linkova, nijedan mrtav**.

---

## Fajlovi

| Fajl | Šta je |
|---|---|
| `v13/index.html` | naslovna — kopija v12 sa linkovima umesto dugmadi |
| `v13/app.js` | skripta naslovne — v12 skripta bez koda koji je izgubio svrhu |
| `v13/stranica.js` | skripta podstranica (header, meni, reveal, godina) |
| `v13/usluga.css` | dodatak na `v12/styles.css` — sve nove komponente |
| `v13/usluge/index.html` | lista usluga |
| `v13/usluge/fizikalna-terapija/index.html` | **jedina popunjena stranica** |
| `v13/usluge/<ostale 4>/index.html` | stranice sa oznakom „u pripremi" |

Oznaka verzije: `usluga.css?v=3.3`, `app.js?v=1.2`, `stranica.js?v=1.0`.
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

- Oznaka `04 OPREMA`, naslov „Uređaji koje nema *svaka ambulanta.*" (kasnije
  zamenjen sa „Najmodernija terapija, dostupna u Beogradu."), tekst nabraja
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

### Sekcija 03 — četiri kartice u tri (tačka 15)

Klijent: „Ovo su 4 nepovezane info, a u istoj su sekciji."

**Uzrok nije bio tekst nego forma.** Mreža je pozajmila izgled trake sa
brojkama (oznaka + naslov + red teksta), a u oznakama su stajali **godina**
(2016.), **broj koji ništa ne broji** (01), **metafora** (360°) i **strelica**
(→). Oko to pročita kao podatke, pa ne nađe podatke. Uz to su dve kartice
ponavljale sekciju „Naš pristup" („Povezan proces", „Individualni plan"), a
prave brojke ionako već stoje u `.proof-bar` na vrhu strane.

**Šta je urađeno:** oznake su uklonjene, kartica je tri umesto četiri, i sve
tri govore o **prostoru** — jedinoj temi koju ova sekcija ima svoju, a nijedna
druga je ne pokriva:

1. **Ista adresa od 2016.** — Tabanovačka 27b na Autokomandi.
2. **Iz kabineta u salu.** — pregled, aparaturna terapija i vežbe iza istih vrata.
3. **Ne staje kad bol prestane.** — cilj je povratak opterećenju. *(lime)*

Ništa od toga nije nova tvrdnja: adresa i godina stoje u uputstvima projekta,
a sala za vežbe je već na fotografiji uz koju kartice stoje.

Prva verzija je glasila „Sve u istom prostoru" i „Prostor je deo plana", pa se
reč **prostor** ponavljala tri puta u istoj sekciji — dvaput u karticama i
jednom u uvodu („prostor u kome terapija prirodno prelazi u pokret"). Posle
prepravke stoji jednom, u uvodu. Tri kartice sada idu kao niz: **gde smo →
šta je unutra → čemu vodi**, umesto tri činjenice o istoj stvari.

**Raspored:** jedna kolona, tri reda jednake visine (`grid-template-rows:
repeat(3, 1fr)`), da desna kolona isprati fotografiju do dna. Sa `align-content:
start` kartice su stale na dve trećine i desno je ostajala rupa.

### Mapa tela umesto mreže tegoba (tačka 13)

Klijent: „Bilo bi preeeekul da ovde zapravo bude čovek i na njemu obeleženi
problemi. Ovako je tabela, tako bi vizuelno bilo lakše."

Dobio sam tri fotografije. Uzeta je **čista** (`lokomoto-covjek-bez-oznaka.png`
→ `v8/assets/images/telo.webp`, 1774×887, **20 kB**). Verzije sa nacrtanim
tačkama i natpisima **nisu korišćene kao slika** — one su služile kao predložak.

**Zašto ne slika sa upisanim tekstom:** natpisi bi bili neklikabilni, nečitljivi
na telefonu, nevidljivi pretraživaču i čitaču ekrana, a svaka izmena teksta
tražila bi novi eksport. Ovako su tačke, linije i natpisi HTML i CSS:

- 8 natpisa su pravi `<a>` linkovi na iste usluge na koje su vodili čipovi
- 8 tačaka i 8 linija pozicionirano u **procentima fotografije**, pa sve raste
  sa njom; linije su jedan `<svg>` sa `viewBox="0 0 100 100"` i
  `preserveAspectRatio="none"`, tako da su koordinate isti procenti
- `vector-effect: non-scaling-stroke` drži debljinu linije istom na svakoj širini

**Ispod 1000 px** natpisi izlaze iz apsolutnog položaja i postaju običan spisak
ispod fotografije, linije se gase, tačke se smanjuju.

Oznaka „NIJE UVEK JEDNA TAČKA" je u `var(--teal)`, ista boja kao oznaka same
sekcije („SA ČIME NAM NAJČEŠĆE DOLAZE") — iste su vrste pa treba da izgledaju
kao par. Tačke su unutar
`.body-map-stage` baš zato — da im referentni okvir ostane fotografija, a ne
cela figura koja na telefonu naraste.

**Mreža je imala 12 tegoba, na telu ih staje 8.** Preostale četiri nemaju mesto
na telu (sportska povreda, sedenje za kompjuterom, povratak treningu, „ne znam
odakle bol dolazi") i stoje kao red ispod, pod oznakom „Nije uvek jedna tačka".
Nijedna usluga nije izgubila ulaz.

Iz predloška je preneta i **isprekidana linija od kuka do kolena** — put išijasa.
Nije veza natpisa sa tačkom nego oznaka da bol putuje niz nogu, pa je tiša od
ostalih linija (`stroke-dasharray`, manja vidljivost). Kao i ostale, gasi se
ispod 1000 px.

Sitna ispravka usput: čip je pisao „ishijas", predložak „išijas". Uzeto je
**išijas**.

### Prelaz mišem preko mape tela

Razmatrana je varijanta sa **animiranim čovekom** (Higgsfield, osam klipova,
svaki jedan bolan pokret na hover). **Odbačena**, i to iz razloga koje treba
zapamtiti pre nego što se ideja vrati:

1. Statična figura čita se kao **šema**; čim se pomeri, postaje **osoba** — i
   posetilac pita ko je. Odgovor je „niko, generisan je", tri sekcije iznad tima
   sa pravim licima.
2. AI video iz statične slike redovno izvrne anatomiju. Na sajtu fizikalne
   medicine to je prvo što struka vidi, i to osam puta.
3. Prvi kadar mora da bude identičan fotografiji, inače prelaz „skoči".
4. Osam klipova je 1,5–3 MB naspram sadašnjih **20 kB** za celu sekciju.
5. Nema hovera na telefonu, a telefon je verovatno većina saobraćaja.

**Umesto toga, čist CSS.** Na prelaz mišem ili fokus tastaturom: tačka naraste
1,28× i zasija, njena linija se pojača, ostale tačke i linije se povuku.
Nula kilobajta, nula JavaScripta.

**Umirivanje (klijent: „sve titra kao u video igrici").** Prva verzija je
uvećavala 1,55×, gasila sve ostalo na 0,28 i gasila i **natpise**, uz prelaz od
220 ms bez zadrške — pa je svaki pokret miša preko osam kutija palio i gasio
celu sliku. Tri izmene:

1. **Zadrška od 120 ms** pre nego što se bilo šta upali. Kad mišem samo pređeš
   preko svih osam, ne upali se ništa; pali se tek kad se zadržiš. Provereno
   skriptom: pri prelazu od 60 ms po natpisu, najveće uvećanje tačke ostaje 1,000.
2. **Natpisi se više ne gase.** Osam kutija sa tekstom koje se prigušuju dok
   prelaziš preko njih bilo je glavni izvor treperenja.
3. **Manji skok i mekši sjaj**: 1,55× → 1,28×, prigušenje 0,28 → 0,55, prelaz
   220 ms → 420 ms.

Natpis i tačka nisu susedi u HTML-u — tačke moraju biti unutar
`.body-map-stage` (referentni okvir im je fotografija), natpisi su van njega.
Vezuje ih **`:has()`** preko zajedničkog pretka, sa `data-spot` kao sponom.
Isprekidana linija išijasa deli oznaku sa natpisom „Utrnuće u nozi", pa se pali
zajedno sa njim. Uz `prefers-reduced-motion` uvećanje i prelaz otpadaju, a
isticanje ostaje. Bez podrške za `:has()` ništa se ne kvari — tačke samo miruju.

### Ambulanta → ordinacija (tačka 11)

Klijent: „i mi smo ordinacija, ne ambulanta". Potvrđeno preko Mladena.

Zamenjeno na **8 mesta**, sve isti red u futeru:
„Specijalizovana **ordinacija** fizikalne medicine i rehabilitacije."
Reč „ambulanta" posle toga ne postoji nigde u v13, provereno pretragom.

Ostala pojavljivanja reči „ordinacija" na sajtu (FAQ „Iz ordinacije izlazite sa
nalazom", `alt` tekst fotografije) sada su usklađena sa futerom — ranije su bila
u neskladu.

**Uputstva projekta i dalje opisuju Lokomoto kao „specijalizovanu ambulantu".**
Treba ih ispraviti, inače će sledeća sesija vratiti staru reč.

### Fotografije tima (27.08.2026)

Klijent je dao folder `E:\Lokomoto` sa **104 fotografije** iz profesionalnog
snimanja. Među njima **25 portreta u crnoj polo majici** — ista sala, isto
svetlo, po tri-četiri kadra po osobi.

**Na tim portretima je 8 ljudi, a kartica ima 6.** Novak je
prepoznat (isti čovek kao na postojećem `novak-ilic.webp`), ostalih 8 su
nepoznati. Pošto Nikolin odgovor ko je ko čeka Novaka, a to bi trajalo,
Mladen je odlučio da **fotografije uđu bez imena**.

**Prva verzija je imala grešku:** kao dve osobe bile su uzete `L-119` i `L-131`,
a to je **ista žena**. Ona je na šest kadrova (`L-118`–`L-120` i `L-130`–`L-132`);
na dva se vidi proteza, na ostalima ne, pa je promakla. Mladen je uhvatio.

**Kriterijum posle ispravke: samo nedvosmisleno različiti ljudi.** Šest kartica
sada nosi šest lica koja se ne mogu pomešati:

| Kartica | Izvor | Ko |
|---|---|---|
| Novak Ilić | *(postojeći `novak-ilic.webp`)* | brada, prekrštene ruke |
| Fizijatar | `L-119` | jedina žena u setu |
| Postoperativna | `L-128` | mlađi, bez brade |
| Kineziterapeut | `L-137` | kovrdžava kosa |
| Leđa i vrat | `L-134` | brkovi i kozja bradica |
| Aparati | `L-139` | riđa brada |

Van izbora su ostali kadrovi `L-116`/`L-117` i `L-121`/`L-122` (ruke na bokovima).
Njih namerno nisam koristio: ta dva-tri bradata čoveka se na fotografijama
teško razlikuju međusobno i od Novaka, pa je rizik da se neko ponovi previše
velik. Kad Novak kaže ko je ko, to prestaje da bude problem.

**Ubačeno** (`v8/assets/images/`, 4:5, 900×1125, ~55 kB po slici):

| Fajl | Izvor | Kartica |
|---|---|---|
| `novak-ilic.webp` | *(postojeći)* | Novak Ilić — fizioterapeut |
| `tim-01.webp` | `L-119` | Fizijatar |
| `tim-02.webp` | `L-128` | Fizioterapeut — postoperativna |
| `tim-03.webp` | `L-137` | Kineziterapeut |
| `tim-04.webp` | `L-134` | Fizioterapeut — leđa i vrat |
| `tim-05.webp` | `L-139` | Fizioterapeut — aparati |

**Raspored lica po ulogama je čista pretpostavka.** Zato su i **ime i uloga**
označeni kao placeholder, a u belešci sekcije Tim stoji žuto istaknuto:
*„Fotografije su prave. Imena i uloge čekaju potvrdu klijenta — raspored lica
po ulogama je pretpostavka."* Zamena je jedna linija po kartici.

Kontakt-listovi svih 104 fotografije i pregled portreta su u
`E:\Lokomoto\_pregled\` — za slanje Novaku, da odgovori sa „L-124 je taj i taj".

### Fotografije procedura (tačka 14)

Iz istog snimanja (`E:\Lokomoto`). Kartice u sekciji „Sedam procedura" primaju
`<figure class="method-photo">` kao prvi element — klasa je bila pripremljena
još u v13 1.1, sada je konačno iskorišćena.

| Procedura | Fajl | Izvor | Zašto baš ta |
|---|---|---|---|
| INDIBA | `metoda-indiba.webp` | `L-7` | na ekranu piše **INDIBA** |
| Triton DTS | `metoda-triton.webp` | `L-69` | na kućištu piše **TRITON** |
| NeuFit (NEUBIE) | `metoda-neufit.webp` | `L-19` | logo **neubie / neufit** |
| Elektroterapija | `metoda-elektro.webp` | `L-77` | terapeut postavlja elektrode |

Sve 16:10, 880×550, 20–35 kB.

**Tri kartice ostaju bez fotografije: magnetoterapija, krioterapija i limfna
drenaža.** U snimanju nema kadra na kome se ta oprema prepoznaje. Umesto da se
stavi „slična" fotografija, kartica nosi **označeno prazno mesto** iste visine
(`.method-photo-prazna`, isprekidan okvir + značka „FOTOGRAFIJA NEDOSTAJE").
Red ostaje ravan, a klijent tačno vidi šta fali.

**Ovo je namerno i ne treba ga „popraviti" prvom slikom koja liči.** Pogrešno
označen aparat na sajtu fizikalne medicine nije dekoracija nego tvrdnja — isto
pravilo po kom stoji i zabrana izmišljenih brojeva.

Za elektroterapiju je prvo bio uzet `L-75` (elektrode na grudima), pa zamenjen
`L-77` — kadar sa rukama terapeuta pokazuje radnju, a ne golo telo.

### Sitni tekstovi (tačka 16)

Klijent je tri puta rekao „premalo je". Izmereno pre izmene:

| Tekst | Bilo | Sada |
|---|---|---|
| Nadnaslov u hero-u | 10,6 px | **13,0 px** |
| „Radije razgovarate?" iznad telefona | **8,8 px** | **11,5 px** |
| Mikrotekst ispod dugmeta forme | 9,9 px, slab kontrast | **12,5 px**, `var(--muted)` |

„Radije razgovarate?" je bio **najsitniji tekst na celom sajtu**, a stoji uz
jedini alternativni način javljanja — ko ne želi da piše, tu treba da nađe
telefon. Mikrotekstu je uz veličinu pojačan i kontrast, jer objašnjava zašto
se otvara e-mail program; ako se ne pročita, poseta izgleda kao pokvarena forma.

**Podignuta su samo ta tri mesta, ne sve sitne oznake.** Razlika u veličini je
ono što drži hijerarhiju — kad sve postane srednje, ništa se ne ističe. Ako
klijent i dalje smatra da je sitno, sledeći korak nije dizanje svega nego
provera na njegovom ekranu: moguće je da gleda na velikom monitoru sa
podešenim skaliranjem.

## Druga runda klijentovih ispravki — grupa A (28.08.2026)

Pet stavki sa Nikoline liste koje se rade bez pitanja. Cela lista i podela na
grupe je u `claude/11-ispravke-klijent-2.md`; grupe B, C i D ovde nisu dirane.

### 2 — dugme „Pauza" izbačeno iz heroja

Uklonjeno `<button class="video-toggle">` iz `index.html` i ceo `setVideoState`
iz `app.js`. Video ostaje `autoplay muted loop playsinline`.

**Guard za `prefers-reduced-motion` ostaje** i sada je jedini način da se video
zaustavi: ko je u sistemu tražio manje animacije, dobija zaustavljen video. To
je pristupačnost, ne opcija u interfejsu, pa nema šta da se prikaže na ekranu.
Pravila `.video-toggle` u `v12/styles.css` ostaju (v12 je zamrznut) — samo više
nemaju na šta da se primene.

### 4 — „Naš pristup": telo teksta podignuto

Isti uzrok kao tačka 16 prve runde: v12 za ove elemente ne postavlja
`font-size`, pa padaju na nasleđenih 16 px. U sekciji čiji naslov koraka ide na
43 px, 16 px izgleda kao fusnota.

| Tekst | Bilo | Sada |
|---|---|---|
| Uvodni pasus sekcije | 18,0 px | **19,6 px** |
| Pasus koraka (Procena / Terapija / Funkcija) | 16,0 px | **18,7 px** |
| RAZUMEMO / USMERAVAMO / VRAĆAMO | 9,1 px | **11,5 px** |
| Oznaka na fotografiji („INDIVIDUALNI PRISTUP") | 9,4 px | **11,5 px** |

Mereno na 1440 px. **`.section-label` nije diran** — zajednički je za ceo sajt,
pa bi izmena u jednoj sekciji razbila hijerarhiju. Ako Nikola i dalje kaže da je
sitno, sledeće na redu je `.section-label` globalno, ne još jedan lokalni izuzetak.

### 9 — „Rehabilitacioni trening" ravnopravan sa „Kineziterapijom"

`.name-alt` više ne stišava drugo ime: `font-weight: inherit`, `opacity: 1`. U
`h1` je iz svog reda vraćeno u isti red kao nastavak naslova. Ostaje samo kosa
crta kao razdelnik.

> **Ne slažem se i ostavljam zapisano.** Dva imena iste težine čitaju se kao dve
> usluge — u panelu na naslovnoj i u futeru sad izgleda kao da usluga ima sedam
> umesto šest, a na stranici usluge naslov ide u tri reda na 95 px. Klijentov
> poziv; vraćanje je brisanje sekcije 20 u `usluga.css`.

### 12 — INDIBA, NeuFit i dekompresija imenovani u sekciji Oprema

Imena su do sada stajala unutar pasusa, kao nabrajanje. Sada su tri stavke u redu
(jedan stubac ispod 780 px), svaka sa jednom rečenicom. Pasus iznad je skraćen da
se imena ne ponavljaju dvaput u istoj sekciji.

**Opis je sveden na to ŠTA je uređaj, ne za šta se koristi.** Marke se čitaju sa
samih fotografija iz snimanja, pa kategorija uređaja nije tvrdnja. Indikacija
jeste medicinska tvrdnja — stoji značka `TEKST ZA POTVRDU` dok ne prođe kroz
nekoga iz struke.

### 15 — kriva slika ordinacije u herou

Hero je Ken Burns montaža četiri fotografije. Nikola je rekao „jedna slika
ordinacije je ukrivo" — izmereno je koji je to kadar, umesto pogađanja:

| Kadar | Nagib vertikala | Ocena |
|---|---|---|
| 1 — terapijska soba sa aparatom | 0,0° | prav, kosе linije su perspektiva |
| 4 — sala za vežbe, širok kadar | **−2,5°** | **kamera nakrivljena** |

Zamenjen je **kadar 4**. Novi izvor: **`L-17` (čekaonica)** iz snimanja od
27.08. Prav je, svetao i otvoren — poslednji kadar u petlji treba tako da se
završi — i nema opreme ni motivacionih citata sa zida, koji celu montažu vuku
ka jeziku teretane umesto nege.

*Ako Nikola želi da poslednji kadar ostane sala, alternativa je `L-21` (ista
prostorija, druga strana, prava vertikala). Zamena je oko 20 minuta.*

Tehnički: prvih 12,2 s postojećeg videa je zadržano nepromenjeno, pa je na
11,6 s ubačen prelaz od 0,6 s u novi kadar (4,6 s, sporo povlačenje unazad,
`z 1,10 → 1,00`, sub-pikselski render bez `zoompan`). Gradacija starog videa
(`saturation 0.82`, `contrast 0.96`) primenjena je i na novi kadar, a svetlina
izjednačena gamom — mereno, ne na oko:

| | Desktop | Mobilni |
|---|---|---|
| Kadar 1 (početak petlje) | 129,7 | 140,8 |
| Novi kadar 4 (kraj petlje) | **142,2** | **140,3** |

Novi fajlovi, **stari `v4` nisu brisani**:

- `v8/assets/media/hero-loop-v5.mp4` — 1600×900, 16,2 s, 2,1 MB
- `v8/assets/media/hero-loop-v5-mobile.mp4` — 900×1600, 16,2 s, 1,9 MB
- `v8/assets/images/hero-poster-v5.jpg` i `hero-poster-v5-mobile.jpg`

Nova imena umesto `?v=` jer se menja sadržaj videa, a ne stila — tako stara
verzija ostaje dostupna za poređenje.

## Druga runda — stavke 5 i 6 (28.08.2026)

Obe su o kretanju kroz stranicu i obe žive u `app.js`, pa su rađene u jednom prolazu.

### 5 — Procena / Terapija / Funkcija prate skrol

`is-current` je stajao zakucan u HTML-u na prvom koraku, a `.step-line span` je
u v12 imao **zamrznutu ispunu od 42%** — merač koji ništa ne meri. Sada oboje
vodi skrol.

- Merna tačka je **55% visine ekrana**, ne vrh. Korak se pali kad uđe u čitljivi
  deo ekrana, a ne kad tek proviri odozdo — inače se pali dok se još ne vidi.
- Linija se puni srazmerno, `0 → 100%` kroz blok koraka.
- Pređeni koraci dobijaju `.is-passed` — tačka je teal, ali **bez oreola**.
  Oreol nosi „ovde si sada". Bez ove razlike bi se linija punila a tačke iza nje
  ostajale sive, pa bi napredak i stanje koraka govorili dve različite stvari.
- Računanje je u `requestAnimationFrame`, jedan prolaz po frejmu.
- `prefers-reduced-motion`: logika radi isto, samo bez CSS prelaza. Ovo je
  pokret koji izaziva sam posetilac skrolom, ne animacija koja se dešava sama.

Mereno (1440 px, kroz blok koraka): ispuna 0% → 4,8% → 40,1% → 71,8% → 100%,
aktivan korak 0 → 0 → 1 → 1 → 2. Isto na 390 px.

### 6 — povratak sa stranice usluge vraća na sekciju

Pravilo „osvežavanje ide na vrh" je ostalo, ali je bilo prešироko: hvatalo je i
povratak sa stranice usluge, koji nije osvežavanje — posetilac je otišao **sa**
nekog mesta i očekuje da se vrati na njega.

Sada se pri svakom odlasku na drugu stranicu sajta u `sessionStorage` upisuje
`{ y, id }`. Pri povratku se pročita **jednom i potroši**.

Dve stvari koje su se usput pokazale:

1. **Pamti se sekcija koju je posetilac gledao, ne ona u kojoj link stoji.** Nije
   isto — futer je van svake sekcije, a link se može aktivirati tastaturom dok je
   ekran negde drugde. Prva verzija je pamtila `link.closest("section[id]")` i u
   testu vratila posetioca 2.800 px iznad mesta na kom je bio.
2. **Tačna visina je prvi izbor, sekcija je rezerva.** Ako se raspored u
   međuvremenu pomerio (učitane slike, drugi ekran), zapamćeni `y` više ne znači
   ništa i ide se na sekciju.

Radi i preko dugmeta „nazad" (`pageshow` sa `persisted`) i preko logoa na
stranici usluge (obična navigacija).

**Šta je ostalo netaknuto** — provereno, jer je lako pokvariti:

| Slučaj | Očekivano | Izmereno |
|---|---|---|
| Prvi dolazak na sajt | vrh | 0 px |
| Osvežavanje posle skrola na 3000 px | vrh | 0 px |
| Deljeni link `index.html#pitanja` | sekcija Pitanja | ±96 px (`scroll-padding-top`) |
| Klik na sidro iz menija | sekcija, bez `#` u adresi | ✓ |
| Nazad sa stranice usluge | mesto sa kog je otišao | 3317 → 3317 px |
| Logo sa stranice usluge | isto | 5450 → 5450 px |

Sve mereno na **1440 i 390 px**, svih 8 stranica bez JS grešaka i bez
horizontalnog preliva.

## Druga runda — stavke 8 i 7 (28.08.2026)

### 8 — medicinski trening obrisan

Nikola: *„medicinski trening je višak."* Potvrđeno sa Mladenom da se **briše**,
ne spaja. Usluga je stajala na sedam mesta:

| Gde | Šta je urađeno |
|---|---|
| Panel usluga na naslovnoj | kartica `06` uklonjena — panel ide 01–05 |
| Futer naslovne | link uklonjen |
| Futer svih 5 preostalih stranica usluge | link uklonjen |
| `/usluge/` spisak | red `06` uklonjen, naslov „**Šest** usluga" → „**Pet** usluga" |
| `/usluge/` meta opis | ime izbačeno iz nabrajanja |
| Tegoba „Povratak treningu bez novog izletanja" | preusmerena na `kineziterapija/` |
| Opis člana tima („Medicinski trening i prevencija povreda.") | → „Vođene vežbe i povratak punoj aktivnosti." |
| `v13/usluge/medicinski-trening/` | **folder obrisan** |

Numeracija nije morala da se pomera — medicinski trening je bio poslednji (`06`).
`space.webp` je bio njegova slika u pregledu; i dalje se koristi na dva druga
mesta, pa ostaje.

Provereno: **158 lokalnih linkova na 7 stranica, nijedan mrtav**; reč
„medicinski" se više ne pojavljuje ni na jednoj stranici.

### 7 — „Nije uvek jedna tačka" vidljivo i uklopljeno

Nikola: *„dobra ideja ali vizuelno neubedljivo i neprimetno."* U pravu je, i
uzrok je konkretan, ne stvar ukusa.

**Te četiri tegobe nasleđivale su `.complaint-list` iz v12** — mrežu ćelija sa
tankim linijama, ostatak nekadašnje tabele od 12 tegoba. Osam natpisa na telu su
u međuvremenu postali kartice: okvir, zaobljenje, tamna podloga, lajm crtica.
**Ista vrsta sadržaja u dva različita jezika**, pa je slabiji čitao kao fusnota
ispod slike, a ne kao ravnopravna ponuda.

Tri izmene:

1. **Iste kartice kao onih osam.** Vrednosti su prepisane sa `.bm` — isti
   padding, isto zaobljenje (`0.65rem`), ista podloga, isti odziv na prelaz mišem
   (teal okvir, tamnija podloga). Strelica `↗` je uklonjena, jer je nemaju ni
   natpisi na telu.
2. **Crtica je isprekidana.** Jedina namerna razlika. Osam njih vodi linija do
   tačke na telu; ove četiri nemaju gde da pokažu, pa im je crtica prekinuta.
   Isti znak, prekinut — to je cela poruka sekcije u jednom potezu, bez dodatnog
   objašnjavanja.
3. **Traka je nalepljena na dno fotografije.** Preko 1000 px `.body-map-stage`
   gubi donja zaobljenja, a `.complaints-rest` dobija njih i podlogu malo svetliju
   od sekcije — čita se kao podnožje iste kartice, ne kao sledeći blok. Ispod
   1000 px natpisi ionako ispadaju iz fotografije u običan spisak, pa se traka
   nema na šta nalepiti i ostaje kako jeste; kartice su i tamo iste.

Dodata je i rečenica uz oznaku, jer sama oznaka nije govorila zašto su odvojene:
*„Ove tegobe nemaju jedno mesto na telu, pa ih mapa ne pokazuje. Put je isti:
pregled, pa plan."*

Sitnica koju je render uhvatio: duži natpis se prelama u dva reda, a sa
`align-items: center` je crtica padala **između** redova. Sada stoji uz prvi red
(`align-items: flex-start` + `margin-top: 0.62rem`), kao i kod jednorednih.

## Druga runda — stavka 13: sekcija „Osnivači" (28.08.2026)

Nikola, doslovno: *„sekcija tim neka ostanu samo Novak i Strahinja (kod njega
piše bol u leđima i vratu) oni su osnivači Lokomota i kao kratka bio u 2/3
rečenice i stats za jednog i stats za drugog."*

Mladen je potvrdio i identifikaciju: **Strahinja je predzadnja kartica** u
dotadašnjem redu od šest. To je `tim-04.webp` (izvor `L-134`), čiji je opis i
glasio „Bol u leđima i vratu" — dva nezavisna traga se poklapaju, pa je pripadanje
fotografije potvrđeno, ne pretpostavljeno.

### Zašto „Osnivači", a ne skraćeni „Tim"

Traka sa brojevima iznad tvrdi **„6 — fizioterapeuta u timu"**. Dve kartice pod
naslovom „Tim" čitaju se kao da tim ima dvoje ljudi, pa bi broj 6 izgledao kao
neistina. Pod naslovom **„Osnivači"** dva broja govore o dve različite stvari i
ne sudaraju se. Traka ostaje netaknuta.

### Zašto nova porodica klasa

`.team-grid` iz v12 je mreža od četiri stupca sa `subgrid` redovima za šest
kartica. Dve kartice u toj mreži izgledaju kao da su ostale četiri otpale.
Nova kartica je **vodoravna** — fotografija uz tekst — jer sada ima šta da nosi:
ime, zvanje, biografiju i tri broja. `.team-grid` u v12 ostaje netaknut i
neizmenjen.

Prelamanje: dva stupca do 980 px, jedan ispod; ispod 520 px fotografija ide
iznad teksta ali ograničena na `11rem` — 4:5 preko cele širine od 390 px znači
480 px portreta pre nego što ijedna reč krene.

### Šta je stvarno, a šta placeholder

| Podatak | Stanje |
|---|---|
| Obe fotografije | **prave**, pripadanje potvrdio Nikola |
| „Novak Ilić" | pravo ime, bilo je i ranije nepodvučeno |
| „Osnivač" za oboje | Nikolina reč |
| „U Lokomotu od 2016." | izvedeno iz dve potvrđene činjenice — centar je osnovan 2016, njih dvojica su osnivači |
| „Fokus" za Novaka | „Manualna terapija, sportske povrede" — zatečen tekst kartice |
| „Fokus" za Strahinju | „Bol u leđima i vratu" — tekst po kom ga je Nikola i prepoznao |
| Prezime, zvanje, biografije, godine iskustva | **placeholder**, žuto, uz značku „ZA POTVRDU" |

Biografija je namerno napisana kao **zadatak, ne kao lorem**: „Dve do tri
rečenice: čime se najviše bavi, kako radi sa pacijentom i odakle mu to." Tako
prazno mesto istovremeno govori šta tačno treba poslati.

Brojevi su spisak parova, ne krupne cifre. Od tri vrednosti po čoveku danas je
poznata samo godina; krupno postavljen placeholder umesto broja izgleda kao
pokvarena stranica, a ne kao prazno mesto.

### Šta je usput nestalo — proveriti da li se traži nazad

Sa blokom `.team-note` otišle su i tri stvari:

1. **„Prosečno *8 godina* kliničkog iskustva po terapeutu."** Taj broj **nije
   imao izvor** i nije bio označen kao placeholder — promakao je u prvoj rundi.
   Ako se vraća, treba mu potvrda, kao i svakom drugom broju na sajtu.
2. Pasus „Tim se dopunjava: fizijatar postavlja dijagnozu, fizioterapeut vodi
   terapiju, kineziterapeut vraća opterećenje." — tačan opis centra, ali govori o
   timu, ne o osnivačima. Ima mesto u sekciji 03, ako se traži.
3. Pasus „Znanje ne stoji na diplomi — proverava se na svakom pacijentu."

### Fotografije koje su ostale neiskorišćene

`tim-01.webp`, `tim-02.webp`, `tim-03.webp`, `tim-05.webp` **nisu obrisane** — u
repou su i spremne ako se tim ikada vrati na stranicu. `novak-ilic.webp` i
`tim-04.webp` su u upotrebi.

Provereno na **1440, 980, 520 i 390 px**: dve kartice, bez preliva, bez JS
grešaka; 158 lokalnih linkova na 7 stranica, nijedan mrtav.

## Druga runda — stavka 14: „Usluge" u meniju vodi na mapu tela (28.08.2026)

Nikola: *„usluge u navigaciji neka vode na čovečuljka."* Mladenova odluka:
**i jedno i drugo** — po tegobi i po usluzi.

Ispalo je da za to nije potrebna nova stranica ni nova navigacija. **Sekcija
`#usluge` na naslovnoj već drži oba ulaza**: mapu tela (gde te boli) i panel
usluga (šta radimo). „Usluge" u meniju sada vodi tamo.

| Gde | Bilo | Sada |
|---|---|---|
| Meni naslovne (desktop i mobilni) | `usluge/` | `#usluge` |
| Meni svih 6 podstranica | `../` | `../../index.html#usluge` |
| Futer, kolona „Sajt" | `usluge/` | `#usluge` |

### Zašto spisak `/usluge/` nije ostao bez ulaza

Meni je bio **jedini vidljivi ulaz** u spisak sa naslovne. Da je samo
preusmeren, stranica koja nosi buduće usluge (st. 10) i cenovnik (st. 11) bila
bi dostupna jedino sa stranica pojedinačnih usluga — što je krug, ne ulaz.

Dva nova ulaza:

1. **„Sve usluge na jednom spisku ↗"** ispod panela usluga, u `.service-nudge` —
   tačno tamo gde onaj ko je pregledao pet redova traži „ima li još".
   Namerno **tiši od lajm dugmeta iznad** („Opišite tegobu u jednoj rečenici"),
   koje ostaje glavni poziv: nova klasa `.service-nudge-all` samo prigušuje boju
   i liniju, ostalo nasleđuje.
2. **„Sve usluge"** kao prva stavka futerske kolone Usluge, na svih 7 stranica.
   Na samom spisku nosi `aria-current="page"`.

### Šta je provereno

| Slučaj | 1440 px | 390 px |
|---|---|---|
| Meni „Usluge" sa naslovne → sekcija, mapa u kadru | ✓ | ✓ |
| Adresa ostaje bez `#` posle klika (pravilo iz v13) | ✓ | ✓ |
| Meni „Usluge" sa stranice usluge → `index.html#usluge`, na sekciji | ✓ | ✓ |
| „Sve usluge na jednom spisku" → `/v13/usluge/` | ✓ | ✓ |
| Stavke 5 i 6 nepromenjene | ✓ | ✓ |

**168 lokalnih linkova na 7 stranica, nijedan mrtav** (bilo ih je 158 — deset
novih su ulazi u spisak).

### Šta ovo ne rešava

Ostaje otvoreno gde ide **cenovnik** (st. 11) kad stigne: na spisak `/usluge/`
ili u meni kao zasebna stavka. I ako broj usluga poraste (st. 10), panel od pet
redova na naslovnoj prestaje da bude ceo spisak — tada `#usluge` postaje pregled,
a `/usluge/` pun spisak, što je i dalje ista podela.

## Druga runda — stavka 11: cenovnik (28.08.2026)

Nikola: *„cenovnik dodati na naslovnu i u navigaciju."*

Ranije je ovde stajala primedba da prazna tabela sa `ph` oznakama izgleda gore
nego da cenovnika nema. **Ta primedba više ne važi** — cenovnik postoji na
klijentovom sopstvenom sajtu, `lokomoto.rs/cenovnik-2/`, sa svih 25 stavki u
četiri grupe. Cene dakle **imaju izvor**; ono što nedostaje je potvrda da su
aktuelne, a to je značka, ne prazno mesto.

### Šta je preneto

Svih 25 stavki, doslovno, u četiri grupe kako stoje na izvoru:

| Grupa | Stavki |
|---|---|
| Dijagnostika | 3 |
| Fizikalna terapija (INDIBA, Medestec, NeuFit, dekompresija, kineziterapija, krioterapija) | 9 |
| Rehab trening / Kineziterapija | 8 |
| Oporavak i masaža | 5 |

**„Ušteda" uz pakete je izračunata, ne prepisana** — razlika između zbira
pojedinačnih termina i cene paketa. Sve provereno: 10×5.000 − 45.000 = 5.000;
12×7.000 − 72.000 = 12.000; 16×3.500 − 45.000 = 11.000; i tako za svih jedanaest
paketa. To nije izmišljen broj nego račun iz dva klijentova broja, i isti postupak
je već bio na stranici fizikalne terapije.

### Gde je sekcija

**Između Opreme i Pitanja**, kao `05 CENOVNIK`. Posetilac prvo vidi šta se radi,
ko to radi i čime, pa tek onda koliko košta — a odmah posle toga su pitanja i
kontakt. Cena ranije prekida priču, cena posle pitanja stiže prekasno.

U navigaciji je „Cenovnik" između „Oprema" i „Pitanja", na **svih 7 stranica**;
mobilni meni ide 01–06. Odgovor na pitanje „Koliko košta?" u česta pitanja sada
vodi na `#cenovnik`.

### Zašto `columns`, a ne `grid`

Grupe su vrlo nejednake — 3, 9, 8 i 5 stavki. Mreža od dva stupca ih poravnava
po redovima, pa ispod „Dijagnostike" ostaje **prazan stubac visok šest redova**
(mereno: sekcija 2341 px). `columns: 2` ih pakuje po visini — 3+9 levo, 8+5 desno,
obe kolone oko 12 redova — i sekcija pada na **1962 px**. Grupe nose
`break-inside: avoid` da se spisak ne prelomi na pola.

### Šta cenovnik otvara

Na izvoru stoje usluge kojih **na sajtu nema**:

- **Osteopatija** (uz manualnu terapiju)
- **Funkcionalna analiza tela** (uz dijagnostiku)
- **Oporavak, masaža 30/45/60 min, limfna drenaža** — cela četvrta grupa

Ovo je deo odgovora na stavku 10 („fale neke usluge sa starog sajta"), ali nije
odluka koju treba doneti bez Nikole: cenovnik kaže da se te usluge naplaćuju,
ne i da li ih on želi kao zasebne stranice ili kao stavke u okviru postojećih.

### Označeno kao placeholder

| Šta | Oznaka |
|---|---|
| Cene u celini | „Prepisane sa lokomoto.rs/cenovnik-2/ 28. 8. 2026. Treba potvrditi da su aktuelne." + `CENE ZA POTVRDU` |
| RFZO | „Da li se nešto od ovoga radi preko RFZO-a — nema odgovora." + `ZA POTVRDU` |

Provereno na **1440 i 390 px**: 25 redova, 4 grupe, dva stupca gore i jedan
ispod 900 px, bez preliva i bez JS grešaka. **180 lokalnih linkova na 7 stranica,
nijedan mrtav** (bilo ih je 168). Stavke 5, 6 i 14 nepromenjene.

## Druga runda — stavka 4, drugo čitanje: sadržaj sekcije „Naš pristup"

Nikola je napisao *„naš pristup je premali tekst"*. Prvo čitanje je bilo
**veličina slova** — gramatički tako i stoji („premali tekst", ne „premalo
teksta"), a u prvoj rundi je tri puta rekao „premalo je" baš za veličinu. To je
urađeno (odeljak 19 gore).

Mladen je pročitao drugačije: da fali sadržaja. Izmereno pre nego što se
odlučivalo:

| Sekcija | Reči | Visina |
|---|---|---|
| **01 Naš pristup** | **87** | **1582 px** |
| 02 Usluge | 244 | 2472 px |
| 03 O centru | 210 | 2220 px |
| 05 Cenovnik | 308 | 1962 px |

Tri koraka su nosila **13, 16 i 11 reči** ispod naslova od 43 px. Najpraznija
sekcija na stranici, i to ona koja treba da odgovori zašto baš oni.

### Prava dijagnoza nije bila „premalo teksta"

Problem je bio što u sekciji **ništa nije konkretno**. „Razgovor, klinički
pregled i testiranje daju jasniju sliku uzroka problema" može da napiše bilo
koja ambulanta u Beogradu.

**A konkretno je postojalo — u čestim pitanjima, iza klika, na dnu stranice:**

- *„Prvu procenu napretka radimo posle 4–6 dolazaka. Ako pomaka nema, menjamo
  pristup — ne produžavamo isto."*
- *„Iz ordinacije izlazite sa nalazom i konkretnim predlogom — ne sa 'javite se
  za nedelju dana'."*
- *„Trening najčešće ne mora da stane — reći ćemo šta da izbegavate i šta možete
  odmah."*

To **jeste** pristup. Bio je zakopan u harmonici koju otvara mali broj posetilaca.

### Šta je urađeno

Svaki korak je dobio drugi pasus — prvi kaže šta se radi, drugi šta to konkretno
znači: koliko traje, kada se meri, šta odnosite kući.

| Korak | Dopuna, i odakle | Reči |
|---|---|---|
| 01 Procena | trajanje 45 min, uput nije potreban, nalaz i predlog *(pitanja 1 i 2)* | 13 → 42 |
| 02 Terapija | rad jedan na jedan, procena napretka posle 4–6 dolazaka *(pitanje 4 + traka)* | 16 → 44 |
| 03 Funkcija | trening ne mora da stane, šta izbegavati a šta ne *(pitanje 7)* | 11 → 45 |

Sekcija: **87 → 166 reči**, visina 1582 → 1760 px. Gustina teksta udvostručena,
sekcija skoro iste visine.

**Nijedna rečenica nije nova tvrdnja.** Sve je već stajalo na istoj stranici i
prošlo klijenta — samo je preseljeno tamo gde se čita. Odgovori u čestim
pitanjima su ostali kako jesu: ko traži „koliko tretmana", mora da nađe odgovor
i tamo. Preklapanje između sekcije i njenog FAQ-a je normalno — sekcija gradi
argument, pitanje daje odgovor.

`.approach-step p + p` dobija razmak od `0.75rem`, manji od razmaka između
koraka; inače drugi pasus izgleda kao poseban korak bez naslova.

### Otvoreno

Ako je Nikola ipak mislio na veličinu slova, oboje je sada urađeno i ništa se ne
gubi. Ako je mislio na sadržaj, ovo je prvi krug — sledeći bi tražio od njega
činjenice kojih na sajtu nema: po čemu odlučuju da je neko završio, radi li se
retest na kraju, šta pacijent dobija kad izađe iz programa.

## Provereno pre isporuke

Puštena skripta kroz browser:

- 51 lokalni link sa naslovne — **svi ciljevi postoje**, nijedan 404
- klik na prvu tegobu → otvara „Fizikalna terapija"
- klik na treću uslugu → otvara „Kineziterapija"
- „Sve usluge" → lista → fizikalna terapija → logo → naslovna
- prelaz mišem preko panela usluga i dalje menja sliku
- svih 8 stranica bez JS grešaka i bez horizontalnog pomeranja

Jedini 404 u testu je hero video, koji u testno okruženje nije prenet — u repou postoji.

### Druga runda, grupa A (28.08.2026)

Renderovano na **1440 i 390 px**, svih 8 stranica:

- bez JS grešaka, bez 404, bez horizontalnog preliva ni na jednoj stranici
- sve stranice čitaju `usluga.css?v=2.7`; naslovna `app.js?v=1.1`
- hero traži `hero-loop-v5.mp4` / `hero-poster-v5.jpg`, na 390 px mobilne verzije
- dugmeta „Pauza" nema u DOM-u
- `.name-alt` mereno: 25,92 px / 570 — identično roditeljskom `<strong>`
- sekcija Oprema: tri stupca na 1440, jedan stubac na 390
- novi kadar u herou pregledan kao slika na 12,5 s i 16,1 s, u obe verzije

## PLACEHOLDER — čeka klijenta

Na stranici fizikalne terapije žuto označeno, oznaka „ZA POTVRDU":

| Šta | Stanje |
|---|---|
| „Prvi pomak posle 3–4 dolaska" | izmišljeno kao primer, mora potvrditi struka |
| Prezime, zvanje, biografije i godine iskustva osnivača | **fotografije su prave i pripadanje je potvrđeno**, ostalo čeka Novaka i Strahinju |
| Foto: magnetoterapija, krioterapija, limfna drenaža | nema kadra u snimanju, kartica nosi označeno prazno mesto |
| FAQ „Koliko košta?" na naslovnoj | rečenica stoji bez brojeva, oznaka „CENE ZA POTVRDU" |
| Opisi tri uređaja u sekciji Oprema | kategorija uređaja je proverljiva; indikacija čeka struku, značka „TEKST ZA POTVRDU" |
| RFZO: da / ne / delimično | nema odgovora |
| Cene | ceo cenovnik (25 stavki) prepisan sa `lokomoto.rs/cenovnik-2/` 28.08.2026, traži potvrdu da je aktuelan |

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

---

# Runda 30.08.2026 — popunjene preostale četiri stranice usluga

Do sada je popunjena bila samo `fizikalna-terapija`; ostale četiri su nosile
oznaku „u pripremi". Sada su sve **napisane po istom šablonu** (devet sekcija,
redosled nepromenjen) i oznaka „u pripremi" je uklonjena.

## Fajlovi koji su se promenili

| Fajl | Šta |
|---|---|
| `v14/usluge/dijagnostika/index.html` | napisana cela stranica (161 → 526 linija) |
| `v14/usluge/kineziterapija/index.html` | napisana cela stranica (161 → 584) |
| `v14/usluge/manualna-terapija/index.html` | napisana cela stranica (161 → 543) |
| `v14/usluge/postoperativna-rehabilitacija/index.html` | napisana cela stranica (161 → 539) |
| `v14/usluge/index.html` | skinuto `is-soon` sa četiri reda, izmenjena napomena u futeru |
| `v14/index.html` | ispravljena trajanja u panelu Usluge (vidi ispod) |

**`usluga.css` i `stranica.js` nisu dirani** — nijedna nova klasa nije bila potrebna,
pa oznaka verzije ostaje `?v=14.1`. Stranice koriste postojeće komponente:
`service-hero`, `for-whom-grid`, `steps-layout`, `method-grid`, `expectation`,
`complaint-links`, `price-list`, `faq-item`, `service-cta`.

## Izvor teksta

Osnova je stari sajt (`lokomoto.rs/dijagnostika/`, `/kineziterapija/`,
`/manuelna-terapija/`, `/postoperativna-rehabilitacija/`) — pročitan u celini,
pa prepisan. Zadržane su **činjenice** (nazivi metoda, indikacije, faze oporavka,
spisak operacija), promenjen je **način**: kraće rečenice, bez marketinškog tona,
i svuda objašnjeno *zašto* se nešto radi tako. Ništa nije dodato preko onoga što
klijent već tvrdi o sebi.

## Trajanja — ispravljen nesklad, po cenovniku

Nesklad iz prethodne runde („30–40 min" u panelu vs. 60 min u cenovniku) postojao je
na tri mesta. Presuđeno je **u korist cenovnika**, jer je to klijentov dokument:

| Usluga | Panel je govorio | Sada | Izvor |
|---|---|---|---|
| Fizikalna terapija | 30–40 min | **60 min** | „Terapijski dan (60 min)" |
| Kineziterapija | 45–60 min | **60 min** | „Jedan termin 60 min / 60+ min" |
| Manualna terapija | 30 min | **60 min** | „Manualna terapija, osteopatija 60 min" |
| Dijagnostika | 45 min | 45 min (nepromenjeno) | **cenovnik ne navodi trajanje — čeka potvrdu** |

Ako je klijentu neko od ovih trajanja pogrešno, menja se na dva mesta: `data-meta`
u `v14/index.html` i čip u zaglavlju stranice usluge.

## Cenovnik — šta je gde otišlo

| Stranica | Grupa iz cenovnika |
|---|---|
| Dijagnostika | Dijagnostika (3 stavke, sve tri) |
| Fizikalna terapija | Fizikalna terapija (terapijski dan + REHAB paketi) |
| Kineziterapija | Rehab trening / Kineziterapija (svih 8) |
| Manualna terapija | „Manualna terapija, osteopatija" iz grupe 2, **plus tri stavke masaže iz grupe „Oporavak i masaža"** |
| Postoperativna rehabilitacija | **nema svoju grupu** — prikazani terapijski dan i REHAB paketi, sa označenom napomenom |

**Nalaz za sudar oko cenovnika** (`claude/12-predaja-eleventy.md`, odeljak 3):
grupa „Oporavak i masaža" nije jednorodna. Masaže po sadržaju pripadaju **manualnoj
terapiji**, a stavka „Oporavak" (limfna drenaža, istezanje, krioterapija) je mešavina
fizikalne terapije i kineziterapije. Znači: grupa se **ne preslikava na jednu uslugu**,
pa izlaz (b) — „dodati ih kao usluge" — ne rešava problem. Odluka i dalje stoji otvorena.

## Novi placeholderi (sve nosi `mark.ph` + značku)

| Gde | Šta čeka |
|---|---|
| Dijagnostika · cene | ultrazvučni pregled nije zasebna stavka u cenovniku — ulazi li u cenu pregleda ili se plaća posebno |
| Dijagnostika · FAQ | RFZO |
| Kineziterapija · cene | potvrda cena i trajanja termina |
| Kineziterapija · FAQ | „da li dobijam vežbe za kuću" — tvrdnja o načinu rada, nije sa starog sajta |
| Manualna terapija · očekivanje | „razlika se često oseti posle prvog tretmana" — tvrdnja o dejstvu |
| Manualna terapija · cene | gde stoje masaže (grupa 4 cenovnika) |
| Manualna terapija · FAQ | RFZO |
| Postoperativna · cene | kako se naplaćuje — nema svoju grupu u cenovniku |
| Postoperativna · FAQ | saradnja sa hirurgom i rad po njegovom protokolu |

## Fotografije — šta je iskorišćeno i šta fali

Nijedna nova fotografija nije dodata; korišćene su postojeće iz `v8/assets/images/`.

| Stranica | Zaglavlje | Uz korake | Uz „šta da očekujete" |
|---|---|---|---|
| Dijagnostika | `assessment` | `manifesto` | `clinical-work` |
| Kineziterapija | `guided-training` | `space` | `assessment` |
| Manualna terapija | `system-detail` | `assessment` | `manifesto` |
| Postoperativna | `manifesto` | `guided-training` | `clinical-work` |

Iste slike se ponavljaju preko stranica — **to je privremeno**. Iz snimanja od
27. 8. (`claude/10-fotografije-snimanje.md`) postoje neiskorišćeni kadrovi koji bi ovo
rešili bez novog snimanja:

- **Dijagnostika:** `L-30`–`L-32` (UZ sonda na kolenu + monitor) — najpotrebnija zamena,
  jer trenutna slika uz korake ne prikazuje ultrazvuk.
- **Manualna terapija:** `L-33`–`L-46` (manuelno testiranje kolena i ramena), `L-12` (IASTM alati).
- **Kineziterapija:** `L-21`–`L-26` (sala, širok kadar).

**Kartice metoda na ove četiri stranice namerno nemaju fotografiju** — ne postoji kadar
za koji se pouzdano zna da prikazuje baš tu metodu. Klasa `.method-photo` je i dalje tu
i kartica je prima čim slika bude.

## Provereno pre isporuke

Sve četiri stranice renderovane kroz Chromium, na **1440 i 390 px**:

- HTTP 200, bez JS grešaka i bez neuspelih zahteva
- `scrollWidth == clientWidth` na obe širine — **nema horizontalnog pomeranja**
- nijedna slika nije puknuta (`naturalWidth > 0` za sve)
- svi lokalni linkovi (14 po stranici) vode na postojeće ciljeve; futer nosi
  `aria-current="page"` na sopstvenoj usluzi
- harmonika pitanja se otvara, sekcije se pojavljuju na skrol

## Ispravka istog dana — slike u traci „Šta da očekujete"

Traka je pukla na tri stranice: umesto fotografije video se zamućen zid i radijator.
**Uzrok je izmeren, ne pogođen.**

`.expectation` je visok `clamp(24rem, 34vw, 32rem)`, što na 1440 px daje **1440 × 490,
odnos 2,94 : 1**. Slika ide `object-fit: cover` sa `object-position: 62% 42%`.
Uspravna fotografija 1100 × 1400 se pri tome uveća 1,31 puta, pa se od nje vidi
**svega 27% visine** — i to pojas iz sredine, u kome nema ni terapeuta ni pacijenta.
Preko toga ide zatamnjenje od 95% sa leve strane. Rezultat je mrlja.

Slike u repou po obliku:

| Pejzaž (za traku) | Uspravne (za zaglavlje i okvir uz korake) |
|---|---|
| `manifesto` 1,78 · `space` 1,78 · `oprema` 2,0 · `hero-poster-v6` 1,78 | `assessment` 0,8 · `clinical-work` 0,79 · `guided-training` 0,79 · `system-detail` 1,25 |

**Pravilo za ubuduće:**

| Mesto | Šta traži |
|---|---|
| `.expectation-photo` — traka | **pejzaž, 16:9 ili šire.** Uspravna slika ovde ne radi |
| `.steps-photo` — uz korake | **4:5 uspravno** (`aspect-ratio` je zaključan u CSS-u) |
| `.service-hero-photo` — zaglavlje | uspravno ili blizu kvadrata |

### Šta je promenjeno

| Stranica | Traka pre | Traka sada |
|---|---|---|
| Dijagnostika | `clinical-work` (uspravna) | **`oprema`** — terapijska soba, tamni zid levo nosi tekst |
| Kineziterapija | `assessment` (uspravna) | **`space`** — sala |
| Postoperativna | `clinical-work` (uspravna) | **`space`** — sala, poslednja faza oporavka |

Uz to je na kineziterapiji `space` izašla iz okvira uz korake (bila je pejzaž u
uspravnom 4:5 okviru, pa se videla uska traka sale) i zamenjena sa `assessment`,
a natpis ispod slike je prepisan da govori o polaznom merenju.

**Sala se sada ponavlja na dve trake** (kineziterapija i postoperativna). Po značenju
stoji na obe — obe sekcije govore o opterećenju i napredovanju — ali je i dalje
ponavljanje. Reši se kadrovima `L-21`–`L-26` (sala, širok kadar) i `L-10`, `L-11`
(terapijske sobe, izvorno 16:9) iz `E:\Lokomoto`.

Provereno posle izmene: sve tri stranice, 1440 i 390 px — HTTP 200, bez JS grešaka,
bez horizontalnog pomeranja, nijedna slika puknuta.

## Dopuna — dve prave fotografije iz `E:\Lokomoto`

Folder sa snimanja je 30. 8. povezan, pa je ponavljanje sale u dve trake rešeno
pravim kadrovima umesto zaobilaženja.

**Od 104 fotografije samo je 8 pejzažnih** (odnos ≥ 1,5): `L-6`, `L-10`, `L-11`,
`L-16`, `L-24`, `L-25`, `L-26`, `L-28`. Ostalih 96 su uspravne (0,67 ili 0,8) i u
traku „Šta da očekujete" ne mogu, ma koliko dobro izgledale. To je i razlog što je
traka do sada bila usko grlo.

### Izbor je izmeren, ne odabran okom

Nagib vertikala, mereno preko gradijenta ivica (medijana skoro-vertikalnih ivica,
zasebno za ceo kadar i za centralnih 50%, da se odbije uticaj perspektive širokog objektiva):

| Kadar | Ceo kadar | Centralnih 50% |
|---|---|---|
| **`L-24`** sala | **+0,67°** | **+1,58°** |
| `L-25` sala | −3,25° | −2,97° |
| `L-26` sala | −2,46° | −2,98° |
| **`L-28`** sprave | **−0,37°** | **0,00°** |

Oko bi izabralo `L-25` — svetliji je i otvoreniji. **Merenje bira `L-24`**, koji je
četiri puta prav. Isto pravilo kao kod heroja.

### Novi fajlovi

| Fajl | Izvor | Gde stoji |
|---|---|---|
| `v8/assets/images/sala-sirok.webp` | `L-24`, isečeno na 16:9, 1800×1013, q82, 185 KB | traka na kineziterapiji |
| `v8/assets/images/sprave.webp` | `L-28`, isečeno sa 3:2 na 16:9, 1800×1013, q74, 180 KB | traka na postoperativnoj |

Trake sada nose pet različitih slika na pet stranica — ponavljanja više nema:

| Stranica | Traka |
|---|---|
| Dijagnostika | `oprema` |
| Fizikalna terapija | `manifesto` |
| Kineziterapija | **`sala-sirok`** (novo) |
| Manualna terapija | `manifesto` |
| Postoperativna | **`sprave`** (novo) |

### Ispravka uz `claude/10-fotografije-snimanje.md`

Taj dokument vodi `L-5` i `L-6` kao „beli aparati na postolju, ne može se tvrditi
šta su". **`L-6` se sada čita:** na ekranu piše `CHATTANOOGA GROUP`, a na njemu
`Traction Meter`, `Rope Release`, `Progressive / Static / Intermittent` i vreme u
minutima — to je **upravljačka jedinica za trakciju**, dakle Triton, a ne
magnetoterapija. Iz spiska kandidata za magnet **ispada**.

`L-10`, `L-11` i `L-16` prikazuju aparat sa natpisom `MP 50` i `Medical Technology`,
sa plavim crevima i bocom gela. Marka se delimično čita, **ali šta je aparat ne
treba tvrditi bez potvrde klijenta** — pravilo o pogrešno označenom uređaju i dalje važi.

Provereno posle izmene: kineziterapija i postoperativna, 1440 i 390 px — HTTP 200,
bez JS grešaka, bez horizontalnog pomeranja, nijedna slika puknuta.

## Prolaz kroz ceo folder `E:\Lokomoto` — tri prave fotografije

Prošao sam svih 104 kadra po grupama, ne uzorak. Izbor unutar svake grupe je
merio **nagib vertikala** i **oštrinu** (varijansa Laplasijana), pa je uzet najbolji.

| Grupa | Kandidati | Izabrano | Zašto |
|---|---|---|---|
| Ultrazvučni pregled | `L-30` `L-31` `L-32` | **`L-32`** | jedini u izvornom 4:5, nagib 1,43° prema 2,44° kod `L-31`; sa monitorom u kadru |
| Manuelno testiranje ramena | `L-42`–`L-46` | **`L-42`** | oštrina 92,5 prema 12,5 kod `L-46`; izvorni 4:5, nagib −0,84° |
| Ergon / IASTM u radu | `L-62`–`L-65` | **`L-62`** | oštrina 107,8; izvorni 4:5, nagib 0,69° |

### Novi fajlovi

| Fajl | Izvor | Gde stoji |
|---|---|---|
| `v8/assets/images/uz-pregled.webp` | `L-32`, 1280×1600, 50 KB | uz korake na **dijagnostici** |
| `v8/assets/images/manuelno-testiranje.webp` | `L-42`, 1280×1600, 79 KB | uz korake na **manualnoj terapiji** |
| `v8/assets/images/ergon.webp` | `L-62`, 1280×1600, 83 KB | zaglavlje **manualne terapije** |

`ergon.webp` menja `system-detail.webp` u zaglavlju — stari fajl je bio 900×720,
najmanja slika u celom setu, i vidno mekši. `system-detail` ostaje na naslovnoj.

**Dijagnostika sada ima fotografiju ultrazvuka.** To je bila najveća rupa: stranica
o ultrazvučnoj dijagnostici prikazivala je pregled kolena rukama.

### Nijedna slika se više ne ponavlja unutar jedne stranice

| Stranica | Zaglavlje | Uz korake | Traka |
|---|---|---|---|
| Dijagnostika | `assessment` | **`uz-pregled`** | `oprema` |
| Fizikalna terapija | `clinical-work` | `assessment` | `manifesto` |
| Kineziterapija | `guided-training` | `assessment` | `sala-sirok` |
| Manualna terapija | **`ergon`** | **`manuelno-testiranje`** | `manifesto` |
| Postoperativna | `manifesto` | `guided-training` | `sprave` |

### Kartice metoda i dalje bez fotografija — sada sa razlogom, ne iz opreza

Prolaz kroz svih 104 kadra potvrđuje ono što je dokument 10 slutio na uzorku:
**magnetoterapija, krioterapija i limfna drenaža ne postoje ni na jednom kadru.**
To više nije pretpostavka nego pretraženo.

Od metoda koje jesu snimljene, samo se Ergon može dokazati iz same fotografije
(`L-62`–`L-65`, alat na koži; `L-12`, set alata u koferu). Osteopatija, NKT i masaža
se na fotografiji ne razlikuju od bilo kog rada rukama. Jedna popunjena kartica od
četiri izgleda gore nego četiri čiste, pa kartice ostaju tekstualne.

Provereno posle izmene: dijagnostika i manualna, 1440 i 390 px — HTTP 200, bez JS
grešaka, bez horizontalnog pomeranja, nijedna slika puknuta.

## Sekcija „Za koga je" — dobila je sadržaj, pa i oblik

Izgledala je siromašno. **Izmereno pre dodirivanja stila**, kineziterapija, 1440 px:

| Mera | Bilo |
|---|---|
| Visina sekcije | 546 px |
| Prazan razmak gore i dole | 158,4 + 158,4 = **317 px, 58%** |
| Red sa stavkama | **85 px** |
| Prazan pojas ispod stavki | 131 px |
| Sav tekst u četiri stavke | **191 znak** |
| Naslov / tekst stavke | 48 px / 15,2 px — **odnos 3,2 : 1** |

Poređenja radi, „Kako izgleda" na istoj stranici je 1366 px sa oko 1000 znakova.
**Ovo je bila najtanja sekcija po sadržaju po pikselu.**

Zaključak: nije stil, nego sadržaj. Stavka od sedam reči je fragment, ne rečenica
u kojoj čitalac prepoznaje sebe. Stil se ne popravlja dok nema šta da nosi.

### Šta je promenjeno

**Sadržaj.** Svaka stavka sada ima **tvrdnju i jedan red objašnjenja**, umesto
gole etikete. Dodata je i **napomena koja usmerava dalje** — jedina rečenica na
stranici koja kaže kada ovo *nije* prvi korak i šta je onda:

| Stranica | Napomena |
|---|---|
| Dijagnostika | ako imate skorašnji nalaz, donesite ga — pregled je kraći |
| Fizikalna terapija | fizikalna je početak, ne ceo put; čim bol popusti ide pokret |
| Kineziterapija | ako je bol akutan, prvo fizikalna; kod hroničnog je često obrnuto |
| Manualna terapija | retko ide sama — ono što ruka otvori, vežba mora da zadrži |
| Postoperativna | ponesite otpusnu listu, od nje počinje prvi termin |

**Oblik.** Četiri tanka stupca postala su naslov levo + spisak desno. Naslov i
uvod ostaju spojeni gore, napomena pada na dno levog stupca.

| Mera | Bilo | Sada |
|---|---|---|
| Teksta u stavkama | 191 znak | **431–507 znakova** |
| Visina sekcije | 546 px | 688–712 px |
| Razlika u visini stubaca | — | **28 px** |

Prvi pokušaj poravnanja koristio je `align-content: space-between` na levom stupcu
i **razdvojio naslov od uvodne rečenice** — greška se videla tek na renderu, ne u
kodu. Ispravljeno kroz `grid-template-rows: auto auto 1fr` i `align-self: end` na
napomeni.

### Fajlovi

`usluga.css` (nova sekcija 20) i **svih pet stranica usluga**, uključujući
fizikalnu terapiju — sekcija mora da izgleda isto na svih pet.

**Oznaka verzije podignuta na `?v=14.2` u svih 7 HTML fajlova.**

Provereno: svih pet stranica, 1440 i 390 px — HTTP 200, bez JS grešaka, bez
horizontalnog pomeranja.

## Sekcija „Tegobe" — nije podebljana nego joj je promenjen posao

Isti tretman kao „Za koga je" bi ovde bio greška. **Prebrojano pre izmene, po svih
pet stranica:**

| Stranica | Stavki u „Tegobe" | Koliko ih ponavlja „Za koga je" |
|---|---|---|
| Manualna terapija | 3 | **3** — „Teniski ili golferski lakat" je bio doslovno isti u obe |
| Dijagnostika | 3 | **2** |
| Kineziterapija | 4 | **2** |
| Postoperativna | 2 | **1** |
| Fizikalna terapija | 3 | 1 delimično |

I drugi nalaz: **svih 15 linkova u toj sekciji vodilo je na istu adresu**,
`index.html#usluge` — privremeno rešenje dok ne postoje stranice `/tegobe/<slug>/`.

Dakle: ista poruka dvaput na istoj stranici i petnaest linkova na jedno mesto.
Da je sekcija samo dobila deblji tekst, ponavljanje bi se udvostručilo.

### Šta je sekcija postala

**Raskrsnica ka ostalim uslugama.** Umesto spiska tegoba koje vode *ovde* — što
„Za koga je" već radi — sada stoje četiri tegobe koje vode *drugde*, svaka sa
objašnjenjem i **linkom na uslugu kojoj pripada**.

| Stranica | Naslov sekcije | Redova |
|---|---|---|
| Dijagnostika | „Šta sledi posle nalaza" | 4 — sve četiri terapije |
| Ostale četiri | „Ako je vaša tegoba drugačija" | 4 — ostale usluge, uključujući dijagnostiku |

| Mera | Bilo | Sada |
|---|---|---|
| Teksta u sekciji | 90–140 znakova | **530–552** |
| Linkova | 2–4 | **4** |
| Različitih odredišta | **1** | **4** |
| Razlika u visini stubaca | — | 28 px |

Usput je rešeno i to što je stranica usluge do sada imala **izlaz ka drugoj usluzi
samo u futeru.** Sada svaka nudi put dalje na sredini stranice, tamo gde čitalac
i shvati da je na pogrešnom mestu.

### Greška uhvaćena na renderu, ne u kodu

Prva izmena je radila regularnim izrazom nad postojećim HTML-om i **u prvom redu
svake stranice pojela `</span>`** — pet puta, na svih pet stranica. Kod se izvršio
bez greške i prijavio četiri zamene po fajlu; videlo se tek na slici, gde je naziv
usluge ostao da visi na kraju rečenice umesto u svom redu.

Popravljeno tako što je ceo `<ul>` **prepisan iz podataka**, ne krpljen. Dodata je
i provera parnosti tagova (`li`, `a`, `b`, `span`, `em`, `i`) u sekciji, na svih pet
stranica — sve parno.

### Fajlovi

`usluga.css` (nova sekcija 21) i **svih pet stranica usluga**.
**Oznaka verzije podignuta na `?v=14.3` u svih 7 HTML fajlova.**

Provereno: svih pet stranica, 1440 i 390 px — HTTP 200, bez JS grešaka, bez
horizontalnog pomeranja, po 4 reda sa ispravnom strukturom, i sva četiri odredišta
sa kineziterapije otvaraju se sa 200.

### Šta ovo znači za fazu 2

Kad stranice `/tegobe/<slug>/` budu napravljene, **ova sekcija se ne vraća na staro.**
Raskrsnica ka uslugama je zaseban i koristan blok. Tegobe dobijaju svoje mesto —
mapa tela na naslovnoj već radi taj posao za ulazni smer.

## Plava kroz naslove — i na stranicama usluga

Naslovna to ne radi bojom nego **oblikom rečenice**. Svaki njen naslov je izjava
pa obrt u plavom kurzivu:

| Naslovna | Plavi deo |
|---|---|
| Ne tretiramo samo mesto bola. | *Želimo da rešimo problem zauvek.* |
| Cenu znate | *pre nego što počnete.* |
| Pre nego što zakažete. | *Odgovori bez uvijanja.* |

Na stranicama usluga je **svih 30 naslova bilo etiketa** — „Kako izgleda pregled",
„Cena dijagnostike". Nemaju drugu polovinu, pa boja nema na šta da sleti. Zato je
`em` tamo i bio ugašen (`color: inherit`), i taj razlog je bio tačan.

**Znači posao nije pravilo za boju nego prepisivanje naslova.** Prepisano je svih
30, po obrascu naslovne:

| Bilo | Sada |
|---|---|
| Kako izgleda pregled | Kako izgleda pregled. *Meri se, ne nagađa.* |
| Četiri načina da se dođe do nalaza | Četiri načina do nalaza. *Nijedan se ne radi napamet.* |
| Sedam procedura fizikalne terapije | Sedam procedura. *Bira ih nalaz, ne navika.* |
| Kako izgleda tretman | Kako izgleda tretman. *Prvo test, pa ruke.* |
| Četiri koraka, od pripreme do sporta | Četiri koraka, od pripreme do sporta. *Nijedan se ne preskače.* |
| Cena X | Cena X. *Znate je pre nego što počnete.* |
| Česta pitanja o X | Česta pitanja o X. *Odgovori bez uvijanja.* |

Obrt nije ukras — svaki nosi po jedno pravilo koje na stranici i stoji u tekstu.

### Boja se bira prema podlozi, ne po navici

| Podloga | Sekcije | Boja obrta |
|---|---|---|
| Svetla | za koga je, koraci, raskrsnica, cene, pitanja | **`--teal-deep` `#057eb6`** — plava izmerena iz logoa |
| Tamna | metode, poziv na akciju | **`--lime` `#c9f25f`** |

Na tamnoj podlozi plava pada u pozadinu, pa tamo ide limeta — isto kao tamna
sekcija Usluge na naslovnoj. Pravilo `.service-methods .section-intro h2 em` sa
limetom je već stajalo u fajlu, samo ga je kasniji `color: inherit` gasio.

Izmereno posle izmene, na svakoj stranici: **7 `em` u naslovima — 5 plavih,
2 limeta, nijedan bez boje.**

### Fajlovi

`usluga.css` (prepisano pravilo iz sekcije 11) i **svih pet stranica usluga**.
**Oznaka verzije podignuta na `?v=14.4` u svih 7 HTML fajlova.**

Provereno: svih pet stranica, 1440 i 390 px — HTTP 200, bez JS grešaka, bez
horizontalnog pomeranja.

## Sekcija „Šta je ovo" — hijerarhija umesto tri ista pasusa

Izmereno na fizikalnoj terapiji, 1440 px, pre izmene:

| Mera | Bilo |
|---|---|
| Leva kolona | 292 × 299 px, u njoj oznaka od **23 px** → **92% prazno** |
| Desna kolona | široka 961 px, tekst ograničen na 44rem = 704 px → **257 px neiskorišćeno i unutar nje** |
| Sva tri pasusa | **21,12 px**, isti font, ista težina |
| Visina sekcije | 615 px, od toga 317 px razmak gore i dole |

Dva odvojena problema: prazna leva kolona i tri pasusa koji izgledaju identično.

### Rešeno bez ijedne nove reči

Redosled misli je već bio napisan — teza, objašnjenje, zaključak. Samo se nije video:

| Pasus | Bilo | Sada |
|---|---|---|
| Prvi — teza | 21,1 px | **27,2 px**, uže vođenje, veći razmak ispod |
| Srednji — objašnjenje | 21,1 px | 17,6 px, mirniji, `max-width` 40rem |
| Poslednji — zaključak | 21,1 px | 17,6 px, **odvojen linijom odozgo** |

Leva kolona je dobila **liniju uz levu ivicu teksta**. Prazna kolona time
prestaje da bude rupa i postaje margina — isti potez kao hairline između redova
u ostalim sekcijama. Odnos stubaca je pomeren sa `0.38fr / 1.25fr` na
`0.3fr / 1.35fr`, pa tekst dobija širinu koju je i tražio.

### Greška uhvaćena na renderu

`align-items: stretch` je bio potreban da linija ide celom visinom teksta, ali je
usput **spustio oznaku „ŠTA JE OVO" u sredinu kolone**. U kodu ništa nije izgledalo
sumnjivo. Ispravljeno sa `align-self: start` — oznaka sada stoji uz prvi red uvoda.

### Važi na svih pet stranica bez diranja HTML-a

Izmena je **samo u `usluga.css`**, a taj fajl učitava svih sedam stranica. Nijedan
HTML nije menjan osim oznake verzije.

Provereno na svih pet stranica, 1440 i 390 px:

| Provera | Rezultat |
|---|---|
| Linija uz tekst | 1px na 1440, **0px na 390** (media upit je skida) |
| Veličine pasusa | 27,2 / 17,6 / 17,6 na desktopu, 20 / 16 / 16 na telefonu |
| Crta iznad zaključka | 1px, na svih pet |
| Oznaka u odnosu na prvi red | −19 px, identično na svih pet |
| Horizontalno pomeranje · JS greške | nema, nigde |

**Oznaka verzije podignuta na `?v=14.6` u svih 7 HTML fajlova.**

## Mapa tela — okviri i prelaz mišem u plavoj

Traženo: okvir dugmadi plav kao linije, i četiri čipa ispod koja nisu povezana
linijama. Merenjem se ispostavilo da problem nije bio samo u okviru.

**Izmereno pre izmene, na naslovnoj, 1440 px:**

| Element | Boja | |
|---|---|---|
| Linije ka telu | `rgb(44,158,203)` @ 0.65 | plava iz logoa |
| Tačka, ispuna | `rgb(44,158,203)` | plava |
| **Tačka, oreol** | `rgba(19,201,179, …)` | **stari tirkiz iz v13** |
| **Okvir na prelaz mišem** | `rgba(19,201,179, 0.7)` | **stari tirkiz iz v13** |
| Okvir natpisa i čipova | `rgba(255,255,255,0.18)` | bela |

**Prelazak sa v13 na v14 remapovao je promenljivu `--teal`, ali ne i upisane
vrednosti.** Boja je zamenjena na jednom mestu, a na **25 mesta je ostala upisana
ručno** — pa je tačka imala plavu ispunu i zelen oreol, a natpis je na prelaz mišem
skakao u tirkiz. To se u kodu ne vidi jer `var(--teal)` i `rgba(19,201,179)` stoje
jedno pored drugog i oba izgledaju „kao tirkiz".

### Šta je promenjeno

| Šta | Bilo | Sada |
|---|---|---|
| Okvir na prelaz mišem, natpisi i čipovi | tirkiz `0.7` | **plava `rgba(44,158,203,0.7)`** |
| Oreol tačke, mirovanje i prelaz | tirkiz | **plava** |
| **25 upisanih tirkiznih vrednosti** | `rgba(19,201,179,…)` | `rgba(44,158,203,…)`, iste alfe |
| Okvir u **mirovanju** | `rgba(255,255,255,0.18)` | **nepromenjen — beli** |

### Plavi okvir u mirovanju je probn i odbačen

Prvo je okvir u mirovanju bio prebačen na plavu `rgba(44,158,203,0.55)`, uz
promenljivu `--bm-okvir`. Klijent je tražio da se utiša, pa je vraćen na belu.

Razlog zašto plava tu ne radi, a na liniji radi: **linija je potez od 1 px, a okvir
zatvara ceo pravougaonik.** Ista boja daje mnogo više mastila, pa dvanaest kutija
počne da nadjača telo na fotografiji. Plava na mapi ostaje tamo gde je i bila —
linije, tačke i prelaz mišem.

Promenljiva `--bm-okvir` je obrisana; razlog stoji kao komentar u `:root`, da se
odluka ne pokušava ponovo.

**Limeta crtica ispred natpisa nije dirana** — ona je brend akcenat, ne ostatak
stare palete.

### Provereno stvarnim prelazom miša

Ne čitanjem koda nego `hover`-om u browseru, pa očitavanjem izračunatih vrednosti:

| | |
|---|---|
| Natpis i čip, okvir u mirovanju | `rgba(255, 255, 255, 0.18)` — beli |
| Natpis, okvir na prelaz mišem | `rgba(44, 158, 203, 0.7)` |
| Čip ispod, okvir na prelaz mišem | `rgba(44, 158, 203, 0.7)` |
| Oreol tačke | `rgba(44, 158, 203, 0.22)` i `rgba(44, 158, 203, 0.55)` |

Nigde više nema tirkiza: `grep` na `rgba(19, 201, 179` vraća **0 pogodaka**.

**Oznaka verzije podignuta na `?v=14.8` u svih 7 HTML fajlova.**

## Panel Usluge — prelet mišem više ne pali panel

Sekcija je delovala nervozno na prelaz mišem. Izmereno zašto:

`app.js` je na `pointerenter` **odmah** pozivao `activateService`. Kad se mišem
pređe preko svih pet stavki, panel se promeni pet puta zaredom — a svaka promena
znači izbledivanje slike, pa prepisivanje natpisa, naslova, opisa i tri čipa.

| Prelet preko liste | Promena panela, pre izmene |
|---|---|
| ~100 ms | 4 |
| ~200 ms | 4–5 |
| ~500 ms | 5 |

Mapa tela ima istu zaštitu od 2. runde — `transition-delay: 120ms`, uz komentar
*„pali se tek kad se zadržiš"*. Panel je nije imao, jer promenu vodi skripta,
a ne CSS, pa se CSS zadrška na njega ne odnosi.

### Rešenje: zadrška namere, u JS-u

`pointerenter` više ne pali panel nego zakazuje paljenje za **180 ms**;
`pointerleave` ga otkazuje. Prelet tako ne stigne ništa da upali.

180 ms je usklađeno sa izbledivanjem slike (`is-changing`, takođe 180 ms) —
kraće i dalje propušta prelet, duže se oseti kao kašnjenje.

**Klik i tastatura (`focus`) pale odmah** i usput otkazuju odbrojavanje — tu nema
nedoumice šta je posetilac hteo.

### Izmereno posle izmene

| Prelet preko svih pet stavki | Promena panela |
|---|---|
| 102 ms | **0** |
| 212 ms | **0** |
| 513 ms | **0** |

| Zadržavanje na stavci | |
|---|---|
| do 350 ms | ne pali |
| 600 ms | **pali, jednom** |

Panel se vidno promeni oko **360 ms** po zadržavanju: 180 ms zadrške + 180 ms
izbledivanja.

### Red pod mišem i dalje odgovara odmah

Ovo je bila jedina prava opasnost od zadrške — da red deluje mrtvo dok se čeka.
Ne deluje, jer odziv reda ide kroz CSS (`.service-item:hover`), nezavisno od skripte:

| 60 ms po prelazu | |
|---|---|
| Boja teksta | `rgba(255,255,255,0.48)` → **`0.63`** |
| Strelica | `0` → **`0.29`** |
| `is-active` (skripta) | još `false` |

Znači: **odmah lokalni odziv, sa zadrškom skupa promena.**

**`app.js` podignut na `?v=14.1` u `index.html`** (jedina stranica koja ga učitava).
`usluga.css` nije diran, ostaje `?v=14.8`.

## Panel Usluge — natpis odlepljen od ivice, i nalaz o dve fotografije

Prijava: „ove dve slike ne zauzimaju kompletnu širinu pa su slova zalepljena za
početak". Merenjem su ispala **dva odvojena uzroka**, a ne jedan.

### 1. Razmak natpisa — popravljeno

Razmak natpisa od ivice karte, u odnosu na veličinu slova naslova:

| Širina | Karta | Razmak | Font | Odnos |
|---|---|---|---|---|
| 1440 | 669×752 | 43 px | 72 px | 0,60 |
| 1000 | 920×608 | 30 px | 50 px | 0,60 |
| **600** | 560×496 | **22 px** | **51 px** | **0,43** |

Razmak i naslov su rasli po različitim skalama: razmak staje na `1.4rem`, a naslov
ima pod na `2.6rem`. Ispod 832 px naslov stoji na 41–51 px, a razmak na 22 px — pa
slovo visoko 51 px počinje 22 px od ivice i optički je zalepljeno.

Razmak sada ide po istoj skali kao naslov, `clamp(2.1rem, 4.2vw, 4.4rem)`:

| Širina | Odnos pre | Odnos posle |
|---|---|---|
| 1440 | 0,60 | **0,83** |
| 1000 | 0,60 | **0,84** |
| 600 | **0,43** | **0,67** |
| 390 | 0,54 | **0,83** |

Dalje se ne ide jer bi na karti od 440 px pojelo tekst.

### 2. Fotografije — nalaz, nije popravljeno

Provereno da li slika letterboxuje: **ne letterboxuje.** Isečak izvora po pravilu
`cover` poređen je piksel po piksel sa onim što se renderuje — razlika 15–21, i to
je samo zatamnjenje za natpis.

Pravi uzrok:

| | |
|---|---|
| Izvor `clinical-work.webp` | 1100×1400, odnos **0,79** — uspravna |
| Karta na 1000 px | 920×608, odnos **1,51** — položena |
| `cover` | prikazuje **punu širinu**, seče **48% visine** |

Ostaje vodoravni pojas kroz sredinu uspravne fotografije. Izmerena svetlina tog
pojasa: **levih 8% = 243, desnih 8% = 253, sredina = 208.** Ivice su najsvetlije i
najpraznije — beo zid sa obe strane, a terapeut i pacijent u sredini.

Zato deluje da slika „ne zauzima celu širinu": zauzima je, ali joj je **sadržaj u
sredini**, a krajevi su prazan zid. Isto važi za `guided-training.webp`
(kineziterapija), takođe 1100×1400.

**Ovo se ne rešava u CSS-u.** Traži položen isečak iz originala — Triton serija
`L-66`–`L-72` za fizikalnu, NeuFit serija `L-73`–`L-80` za kineziterapiju — i
odvojen fajl za panel, pošto ista slika u zaglavlju stranice usluge treba da
ostane uspravna.

**Oznaka verzije podignuta na `?v=14.9` u svih 7 HTML fajlova.**

### Dopuna — položeni isečci za panel

Uzrok iz prethodnog odeljka rešen je na izvoru, ne u CSS-u: dve nove fotografije
isečene iz originala, u odnosu **4:3**, tako da subjekt ide od ivice do ivice.

**Zašto baš 4:3.** Karta panela menja oblik sa širinom ekrana:

| Ekran | Karta | Odnos |
|---|---|---|
| 1440 px | 669×752 | **0,89 — uspravna** |
| 1000 px | 920×608 | **1,51 — položena** |

Jedna slika mora da posluži oba. Uspravni izvor (0,79) na položenoj karti ostavlja
prazne krajeve; položeni izvor na uspravnoj karti gubi bokove. 4:3 je sredina —
seče 33% širine na uspravnoj karti i 12% visine na položenoj, pa subjekt preživi oba.

**Izbor kadra, mereno u svojoj seriji:**

| Panel | Serija | Uzeto | Nagib | Oštrina |
|---|---|---|---|---|
| Fizikalna terapija | Triton, `L-66`–`L-72` | **`L-71`, centar na 56% visine** | **0,00°** | 88,2 |
| Kineziterapija | NeuFit, `L-73`–`L-80` | **`L-78`, centar na 42% visine** | +1,31° | **181,3** |

Vertikalni položaj isečka nije pogođen nego izabran sa lista od dvanaest kandidata
(tri položaja × četiri kadra): na 28% i 42% Triton kadar pokazuje prozor i zid —
tačno problem koji se rešava; tek na 56% pacijent leži preko celog kadra.

**Novi fajlovi:**

| Fajl | Izvor | Veličina |
|---|---|---|
| `v8/assets/images/panel-fizikalna.webp` | `L-71` | 1600×1200, 64 KB |
| `v8/assets/images/panel-kineziterapija.webp` | `L-78` | 1600×1200, 89 KB |

**Zaglavlja stranica usluga nisu dirana.** `clinical-work.webp` i
`guided-training.webp` tamo ostaju uspravne — to je i razlog za odvojene fajlove.
Model se time menja: **usluga sme da ima dve slike, jednu za panel i jednu za
zaglavlje.** Za sada je tako kod dve od pet.

### Zatamnjenje pojačano, jer su nove slike svetlije

Nove fotografije su svetlije, pa je lime nadnaslov pao na kontrast **4,6** — taman
iznad praga 4,5. Izmereno na sve tri varijante zatamnjenja:

| Zatamnjenje | dijagn. | fizikal. | kinezi | manual. | postop | najslabiji |
|---|---|---|---|---|---|---|
| 0,86 / 48% (bilo) | 10,2 | 4,9 | **4,6** | 9,7 | 13,1 | 4,6 |
| **0,90 / 58% (uzeto)** | 10,4 | 5,4 | **5,2** | 9,9 | 12,9 | **5,2** |
| 0,92 / 64% | 10,6 | 6,2 | 5,8 | 10,2 | 12,7 | 5,8 |

Uzeta je srednja: podiže pod sa 4,6 na 5,2, a ne jede fotografiju kao najjača.
Naslov u belom je svuda 11,2–15,4 — nikad nije bio sporan.

**Oznaka verzije podignuta na `?v=15.0` u svih 7 HTML fajlova.**

## Mobilni hero video — napravljen iz originala, ne isečen iz desktop verzije

Prijava: na telefonu su kadrovi u makro planu, gotovo se ništa ne vidi.

### Izmereno

`hero-loop-v6-mobile.mp4` **nije napravljen iz izvornog materijala** nego isečen iz
gotovog 16:9 renda. Poređenjem kadrova u istim sekundama, traženjem isečka koji se
najbolje poklapa:

| Kadar | Oštrina desktop | Oštrina mobilni | Pad |
|---|---|---|---|
| 1s | 349 | 276 | −21% |
| **5s** | 123 | **48** | **−61%** |
| 9s | 78 | 70 | −10% |
| 13s | 261 | 173 | −34% |

**Zadržavao je 506 od 1600 piksela širine — 32% kadra — pa se taj isečak dizao na
900 px, uvećanje 1,78 puta.** Položaj isečka se menjao od kadra do kadra
(x=550…1090), pa nije bio ni dosledan. Otud makro plan i mekoća: ono što je na
desktopu već krupan plan, na telefonu postane koža bez konteksta.

### Napravljen ponovo, po receptu iz skilla `miran-hero-video`

Iz **uspravnih originala od 4000 px**, Ken Burns, **bez ijednog uvećanja**:

| Kadar | Izvor | Uloga | Trajanje | Pokret |
|---|---|---|---|---|
| 1 | `L-9` 3931×4914 — terapijska soba | mirovanje | 4 s | spor prilaz 1,00 → 1,09 |
| 2 | `L-62` 3994×4992 — Ergon na ramenu | dodir | 5 s | prilaz + klizanje desno |
| 3 | `L-71` 4000×6000 — Triton pojas | vođen pokret | 5 s | klizanje levo |
| 4 | `L-17` 4000×5000 — čekaonica | sloboda | 4 s | povlačenje 1,10 → 1,00 |

Isti raspored i isto trajanje kao desktop verzija — **16,2 s**, prelivi 0,6 s.

**Sub-pikselski render, ne `zoompan`.** Skill upozorava da `zoompan` zaokružuje
isečak na cele piksele pa slika drhti. Provereno merenjem promena smera pokreta:
**0, 0, 0 i 1 promena** na 100–125 frejmova, uz prag drhtanja od ~50.

**Svetlina izjednačena gamom**, ne brightness-om:

| | kadar 1 | kadar 2 | kadar 3 | kadar 4 | raspon |
|---|---|---|---|---|---|
| Pre | 145,6 | 130,2 | 159,1 | 140,9 | **28,9** |
| Posle | 143,9 | 143,6 | 148,0 | 148,8 | **5,2** |

Nije sve svedeno na isti broj: uvod ostaje najtiši, završni kadar najsvetliji, pa
petlja ne bode oko.

### Novi fajlovi

| Fajl | |
|---|---|
| `v8/assets/media/hero-loop-v7-mobile.mp4` | 900×1600, 16,2 s, **1,74 MB** (staro 2,03 MB) |
| `v8/assets/images/hero-poster-v7-mobile.jpg` | 113 KB, prvi kadar |

`hero-loop-v6-mobile.mp4` ostaje u repou kao povratna tačka, kao i starije verzije.
Desktop verzija **nije dirana**.

### Usput ispravljeno: `preload` je na telefonu učitavao pogrešan poster

U `<head>` je stajao samo `preload` desktop postera (1600×900), pa je telefon
povlačio sliku koju nikad ne prikaže. Sada su dva, sa `media` uslovom na 720 px.

### Provereno

Na 390 i 360 px: ispravan izvor i poster, `object-fit: cover`, **vidi se 82% širine
i 100% visine kadra** (isečak 18%, protiv 68% koliko je gubila stara verzija),
bez horizontalnog pomeranja i bez JS grešaka.

### Ispravka — iste slike i u zaglavljima stranica usluga

Pretpostavka iz prethodnog odeljka — da zaglavlje stranice usluge traži uspravnu
sliku — **bila je pogrešna, i merenje to pokazuje.**

`.service-hero-photo` nema zadat odnos: okvir **prati odnos same slike**. Sa
uspravnom fotografijom 0,79 okvir postaje 0,79 i prikazuje **ceo kadar**, zajedno sa
praznim zidom gore i dole. Na 1080 px i niže to je blok od 994×1265 px.

Zato su `panel-fizikalna.webp` i `panel-kineziterapija.webp` sada i u zaglavljima:

| Širina | Okvir pre | Okvir sada | Vidi se |
|---|---|---|---|
| 1440 | 510×649 (0,79) | 510×461 (1,11) | 83% × 100% |
| 1080 | 994×1265 (0,79) | 994×745 (1,33) | 100% × 100% |
| 390 | 350×445 (0,79) | 350×320 (1,09) | 82% × 100% |

**Time otpada „dve slike po usluzi".** Panel i zaglavlje dele istu sliku, kao i kod
ostale tri usluge — model ostaje jedna slika po usluzi. Imena fajlova (`panel-`)
su sada šira od svoje uloge, ali se ne menjaju jer su već u istoriji repoa.

`clinical-work.webp` više nije u upotrebi u `v14/` (ostaje zbog v12 i v13).
`guided-training.webp` i dalje stoji uz korake na postoperativnoj.

Provereno: **325 referenci u 7 HTML fajlova, nijedna ne visi.**

## Stavke panela Usluge — smiren odziv

Zadrška od 180 ms u `app.js` sprečila je da se panel pali u preletu, ali je sama
stavka i dalje odgovarala **sa četiri pokreta istovremeno**. Izmereno na jednom prelazu:

| Šta se dešavalo | Bilo |
|---|---|
| Tekst | **skoči 16 px udesno** (`padding` 0 → 1rem levo i desno, uz reflow) |
| Boja | `rgba(255,255,255,0.48)` → **puna bela**, jednim skokom |
| Strelica | **doleti dijagonalno 9 px** (`translate(-0.4rem, 0.4rem)` → 0) uz bleđenje |
| Pozadina | preliv se upali |

### Šta je promenjeno

| | Sada |
|---|---|
| Pomeranje teksta | **ukinuto** — izabrani red se već razlikuje po pozadini, punoj beloj i otvorenom opisu |
| Boja | **dva stepena**: `0.74` na prelaz, puna bela tek kad je stavka izabrana |
| Strelica | **samo bledi**, bez leta; `0.5` na prelaz, `1` kad je izabrana |
| Prelazi | 320–380 ms umesto 200–300 ms |

### Izmereno posle

Položaj teksta i strelice praćen kroz ceo prelaz, na 60, 150, 300, 600 i 900 ms:

| | Pomeranje |
|---|---|
| Tekst | **0 px** na svakom očitavanju (bilo 16) |
| Strelica | **0 px** vodoravno i uspravno (bilo 9 dijagonalno) |

Menja se **samo prozirnost** — boje teksta, strelice i pozadine. Bez horizontalnog
pomeranja stranice i bez JS grešaka.

Pisano kao override u `usluga.css`, sekcija 24; `v12/styles.css` nije diran.

**Oznaka verzije podignuta na `?v=15.1` u svih 7 HTML fajlova.**

---

# Runda 01.09.2026 — prvi klijentov Loom

Izvor: Loom „Pregled i dorade web stranice ordinacije" (10:54), snimio nalog
Lokomoto centar, uz devet komentara Nikole Tripkovića. Pun nalaz i redosled rada
su u projektnom dokumentu `claude/15-loom-klijent-1.md`. Ovde stoji samo šta je
zaista promenjeno u kodu.

**Nijedan stil ni skripta nisu dirani, pa oznake verzije ostaju kakve jesu**
(`usluga.css ?v=15.1`, `app.js ?v=14.1`, `stranica.js ?v=14.0`, `v12/styles.css ?v=13.0`).
Sve izmene su u HTML sadržaju.

## Fajlovi koji su se promenili

`index.html`, `usluge/index.html` i svih pet stranica usluga. **Nema novih fajlova.**

## 1. Usluge iznad mape tela

Blok `.service-browser` premešten je iznad `.complaints`, unutar iste sekcije
`#usluge`. Klijentov argument (1:35): klik na uslugu treba da otvori uslugu i
tegobe koje ona pokriva, a spisak tegoba je posledica izbora usluge, ne ulaz u njega.

Usput se pokazalo da uvod sekcije („Ne birate vi terapiju. Biramo je zajedno,
posle pregleda.") oduvek uvodi usluge, a ne tegobe — mapa je stajala između
naslova i onoga na šta se naslov odnosi.

Izmereni razmaci posle premeštanja, bez ijedne izmene CSS-a:

| | 1440 px | 390 px |
|---|---|---|
| naslov → panel usluga | 111 px | 61 px |
| panel → mapa tela | 85 px | 47 px |
| mapa tela → sekcija Centar | 150 px | 96 px |

`.complaints` nosi `border-top`, pa linija sada razdvaja panel od mape umesto
naslov od mape. To je bolje nego pre: linija pada tamo gde se menja tema.

## 2. RFZO — odgovoreno, ne obrisano

Klijent na 5:16: nema naplate preko RFZO, sve je privatno, uz refundaciju od
privatnog osiguranja ili plaćanje direktno.

**Pitanje u FAQ-u je zadržano, dobio je odgovor.** Posetilac to pitanje ima u
glavi bez obzira na to da li stoji na sajtu; brisanjem pitanja ostaje samo
nedoumica. Izmenjeno na 6 mesta:

- `index.html` — napomena uz cenovnik (bio placeholder „nema odgovora") i FAQ
  („Radite li preko RFZO?", bio `[Popuniti: da / ne / delimično.]`)
- `dijagnostika`, `fizikalna-terapija`, `manualna-terapija` — FAQ odgovor, bio
  `mark.ph` sa značkom `ZA POTVRDU`
- `fizikalna-terapija` — iz napomene uz cene skinuta rečenica „Nedostaje odgovor
  na RFZO i način plaćanja"

**Četiri placeholdera manje.**

## 3. Crte izbačene, 168 pojava pregledano

Klijent (3:38): „bilo bi dobro bez ovih, da se zna da nije AI"; potvrđeno da
misli na crtu.

| | Pre | Posle |
|---|---|---|
| Em-crta `—` u HTML fajlovima | **136** | **0** |
| En-crta `–` | 32 | 26, sve u opsezima |

Preostale en-crte su `Pon–Pet`, `08:00–20:00`, `01–03`, `45–60 min` i maska
telefona — to su opsezi, ne interpunkcija, i ostaju.

**Ovo nije bila zamena znaka znakom.** Crta je na desetak mesta nosila obrt koji
zarez ne nosi, pa je rečenica prepisana:

| Bilo | Sada |
|---|---|
| `Broj ponavljanja nije poenta — tačnost jeste.` | `Broj ponavljanja nije poenta. Tačnost jeste.` |
| `Ovo usmerava sve dalje — bez toga se testira nasumično.` | `Ovo usmerava sve dalje. Bez toga se testira nasumično.` |
| `Mišići — rupture. Zglobovi — distorzije. Tetive — povrede.` | dvotačka umesto crte |
| `Faza 1 — zarastanje tkiva` | `Faza 1: zarastanje tkiva` |
| `REHAB paket — 10 terapija` | `REHAB paket od 10 terapija` (11 stavki cenovnika) |
| `<title>Dijagnostika — Lokomoto centar` | `<title>Dijagnostika \| Lokomoto centar` |
| `aria-label="Lokomoto centar — početna"` | `aria-label="Lokomoto centar, početna"` |

Dirani su i `title`, `alt` i `aria-label`, jer se `title` vidi u kartici brauzera,
a `alt` čita čitač ekrana.

## 4. Broj dolazaka bez brojeva

Klijent na 5:33: „ajde ovde da ne preciziramo, tu napiši nekoliko."

- `4–6 dolazaka` → `nekoliko dolazaka` (naslovna, dva mesta)
- `3–4 dolaska` → `nekoliko dolazaka` (fizikalna terapija, dva mesta)

Oba mesta na fizikalnoj su bila `mark.ph` sa značkom `ZA POTVRDU`, jer je broj
čekao potvrdu struke. **Neprecizna formulacija ne traži potvrdu koju precizna
traži, pa su značke skinute.** Dva placeholdera manje.

## 5. Adresa izlazi, godina ostaje

Klijent na 6:46: adresa je menjana, ne može da nosi kontinuitet.

| | Bilo | Sada |
|---|---|---|
| Naslov kartice | `Ista adresa od 2016.` | `Radimo od 2016.` |
| Tekst | `Tabanovačka 27b na Autokomandi. Ovde smo od osnivanja.` | `Danas smo u Tabanovačkoj 27b, na Autokomandi. Isti pristup od osnivanja.` |

Susedna kartica `Iz kabineta u salu.` postala je **`Od pregleda do sale.`**
Klijent je naglas tražio zamenu za „kabinet" i ponudio „iz terapijskog bloka u
salu za vežbanje", što je Nikola u komentaru na 7:16 oborio. „Od pregleda do
sale" pokriva ceo put pacijenta i izbegava obe reči.

## 6. Oprema — opisi dobili izvor

Klijent na 8:37: puni tekstovi za INDIBA, NeuFit i Triton stoje na `lokomoto.rs`.
Preuzeti su sa `/indiba-nov-nacin-rehabilitacije/`, `/neufit-neubie/` i
`/triton-dts/`, pa svedeni na po dve rečenice.

**Brojevi sa tih stranica namerno nisu preneti.** Stari sajt tvrdi „uspešnost
75–86%" za Triton i „90% pacijenata primećuje napredak u prvoj sesiji" za NeuFit,
bez izvora. Na sajtu zdravstvene ustanove to je tvrdnja, ne opis, i ne prenosi se
dok se ne zna odakle je.

Značka `TEKST ZA POTVRDU` **ostaje**, ali joj se promenio razlog: ranije nije bilo
izvora, sada izvor postoji a nedostaje pogled struke.

Prva verzija opisa bila je duža i **treća kolona se prelila preko svetlijeg dela
fotografije u pozadini**. Izmereno na najsvetlijem delu podloge ispod teksta
(90. percentil svetline): kontrast belog teksta 7,3:1, ali tekst je
`rgba(255,255,255,0.72)`, pa je stvarni kontrast **4,7:1**. Prolazi AA, ali sa
malo mesta, pa su sva tri opisa skraćena na po četiri reda.

## Provereno pre isporuke

Svih 7 stranica renderovano Chromiumom na **1440 i 390 px**, sa skrolom kroz celu
stranicu da se dignu lazy slike:

| Provera | Rezultat |
|---|---|
| HTTP status | 200 na svih 7 |
| `scrollWidth == clientWidth` | da, na obe širine |
| Slomljene slike | 0 |
| Neuspeli mrežni zahtevi | 0 |
| JS greške | 0 |
| Em-crta u vidljivom tekstu | 0 |

## Šta i dalje čeka klijenta

- **Boje** — klijent (0:16, 0:37) i Nikola (komentar 4:32) nezavisno kažu da
  paleta nije njihova. To se kosi sa merenjem iz logoa opisanim na vrhu ovog
  fajla. Ne dirati dok se ne zna da li su gledali v13, da li je logo pogrešan,
  ili im se boje prosto ne dopadaju.
- **Broj tretmana** — „4.000 tretmana godišnje" u traci klijent je proglasio
  netačnim. Njegov predlog je u transkriptu nečitljiv, pa broj **stoji nepromenjen
  i dalje nosi značku** dok ne stigne tačna vrednost.
- **Kviz** — traži se ulaz sa naslovne (10:09, Nikola potvrđuje na 10:37). Ne
  postoji nigde u projektu; čeka se adresa.
- **Tekstovi po tegobi** — klijent šalje pet tekstova za stavke mape tela.
- **Kadar sa narandžastom mašinom** — menja se Indibom (1:11), tek kad se utvrdi
  o kom kadru je reč.
- **Cenovnik zbijeniji** — klijentu je njegov raspored bio pregledniji (9:47).
  Izmereno: sekcija je **1985 px na 1440 px** i 3942 px na 390 px, 25 stavki u
  dve kolone, `padding` reda 16/16 px. Spuštanje na 10/10 skratilo bi je za
  oko 15%. Nije dirano — jedina primedba iz snimka koja je ukus, a ne podatak.

## Zelena, ispravljena po njihovom sajtu (01.09.2026, ista runda)

Mladen je poslao snimak sekcije Usluge sa `lokomoto.rs`. Boje su izmerene iz same
slike, brojanjem piksela, ne procenom:

| Površina | Udeo slike | Boja | Ton | Zasićenost | Svetlina |
|---|---|---|---|---|---|
| plavo polje | 43,4% | `#008cbe` | 195,8° | 100% | 75% |
| zeleno polje | 43,4% | `#80c347` | 92,4° | 64% | 76% |

Poređenje sa v14 paletom:

| Poređenje | Razlika u tonu |
|---|---|
| njihova plava prema `--teal-deep` `#057eb6` | **3,2°** |
| njihova plava prema `--teal` `#2c9ecb` | **1,2°** |
| njihova zelena prema `--lime` `#c9f25f` | **15,7°**, uz 19 poena više svetline |
| njihova zelena prema zelenoj iz logoa `#95d15e` | **1,1°** |

**Plava je već bila njihova.** Razlika od 1 do 3 stepena se ne vidi. Klijentova
primedba „ovo nisu naše boje" nije mogla da bude o plavoj.

**Promašena je bila zelena.** Naš lajm je na 77°, dakle žućkast, i za 19 poena
svetliji. Njihova zelena je na 92°, trava-zelena. Zelena sa njihovog sajta i
zelena iz njihovog logoa slažu se na 1,1°, pa su njihove dve površine međusobno
usklađene, a naš lajm nije bio ni sa jednom.

> **Ovo obara zaključak sa vrha ovog fajla.** Tamo piše da je lajm „ista porodica
> kao zelena iz logoa, samo svetlija". To je bila procena. Izmereno: 15,7° razlike
> u tonu i 19 poena u svetlini nije nijansa, nego druga boja. Poređeno je tada sa
> logom preko udela piksela po tonu, ali nikad direktno lajm prema zelenoj iz
> logoa — a to je jedino poređenje koje je bilo važno.

### Šta je promenjeno

`usluga.css`, **nova sekcija 25**: `--lime` postaje `#84c350`. `--teal` i
`--teal-deep` se ne diraju.

Vrednost je klijentova, dobijena posle merenja. Izmereno sa snimka sajta bilo je
`#80c347`; klijent je dao `#84c350`, ton 92,9°, zasićenost 59%. Razlika je
**0,5° u tonu i 5 poena u zasićenosti** — merenje je pogodilo tačku, klijentova
vrednost je zvanična, pa se koristi ona.

**Pravilo 6 je opet uhvatilo skriveni deo posla.** `grep` po upisanoj vrednosti
`rgba(201, 242, 95, …)` našao je **10 mesta** u zamrznutom `v12/styles.css` koja
ne prolaze kroz promenljivu: obrub linka u panelu, gradijent reda usluge,
pozadina kontakt sekcije, dve tačke sa senkom, pozadina tegobe na prelaz mišem,
hover u futeru, kružić na mapi, i `@keyframes service-flash` (keyframes se ne
nasleđuje, pa je redefinisan ceo). Sva su prepisana u sekciji 25, sa istim alfa
vrednostima.

**Usput nađen još jedan zaostatak iz v13.** Pozadina sekcije Kontakt nosila je
`rgba(7, 139, 125, 0.06)` — stari tirkiz `#078b7d`, koji je prethodna runda
promašila jer je tražila samo `rgba(19, 201, 179)`. Sada je plava.

### Cena u kontrastu

| Podloga | Lajm `#c9f25f` | Zelena `#84c350` |
|---|---|---|
| `--ink` `#26322f` (traka sa brojevima) | 10,35:1 | **6,27:1** |
| tamna sekcija `#253130` | 10,48:1 | **6,35:1** |
| `--paper` `#f1f0e9` | 1,12:1 | 1,86:1 |

Pad je znatan, ali 6,2:1 prolazi AA i za sitan tekst (traži 4,5) i AAA za veliki.
Na svetloj podlozi se zelena ne koristi za tekst, tamo su obe vrednosti
neupotrebljive i to se nije promenilo.

### Provereno merenjem na renderu

Tri stranice snimljene cele, na 1440 px, pa prebrojani pikseli po tonu:

| | Pre | Posle |
|---|---|---|
| prosečan ton zelenih piksela | 77,5° | **93,0°** |
| prosečna svetlina | 87% | **71%** |
| udeo zelene na stranici | 1,026% | 1,015% |
| udeo tirkiza | 0,032% | 0,032% |

Ton je sleteo na njihovih 92,4°. Tirkiza na ekranu praktično nema ni pre ni posle:
0,032% je antialiasing na ivici plave i zelene, gde mešavina dva piksela pada u
tirkizni opseg. **Zaostali tirkiz iz v13 je zaista rešen** — hex vrednosti koje
grep još nalazi u kodu stoje u komentarima ili u pravilima koja ništa ne boje.

Provera posle izmene: svih 7 stranica, 1440 i 390 px, HTTP 200,
`scrollWidth == clientWidth`, nula slomljenih slika, nula JS grešaka.

**Oznaka verzije `usluga.css` podignuta na `?v=16.0` u svih 7 HTML fajlova.**

### Šta oko boja i dalje stoji otvoreno

Ovo je urađeno prema **snimku sajta**, ne prema brend-priručniku. Ako Lokomoto ima
zvanične vrednosti, one imaju prednost nad ovim merenjem. Takođe: klijent je rekao
„boje", u množini. Ako mu i posle ovoga nešto ne odgovara, sledeći na redu nije
ton nego **koliko se boje koristi** — njihov sajt je pola plav pola zelen u
punim poljima, a v14 boju koristi kao naglasak na tamnoj podlozi.

## Cenovnik zbijen (01.09.2026, ista runda)

Klijent (Loom 9:47): „ja sam ga ovako 60 puta 60, ti si ga verovatno sve raširio…
možda mi je malo preglednije ovako."

Stegnuto je troje: razmak u redu (16 px → 10 px gore i dole), razmak iznad spiska
(1,1rem → 0,8rem) i razmak između grupa (2,2–3,2rem → 1,6–2,2rem). **Veličine
slova nisu dirane** — primedba je o količini praznog, ne o veličini teksta.

Izmereno na istoj stranici, sa i bez izmene:

| | 1440 px pre | 1440 px posle | 390 px pre | 390 px posle |
|---|---|---|---|---|
| visina sekcije | 1985 px | **1772 px** | 3978 px | **3528 px** |
| stavki vidljivo bez skrola | 17 od 25 | **22 od 25** | 6 | **7** |
| visina reda | 60 / 81 / 83 px | **48 / 67 / 68 px** | 88–133 px | **76–117 px** |
| cela naslovna | 12809 px | **12596 px** | 18543 px | **18094 px** |

Na 1440 se sada vidi **22 od 25 stavki odjednom**, umesto 17. To je ono što je
klijent tražio: cenovnik koji se obuhvati jednim pogledom.

Redovi cenovnika nisu klikabilni (`dt`/`dd`), pa pravilo o meti od 44 px za prst
ovde ne važi. Da jesu, ne bi se smelo ići ispod toga, i to stoji u komentaru
sekcije 26 da se ne izgubi.

`usluga.css`, **nova sekcija 26**. Oznaka podignuta na **`?v=16.1`** u svih 7.

## Aparati identifikovani sa kontakt-lista (01.09.2026)

Klijent na 1:11 traži da se negde stavi „ona narandžasta mašina". Pretragom
`_pregled/aparati.jpg` i uvećanjem natpisa na originalima, **svi do sada
neidentifikovani aparati su prepoznati**:

| Kadar | Šta je | Kako je utvrđeno |
|---|---|---|
| `L-7` | **INDIBA** | ime na ekranu i na kućištu; narandžasto kućište, ovo je „narandžasta mašina" |
| `L-5` | **Triton DTS**, Chattanooga Group | natpis `TRITON` na kućištu, merilo sile trakcije, logo proizvođača |
| `L-6` | **Triton DTS**, ekran izbliza | isti ekran kao `L-5`: `Traction Meter`, `Rope Release` |
| `L-10`, `L-11`, `L-16` | **Medestec MP 50**, tecar | natpis `Medestec` i `MP 50`, poruka `Please connect plate return`, uz `medestec GEL NEUTRO` |
| `L-62`, `L-64` | **Ergon (IASTM)**, ne INDIBA | metalni alat za meko tkivo, ne RF sonda |

Time stavka „neidentifikovan aparat `L-5` i `MP 50` sa `L-10`/`L-11`/`L-16`" iz
`3-podaci-za-popuniti.md` **više nije otvorena**.

**Medestec MP 50 je tecar terapija, ista kategorija kao INDIBA, a ne
magnetoterapija.** To je važno jer je bilo primamljivo popuniti praznu karticu
magnetoterapije baš tim kadrom. Pogrešno označen aparat je tvrdnja, ne dekoracija.

Provera metoda na stranici fizikalne terapije: `metoda-indiba` = `L-7`,
`metoda-triton` = `L-69`, `metoda-neufit` = `L-19`, `metoda-elektro` = elektrode.
**Sva četiri su tačno označena.**

Ostaje potvrđeno da **magnetoterapija, krioterapija i limfna drenaža nemaju kadar**
ni na jednom od 104 snimka. Sada je to pretraženo do kraja, jer više nema
nepoznatih aparata iza kojih bi se mogle kriti.

### Isečak Indibe je spreman, mesto nije potvrđeno

Napravljen je `panel-indiba.webp`, 1600×1200 (4:3, kao ostale panel slike), isečak
iz `L-7` sa 5000×4000, odsečeno 250 px odozgo jer je gornji deo polica.

**Nije ugrađen.** Iz transkripta se ne vidi na koju sliku klijent pokazuje: na
1:11 gleda naslovnu, a rečenica je u transkriptu isprekidana. Slike koje je u
istom dahu pohvalio („ovo je super, ovo je super") nose isti rizik da budu
zamenjene greškom. Čeka jednu rečenicu potvrde.

## Zvanični logo ugrađen (01.09.2026, ista runda)

Klijent je dostavio `LOGO LOKOMOTO CENTAR.pdf` — vektor iz CorelDRAW X8. Time se
zatvara **stavka 3 iz `3-podaci-za-popuniti.md`** („tekstualni logo, Nikola ga
dostavlja").

### Boje iz zvaničnog logoa

Izmereno iz rendera na 300 dpi, brojanjem piksela:

| Element | Boja | Ton | Zasićenost | Svetlina |
|---|---|---|---|---|
| zelena | `#7fc347` | 92,9° | 64% | 76% |
| plava | `#0095c1` | 193,7° | 100% | 76% |
| tamnija plava | `#0076ae` | 199,3° | 100% | 68% |

**Ovo potvrđuje paletu iz zvaničnog izvora.** Klijentova zelena `#84c350` iz
sekcije 25 je na 92,9° — ista kao u logou. Naša `--teal-deep` `#057eb6` je na
199,0°, logo ima 199,3°. Paleta više ne počiva na merenju sa snimka sajta.

Jedina preostala razlika je zasićenost: logo plava je 100% zasićena, naša
`--teal` `#2c9ecb` je 78%. Nije dirano — promena bi pomerila kontraste kroz ceo
sajt, a razlika u tonu je ispod jednog stepena.

### Logo ide nedirnut

Prvo je bila napravljena horizontalna varijanta (znak levo, ime desno, bez
podnaslova), jer merenje pokazuje da original u traci daje sitan tekst. **Mladen
je 01.09.2026 odlučio da logo ide takav kakav jeste.** Varijanta je povučena.

Merenja ostaju zapisana jer objašnjavaju kako logo izgleda u traci, da se kasnije
ne traži greška u kodu. Pri visini 4,6rem = 73,6 px:

| | Visina slova |
|---|---|
| „LOKOMOTO CENTAR" | **5,0 px** |
| „FIZIKALNA TERAPIJA I REHABILITACIJA" | **1,8 px** |

Sivi podnaslov (`#58595b`) na podlozi zaglavlja `#26322f` daje kontrast
**1,96:1**. To je posledica uspravnog lockupa u vodoravnoj traci, ne greška.
Ako se ikada bude tražilo da se ime bolje vidi, izbor je između veće trake i
horizontalne varijante — ne između boja.

**Dimenzije se ne override-uju.** Odnos originala je 1,02, a v12 pravilo (visina
4,6rem, širina najviše 6rem) pravljeno je za 1,33; uspravniji logo staje u isti
okvir bez ijedne izmene. Izmereno na renderu: **75 × 74 px** na 1440,
**56 × 54 px** na 390.

### Fajlovi

**Tri nova fajla u `v8/assets/images/`** — u GitHub Desktopu ih treba čekirati:

| Fajl | Šta je |
|---|---|
| `logo-lokomoto.png` | **koristi ga sajt** — pun uspravni logo u boji, 1200 px |
| `logo-lokomoto.svg` | vektorski izvor iz PDF-a |
| `logo-lokomoto-h-svetli.png` | povučena horizontalna varijanta, stoji neiskorišćena |

`v11/logo-lockup.png` **nije obrisan** — koriste ga starije verzije.

Zamena `src` na **svih 14 mesta** (zaglavlje i futer u svakom od 7 fajlova).

### Greška u putanjama, i zašto je prva provera nije uhvatila

Prva zamena `src` upisala je u šest fajlova **jedan `../` viška**:
`../../../../v8/assets/images/…` umesto `../../../v8/…`. Uzrok je zamena po
podnizu: traženo je `../../v11/logo-lockup.png`, a u fajlu je stajalo
`../../../v11/logo-lockup.png`, pa je pogođen sufiks i vodeće `../` je ostalo.

**Provera je to propustila jer je lokalni server servirao iz korena.** Tamo se
`../` zaustavlja na korenu, pa `../../../../v8/` i `../../../v8/` daju isti
rezultat. Na Pages sajt živi u `/lokomoto-koncept/`, gde bi ista putanja izašla
iz projekta i sve slike bi pukle.

**Otud novo pravilo provere: sajt se testira iz poddirektorijuma**, kako i stoji
na Pages, a ne iz korena servera. Provera je ponovljena tako i prolazi:

| Provera | Rezultat |
|---|---|
| HTTP status, svih 7 stranica | 200 |
| zahtevi sa greškom (404) | 0 |
| slomljene slike | 0 |
| `scrollWidth == clientWidth` na 1440 i 390 | da |
| JS greške | 0 |
| logo učitan i izmeren | da, na svih 7 |

Oznaka `usluga.css` podignuta na **`?v=16.3`** u svih 7 HTML fajlova.

**Sledeći korak ako se traži:** `v11/favicon.svg` je i dalje stari znak. Sada
postoji vektor iz kog se može izvući znak za favicon.

## Cenovnik po klijentovom sistemu (01.09.2026, ista runda)

Sat vremena posle zbijanja razmaka, Mladen je poslao `lokomoto.rs/cenovnik-2/` i
rekao: to su te cene, napravi po ovom sistemu. **Tek tada je postalo jasno šta je
klijent mislio sa „60 puta 60" (Loom 9:47).**

To nije raspored nego **dve kolone cena**: „60 min" i „60+ min". Jedan red usluge
nosi dve cene.

Naša verzija je istu stvar razvlačila: „Terapijski dan, 60 min" i „Terapijski dan
+ vežbe, 60+ min" bila su **dva odvojena reda**. Otud 25 redova tamo gde klijent
ima 18, i otud njegovo „ti si ga verovatno sve raširio".

**Zbijanje razmaka iz sekcije 26 lečilo je simptom.** Problem nije bio razmak
između redova nego to što je matrica bila razvučena u spisak. Sekcija 26 je zato
svedena na razmak između grupa; merenja u njoj ostaju zapisana.

### Struktura, preslikana sa njihovog cenovnika

| Grupa | Redova | Kolona cena |
|---|---|---|
| Dijagnostika | 3 | 1 |
| Fizikalna terapija | 6 | 2 (tri ćelije prazne) |
| Rehab trening / Kineziterapija | 4 | 2 |
| Oporavak i masaža | 5 | 1 |

**Broj iznosa je isti kao pre: 25.** Broj redova pada sa 25 na 18.

### Prava `<table>`, ne `<dl>`

Podatak je matrica: usluga puta trajanje. `<dl>` to ne može da izrazi, pa je
čitač ekrana ranije čitao „Terapijski dan, 5.000" bez naznake na šta se cena
odnosi. Sada `th[scope=col]` nosi trajanje, `th[scope=row]` uslugu.

Prazna ćelija (na njihovom sajtu „X") je crtica za oko i „ne nudi se" za čitač
ekrana. **Crtica je ovde znak u tabeli, ne interpunkcija u rečenici**, pa se ne
kosi sa pravilom o crtama iz iste runde.

Ispod 720 px tabela se raspada u blokove: naziv pun red, pa ispod cene sa svojom
oznakom trajanja iz `data-kolona`. Zaglavlje se tada sakriva da se ne ponavlja.

### Izmereno

| | Pre runde | Posle zbijanja (sekcija 26) | Po klijentovom sistemu |
|---|---|---|---|
| visina sekcije, 1440 | 1985 px | 1772 px | **1453 px** |
| visina sekcije, 390 | 3978 px | 3528 px | **2476 px** |
| redova | 25 | 25 | **18** |
| vidljivo bez skrola, 1440 | 17 od 25 | 22 od 25 | **svih 18** |
| vidljivo bez skrola, 390 | 6 | 7 | **9** |
| cela naslovna, 1440 | 12809 px | 12596 px | **12278 px** |

Na 1440 **ceo cenovnik sada staje u jedan ekran**. To je ono što je klijent tražio.

### Cene više nisu placeholder

„To su te cene" (Mladen, 01.09.2026) uz cenovnik preslikan 1:1 sa njihovog
važećeg sajta zatvara stavku 11 iz `3-podaci-za-popuniti.md`. Skinute su oznake
`CENE ZA POTVRDU` sa naslovne i `traže potvrdu` sa četiri stranice usluga.

**Ostala pitanja nisu skinuta zajedno sa cenama**, samo su odvojena od njih:

| Gde | Šta i dalje čeka |
|---|---|
| dijagnostika | ultrazvučni pregled nema zasebnu stavku; ulazi li u cenu pregleda specijaliste |
| kineziterapija | trajanje 60 / 60+ min iz cenovnika protiv 45–60 min sa panela |
| manualna terapija | gde pripada grupa „Oporavak i masaža" |
| postoperativna | nema svoju grupu u cenovniku |

Sve četiri stranice usluga i dalje nose **stari spisak** (`.price-list` /
`.price-row`). Prelazak i njih na tabelu ima smisla tek kad se presudi gde koja
grupa pripada, jer bi se inače isti raspored pravio dvaput.

Oznaka `usluga.css` podignuta na **`?v=17.0`** u svih 7. Nova sekcija 28.

## Tri koraka i pravi osnivači (01.09.2026, ista runda)

Novak je poslao `myodetox.com` i predložio da „Naš pristup" postane imenovan okvir
od tri koraka: **testiraj, tretiraj, treniraj**. Uz to je poslao Google dokument
`Lokomoto sajt 2026. tekstovi` sa tekstom tog okvira, biografijama i tekstovima po
tegobi.

### Šta je uzeto, a šta nije

**Okvir je već postojao, samo bez imena.** Sekcija je imala tri kartice:
Procena → Terapija → Funkcija. Novakova verzija je bolja iz jednog razloga: tri
glagola na isto slovo se pamte, imenice se ne pamte.

**Faze nisu postale fioke za usluge.** Novak je predložio i mapiranje (testiraj =
dijagnostika, tretiraj = fizikalna i manualna, treniraj = kineziterapija), uz
postoperativnu kao izuzetak. To nije urađeno, i to je namerno:

- Kod Myodetoxa se **usluge ne grupišu po fazama.** Faze su put kroz koji prolazi
  svaki pacijent; usluge su odvojen spisak. Prvi pregled je most između to dvoje.
- Da faze postanu nazivi za usluge, okvir bi prestao da bude put i postao bi drugi
  naziv za meni. Posetilac koji dolazi na kineziterapiju pomislio bi da je
  preskočio testiranje.
- **Postoperativna ne strči zato što je izuzetak nego zato što nije stvar istog
  reda.** Ona prolazi kroz sva tri koraka. Isto važi za diskus herniju i sportsku
  povredu: to su putevi, ne faze.

Uvodni pasus sekcije zato izričito kaže da red važi i posle operacije. Tako je
postoperativna dokaz da okvir radi, a ne rupa u njemu.

**Lice: prvo lice množine.** Novakov tekst je pisan u drugom licu jednine („zašto
te tačno boli"), a ceo v14 govori sa „vi". Mešanje bi bilo gore od bilo kog izbora,
pa je njegov tekst prebačen u „vi", a naslovi koraka glase **Testiramo,
Tretiramo, Treniramo**. Glagol u prvom licu množine kaže ko radi posao; imperativ
(„Testiraj") zvuči kao uputstvo terapeutu, ne kao obraćanje pacijentu.

Prelazak celog sajta na „ti" je moguć, ali je to poseban potez kroz svih 7 fajlova,
ne izmena jedne sekcije.

**Dve rečenice iz dokumenta nisu prenete:**

| Rečenica | Zašto ne |
|---|---|
| „Rođen si da se krećeš, snažno i sa ciljem." | doslovan prevod Myodetoxovog `You were born to move—powerfully and purposefully`; preuzimanje tuđeg slogana |
| „Bol je poruka, nije stop znak." | jaka je, ali je medicinska tvrdnja: bol ponekad jeste stop znak. Traži struku pre objave |

### Dužina kartica

Izmereno posle izmene, jer je runda 14 pokazala da prazan utisak dolazi od premalo
teksta: **412, 407 i 359 znakova.** Sve tri su iznad 191 znaka koji je tada pravio
problem.

### Osnivači, više nisu placeholder

Iz istog dokumenta:

| | Novak Ilić | Strahinja Marković |
|---|---|---|
| zvanje | Osnivač · Fizioterapeut | Osnivač · Fizioterapeut |
| u Lokomotu od | 2016. | 2016. |
| fokus | manualna terapija, dijagnostika, bol u leđima | manualna terapija, fizikalna terapija, sportske povrede |
| godine iskustva | **15** | **13** |

Biografije su njihove, skraćene i prebačene u „vi". Time se zatvaraju stavke iz
`3-podaci-za-popuniti.md`: **prezime i zvanje za Strahinju, biografije osnivača,
godine iskustva.** Značka `ZA POTVRDU` sa te sekcije je skinuta.

### Nađen propust iz ranije runde

Traka sa brojevima nosila je **„4.000+ tretmana godišnje" bez ijedne oznake**, iako
je klijent taj broj u Loomu (0:16) proglasio netačnim. Broj je sada pod
`mark.ph` sa značkom **`BROJ ZA ISPRAVKU`**.

To je bila greška u dosadašnjem radu: tvrdnja koju je klijent oborio stajala je
kao da je proverena. Pravilo je da broj bez potvrde ide označen, a ovde je
označavanje izostalo jer je broj postojao od ranije i niko ga nije ponovo pogledao.

**Na naslovnoj sada stoje samo dve oznake:** `BROJ ZA ISPRAVKU` na traci i
`TEKST ZA POTVRDU` na opisima opreme.

Menjan je samo HTML, stil nije diran, pa oznaka `usluga.css` ostaje `?v=17.0`.

## Traka opreme na dnu hera (01.09.2026, ista runda)

Novak je poslao `fiziogroup.com` kao uzor za „čistoću i preglednost". Kod njih
odmah ispod hera stoje brojevi, pa traka partnera (Nike, klubovi) pod naslovom
„SPORTSKI LIDERI NAM VERUJU". Mladen je tražio isto, na dnu hera.

### Mesto: staje, i to je izmereno pre nego što je dodato

Hero je namerno tačno jedan ekran. Pre dodavanja:

| | 1440 px | 390 px |
|---|---|---|
| visina hera | 900 px (= ekran) | 844 px (= ekran) |
| prazno ispod dugmadi | **233 px** | **187 px** |

Traka je zauzela 48 px na 1440 i 62 px na 390, pa **hero i dalje ne prelazi
ekran**. To je bio jedini razlog zbog kog je mesto uopšte bilo pod znakom pitanja.

### Razlika koja menja etiketu

Kod Fizio Groupa traka nosi **klijente**: „ovi nam veruju". Kod nas nosi
**proizvođače aparata**, što nije poverenje klijenata nego opremljenost. Zato
etiketa glasi **„Radimo sa"**, a ne „veruju nam". Pogrešna etiketa bi bila
tvrdnja, ne dekoracija.

### Zašto imena, a ne logotipi, za sada

**Logotipa nema.** U repou su samo fotografije aparata (`metoda-indiba.webp` i
druge), u Downloads folderu nijedan fajl proizvođača.

I da ih ima, providna pozadina ne bi bila dovoljna:

1. **Sve podloge su tamne** (hero video, sekcija Oprema). Logo koji je crn na
   providnoj pozadini na tamnom se ne vidi. Treba **mono-bela (reversed)
   verzija**, koju proizvođač daje u brend paketu.
2. **Beljenje tuđeg žiga svojom rukom je izmena žiga.** INDIBA i NeuFit imaju
   programe ovlašćenih centara sa pravilima korišćenja znaka. Traži se zvanični
   paket, ne skidanje sa Gugla.
3. **SVG, ne PNG**, kad stignu. Mono verzija u SVG-u može da uzme boju podloge
   preko `currentColor`, pa jedan fajl radi i na tamnom i na svetlom.
4. **Poravnanje po optičkoj površini, ne po visini.** Logotipi različitih
   proizvođača imaju različite proporcije; postavljeni na istu visinu izgledaju
   neuredno. To se meri brojem neprovidnih piksela i podešava po fajlu.

Traka je zato napravljena tipografski. `li` prima `img` bez ijedne izmene
rasporeda kad fajlovi stignu.

### Izmereno posle

Kontrast preko hero videa, merenje sa sakrivenim tekstom da se meri prava
podloga, u tri trenutka videa (1,0 s, 3,5 s i 6,0 s):

| | najgori kontrast |
|---|---|
| 1440 px | **5,11** (etiketa „Radimo sa") |
| 390 px | **4,69** („Medestec") |

Oba prolaze AA za sitan tekst (4,5).

**Prva verzija je pala.** Etiketa je bila `rgba(255,255,255,0.5)` i davala
**3,05**. Podignuta je na `0.8`.

Usput ispravljena i greška u samom merenju: prvi pokušaj je uzimao 90. percentil
svetline unutar okvira teksta kao „podlogu", što kod **svetlog** teksta hvata sam
tekst, pa je izlazilo lažnih 1,48. Kod tamnog teksta ista metoda radi, i zato je
prošla u sekciji 28. Za svetao tekst podloga se meri tako što se tekst sakrije.

Traka je `align-self: stretch`, jer je bez toga bila uža od teksta iznad nje pa je
linija delovala kao greška. Na uskom ekranu etiketa ide u svoj red.

Nova **sekcija 29**, oznaka `usluga.css` podignuta na **`?v=17.1`** u svih 7.

### Fotografije aparata umesto logotipa (ista runda)

Umesto tuđih logotipa, u traci stoje **fotografije samih aparata iz ove
ordinacije**. To nije tuđi žig nego njihova slika njihove opreme: nema šta da se
traži ni od koga da se čeka. I govori više — logo dokazuje da marka postoji,
fotografija dokazuje da aparat stoji u toj sobi.

| Aparat | Kadar | Zašto taj |
|---|---|---|
| INDIBA | `L-7` | narandžasto kućište i ime na ekranu |
| NeuFit | `L-19` | „neubie" i „neufit" se čitaju na kućištu |
| Triton DTS | `L-5` | ceo aparat sa natpisom i merilom sile; `L-69` je krupni plan sa rukom i ime se ne vidi |
| Medestec | `L-16` | „Medical Technology" i „MP 50" na kućištu |

Isečci su kvadratni 240 px (5 do 8 KB svaki), dovoljno i za ekran trostruke
gustine. Prikazuju se na 2,9rem, sa zaobljenim uglom i tankom belom ivicom, uz
`saturate(0.88)` — kadrovi su topli i svetli, hero je hladan i taman, pa ih blago
smirivanje spaja sa slikom iza.

**Četiri nova fajla u `v8/assets/images/`:** `aparat-indiba.webp`,
`aparat-neufit.webp`, `aparat-triton.webp`, `aparat-medestec.webp`.

### Izmereno posle slika

| | 1440 px | 390 px |
|---|---|---|
| visina hera | **900 px** (= ekran) | **844 px** (= ekran) |
| traka | 71 px, u jednom redu | 124 px, mreža 2×2 |
| prazno do dna hera | 170 px | 110 px |
| najgori kontrast imena preko videa | **4,98** | **5,92** |

Hero i dalje ne prelazi ekran, na obe širine, i imena prolaze AA.

### Dve greške usput

**Zamenjeni parametri.** Prva verzija je u tekst upisala opis slike umesto imena,
pa je u traci pisalo „INDIBA aparat u ordinaciji Lokomoto centra" u četiri reda.
Uhvaćeno na renderu, ne u kodu.

**`alt` je sada prazan.** Ime aparata stoji u tekstu odmah pored slike, pa bi
opisni `alt` čitač ekrana naterao da isto pročita dvaput. Slika je uz tekst
dekorativna i `alt=""` je ovde tačan izbor, ne propust.

**`align-items` sa `baseline` na `center`.** Baseline je radio dok su u traci
stajala samo imena; sa sličicama je etiketa padala na dno reda.

Oznaka `usluga.css` podignuta na **`?v=17.2`** u svih 7.

## Magnetoterapija izbačena, broj u traci ispravljen (01.09.2026)

### 7.000+ uspešnih terapija

Klijentov odgovor na stavku koja je od jutros stajala kao `BROJ ZA ISPRAVKU`.
U Loomu (0:16) je rečeno „7 plus 1.000", što je transkript izobličio; tačno je
**7.000+**.

| | Bilo | Sada |
|---|---|---|
| broj | 4.000+ | **7.000+** |
| oznaka | Tretmana **godišnje** | **Uspešnih terapija** |

**Vremenska odrednica je otpala.** To nije previd nego ono što je klijent rekao:
broj nije godišnji učinak nego ukupan. Značka je skinuta, `mark.ph` takođe.

Time **na naslovnoj ostaje samo jedna oznaka**: `TEKST ZA POTVRDU` na opisima
opreme, koji čekaju struku.

Preostala tri broja u traci (6 fizioterapeuta, 1:1, 48h) i dalje nisu potvrđena i
stoje u `3-podaci-za-popuniti.md`. Ako je jedan bio netačan, ostali traže isti
pogled.

### Magnetoterapija van

Izbačena je sa stranice fizikalne terapije, sa sva tri mesta:

- kartica metode („MAGNETNO POLJE / Magnetoterapija")
- `meta description` stranice
- spisak procedura u koraku 02 („Izbor procedure")

**Raspored je time bolji, ne gori.** Metoda je sada šest i popunjavaju **dva puna
reda po tri**; ranije ih je bilo sedam pa je red ostajao krnji. Izmereno na
renderu: 3 + 3, i posebna kartica „Ne morate da znate" sama u trećem redu, gde i
pripada jer nije metoda.

**Jedna prazna fotografija manje.** Magnetoterapija je bila jedna od tri kartice
sa značkom `FOTOGRAFIJA NEDOSTAJE`; ostaju **krioterapija i limfna drenaža**.

U `3-podaci-za-popuniti.md` magnetoterapija se briše iz spiska za dosnimavanje.
Pitanje koje ostaje za klijenta: **da li se magnetoterapija i dalje radi** a samo
ne ide na sajt, ili je usluga ugašena. Na starom sajtu (`lokomoto.rs`) i dalje
stoji u spisku fizikalne terapije, pa se to negde mora uskladiti.

Menjan je samo HTML, oznaka `usluga.css` ostaje `?v=17.2`.

## Traka sa brojevima u njihovoj plavoj (01.09.2026)

Klijent se više puta vraća na to da boje nisu njihove, pa je traka probana u
plavoj iz logoa umesto u tamnozelenoj `--ink-2`.

### Četiri varijante, izmerene pre nego što je išta upisano

| Varijanta | Pozadina | Broj | Znak `+` `:` `h` | Etiketa |
|---|---|---|---|---|
| A sadašnja tamnozelena | `#26322f` | 13,29 | 6,27 (lajm) | 5,31 |
| B plava, lajm znaci | `#0076ae` | 5,00 | **2,36** | **2,61** |
| C plava, beli znaci | `#0076ae` | 5,00 | 5,00 | **2,61** |
| D svetlija plava | `#0095c1` | **3,46** | 3,46 | **2,03** |

**Dve stvari koje merenje pokazuje, a oko ne bi:**

1. **Lajm znaci na plavoj padaju na 2,36.** To nije dekoracija nego informacija:
   bez `+` broj „7.000+" postaje „7.000". Zato su na plavoj beli.
2. **Etiketa ispod broja je `rgba(255,255,255,0.56)`**, pravljena za tamnu
   podlogu. Na plavoj daje 2,61 i praktično nestaje. Podignuta je na **0,92**.

**Svetlija plava je odbačena.** Broj pada na 3,46, što prolazi samo kao veliki
tekst, a etiketa na 2,03. Ista boja radi u logou, gde nema sitnog teksta preko nje.

### Upisano: varijanta C

| | Rezultat |
|---|---|
| pozadina | `#0076ae`, tamnija plava iz logoa |
| broj | 5,00 |
| znak | 5,00 |
| etiketa | **4,48** |

Sve tri prolaze AA, na 1440 i na 390.

**Cena je zelena.** Traka je bila jedino mesto gde je lajm stajao na velikom
brojkama, i toga više nema. Zelena i dalje živi u traci ciljeva odmah ispod, koja
sada dolazi neposredno posle plave — plavo pa zeleno, što je tačno raspored sa
njihovog sajta.

Vraćanje na tamnozelenu je brisanje sekcije 30, ništa drugo.

Oznaka `usluga.css` podignuta na **`?v=17.3`** u svih 7.

### Traka spuštena na dno hera (ista runda)

Traženo je da sličice idu niže. Dok je traka bila u toku, to nije bilo besplatno:
`.hero-content` centrira decu, pa je **svaki piksel dat traci uziman naslovu**.
Izmereno na 1440 pre nego što je izabrano:

| Rešenje | Traka od dna | Naslov |
|---|---|---|
| u toku, kako je bilo | 170 px | 258 |
| `margin-top: 7rem` | 141 px | 229 |
| `margin-top: auto` | 96 px | 184 |
| **van toka, `bottom` 2rem** | **35 px** | **321** |

Van toka traka stvarno seda na dno, a **naslov pada niže nego što je bio**, jer se
centrira bez nje. To je uz miran hero bolje nego pre, pa je izabrano to.

**Dve greške u prvom pokušaju, obe uhvaćene merenjem:**

1. `inset-inline: 0` uz `padding-inline` uvuklo je sadržaj, ali je **linija
   `border-top` i dalje išla preko cele širine ekrana** (1440 umesto 1325 px).
   Ispravljeno na `inset-inline: var(--gutter)`, pa i linija prati `.shell`.
2. Na uskom ekranu traka se vraća u tok, a bez `align-self: stretch` **svela se na
   širinu sadržaja: 251 px umesto 350**.

Na uskom ekranu traka namerno ostaje u toku: apsolutna bi se na niskim telefonima
sudarila sa dugmadima.

### Provereno na četiri odnosa

| | traka | razmak od dugmadi | do dna hera |
|---|---|---|---|
| 1440 × 900 | x 58, širina 1325 | 126 px | 35 px |
| 1440 × 760 | x 58, širina 1325 | 56 px | 35 px |
| 1024 × 800 | x 41, širina 942 | 102 px | 27 px |
| 390 × 844 | x 20, širina 350 | 28 px | 110 px |
| 390 × 667 | x 20, širina 350 | 28 px | 88 px |

Kontrast imena preko videa, ponovo izmeren na novom mestu (podloga se promenila):
**5,66 na 1440 i 5,92 na 390**, u tri trenutka videa. Prolazi AA.

Oznaka `usluga.css` podignuta na **`?v=17.4`** u svih 7.
