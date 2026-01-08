// Apparition douce au scroll (style Apple)
const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

slides.forEach(slide => {
  slide.style.opacity = "0";
  slide.style.transform = "translateY(40px)";
  slide.style.transition = "all 1s ease";
  observer.observe(slide);
});
