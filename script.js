const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const teamCards = Array.from(document.querySelectorAll(".team-card"));
const closeAllCards = () => {
  teamCards.forEach((item) => {
    item.classList.remove("open");
    const toggle = item.querySelector(".team-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
};

teamCards.forEach((card) => {
  const button = card.querySelector(".team-toggle");
  if (!button) return;

  const toggleCard = () => {
    const isOpen = card.classList.contains("open");
    closeAllCards();
    if (!isOpen) {
      card.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  };

  button.addEventListener("click", toggleCard);
  card.addEventListener("click", (event) => {
    if (event.target === button || button.contains(event.target)) return;
    toggleCard();
  });
});
