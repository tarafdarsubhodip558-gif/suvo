// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Find every element with .reveal
document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });


// ==========================================
// 3D PHOTO TILT EFFECT
// ==========================================

const photo = document.querySelector(".tilt");


document.addEventListener("mousemove", (event) => {


    if (window.innerWidth < 800 || !photo) {

        return;

    }


    const rect = photo.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;


    const x =
        (event.clientX - centerX) / 35;


    const y =
        (event.clientY - centerY) / 35;


    photo.style.transform =
        `perspective(900px)
         rotateY(${x}deg)
         rotateX(${-y}deg)`;

});


// ==========================================
// RESET PHOTO POSITION
// ==========================================

document.addEventListener("mouseleave", () => {

    if (!photo) {

        return;

    }


    photo.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg)";

});