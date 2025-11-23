
  function toggleMenu() {
    const nav = document.querySelector('.navbar ul');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  }




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



  // thumbnails -> swap main image, open lightbox
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.thumbs-row .thumb');
  const mainImage = document.getElementById('mainImage');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const openLightbox = document.getElementById('openLightbox');

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const large = t.dataset.large || t.src;
      mainImage.src = large;
    });
  });

  // open lightbox
  if (openLightbox) {
    openLightbox.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = mainImage.src;
      document.body.style.overflow = 'hidden';
    });
  }

  // close lightbox when clicking backdrop
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // inquiry form submit (demo behaviour)
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visitorName').value.trim();
      const phone = document.getElementById('visitorPhone').value.trim();
      if (!name || !phone) {
        alert('Please enter name and phone.');
        return;
      }
      alert('Request sent. Agent will contact you soon.');
      form.reset();
    });
  }
});
