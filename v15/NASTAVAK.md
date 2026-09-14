# Nastavak rada

Ovaj fajl postoji da bi nova sesija — naročito ona koja radi lokalno na
Mladenovom računaru — mogla da nastavi bez ponovnog objašnjavanja.

**Prva poruka nove sesije može biti samo:** *„Pročitaj `v15/NASTAVAK.md`
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
| Aktuelna verzija | folder `v15/` |
| Pregled uživo | https://mladen-ai711.github.io/lokomoto-koncept/v15/ |
| Produkcioni domen (budući) | `lokomoto.rs` — sada stari WordPress |
| Zakazivanje | `lokomotocentar.alpinbook.com` (eksterno) |
| Kviz | `kviz.lokomoto.rs` |

**`v14` i sve starije verzije su zamrznute. Ne dirati ih.**

## Šta pročitati pre rada

| Fajl | Šta nosi |
|---|---|
| `v15/PRED-OBJAVU.md` | pitanja za klijenta, gotov `robots.txt` i `sitemap.xml`, postupak za dan objave |
| `v15/README.md` | ceo istorijat izmena, uključujući i greške napravljene usput |

SEO plan nije u repou — on je artefakt:
https://claude.ai/code/artifact/f1231573-a16f-4397-b4ac-fd47cadac04c

## Stanje

**v15 je samostalan.** Ne vuče resurse iz `v8/`, `v11/` ni `v12/` kao v14.
Sve je u `v15/assets/` — 32 slike, 2 videa, 4 fonta — plus `styles.css`
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

### 1. Fotografije — URAĐENO 14.09.2026

Rešeno u prvoj lokalnoj sesiji, iz originala u `E:\Lokomoto`. Nijedna
fotografija se više **ne ponavlja između stranica usluga**. Šest slotova je
dobilo nove isečke (`L-40`, `L-38`, `L-8`, `L-45`, `L-64`); pun spisak sa
izvorima je u `README.md`, odeljak „Fotografije uslužnih stranica iz
originala".

Usput ispravljeno: naslov „Sedam procedura" → „**Šest procedura**" (klijent
potvrdio da magnetoterapije nema), i početna slika pregleda panela na
naslovnoj koja se nije poklapala sa aktivnom stavkom.

**Tri kartice i dalje ostaju bez fotografije** — magnetoterapija (više i ne
postoji kao kartica), krioterapija, limfna drenaža. Provereno i na
originalima: tih kadrova nema. `L-5` je Triton, `L-16` je Medestec MP 50
(tecar). Ne popunjavati „sličnom" slikom.

**Ranija tvrdnja da „slika uz korake na dijagnostici ne prikazuje ultrazvuk"
bila je netačna** — `uz-pregled.webp` (`L-32`) prikazuje sondu na kolenu i
nalaz na monitoru. Pogrešan je bio hero te stranice; zamenjen je.

### 2. Faza 1 — objava bez gubitka

Stari `lokomoto.rs` ima **36 indeksiranih stranica**, novi sajt ima 7.
Migracija „kako jeste" gubi većinu onoga što centar danas ima u pretrazi.

- 301 mapa (puna verzija u SEO planu)
- **`/portfolio/*` stranice po tegobama se u fazi 1 NE migriraju** —
  301 sa stranice o tegobi na opštu uslugu Google tretira kao soft-404.
  Ostaju žive dok se u fazi 2 ne prepišu.
- Nedostaju kao URL: `/cenovnik/`, `/kontakt/`, `/o-nama/`, `/tim/`,
  `/politika-privatnosti/`. Sadržaj za prve četiri već postoji na
  naslovnoj, zarobljen u sidrima koja ne mogu da rangiraju.
- **GitHub Pages ne ume 301 redirekcije**, a one su obavezne.
  Preporuka: Cloudflare Pages.

### 3. Faza 2 — stranice po tegobama

Najveći dugoročni dobitak. Na naslovnoj je mapa tela koja **imenuje devet
tegoba, a nijedna nije link** — sve su običan `<span>`, bez odredišne
stranice. To su doslovno rečenice kojima ljudi pretražuju.

Prvo prepisati 10 postojećih `/portfolio/` stranica u `/tegobe/`, pa tek
onda pisati nove.

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

**Poslato, čeka se:** radno vreme · telefon 063 687 460 · godina osnivanja
(2016 ili 2013) · Facebook stranica · način plaćanja · fotografije krioterapije
i limfne drenaže (jedino što još fali) ·
ultrazvuk (posebno ili uračunat) · trajanje kineziterapije.

**Nije slato:** izjave pacijenata. Traži da Novak lično pita ljude za
dozvolu — bolje uživo nego pisano.

Pun spisak sa kontekstom je u `PRED-OBJAVU.md`, odeljak 6.

## Napomena o načinu rada

Dosadašnje sesije radile su **u oblaku**, pa nisu mogle ni do `E:\Lokomoto`
ni da pushuju (403 — Claude GitHub App nema pristup repou). Izmene su
prebacivane zipom, a Mladen ih je komitovao iz GitHub Desktopa.

**Lokalna sesija nema nijedno od ta dva ograničenja.** Ako ovo čitaš
lokalno: menjaj fajlove direktno i pushuj normalno.
