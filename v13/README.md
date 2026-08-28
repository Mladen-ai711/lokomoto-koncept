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

Oznaka verzije: `usluga.css?v=2.8`, `app.js?v=1.2`, `stranica.js?v=1.0`.
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
| Imena i uloge tima | **fotografije su prave**, imena i raspored po ulogama nisu |
| Foto: magnetoterapija, krioterapija, limfna drenaža | nema kadra u snimanju, kartica nosi označeno prazno mesto |
| FAQ „Koliko košta?" na naslovnoj | rečenica stoji bez brojeva, oznaka „CENE ZA POTVRDU" |
| Opisi tri uređaja u sekciji Oprema | kategorija uređaja je proverljiva; indikacija čeka struku, značka „TEKST ZA POTVRDU" |
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
