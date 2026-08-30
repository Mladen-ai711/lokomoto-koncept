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
