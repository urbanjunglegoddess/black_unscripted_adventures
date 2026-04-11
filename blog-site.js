// Carousel scroll buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.getElementById("carousel");

if (prevBtn && carousel) {
  prevBtn.addEventListener("click", function () {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });
}

if (nextBtn && carousel) {
  nextBtn.addEventListener("click", function () {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });
}

// Category filtering on Stories page
const categoryLinks = document.querySelectorAll(".category");
const postCards = document.querySelectorAll(".post-card");

if (categoryLinks.length > 0) {
  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selected = this.getAttribute("data-category");

      categoryLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      this.classList.add("active");

      postCards.forEach(function (card) {
        if (
          selected === "all" ||
          card.getAttribute("data-category") === selected
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Search - basic client-side filter
const searchInput = document.getElementById("site-search");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    postCards.forEach(function (card) {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}
