/* ══════════════════════════════════════════════════════════════
   BANER ZA KOLAČIĆE I META PIKSEL — 03.11.2026
   ══════════════════════════════════════════════════════════════

   Nikola je poslao piksel 1428426252619099 i tražio Lead događaj na klik
   ka Alpinu. Mladen je odlučio: prvo baner, pa tek onda piksel.

   Zato piksel NE postoji dok posetilac ne pritisne „Prihvatam". Dok god
   nije pritisnuo, na sajtu nema nijednog kolačića ni zahteva ka Facebook-u.
   To je i ono što politika privatnosti obećava.

   Odluka se pamti u localStorage, ne u kolačiću — kolačić bi bio sam po
   sebi ono što pitamo da li smemo da postavimo. U privatnom režimu
   localStorage ume da baci grešku, pa je sve u try/catch: ako ne radi,
   baner se pojavi ponovo, a piksel se ne učitava. To je bezbedniji ishod.

   Odsečeni deo Nikolinog skripta („if (a.ta…") nije potreban: sve veze ka
   Alpinu imaju target="_blank", pa se stranica ne zatvara i događaj stigne
   da ode pre nego što se bilo šta promeni. */

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

  /* Lead na klik ka Alpinu. Slušalac stoji uvek, ali ne radi ništa dok
     piksel ne postoji — znači ni ovde nema praćenja bez pristanka. */
  document.addEventListener(
    "click",
    function (e) {
      if (!window.fbq || !e.target || !e.target.closest) return;
      var a = e.target.closest('a[href*="alpinbook.com"]');
      if (!a) return;
      window.fbq("track", "Lead", {
        content_name: "Zakazi pregled",
        content_category: window.location.pathname,
      });
    },
    true
  );

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
    tekst.innerHTML =
      "Koristimo Meta piksel da bismo videli koje reklame dovode ljude na sajt. " +
      "On postavlja kolačiće i beleži koje stranice gledate. " +
      'Više u <a href="' + putPolitike() + '">politici privatnosti</a>.';

    var dugmad = document.createElement("div");
    dugmad.className = "kolacici-dugmad";

    var da = document.createElement("button");
    da.type = "button";
    da.className = "kolacici-da";
    da.textContent = "Prihvatam";

    var ne = document.createElement("button");
    ne.type = "button";
    ne.className = "kolacici-ne";
    ne.textContent = "Ne, hvala";

    da.addEventListener("click", function () {
      zapisi("da");
      ucitajPiksel();
      okvir.remove();
    });

    ne.addEventListener("click", function () {
      zapisi("ne");
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
    if (odluka === "da") ucitajPiksel();
    else if (odluka !== "ne") prikaziBaner();
    vezaZaPromenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", kreni);
  } else {
    kreni();
  }
})();
