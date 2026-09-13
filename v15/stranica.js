// Zajednička skripta podstranica (usluge, lista usluga).
// Naslovna ima svoju — app.js — jer joj treba i video i panel usluga.
(() => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");

  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Zatvori meni" : "Otvori meni");
      document.body.classList.toggle("menu-open", open);
    });
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [...document.querySelectorAll(".reveal")];

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
  } else {
    document.documentElement.classList.add("motion-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    items.forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min((index % 4) * 55, 165)}ms`);
      io.observe(item);
    });

    // Sigurnosna mreža — isto pravilo kao u v12/app.js: sve što je na ekranu
    // mora da bude vidljivo i ako posmatrač zakaže. Bez ovoga se dešava da
    // prva sekcija ostane nevidljiva.
    const failsafe = () => {
      items.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const box = item.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };
    window.addEventListener("scroll", failsafe, { passive: true });
    window.addEventListener("resize", failsafe);
    window.addEventListener("load", failsafe);
    document.addEventListener("visibilitychange", failsafe);
    window.setTimeout(failsafe, 1200);
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = String(new Date().getFullYear());
  });
})();
