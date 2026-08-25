(() => {
  // Osvezavanje stranice ne sme da vrati posetioca na mesto gde je stao —
  // hero i naslov moraju da se vide od pocetka. Sidra (#usluge) i dalje rade.
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const goToTop = () => {
    if (!window.location.hash) window.scrollTo(0, 0);
  };

  goToTop();
  window.addEventListener("load", goToTop);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) goToTop();
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
  const videoToggle = document.querySelector("[data-video-toggle]");
  const videoIcon = videoToggle?.querySelector(".video-toggle-icon");
  const videoLabel = videoToggle?.querySelector(".video-toggle-label");

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

  const setVideoState = (playing) => {
    if (!video || !videoToggle || !videoIcon || !videoLabel) return;

    if (playing) {
      const playPromise = video.play();
      playPromise?.catch(() => setVideoState(false));
      videoToggle.setAttribute("aria-label", "Pauziraj video");
      videoToggle.setAttribute("aria-pressed", "false");
      videoIcon.textContent = "Ⅱ";
      videoLabel.textContent = "Pauza";
    } else {
      video.pause();
      videoToggle.setAttribute("aria-label", "Pokreni video");
      videoToggle.setAttribute("aria-pressed", "true");
      videoIcon.textContent = "▶";
      videoLabel.textContent = "Pokreni";
    }
  };

  if (video && videoToggle) {
    if (reducedMotion.matches) setVideoState(false);

    videoToggle.addEventListener("click", () => {
      setVideoState(video.paused);
    });

    reducedMotion.addEventListener?.("change", (event) => {
      if (event.matches) setVideoState(false);
    });
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

  serviceItems.forEach((item) => {
    // Klik sada otvara stranicu usluge — panel se samo osvežava usput.
    item.addEventListener("click", () => activateService(item));
    item.addEventListener("focus", () => activateService(item));
    item.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover)").matches) activateService(item);
    });
  });

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
