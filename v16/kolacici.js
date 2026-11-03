/* ═════════════════════════════════════════════════════════════
   BANER ZA KOLAČIĆE I MERENJE — 03.11.2026
   ═════════════════════════════════════════════════════════════

   MERENJE KREĆE ČIM SE STRANICA OTVORI, ne čeka odgovor na baner.

   Tražio Nikola, uz obrazloženje da Srbija nije u Evropskoj uniji. Rečeno mu
   je da je naš zakon iz 2018. pisan po ugledu na evropski i traži isti osnov,
   i da je ovo ordinacija — ko gleda ACL stranicu najverovatnije ima problem
   s kolenom, a to je podatak o zdravlju. Mladen je posle toga potvrdio da se
   ide tako. Upisano da se zna da nije previd nego odluka.

   „Odbijam" zato ne sprečava slanje unapred nego ga zaustavlja od tog
   trenutka, preko fbq("consent", "revoke") — Metin zvaničan način. Ko je
   jednom odbio, pri sledećoj poseti ne dobija merenje uopšte. Ono što je
   otišlo pre odgovora ne može da se povuče, i politika privatnosti to kaže
   izričito.

   LEAD DOGAĐAJ NIJE OVDE nego u acl/index.html, odmah ispod ove skripte,
   jer se oslanja na fbq koji nastaje ovde. Pravi ga samo kod — ako se ikad
   doda i u Ads Manageru, isti klik će se brojati dvaput.

   Odluka se pamti u localStorage, ne u kolačiću — kolačić bi bio sam po sebi
   ono o čemu pitamo. U privatnom režimu localStorage ume da baci grešku, pa
   je sve u try/catch: tada se odluka ne pamti i baner se pojavi ponovo.
 */

(function () {
  "use strict";

  var KLJUC = "lokomoto-kolacici";
  var PIKSEL = "1428426252619099";

  function procitaj() {
    try {
      return window.localStorage.getItem(KLJUC);
    } catch (e) {
      return null;
    }
  }

  function zapisi(vrednost) {
    try {
      window.localStorage.setItem(KLJUC, vrednost);
    } catch (e) {
      /* privatni režim — odluka se ne pamti, baner se vraća sledeći put */
    }
  }

  function ucitajPiksel() {
    if (window.fbq) return;

    /* zvanični Meta isečak */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", PIKSEL);
    window.fbq("track", "PageView");
  }

  /* Put do politike privatnosti se ne upisuje ručno nego čita iz podnožja,
     jer dubina nije ista na svim stranicama. */
  function putPolitike() {
    var v = document.querySelector('a[href*="politika-privatnosti"]');
    return v ? v.getAttribute("href") : "politika-privatnosti/";
  }

  function prikaziBaner() {
    if (document.querySelector(".kolacici")) return;

    var okvir = document.createElement("div");
    okvir.className = "kolacici";
    okvir.setAttribute("role", "dialog");
    okvir.setAttribute("aria-label", "Izbor o kolačićima");

    var tekst = document.createElement("p");
    tekst.className = "kolacici-tekst";
    /* Tekst je Nikolin, 03.11. — kraći i uobičajeniji od pređašnjeg.
       Šta se tačno beleži i kome odlazi piše u politici privatnosti,
       na koju vodi veza u istoj rečenici. */
    tekst.innerHTML =
      "Ovaj sajt koristi kolačiće kako bi unapredio vaše iskustvo. " +
      "Prihvatite ili odbijte. " +
      'Detaljnije u <a href="' + putPolitike() + '">politici privatnosti</a>.';

    var dugmad = document.createElement("div");
    dugmad.className = "kolacici-dugmad";

    var da = document.createElement("button");
    da.type = "button";
    da.className = "kolacici-da";
    da.textContent = "Prihvatam";

    var ne = document.createElement("button");
    ne.type = "button";
    ne.className = "kolacici-ne";
    ne.textContent = "Odbijam";

    da.addEventListener("click", function () {
      zapisi("da");
      /* obično je već učitan; ovo hvata onoga ko je ranije odbio pa se
         predomislio preko stranice sa politikom privatnosti */
      ucitajPiksel();
      if (window.fbq) window.fbq("consent", "grant");
      okvir.remove();
    });

    ne.addEventListener("click", function () {
      zapisi("ne");
      /* zaustavlja slanje od ovog trenutka; ono pre toga je već otišlo */
      if (window.fbq) window.fbq("consent", "revoke");
      okvir.remove();
    });

    dugmad.appendChild(ne);
    dugmad.appendChild(da);
    okvir.appendChild(tekst);
    okvir.appendChild(dugmad);
    document.body.appendChild(okvir);
  }

  /* Sa stranice politike privatnosti odluka može da se promeni: dugme sa
     oznakom data-kolacici-ponovo briše zapamćeno i vraća baner. */
  function vezaZaPromenu() {
    var d = document.querySelector("[data-kolacici-ponovo]");
    if (!d) return;
    d.addEventListener("click", function () {
      try {
        window.localStorage.removeItem(KLJUC);
      } catch (e) {}
      prikaziBaner();
    });
  }

  function kreni() {
    var odluka = procitaj();

    /* jedini koji ne dobija merenje je onaj ko je već rekao ne */
    if (odluka !== "ne") ucitajPiksel();
    if (!odluka) prikaziBaner();

    vezaZaPromenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", kreni);
  } else {
    kreni();
  }
})();
