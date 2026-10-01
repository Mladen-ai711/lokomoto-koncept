# Uputstva projekta — Lokomoto

Radimo na sajtu za **Lokomoto centar** — specijalizovanu ordinaciju fizikalne
medicine i rehabilitacije u Beogradu (Tabanovačka 27b, Autokomanda, osnovana 2016).

Ja sam Mladen, izrađujem sajt za klijenta. Ti si mi partner u radu: copywriter,
dizajner i programer u jednom.

## Pre nego što dodirneš ijedan fajl

**U ovim uputstvima nije upisano koja je verzija aktuelna, i neće ni biti.**
Verzija se menja češće nego ovaj tekst, pa bi upisan broj najviše puta bio
netačan. Umesto toga:

1. Izlistaj repo i uzmi folder sa **najvećim brojem** (`v5`, `v6`, … `v16`, …).
2. U njemu otvori **`NASTAVAK.md`**. Taj fajl nosi tačno stanje: šta je urađeno,
   koje su odluke donete, šta je sledeće i šta se čeka od klijenta.
3. Tek onda `PRED-OBJAVU.md` i `README.md` iz istog foldera.

**Ako nađeš bilo šta u ovim uputstvima što se kosi sa `NASTAVAK.md` aktuelne
verzije — veruj `NASTAVAK.md`, pa mi javi da ispravim uputstva.** Ne radi po
uputstvima koja repo opovrgava. To se već jednom desilo: cela runda izmena otišla
je u `v14/` dok je aktuelna bila `v15/`, zato što su uputstva i dalje tvrdila da je
`v14` aktuelna. Signal je postojao (oznaka verzije u uputstvima nije odgovarala
nijednom fajlu) i bio je prijavljen umesto da bude praćen.

**Starije verzije su zamrznute. Ne dirati ih** — ni `v12/`, ni `v13/`, ni `v14/`,
ni bilo koju ispod aktuelne.

## Jezik i ton

- Piši mi na srpskom.
- Bez uvoda tipa „Naravno, evo…". Kreni od stvari.
- Kratko. Kad nešto objašnjavaš, objasni **zašto**, ne samo šta.
- Kad se sa nečim ne slažeš, reci — očekujem mišljenje, ne odobravanje.
- Kad pogrešiš, reci gde i zašto. To je korisnije od izvinjenja.

## Kako radimo

**Ne ispituj me unapred.** Uradi razumnu verziju, isporuči je, pa menjamo ako ne
valja. Pitaj samo kad odluka menja pravac posla, a ne izgled detalja.

**Fajlove upisuj direktno u moj lokalni repo:**
`C:\Users\Mladen\source\repos\lokomoto-koncept\`
Za Eleventy: `C:\Users\Mladen\source\repos\lokomoto-sajt\`

Ja onda u GitHub Desktopu vidim izmene, commitujem i pushujem. Sajt je na GitHub
Pages, na adresi koja prati broj verzije:
`mladen-ai711.github.io/lokomoto-koncept/<verzija>/`

**Uvek mi reci koji fajlovi su se promenili**, i posebno **izdvoj nove fajlove** —
njih u GitHub Desktopu treba čekirati da ne ostanu van commita. Ako novi fajl ne ode,
sajt lokalno radi a na Pages su slike slomljene.

**Nova verzija se pravi pre krupne runde**, ne posle nje. Kopija cele aktuelne
verzije u sledeći broj, pa se radi u novoj. Stara ostaje na svojoj adresi kao
povratna tačka i dve se mogu pokazati jedna do druge. Tako je `v14` nastala iz
`v13`, a `v16` iz `v15`. Pri tome treba:

- promeniti `og:url` u svih 7 HTML fajlova na novi broj,
- promeniti natpis verzije u futeru naslovne,
- dopisati zaglavlje u `README.md` nove verzije (šta je i zašto je nastala),
- upisati oznaku **ZAMRZNUTO** na vrh `NASTAVAK.md` stare verzije,
- osvežiti `NASTAVAK.md` nove verzije (adresa, broj foldera, šta je zamrznuto).

## Tehnička pravila — obavezno

1. **Podigni oznaku verzije** (`?v=`) pri svakoj izmeni stila ili skripte, u
   **svih 7 HTML fajlova** aktuelne verzije. Bez toga browser servira keširanu
   verziju i izgleda kao da izmena nije prošla. **Tekuće oznake ne drži u ovim
   uputstvima** — pročitaj ih iz samih fajlova:
   `grep -ho '\.css?v=[0-9.]*\|\.js?v=[0-9.]*' *.html usluge/*/index.html | sort | uniq -c`

   Isto važi za slike koje menjaju sadržaj a zadržavaju ime. Ako slika dobija novo
   ime, oznaka nije potrebna.

2. **Ne pokreći git komande koje pišu u repo** (`git status` bez
   `--no-optional-locks`, `git checkout`, `git add`). Most ka mom računaru ne sme da
   briše fajlove, pa ostaje `.git/index.lock` koji mi blokira commit. Za čitanje
   stanja koristi `git --no-optional-locks status`.

3. **Proveri rad pre nego što mi isporučiš.** Renderuj stranicu, izmeri, klikni.
   Ne šalji mi nešto što nisi video. Proveravaj na **1440 i na 390 px**, i traži:
   HTTP 200, bez JS grešaka, `scrollWidth == clientWidth`, nijedna slika puknuta.

   **Kad meriš geometriju, prvo pogasi animacije i otkrij `reveal` elemente.**
   Dok `.reveal` nosi `transform`, `getBoundingClientRect()` vraća pomerene
   vrednosti i merenje laže — redovi u mreži izgledaju razbijeno iako nisu.
   Dodaj klasu `is-visible` i `*{transition:none;animation:none}`, pa meri.

4. **Meri, ne procenjuj.** Kad nešto „izgleda krivo", „deluje prazno" ili „premalo se
   vidi" — izmeri pre nego što odlučiš. Ugao, kontrast, oštrinu, broj znakova,
   veličinu u pikselima. Svaki put kad se u ovom projektu oslonilo na oko, ispalo je
   pogrešno. I meri **predmet na koji se gleda, ne samo okvir oko njega.**

   Nekoliko puta je merenje oborilo ono što je oko izabralo — npr. za salu je oko
   biralo svetliji kadar, a merenje kadar četiri puta oštriji.

5. **Pre commita proveri sve reference**, i to **uključujući `data-image`**, ne samo
   `src` i `href`. Panel slike na naslovnoj se pozivaju tim atributom i prva verzija
   takve provere ih je promašila. Proveri i `poster` i `url()`.

6. **Kad menjaš boju preko promenljive, obavezno `grep` po upisanim vrednostima.**
   Prelazak v13 → v14 je remapovao `--teal`, ali je **25 mesta ostalo upisano ručno**
   (`rgba(19,201,179,…)`). Isto važi i sada za limetu: u `v16` `var(--lime)` stoji
   na 71 mesto, a **17 mesta nosi upisanu staru vrednost** `#c9f25f` /
   `rgba(201,242,95,…)`, od čega jedno u `style` atributu u HTML-u. U kodu
   `var(--lime)` i `rgba(201,242,95)` stoje jedno pored drugog i oba izgledaju
   „kao zelena".

7. **Placeholder podaci se uvek označavaju** i upisuju u `README.md` aktuelne
   verzije. Nikad izmišljena imena ljudi bez jasne oznake da su šablon. Na sajtu se
   koriste `<mark class="ph">` i značka `<span class="ph-note">ZA POTVRDU</span>`.

8. **Nikad izmišljeni brojevi ni medicinske tvrdnje.** Ovo je sajt zdravstvene
   ustanove. Tvrdnja bez izvora ili bez klijentove potvrde ide kao placeholder, ne
   kao tekst. Broj izračunat iz dva klijentova broja nije izmišljen — ali se u
   README-u navodi da je izračunat. Isto važi za fotografije: **pogrešno označen
   aparat je tvrdnja, ne dekoracija.**

9. **Podela na `styles.css` i `usluga.css` ostaje.** `styles.css` je osnova,
   `usluga.css` je sloj preko nje. Sve nove i izmenjene stilove piši u
   `usluga.css`, u **numerisanu sekciju sa komentarom koji objašnjava zašto**, sa
   izmerenim brojevima.

   Napomena: ranije je razlog bio taj što je `v12/styles.css` bio zajednički za
   više verzija pa se nije smeo dirati. **Od `v15` svaka verzija ima svoj
   `styles.css`**, pa je ta zabrana istekla — podela ostaje zbog praćenja izmena,
   ne zbog deljenja fajla. Ako se ikad spoje, spajaju se namerno i u jednoj rundi.

## Pravila koja su izvučena iz rada

**Oblik slike mora da odgovara okviru.** Ovo je više puta bilo uzrok „slika ne valja":

| Okvir | Traži |
|---|---|
| `.expectation-photo` — traka „Šta da očekujete" | **pejzaž 16:9 ili šire** (traka je ~2,94:1) |
| `.steps-photo` — uz korake | **4:5 uspravno** (`aspect-ratio` zaključan) |
| `.service-hero-photo` — zaglavlje usluge | **nema zadat odnos, prati odnos slike** |
| `.service-preview` — panel na naslovnoj | menja oblik: 0,89 na 1440 px, 1,51 na 1000 px → izvor **4:3** |

Od 104 fotografije sa snimanja **samo je 8 pejzažnih**. To je usko grlo, ne izuzetak.

**Naslovna ubeđuje, podstranica objašnjava.** Naslovi na naslovnoj su izjava pa
obrt u plavom kurzivu. Na stranicama usluga obrt nose **samo tri sekcije** — koraci,
metode, cene; ostale su tihe etikete. Šest izjava zaredom počne da zvuči kao reklama.

**Odmah lokalni odziv, sa zadrškom skupa promena.** Prelaz mišem koji menja veliki
deo ekrana mora da ima zadršku namere (panel Usluge: 180 ms u `app.js`, mapa tela:
`transition-delay: 120ms`), ali element pod mišem mora da odgovori odmah, kroz CSS.

**Sekcija koja deluje prazno najčešće nema dovoljno teksta, ne loš stil.** Prvo
prebroj znakove pa onda diraj raspored.

**Crta se ne koristi.** Klijent je tražio da nema em-crta („da se zna da nije AI").
Kad rečenici treba obrt, obrt nosi tačka i nova rečenica, ili dvotačka. En-crta u
opsezima (`Pon–Pet`, `08:00–20:00`) nije interpunkcija i ostaje.

## Gde je šta

Dva repoa, oba povezana kao folderi. Povezan je i **`E:\Lokomoto`** — 104 fotografije
sa snimanja od 27.08, kontakt-listovi po grupama u `_pregled/`.

**`lokomoto-koncept`** — koncept i tekući rad

- **Aktuelna je verzija sa najvećim brojem.** Od `v15` naviše je **samostalna**:
  ima svoj `styles.css`, `usluga.css`, `favicon.svg` i ceo `assets/`
  (slike, video, fontovi). Ne vuče ništa iz `v8/`, `v11/` ni `v12/`.
- `<verzija>/NASTAVAK.md` — tačno stanje, čita se prvo
- `<verzija>/PRED-OBJAVU.md` — pitanja za klijenta, `robots.txt`, `sitemap.xml`,
  mapa migracije sa starog sajta, postupak za dan objave
- `<verzija>/README.md` — ceo istorijat izmena, uključujući greške napravljene usput
- Sve ispod aktuelne verzije je zamrznuto. `v5`–`v14` vuku resurse iz `v8/assets/`,
  pa se `v8/` ne dira ni zbog njih.

**`lokomoto-sajt`** — Eleventy, budući pravi sajt. **Nije još projekat:** nema
`package.json` ni konfiguraciju, `_includes/` je prazan, `sadrzaj/*.yml` je izvučen
iz v12 i zaostaje više rundi. Detalji u `claude/12-predaja-eleventy.md`.

## Dokumenti projekta

Čitaju se po potrebi, ne svi odjednom. Redosled kad treba kontekst:

`claude/17-loom-klijent-2.md` (druga runda pregleda od klijenta: boje, harmonika,
ceo tekst sajta) → `claude/15-loom-klijent-1.md` → `claude/14-dizajn-runda-i-mobilni-hero.md`
→ `claude/13-stranice-usluga.md` → `3-podaci-za-popuniti.md` → `2-dizajn-sistem.md`

**`2-dizajn-sistem.md` je delimično prevaziđen.** Tvrdi da su boje rešene i da
nisu otvoreno pitanje. Klijent je zelenu osporio dva puta, pa je otvorena.

## Šta sledi

**Runda boja i strukture**, po zahtevu klijenta iz druge runde pregleda. Redosled i
razlozi su u `claude/17-loom-klijent-2.md`, odeljak 8. Ukratko: lice teksta („ti"
ili „vi") blokira prepis tekstova, pa boje, pa harmonika umesto dugog skrola.

**Objava bez gubitka pozicija.** Mapa migracije sa živog `lokomoto.rs` je gotova i
stoji u `PRED-OBJAVU.md`. GitHub Pages ne ume preusmerenja, pa je prelazak na drugi
hosting (Cloudflare Pages) prvi korak i sve ostalo zavisi od njega.

**Stranice po tegobama** su faza dva. Odlučeno: jedna stranica po tegobi, sa
menijem, bez posebnog duplikata za reklame.

**Eleventy** tek posle toga. `claude/12-predaja-eleventy.md` za stanje repoa i za
sudar oko cenovnika koji mora da se presudi pre prvog šablona.

## Šta blokira objavu

Tekući spisak je u `<verzija>/NASTAVAK.md`, odeljak „Čeka klijenta", i u
`PRED-OBJAVU.md`. Stalno otvoreno:

- **Lice teksta** — „ti" ili „vi". Pitanje je kod Novaka, blokira prepis tekstova.
- **Kupice** (`L-13`, `L-14`) i **perkusioni pištolj** (`L-15`) — rade li se i pod
  koju uslugu idu. Pitano više puta, bez odgovora.
- **Fotografije** za krioterapiju i limfnu drenažu — ne postoje ni na jednom od 104
  kadra. Novak je rekao da šalje snimke za NeuFit, Normatec i GameReady.
- **Medicinski sadržaj** — opisi procedura moraju proći kroz nekog iz struke.
- **Kontakt forma ne šalje** — otvara e-mail program posetioca. Pravo rešenje je
  servis za forme, uz prelazak na hosting sa buildom.
- **`noindex` se skida na dan objave**, kao poslednji korak. Sada stoji namerno na
  svih 7 stranica.
