(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const video = document.querySelector("[data-hero-video]");
  const videoToggle = document.querySelector("[data-video-toggle]");
  const videoIcon = videoToggle?.querySelector(".video-toggle-icon");
  const videoLabel = videoToggle?.querySelector(".video-toggle-label");

  const banner = document.querySelector("[data-banner]");

  const updateHeader = () => {
    const scrolled = window.scrollY > 24;
    header?.classList.toggle("is-scrolled", scrolled);
    banner?.classList.toggle("is-hidden", scrolled);
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

  serviceItems.forEach((item) => {
    const preload = new Image();
    preload.src = item.dataset.image;
  });

  const activateService = (item) => {
    if (!item || item.classList.contains("is-active")) return;

    serviceItems.forEach((candidate) => {
      const active = candidate === item;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });

    const updatePreview = () => {
      if (!serviceImage) return;
      serviceImage.src = item.dataset.image;
      serviceImage.alt = item.dataset.alt;
      if (serviceLabel) serviceLabel.textContent = item.dataset.previewLabel;
      if (serviceTitle) {
        serviceTitle.textContent = item.querySelector("strong")?.textContent || "";
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
    item.addEventListener("click", () => activateService(item));
    item.addEventListener("focus", () => activateService(item));
    item.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover)").matches) activateService(item);
    });
  });

  const approachSteps = [...document.querySelectorAll("[data-approach-step]")];
  const approachImage = document.querySelector("[data-approach-image]");
  const approachIndex = document.querySelector("[data-approach-index]");

  approachSteps.forEach((step) => {
    const preload = new Image();
    preload.src = step.dataset.image;
  });

  const activateApproach = (step) => {
    if (!step || step.classList.contains("is-open")) return;

    approachSteps.forEach((candidate) => {
      const open = candidate === step;
      candidate.classList.toggle("is-open", open);
      candidate
        .querySelector(".approach-step-trigger")
        ?.setAttribute("aria-expanded", String(open));
    });

    if (approachIndex) {
      const position = String(approachSteps.indexOf(step) + 1).padStart(2, "0");
      const total = String(approachSteps.length).padStart(2, "0");
      approachIndex.textContent = `${position} / ${total}`;
    }

    const updateImage = () => {
      if (!approachImage) return;
      approachImage.src = step.dataset.image;
      approachImage.alt = step.dataset.alt || "";
      approachImage.classList.remove("is-changing");
    };

    if (reducedMotion.matches || !approachImage) {
      updateImage();
      return;
    }

    approachImage.classList.add("is-changing");
    window.setTimeout(updateImage, 180);
  };

  approachSteps.forEach((step) => {
    step
      .querySelector(".approach-step-trigger")
      ?.addEventListener("click", () => activateApproach(step));
  });

  const revealItems = [...document.querySelectorAll(".reveal")];

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
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
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
})();
