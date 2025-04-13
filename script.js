let currentPage = 1;

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);
  const next = document.getElementById(`page${currentPage + 1}`);

  if (current) current.classList.add('hidden');
  if (next) next.classList.remove('hidden');

  currentPage++;
}
// 🎥 Slideshow logic (for videos on the first page)
let slideIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('#page1 .slide');
  if (slides.length === 0) return;

  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
  }
  // 🖼️ Image slideshow logic (for Page 2)
let imageSlideIndex = 0;

function showNextImageSlide() {
  const imageSlides = document.querySelectorAll('#page2 .slide');
  if (imageSlides.length === 0) return;

  imageSlides[imageSlideIndex].classList.remove('active');
  imageSlideIndex = (imageSlideIndex + 1) % imageSlides.length;
  imageSlides[imageSlideIndex].classList.add('active');
}

// 💌 Typewriter effect for love note
const loveMessage = "I just want you to know how incredibly grateful I am for you.You are a great human being. I love the way you vibe . You've filled my life with love, laughter, and the sweetest memories. Every little moment with you is a treasure. I love you more than words can say. 💖 . Once again happy birthday to you bubba i love you the most💋";

let i = 0;
function typeLoveNote() {
  const textBox = document.getElementById("loveMessage");
  if (textBox && i < loveMessage.length) {
    textBox.innerHTML += loveMessage.charAt(i);
    i++;
    setTimeout(typeLoveNote, 50); // Typing speed
  }
}

// When that page is shown, start typing
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.target.id === "page3" &&
      !mutation.target.classList.contains("hidden")
    ) {
      typeLoveNote();
    }
  });
});
// 👁️ Watch for when Page 2 is shown to start slideshow
const observerPage2 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.target.id === "page2" &&
        !mutation.target.classList.contains("hidden")
      ) {
        setInterval(showNextImageSlide, 4000); // Change every 4s
      }
    });
  });
  
  const targetPage2 = document.getElementById("page2");
  observerPage2.observe(targetPage2, { attributes: true });
  

const targetNode = document.getElementById("page3");
observer.observe(targetNode, { attributes: true });
setInterval(showNextSlide, 4000); // Change slide every 4 seconds

