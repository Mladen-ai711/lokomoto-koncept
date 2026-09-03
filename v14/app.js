(() => {
  // Osvezavanje stranice ne sme da vrati posetioca na mesto gde je stao —
  // hero i naslov moraju da se vide od pocetka. Sidra (#usluge) i dalje rade.
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Osvezavanje i dalje vraca na vrh. Ali povratak sa stranice usluge nije
  // osvezavanje — posetilac je otisao SA nekog mesta i ocekuje da se vrati na
  // njega. Zato se pri odlasku zapamti gde je stao, a pri povratku se to
  // primeni jednom i potrosi. Kljuc zivi u sessionStorage, pa nestaje sa
  // zatvaranjem kartice.
  const KLJUC_POVRATKA = "lokomoto:povratak";

  const procitajPovratak = () => {
    try {
      const zapis = window.sessionStorage.getItem(KLJUC_POVRATKA);
      if (!zapis) return null;
      window.sessionStorage.removeItem(KLJUC_POVRATKA);
      const podaci = JSON.parse(zapis);
      return typeof podaci?.y === "number" ? podaci : null;
    } catch (greska) {
      return null;
    }
  };

  let povratak = procitajPovratak();

  const postaviPoziciju = () => {
    if (window.location.hash) return;

    if (!povratak) {
      window.scrollTo(0, 0);
      return;
    }

    const sekcija = povratak.id ? document.getElementById(povratak.id) : null;

    // Zapamcena je i tacna visina i sekcija u kojoj je posetilac bio. Ako se
    // raspored u medjuvremenu pomerio (ucitane slike, drugi ekran), tacna
    // visina vise ne znaci nista — tada se ide na sekciju.
    if (sekcija) {
      const vrh = sekcija.getBoundingClientRect().top + window.scrollY;
      const dno = vrh + sekcija.offsetHeight;
      if (povratak.y < vrh - 240 || povratak.y > dno) {
        sekcija.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }

    window.scrollTo(0, povratak.y);
  };

  postaviPoziciju();
  window.addEventListener("load", postaviPoziciju);
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    povratak = procitajPovratak() || povratak;
    postaviPoziciju();
  });

  // Zapisuje se pri svakom odlasku na drugu stranicu ovog sajta — mapa tela,
  // panel usluga, futer, meni. Sidra (#) su izuzeta: ona ne napustaju stranicu.
  document.addEventListener("click", (event) => {
    const veza = event.target.closest("a[href]");
    if (!veza) return;

    const adresa = veza.getAttribute("href") || "";
    if (!adresa || adresa.startsWith("#") || /^(https?:|tel:|mailto:)/i.test(adresa)) return;
    if (veza.target === "_blank") return;

    // Pamti se sekcija koju je posetilac GLEDAO, ne ona u kojoj link stoji.
    // Nije isto: futer je van svake sekcije, a i link se moze aktivirati
    // tastaturom dok je ekran negde drugde. Sekcija sluzi samo kao rezerva
    // ako se raspored u medjuvremenu pomeri.
    const citanje = window.scrollY + window.innerHeight * 0.4;
    let sekcija = null;
    document.querySelectorAll("section[id]").forEach((kandidat) => {
      if (kandidat.getBoundingClientRect().top + window.scrollY <= citanje) sekcija = kandidat;
    });

    try {
      window.sessionStorage.setItem(
        KLJUC_POVRATKA,
        JSON.stringify({ y: Math.round(window.scrollY), id: sekcija ? sekcija.id : "" }),
      );
    } catch (greska) {
      /* privatni rezim bez sessionStorage — povratak jednostavno ne radi */
    }
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Klik na stavku menija ne ostavlja #sidro u adresi. Bez ovoga bi svako
  // sledece osvezavanje vracalo posetioca na tu sekciju umesto na vrh.
  // Deljeni linkovi sa #sidrom i dalje rade normalno pri otvaranju.
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href").slice(1);
    event.preventDefault();
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  });
  const compactInteraction = window.matchMedia("(max-width: 820px), (pointer: coarse)");
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const video = document.querySelector("[data-hero-video]");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  const setMenu = (open) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Zatvori meni" : "Otvori meni");
    mobileNav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  menuToggle?.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) setMenu(false);
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // Dugme za pauzu je sklonjeno (klijentova primedba, druga runda). Video
  // ide sam, bez zvuka, u petlji. Posetiocima koji su u sistemu tražili
  // manje animacije i dalje ga zaustavljamo — to je pristupačnost, ne opcija.
  if (video) {
    const holdVideo = (stop) => {
      if (stop) {
        video.pause();
      } else {
        video.play()?.catch(() => {});
      }
    };

    if (reducedMotion.matches) holdVideo(true);
    reducedMotion.addEventListener?.("change", (event) => holdVideo(event.matches));
  }

  const serviceItems = [...document.querySelectorAll("[data-service]")];
  const serviceImage = document.querySelector("[data-service-image]");
  const serviceLabel = document.querySelector("[data-service-label]");
  const serviceTitle = document.querySelector("[data-service-title]");
  const serviceFor = document.querySelector("[data-service-for]");
  const serviceMeta = document.querySelector("[data-service-meta]");

  serviceItems.forEach((item) => {
    const preload = new Image();
    preload.src = item.dataset.image;
  });

  const activateService = (item) => {
    if (!item || item.classList.contains("is-active")) return;

    serviceItems.forEach((candidate) => {
      const active = candidate === item;
      candidate.classList.toggle("is-active", active);
      candidate.toggleAttribute("data-current", active);
    });

    const updatePreview = () => {
      if (!serviceImage) return;
      serviceImage.src = item.dataset.image;
      serviceImage.alt = item.dataset.alt;
      if (serviceLabel) serviceLabel.textContent = item.dataset.previewLabel;
      if (serviceTitle) {
        serviceTitle.textContent = item.querySelector("strong")?.textContent || "";
      }
      if (serviceFor) {
        serviceFor.textContent = item.dataset.for || "";
      }
      if (serviceMeta) {
        serviceMeta.replaceChildren(
          ...(item.dataset.meta || "")
            .split("|")
            .filter(Boolean)
            .map((label) => {
              const li = document.createElement("li");
              li.textContent = label.trim();
              return li;
            }),
        );
      }
      serviceImage.classList.remove("is-changing");
    };

    if (reducedMotion.matches || !serviceImage) {
      updatePreview();
      return;
    }

    serviceImage.classList.add("is-changing");
    window.setTimeout(updatePreview, 180);
  };

  // Prelaz mišem je do sada palio panel odmah, na `pointerenter`. Kad se
  // mišem pređe preko svih pet stavki, panel se promeni pet puta u sekundi:
  // slika se izbledi i vrati, natpis, opis i tri čipa se prepišu — svaki put.
  // Izmereno: prelaz preko liste za 300 ms izazove 4 promene panela.
  //
  // Zato ista zaštita koju mapa tela već ima (`transition-delay: 120 ms`),
  // samo ovde mora kroz JS jer promenu vodi skripta, ne CSS: panel se pali
  // tek kad se pokazivač ZADRŽI na stavci. Prelet ništa ne pali.
  //
  // 180 ms je usklađeno sa izbledivanjem slike (`is-changing`, isto 180 ms) —
  // kraće od toga i dalje uspe da uhvati prelet, duže se oseti kao kašnjenje.
  const ZADRSKA_PRELAZA = 180;
  let odbrojavanje = null;

  const otkaziOdbrojavanje = () => {
    if (odbrojavanje === null) return;
    window.clearTimeout(odbrojavanje);
    odbrojavanje = null;
  };

  serviceItems.forEach((item) => {
    // Klik i tastatura pale odmah — tu nema nedoumice šta je posetilac hteo.
    item.addEventListener("click", () => {
      otkaziOdbrojavanje();
      activateService(item);
    });
    item.addEventListener("focus", () => {
      otkaziOdbrojavanje();
      activateService(item);
    });

    item.addEventListener("pointerenter", () => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      otkaziOdbrojavanje();
      odbrojavanje = window.setTimeout(() => {
        odbrojavanje = null;
        activateService(item);
      }, ZADRSKA_PRELAZA);
    });

    item.addEventListener("pointerleave", otkaziOdbrojavanje);
  });

  // Tri koraka „Naš pristup" su do 03.09.2026 bila skrol-vodjena harmonika
  // simulirana klasama (is-current/is-passed), sa linijom koja se punila
  // prema poziciji skrola. Sada su to prava <details>/<summary> polja
  // (isti obrazac kao „Česta pitanja"), pa otvaranje/zatvaranje i
  // ekskluzivnost (jedan otvoren) radi brauzer sam, bez JS-a. Fotografija
  // uz otvoren korak i ispuna linije rade preko CSS :has() — vidi
  // usluga.css, sekcija 35.

  const revealItems = [...document.querySelectorAll(".reveal")];

  if (!reducedMotion.matches && !compactInteraction.matches && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min((index % 4) * 55, 165)}ms`);
      revealObserver.observe(item);
    });

    // Sigurnosna mreza: sve sto je na ekranu mora biti vidljivo,
    // bez obzira da li je posmatrac (IntersectionObserver) reagovao.
    const revealFailsafe = () => {
      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const box = item.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };
    window.addEventListener("scroll", revealFailsafe, { passive: true });
    window.addEventListener("resize", revealFailsafe);
    window.addEventListener("load", revealFailsafe);
    document.addEventListener("visibilitychange", revealFailsafe);
    window.setTimeout(revealFailsafe, 1200);
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector("[data-contact-form]");
  const contactFormStatus = document.querySelector("[data-contact-form-status]");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      if (contactFormStatus) {
        contactFormStatus.textContent = "Molimo popunite obavezna polja.";
      }
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = `Upit sa Lokomoto sajta — ${name}`;
    const body = [
      `Ime i prezime: ${name}`,
      `Telefon: ${phone}`,
      `E-mail: ${email || "Nije naveden"}`,
      `Vrsta pregleda: ${service}`,
      "",
      "Razlog javljanja:",
      message || "Nije naveden",
    ].join("\n");
    const mailto = `mailto:lokomoto.centar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (contactFormStatus) {
      contactFormStatus.textContent = "Otvaramo pripremljenu poruku u vašoj e-mail aplikaciji...";
    }

    window.location.href = mailto;
  });
})();
