// NAVBAR SHADOW

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// FLOATING ANIMATION EFFECT

// FLOATING ANIMATION EFFECT
const floatingIcons = document.querySelectorAll(".floating-icon");
floatingIcons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.5}s`;
});


window.addEventListener('DOMContentLoaded', () => {
  VANTA.GLOBE({
    el: "#vanta-canvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x6c63ff,       // Globe lines color
    color2: 0xffffff,      // Country dots color (Ithu thaan unaku highlight tharum)
    size: 0.90,            // Globe size-ah konjam kuraicha grid theriyaathu
    backgroundColor: 0xf5f7fb // Unoda body background color
  })
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click',(e)=>{
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click',(e)=>{
    if(
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ){
        navLinks.classList.remove('active');
    }
});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("click", function(e){

        // button click na ignore
        if(e.target.closest(".project-btn")) return;
        if(e.target.closest("a")) return;

        if(card.classList.contains("active")){

            card.classList.remove("active");

        }else{

            cards.forEach(c=>{
                c.classList.remove("active");
            });

            card.classList.add("active");

        }

    });

});
const heroEmail = document.getElementById("emailLink");
const contactEmail = document.getElementById("contactEmailLink");

if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {

    heroEmail.href = "mailto:suthakarv143@gmail.com";
    contactEmail.href = "mailto:suthakarv143@gmail.com";

} else {

    heroEmail.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=suthakarv143@gmail.com";

    contactEmail.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=suthakarv143@gmail.com";

    heroEmail.target = "_blank";
    contactEmail.target = "_blank";
}

