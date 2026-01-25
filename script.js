/* =============================
   MUSIK & BUKA UNDANGAN
============================= */
const musik = document.getElementById("musik");
let play = true;

function bukaUndangan() {
  musik.play();
  document.getElementById("undangan")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleMusik() {
  if (play) {
    musik.pause();
    document.querySelector(".music-btn").innerText = "▶";
  } else {
    musik.play();
    document.querySelector(".music-btn").innerText = "⏸";
  }
  play = !play;
}

/* =============================
   COUNTDOWN – 8 MARET 2026
============================= */
const target = new Date("2026-03-08").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const sisa = target - now;

  const hari = Math.floor(sisa / (1000 * 60 * 60 * 24));
  const jam = Math.floor((sisa / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((sisa / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `${hari} Hari ${jam} Jam ${menit} Menit`;
}, 1000);

/* =============================
   ANIMASI SCROLL
============================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

/* =============================
   SLIDE CERITA
============================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % slides.length;
}, 3000);

/* =============================
   NAMA TAMU DARI URL
============================= */
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

if (nama) {
  document.getElementById("namaTamu").innerText = nama;
}

/* =============================
   BUNGA JATUH
============================= */
const flowers = document.querySelector(".flowers");

for (let i = 0; i < 15; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDuration = (5 + Math.random() * 5) + "s";
  flowers.appendChild(span);
}
