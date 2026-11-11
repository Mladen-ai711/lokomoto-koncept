# Predaja sajta — za Duleta

Sastavljeno 11.11.2026. Sve što piše ispod je **izmereno tog dana**, nije
prepisano iz ranijih beleški. Gde je nešto nepoznato, tako i piše.

---

## 1. Gde sajt sada stoji

| | |
|---|---|
| Adresa uživo | `https://mladen-ai711.github.io/lokomoto-koncept/v16/` |
| Repozitorijum | `https://github.com/Mladen-ai711/lokomoto-koncept` (javan) |
| Grana | `main`, folder `v16/` |
| Hosting | GitHub Pages |
| Veličina | 102 fajla, 97 MB (od toga 96 MB video i slike) |

**Radna verzija je `v16/`.** Folderi `v10`–`v15` su starije verzije i ne diraju
se — stoje samo zbog istorije.

Pošto je repozitorijum javan, ne mora ništa da se šalje: dovoljan je link, pa
„Code → Download ZIP". Uz ovo ide i ZIP samo foldera `v16`, ako je lakše.

---

## 2. Šta je zatečeno na domenu — izmereno 11.11.2026

Ovo je najvažniji deo, jer **nije onako kako smo pretpostavljali.**

| Šta | Vrednost |
|---|---|
| `lokomoto.rs` i `www` | `67.209.118.194` |
| Šta tamo radi | WordPress, LiteSpeed, PHP 7.4.33 |
| **DNS serveri** | **`ns1`–`ns4.supercp.com`** |
| `kviz.lokomoto.rs` | `cdn.webflow.com` — kviz je na Webflow-u |
| Pošta (MX) | `mail.lokomoto.rs` → **isti server, `67.209.118.194`** |

### Tri stvari koje iz ovoga slede

**1. DNS se ne menja u GoDaddy-ju.** Domen jeste kupljen tamo, ali imena servera
pokazuju na `supercp.com` — to je panel hostinga na kom stoji WordPress. Dok je
tako, GoDaddy-jeva DNS strana se ne gleda; zapisi se menjaju u tom panelu. Druga
mogućnost je da se imena servera u GoDaddy-ju vrate na GoDaddy i da se DNS vodi
odande, ali to je odluka, ne usputna izmena.

**2. Pošta je na istom serveru kao sajt.** `mail.lokomoto.rs` pokazuje na istu
adresu. Ako se DNS prebaci negde drugde a MX zapis se ne prenese, **ordinaciji
prestaje da radi mejl**, a to se primeti tek kad neko ne dobije poruku. MX i
`mail` zapis moraju da se prepišu pre prebacivanja.

**3. Kviz je na Webflow-u, na svom poddomenu.** Ne dira se, ali njegov zapis mora
da preživi selidbu. Na sajtu postoji 11 veza ka njemu.

---

## 3. Zašto GitHub Pages nije krajnje odredište

GitHub Pages **ne ume 301 preusmerenja.** Nije stvar podešavanja — ta usluga to
nema.

Stari `lokomoto.rs` ima **41 adresu u mapi sajta** plus `/blog/` i tri autorske
stranice. Deo njih rangira. Ako domen sedne na Pages, svaka stara adresa koja
nema par na novom sajtu daje 404 i ispada iz pretrage.

Preporuka iz projekta je **Cloudflare Pages** — besplatan, ume preusmerenja, brz.
Može i bilo šta drugo što ume 301. **To je prva odluka, sve ostalo visi o njoj.**

---

## 4. Gotov plan migracije — ne pravi se iznova

U `v16/PRED-OBJAVU.md`, odeljak 9, stoji mapa migracije urađena sa živog starog
sajta. Ukratko:

- **A** — sedam stranica se poklapaju i prolaze bez ijednog preusmerenja, ako
  uslužne stranice siđu sa `/usluge/ime/` na `/ime/` i ako se `manualna-terapija`
  preimenuje u `manuelna-terapija` (stari sajt rangira na „manuelna")
- **B** — devet starih adresa bez para, sa spiskom kuda idu
- **C** — četiri stranice koje novom sajtu nedostaju: `/o-nama/`, `/cenovnik/`,
  `/kontakt/`, `/tim/`
- **D** — 16 stranica o tegobama i 5 članaka **ostaju žive i nepromenjene**
- **E** — `/footer/`, `/hvala/`, `/author/…` samo da se sklone iz pretrage
- **G** — redosled koraka na dan objave

---

## 5. Šta se menja u kodu na dan objave

| Šta | Sada | Treba |
|---|---|---|
| `<meta name="robots">` | `noindex, nofollow` na svih 10 stranica | obrisati, **kao poslednji korak** |
| `og:url` | `mladen-ai711.github.io/…` | pravi domen |
| `og:image` | relativna putanja | puna adresa na pravom domenu |
| `canonical` | namerno ga nema | dodati tek kad se adrese zaključaju |
| `robots.txt` i `sitemap.xml` | stoje u `v16/`, neaktivni | rade tek iz korena domena |

**`noindex` mora da ostane dok je sajt na github.io.** Skidanje bi indeksiralo
koncept na pogrešnom domenu i napravilo duplikat pravom sajtu.

**Mapa sajta je nepotpuna.** U njoj je sedam adresa, a u međuvremenu su napravljene
još dve: `/usluge/acl/` i `/politika-privatnosti/`. ACL stranica je napravljena za
reklame — treba odluka da li ide i u pretragu. Dok se ne odluči, ne dodajem je.

---

## 6. Merenje — da se ne pokvari u selidbi

Na sajtu radi Metino merenje, ID `1428426252619099`, zajedno sa banerom za
kolačiće (`v16/kolacici.js`). Podešeno je tako da merenje kreće čim se stranica
otvori, a „Odbijam" ga zaustavlja. Lead događaj je u kodu, na ACL stranici.

Dve stvari pri selidbi:

- skripta se učitava sa `kolacici.js?v=1.3` — **pri svakoj izmeni tog fajla broj
  mora da se podigne**, inače posetiocima ostane stara verzija iz keša
- kada domen bude pravi, u Ads Manageru treba dodati novi domen kod verifikacije,
  inače merenje ćuti

---

## 7. Šta nemam i mora da dođe od vas

Ovo nisu podaci do kojih mogu da dođem iz koda:

1. **Pristup GoDaddy nalogu** — ko ga drži i na koji mejl glasi
2. **Pristup panelu hostinga** (`supercp.com`) — tu se stvarno vodi DNS
3. **Ko održava WordPress** na starom sajtu
4. **Gde je Webflow nalog** za kviz
5. Da li mejl `@lokomoto.rs` koristi još neko osim ordinacije

Lozinke ne treba slati meni ni u jednoj poruci — potrebne su Duletu, i to kroz
nešto sigurnije od WhatsApp-a.

---

## 8. Jedna sitnica sa starog sajta

Na staroj stranici dijagnostike stoji **2013** kao godina osnivanja i odatle se
prepisalo u imenike. Ispraviti na starom sajtu **pre** selidbe, pa proći imenike —
posle selidbe ta stranica više neće postojati da se ispravi.
