
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const body = document.body;
const mainElement = document.querySelector('main');
const loader = document.getElementById("page-loader");

// Loader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 200);
    }, 1000);
});

// Menu toggle
menuBtn.addEventListener("click",(event)=>{
  event.stopPropagation();
  menuBtn.classList.toggle("change");
  navMenu.classList.toggle("open");
});

// Background exchange
function toggleBackground() {
  body.classList.toggle("swapped-background");
}

body.addEventListener('click', function(event) {
  if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
    toggleBackground();
  }
});

mainElement.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleBackground();
});

// Close menu logic
document.addEventListener('click', function(event) {
  if (!menuBtn.contains(event.target) && !navMenu.contains(event.target) && navMenu.classList.contains('open')) {
    menuBtn.classList.remove("change");
    navMenu.classList.remove("open");
  }
});
