const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});


  const testimonials = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    testimonials[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  setInterval(nextTestimonial, 4000);


  
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const propertyCards = document.querySelectorAll(".property-card");
  let visibleCards = 6; // show 6 initially

  // hide cards beyond the first 6
  propertyCards.forEach((card, index) => {
    if (index >= visibleCards) card.style.display = "none";
  });

  // reveal 3 more on each click
  loadMoreBtn.addEventListener("click", () => {
    for (let i = visibleCards; i < visibleCards + 3; i++) {
      if (propertyCards[i]) propertyCards[i].style.display = "block";
    }
    visibleCards += 3;

    // hide button if all cards are visible
    if (visibleCards >= propertyCards.length) {
      loadMoreBtn.style.display = "none";
    }
  });

