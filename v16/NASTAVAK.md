# Nastavak rada

Ovaj fajl postoji da bi nova sesija — naročito ona koja radi lokalno na
Mladenovom računaru — mogla da nastavi bez ponovnog objašnjavanja.

**Prva poruka nove sesije može biti samo:** *„Pročitaj `v16/NASTAVAK.md`
i nastavi odatle."*

---

## Projekat

**Lokomoto centar** — specijalizovana ordinacija fizikalne medicine i
rehabilitacije. Tabanovačka 27b, Autokomanda, Beograd. Osnovana 2016.
Privatna praksa, ne radi preko RFZO, rad jedan na jedan.

Osnivači: **Novak Ilić** i **Strahinja Marković**.

| | |
|---|---|
| Repo (lokalno) | `Mladen\source\repos\lokomoto-koncept` |
| Fotografije sa snimanja | `E:\Lokomoto` — 104 kadra, **nisu u repou** |
| Aktuelna verzija | folder `v16/` |
| Pregled uživo | https://mladen-ai711.github.io/lokomoto-koncept/v16/ |
| Produkcioni domen (budući) | `lokomoto.rs` — sada stari WordPress |
| Zakazivanje | `lokomotocentar.alpinbook.com` (eksterno) |
| Kviz | `kviz.lokomoto.rs` |

**`v15` i sve starije verzije su zamrznute. Ne dirati ih.**

`v16` je nastao 1. 10. 2026. kao doslovna kopija `v15`, pre runde boja i
strukture koju je tražio klijent. `v15` ostaje na svojoj adresi kao povratna
tačka, isto kao što je `v13` bila za `v14`.

## Šta pročitati pre rada

| Fajl | Šta nosi |
|---|---|
| `v16/PRED-OBJAVU.md` | pitanja za klijenta, gotov `robots.txt` i `sitemap.xml`, postupak za dan objave |
| `v16/README.md` | ceo istorijat izmena, uključujući i greške napravljene usput |
| `claude/18-spisak-zahteva.md` | **svaki zahtev klijenta sa statusom** — otvori ovo da bi znao šta je na redu |
| `claude/17-loom-klijent-2.md` | nalaz iz druge runde pregleda: boje, harmonika, ceo tekst sajta |

SEO plan nije u repou — on je artefakt:
https://claude.ai/code/artifact/f1231573-a16f-4397-b4ac-fd47cadac04c

## Stanje

**v16 je samostalan.** Ne vuče resurse iz `v8/`, `v11/` ni `v12/` kao v14.
Sve je u `v16/assets/` — 32 slike, 2 videa, 4 fonta — plus `styles.css`
i `favicon.svg`.

**SEO faza 0 je gotova:**

| | |
|---|---|
| Meta podaci | novi `title` i `description` na svih 7 stranica |
| H1 naslovne | kicker uvučen u `<h1>`, naslov nosi ključnu reč |
| Open Graph | na svih 7, sa slikom `og-lokomoto.jpg` 1200×630 |
| Strukturirani podaci | 8 blokova: `MedicalClinic`, `FAQPage` (10 pitanja), 5× `Service`+`BreadcrumbList`, `CollectionPage` |
| CLS | `width`/`height` na svih 42 slike |
| Logo | PNG → WebP, 354 KB uštede po učitavanju |
| HTML | uklonjen orfan `</span>` sa 5 stranica |

**Naslovna nema nijedno nepopunjeno mesto.** Na uslužnim stranicama ostalo
je **7 oznaka `ZA POTVRDU`** (`<mark class="ph">`). To **nisu rupe** — tekst
je napisan i čeka potvrdu klijenta. Kad potvrdi, skida se `<mark>` i
`<span class="ph-note">`, tekst ostaje.

## Odluke koje su već donete

Ne preispitivati bez novog razloga.

1. **`noindex` ostaje.** Svih 7 stranica ga nosi namerno. Sajt stoji na
   `github.io`, a ide na `lokomoto.rs`; skidanje sada bi indeksiralo
   koncept na pogrešnom domenu i napravilo duplikat. Skida se **na dan
   objave, kao poslednji korak**.
2. **URL-ovi u produkciji ostaju plitki.** `/kineziterapija/`, ne
   `/usluge/kineziterapija/`. Četiri od pet uslužnih stranica već postoje
   na starom sajtu na tačno tim adresama i rangiraju na „[usluga] Beograd",
   pa migriraju sa nula redirekcija.
3. **Slug ostaje `manuelna-terapija`**, ne `manualna`. Standardna srpska
   forma, i stara stranica na njoj rangira. Proveriti u Search Console →
   Queries pre konačne odluke.
4. **`canonical` se ne dodaje** dok struktura URL-ova ne bude zaključana.
   Canonical na adresu koja će se menjati je gore nego nikakav.
5. **Ništa se ne izmišlja.** Bez lažnih recenzija, statistika i cena. Gde
   podatak ne postoji, stoji oznaka i pita se klijent.

## Šta je sledeće, po prioritetu

### 0. Runda boja i strukture — NA REDU, 01.10.2026

Druga runda pregleda od klijenta: **četiri Looma** po 5 minuta, **nov Google
dokument sa kompletnim tekstom sajta** (101.920 znakova) i dopune na WhatsAppu.
Nalaz je u `claude/17-loom-klijent-2.md`, a spisak svih 36 zahteva sa statusom u
`claude/18-spisak-zahteva.md`. **`v16` je i napravljen zbog ove runde**, kao
kopija `v15`, da bi `v15` ostala povratna tačka.

Sve sa WhatsAppa je već ugrađeno u `v15` 30. 9. **Sitnica `60 min` → `do 60 min` na naslovnoj urađena je 02.10.**

**Naš posao, po redu:**

1. ✅ **Boje — URAĐENO 02.10.2026**, `usluga.css` sekcije 42/42a/42b, zapis u
   `README.md`. Tamne sekcije `#0e4766`, papir `#f1f5f8`, akcenat `#8fd6f4`,
   sepija skinuta sa fotografija. Ostaje za pokazati klijentu. Stari opis:
   Klijent kaže da zelena nije boja ordinacije i da je sajt
   „muljav"; hoće „čisto", i tamne sekcije su mu pretamne. Plava nije sporna.
   Izmereno u `v16`: `var(--lime)` na **71 mesto** (50 u `styles.css`, 21 u
   `usluga.css`) **plus 17 mesta sa ručno upisanom starom vrednošću**
   `#c9f25f` / `rgba(201,242,95,…)`, od čega pet u `style` atributu u HTML-u (svih pet stranica usluga).
   `--lime` je definisan dvaput: `#c9f25f` u `styles.css`, prebrisan na
   `#84c350` u `usluga.css`. **Limeta i tamne podloge se menjaju zajedno** —
   limeta nosi akcenat tamo gde plava nema kontrast.
2. ✅ **Harmonika i brojevi — URAĐENO 02.10.2026**, `usluga.css` sekcija 43.
   Brojeva je bilo 85, ne 32; koraci na stranicama usluga su harmonika. Stari opis:
   **Harmonika i brojevi `01 02 03`.** Žali se na skrol u sva četiri snimka i
   sam nudi rešenje: sklopljene sekcije. To je jedino što miri njegov zahtev i
   Nikolin („kratki blokovi"), jer je njegov novi tekst po usluzi tri do četiri
   puta duži od sadašnjeg. Brojeva ima **32**: 12 na naslovnoj, po 4 na svakoj
   od pet stranica usluga.
   ✅ **Usput urađeno 02.10:** simetrija u cenovniku na naslovnoj (V4-3 — Mladen
   potvrdio da Novak misli na cenovnik) i `do 60 min` (W-2). `usluga.css` sekcija 44.
3. ✅ **Cene u tabelu — URAĐENO 02.10.2026**, `usluga.css` sekcija 45. Na postoperativnoj
   dodat REHAB 10 samo terapija (45.000) — za potvrdu, vidi README. Stari opis:
   **Cene u tabelu na podstranicama**, po uzoru na naslovnu, gde to već jeste
   tabela sa kolonama.
4. ✅ **FAQ — URAĐENO 02.10.2026**, `usluga.css` sekcija 46: odgovor 16 px, pitanje
   21,6 / 17,6 px. Stari opis:
   **FAQ da poraste.** Mereno: odgovor je **14,88 px na 1440** i **14,08 px na
   390**, a telo teksta je 16 px. Pitanje je 15,68 px na 390, dakle i ono padne
   ispod tela na telefonu.
5. ✅ **Mreža metoda — URAĐENO 02.10.2026**, `usluga.css` sekcija 47: 0 praznih ćelija
   na svim širinama; fizikalna na telefonu 2.864 → 2.500 px. Stari opis:
   **Prazne ćelije u mreži metoda**, jednim opštim pravilom (dijagnostika 3+1,
   fizikalna 3+3+1, manualna i postoperativna 3+2). Mreža nema razmak, pa
   prazna ćelija izgleda kao nacrtana rupa.
6. ✅ **Kviz — već urađeno 01.09.2026** (README, „Kviz: adresa nađena, ulaz postavljen"):
   kartica ispod mape tela na naslovnoj + `Kviz ↗` u futeru svih 7 stranica, oba na
   `https://kviz.lokomoto.rs/`. Spisak iz `claude/18` ga je pogrešno vodio kao otvoren —
   pravljen je iz Loom-a, ne iz koda. Provereno u kodu 02.10. Stari opis:
   **Kviz na naslovnu** — iz prve runde, traže ga i Novak i Nikola, a na sajtu
   ga nema. Adresa je `kviz.lokomoto.rs`.
7. **Video ili slike** — pita može li video iz Drive foldera umesto panela.
   Odgovor je merljiv: broj rezova u minutu i težina fajla.
8. **Prepis tekstova iz dokumenta** — tek kad struktura stoji i kad se zna lice.

**Pet stavki je nejasno i ne sme da se dira dok ne kaže šta je mislio:** koja
slika je nepotrebna, koja stranica mu se ne sviđa, gde tačno hoće simetriju,
koja fotografija mu deluje kao AI (nijedna nije), i koji je kadar sa
narandžastom mašinom. Na snimku se čuje šta govori, ali se ne vidi gde pokazuje
mišem.

### 1. Fotografije — URAĐENO 14.09.2026

Rešeno u prvoj lokalnoj sesiji, iz originala u `E:\Lokomoto`. Nijedna
fotografija se više **ne ponavlja između stranica usluga**. Šest slotova je
dobilo nove isečke (`L-40`, `L-38`, `L-8`, `L-45`, `L-64`); pun spisak sa
izvorima je u `README.md`, odeljak „Fotografije uslužnih stranica iz
originala".

Usput ispravljeno: naslov „Sedam procedura" → „**Šest procedura**", i početna
slika pregleda panela na naslovnoj koja se nije poklapala sa aktivnom stavkom.
Naslov je brojao magnetoterapiju, koja je izbačena još u `v14`, a sedmu karticu
(„Ne morate da znate", poziv na akciju) brojao je kao proceduru. Razlog nije
bio u tome šta centar radi, nego u tome šta na stranici stvarno piše.

**Tri kartice i dalje ostaju bez fotografije** — magnetoterapija (više i ne
postoji kao kartica), krioterapija, limfna drenaža. Provereno i na
originalima: tih kadrova nema. `L-5` je Triton, `L-16` je Medestec MP 50
(tecar). Ne popunjavati „sličnom" slikom.

**Ranija tvrdnja da „slika uz korake na dijagnostici ne prikazuje ultrazvuk"
bila je netačna** — `uz-pregled.webp` (`L-32`) prikazuje sondu na kolenu i
nalaz na monitoru. Pogrešan je bio hero te stranice; zamenjen je.

### 2. Faza 1 — objava bez gubitka

**Mapa migracije je napravljena 15.09**, popisana direktno sa živog `lokomoto.rs`.
Puna verzija je u `PRED-OBJAVU.md`, odeljak 9. Ukratko:

- Stari sajt ima **41 adresu** u mapi sajta, plus `/blog/` i tri `/author/…` koje u
  mapi nisu. Ranija beleška je govorila o 36.
- **Sedam stranica se poklapa** i migrira bez ijednog preusmerenja — ali samo ako
  v15 spusti uslužne stranice iz `/usluge/ime/` u `/ime/` i preimenuje
  `manualna-terapija` u `manuelna-terapija`.
- **Ispravka:** ranije je pisalo „četiri od pet uslužnih stranica". Provereno na
  živom sajtu — **svih pet postoji**, uključujući `/fizikalna-terapija/`.
- **16 stranica po tegobama i 5 članaka ostaju žive i nedirnute.** Preusmerenje sa
  tegobe na opštu uslugu pretraživač čita kao brisanje.
- **Četiri stranice nedostaju** novom sajtu: `/o-nama/`, `/cenovnik/`, `/kontakt/`,
  `/tim/`. Tekst postoji na naslovnoj, zarobljen u sidrima.
- `/footer/`, `/hvala/` i `/author/…` su smeće u pretrazi — zabraniti indeksiranje.
- **GitHub Pages ne ume preusmerenja.** Prelazak na drugi hosting je prvi korak,
  sve ostalo zavisi od njega. Preporuka: Cloudflare Pages.

### 3. Faza 2 — stranice po tegobama

Najveći dugoročni dobitak. Na naslovnoj je mapa tela koja **imenuje devet
tegoba, a nijedna nije link** — sve su običan `<span>`, bez odredišne
stranice. To su doslovno rečenice kojima ljudi pretražuju.

Stari sajt ima **16 stranica po tegobama** na `/portfolio/…` (popis u
`PRED-OBJAVU.md`, odeljak 9). Njih prepisati prve, pa tek onda pisati nove.

**ODLUČENO 04.09 (Nikola) — jedna stranica, ne dve.**

Pitanje je bilo da li stranice po tegobama treba da budu *čiste landing*
stranice za reklame — bez glavnog menija, samo priča o usluzi i dugme za
zakazivanje, da posetilac sa reklame ne luta dalje po sajtu.

Nikolin odgovor: ideja nije loša, i uobičajeno rešenje je **duplikat stranice**
— jedan primerak bez navigacije za reklame, drugi sa navigacijom za posetioce
sa sajta. Ali **ne komplikovati sada**, razlika je sitna. Ide se sa **jednom
stranicom koja služi i za reklame i za sajt**, sa normalnom navigacijom.

Rekao je to na primeru diskus hernije, pa dodao da **isto važi za sve ostale
usluge**.

**Šta to znači za izradu:**

- jedna stranica po tegobi, **sa glavnim menijem** kao i ostatak sajta
- pošto ista stranica prima i saobraćaj sa reklama, **dugme za zakazivanje mora
  da bude visoko i jasno**, vidljivo bez skrolovanja — čovek sa reklame ne
  traži, on ili zakaže ili ode
- nema duplikata, nema `noindex` verzija, nema dve adrese za isti sadržaj —
  time otpada i rizik od duplog sadržaja u pretrazi

Ako se kasnije pokaže da reklame slabo konvertuju, duplikat se uvek može
napraviti. Obrnuto je teže.

### 4. Lokalni SEO — može odmah

Adresa je potvrđena (samo Autokomanda), pa ovo više ništa ne blokira.
**Redosled je bitan:**

1. Prvo Google profil. Ako postoji stari listing na Stepi Stepanoviću,
   **ne sme se obrisati** — ide „Move business" ili spajanje, inače
   nestaju sve recenzije.
2. Tek kad Google prihvati adresu → ostali imenici.
3. Facebook: slug `/lokomotostepastepanovic/` nosi ime stare lokacije.

## Čeka klijenta

**Odgovoreno:** lokacija (samo Autokomanda), parking (ispred zgrade).

**Odgovoreno 15.09 (Novak):**

- **radno vreme** — Pon–Pet 08–20 potvrđeno, subota do **15h** (bilo 14h). Ispravljeno
  na svih 7 stranica i u `MedicalClinic` shemi.
- **telefon** — 063 687 460 **nije njihov broj**. Ostaje samo **011 / 40 95 924**.
  Sajt ga je već koristio, 063 nije bio nigde.
- **godina osnivanja** — **2016**. U v15 reč „2013" se **ne pojavljuje nijednom**,
  sajt je čist. Greška je na **starom sajtu, na stranici dijagnostike**, i odatle se
  prepisala u imenike. To je posao za fazu objave i lokalni SEO: ispraviti na starom
  sajtu pre migracije, pa proći imenike koji su prepisali 2013.
- **Facebook** — stranica jeste njihova, ali **nije aktivna dugo**; sa Stepe
  Stepanovića su se odselili pre tri godine, a adresa stranice i dalje nosi ime te
  lokacije. **Link je skinut sa sajta** (7 stranica plus `sameAs` u shemi). Posetilac
  bi inače stigao na stranicu koja godinama ćuti i u adresi nosi mesto gde ih nema.
  Stranica ostaje njihova — link se vraća čim je ožive, ili se pravi nova sa pravim
  imenom. U futeru je ostao samo Instagram.

**Odgovoreno 30.09 (Novak) — sve žute oznake `ZA POTVRDU` su time skinute:**

- **RFZO** — izbaciti svako pominjanje. Urađeno na 5 mesta; `FAQPage` shema i
  vidljivi FAQ sada oba nose **9 pitanja**, ne 10.
- **ultrazvuk** — **izbacuje se iz usluga u potpunosti.** Nikad nije ni bio stavka
  u cenovniku, pa cene nisu dirane. Stranica dijagnostike je prepravljena: naslov,
  meta opis, shema, korak 03, sekcija metoda (četiri → tri) i fotografija.
- **kineziterapija** — termin traje do 60 ili 60+ minuta; vežbe za kuću „ukoliko
  vaše stanje to zahteva".
- **masaže** — idu u grupu „Oporavak i masaža", skinute sa stranice manualne terapije.
- **REHAB paket** — rehabilitacija bilo kog tipa, sa operacijom ili bez; obuhvata
  fizikalnu terapiju i kineziterapiju.
- **hirurg** — Novakov tekst preuzet doslovno.
- **prvi tretman** — rečenica ostaje kakva je bila.

**Poslato 01.10, čeka se odgovor (druga runda):**

- **Lice teksta, „ti" ili „vi"** — **blokira prepis svih tekstova.** Novakov
  dokument je mereno 99% na „ti" (433 oblika prema 5), sajt je na „vi". Za
  biografije osnivača izričito traži svoj tekst, pa doslovan prepis bi na istoj
  stranici pomešao dva lica. Dok ne odgovori, biografije se ne ubacuju.
- **Koja fotografija mu deluje kao AI** — nijedna nije.
- **Gde tačno hoće simetriju**, koja slika je nepotrebna, koja stranica mu se ne
  sviđa.
- **Kupice (`L-13`, `L-14`) i perkusioni pištolj (`L-15`)** — pitano treći put.

**Čeka se od Nikole:** da li se oznaka **Tx3** koristi (Novak ga je izričito
pitao; na sajtu je sada nema nigde, iako sekcija „Naš pristup" postoji sa
koracima Testiramo / Tretiramo / Treniramo) · da li tihe etikete ispod naslova
ostaju · da li cenovnik ide zbijenije.

**Poslato ranije, još se čeka:** način plaćanja · fotografije za **NeuFit, Normatec i
GameReady** (Novak ih šalje) · dodatne informacije o vizuelnom delu i prerađeni
tekstovi, koje Mladen čeka da Nikola potvrdi.

**Nije slato:** izjave pacijenata. Traži da Novak lično pita ljude za
dozvolu — bolje uživo nego pisano.

Pun spisak sa kontekstom je u `PRED-OBJAVU.md`, odeljak 6.

## Napomena o načinu rada

Dosadašnje sesije radile su **u oblaku**, pa nisu mogle ni do `E:\Lokomoto`
ni da pushuju (403 — Claude GitHub App nema pristup repou). Izmene su
prebacivane zipom, a Mladen ih je komitovao iz GitHub Desktopa.

**Lokalna sesija nema nijedno od ta dva ograničenja.** Ako ovo čitaš
lokalno: menjaj fajlove direktno i pushuj normalno.
