const words = ["clarity", "human-centered design", "accessibility"];
const rotatingWordEl = document.getElementById("rotating-word");
const toggleBtn = document.getElementById("tag-toggle");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentWordIndex = 0;
let intervalId = null;
let isPaused = false;

function setNextWord() {
  if (!rotatingWordEl) return;

  currentWordIndex = (currentWordIndex + 1) % words.length;
  const nextWord = words[currentWordIndex];

  if (prefersReducedMotion) {
    rotatingWordEl.textContent = nextWord;
    return;
  }

  rotatingWordEl.classList.add("is-leaving");

  window.setTimeout(() => {
    rotatingWordEl.classList.remove("is-leaving");
    rotatingWordEl.textContent = nextWord;
  }, 220);
}

function startRotation() {
  if (!rotatingWordEl) return;
  if (prefersReducedMotion) return;

  stopRotation();
  intervalId = window.setInterval(setNextWord, 2400);
}

function stopRotation() {
  if (intervalId) window.clearInterval(intervalId);
  intervalId = null;
}

function syncToggleUI() {
  if (!toggleBtn) return;

  if (prefersReducedMotion) {
    toggleBtn.disabled = true;
    toggleBtn.setAttribute("aria-label", "Animation disabled");
    toggleBtn.setAttribute("aria-pressed", "false");
    const icon = toggleBtn.querySelector(".tag-toggle-icon");
    if (icon) icon.textContent = "❚❚";
    return;
  }

  toggleBtn.disabled = false;
  toggleBtn.setAttribute("aria-pressed", String(isPaused));

  const icon = toggleBtn.querySelector(".tag-toggle-icon");
  if (isPaused) {
    toggleBtn.setAttribute("aria-label", "Resume animation");
    if (icon) icon.textContent = "▶";
  } else {
    toggleBtn.setAttribute("aria-label", "Pause animation");
    if (icon) icon.textContent = "❚❚";
  }
}

if (rotatingWordEl) {
  syncToggleUI();
  if (!prefersReducedMotion) startRotation();
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) stopRotation();
    else startRotation();

    syncToggleUI();
  });
}

// References expand/collapse
const referencesToggleBtn = document.getElementById("references-toggle");
const referencesToggleLessBtn = document.getElementById("references-toggle-less");
const referencesMoreEl = document.getElementById("references-more");

if (referencesToggleBtn && referencesToggleLessBtn && referencesMoreEl) {

  // Explicit collapsed state on page load
  referencesMoreEl.classList.remove("is-expanded");
  referencesToggleBtn.removeAttribute("hidden");
  referencesToggleLessBtn.setAttribute("hidden", "");
  referencesToggleBtn.setAttribute("aria-expanded", "false");

  referencesToggleBtn.addEventListener("click", () => {
    referencesMoreEl.classList.add("is-expanded");
    referencesToggleBtn.setAttribute("hidden", "");
    referencesToggleLessBtn.removeAttribute("hidden");
    referencesToggleBtn.setAttribute("aria-expanded", "true");
  });

  referencesToggleLessBtn.addEventListener("click", () => {
    referencesMoreEl.classList.remove("is-expanded");
    referencesToggleLessBtn.setAttribute("hidden", "");
    referencesToggleBtn.removeAttribute("hidden");
    referencesToggleBtn.setAttribute("aria-expanded", "false");
  });
}
