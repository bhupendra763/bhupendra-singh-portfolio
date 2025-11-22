// ---------------------------
// 🌟 Loading Animation
// ---------------------------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  if (!loader) return; // Safety check

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});

// ---------------------------
// 🌟 Scrolled Header Effect
// ---------------------------
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ---------------------------
// 🌟 Intersection Observer for Animations
// ---------------------------
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

// Generic function for delayed animation
function createObserver(selector, delayStep = 200) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animated");
        }, index * delayStep);
      }
    });
  }, observerOptions);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

// Apply to all sections
createObserver(".project-card");
createObserver(".timeline-content", 150);
createObserver(".achievement-card");

// ---------------------------
// 🌟 Smooth Scroll for Anchor Links
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

// ---------------------------
// 🌟 Certificate Fullscreen Viewer
// ---------------------------
const certificateImgs = document.querySelectorAll(".certificate-img");
const imageViewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.querySelector(".close-viewer");

if (certificateImgs.length && imageViewer && viewerImg && closeViewer) {
  certificateImgs.forEach((img) => {
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      imageViewer.classList.add("active");
    });
  });

  closeViewer.addEventListener("click", () => {
    imageViewer.classList.remove("active");
  });

  imageViewer.addEventListener("click", (e) => {
    if (e.target === imageViewer) imageViewer.classList.remove("active");
  });
}
