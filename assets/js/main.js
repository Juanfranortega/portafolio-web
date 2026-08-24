"use strict";

const documentRoot = document.documentElement;
const menuButton = document.querySelector("#menu-toggle");
const navigationList = document.querySelector("#nav-list");
const navigationLinks = [...document.querySelectorAll(".nav-link")];
const themeButton = document.querySelector("#theme-toggle");
const progressBar = document.querySelector("#scroll-progress-bar");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const partialTabs = [...document.querySelectorAll('[role="tab"][data-partial]')];
const partialPanels = [...document.querySelectorAll('[role="tabpanel"]')];

function setTheme(theme) {
  documentRoot.dataset.theme = theme;
  themeButton?.setAttribute("aria-pressed", String(theme === "dark"));

  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute("content", theme === "dark" ? "#0b1020" : "#f5f6fb");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(savedTheme || (systemPrefersLight ? "light" : "dark"));
}

function toggleTheme() {
  const nextTheme = documentRoot.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
}

function closeMenu() {
  navigationList?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menú de navegación");
}

function toggleMenu() {
  const isOpen = navigationList?.classList.toggle("open") ?? false;
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  menuButton?.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
}

function updateScrollProgress() {
  const scrollableHeight = documentRoot.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function initializeSectionObserver() {
  const sections = [...document.querySelectorAll("main section[id], header[id]")];
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (!visibleEntry) return;

      navigationLinks.forEach((link) => {
        const matchesSection = link.getAttribute("href") === `#${visibleEntry.target.id}`;
        link.classList.toggle("active", matchesSection);
      });
    },
    { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initializeRevealAnimation() {
  const elements = [...document.querySelectorAll(".reveal")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function activatePartial(selectedTab, moveFocus = false) {
  const targetId = selectedTab.getAttribute("aria-controls");

  partialTabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });

  partialPanels.forEach((panel) => {
    const isSelected = panel.id === targetId;
    panel.hidden = !isSelected;
    panel.classList.toggle("active", isSelected);
  });

  if (moveFocus) selectedTab.focus();
}

function initializePartialTabs() {
  if (!partialTabs.length) return;

  partialTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activatePartial(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % partialTabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + partialTabs.length) % partialTabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = partialTabs.length - 1;
      else return;

      event.preventDefault();
      activatePartial(partialTabs[nextIndex], true);
    });
  });
}

function validateContactConfiguration(event) {
  const action = contactForm?.getAttribute("action") || "";
  const isPlaceholder = action.includes("TU_CORREO") || action.includes("EJEMPLO.COM");

  if (isPlaceholder) {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent =
        "Antes de publicar, configura tu correo en la propiedad action del formulario.";
    }
    return;
  }

  if (formStatus) formStatus.textContent = "Enviando mensaje…";
  const submitButton = contactForm?.querySelector('button[type="submit"]');
  submitButton?.setAttribute("disabled", "true");
}

menuButton?.addEventListener("click", toggleMenu);
themeButton?.addEventListener("click", toggleTheme);
navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
contactForm?.addEventListener("submit", validateContactConfiguration);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) closeMenu();
});

const currentYearElement = document.querySelector("#current-year");
if (currentYearElement) currentYearElement.textContent = new Date().getFullYear();
loadTheme();
updateScrollProgress();
initializeSectionObserver();
initializeRevealAnimation();
initializePartialTabs();
