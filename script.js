const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const teamCards = Array.from(document.querySelectorAll(".team-card"));
teamCards.forEach((card) => {
  const button = card.querySelector(".team-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const isOpen = card.classList.contains("open");

    teamCards.forEach((item) => {
      item.classList.remove("open");
      const toggle = item.querySelector(".team-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      card.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
