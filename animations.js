document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal("header section", {
        duration: 1000,
        origin: "top",
        distance: "50px",
        opacity: 0,
        delay: 200
    });

    ScrollReveal().reveal("header picture", {
        duration: 1200,
        scale: 0.8,
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal("nav a", {
        duration: 800,
        scale: 0.9,
        opacity: 0,
        interval: 150,
        delay: 200
    });

    ScrollReveal().reveal("main section h2", {
        duration: 1000,
        origin: "top",
        distance: "60px",
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal(".profil-pengajar, .materi-pembelajaran, .permainan-awal, .labs, .modul, .gim-dan-kuis", {
        duration: 1000,
        origin: "bottom",
        distance: "60px",
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal(".profile-img", {
        duration: 1200,
        origin: "left",
        distance: "50px",
        opacity: 0,
        delay: 300
    });

    ScrollReveal().reveal(".card", {
        duration: 1200,
        origin: "right",
        distance: "50px",
        opacity: 0,
        interval: 300
    });

    ScrollReveal().reveal("iframe, video", {
        duration: 1200,
        scale: 0.8,
        opacity: 0,
        interval: 200
    });

    ScrollReveal().reveal(".note", {
        duration: 1000,
        origin: "left",
        distance: "40px",
        opacity: 0,
        delay: 200
    });

    ScrollReveal().reveal("footer", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        opacity: 0,
        delay: 400
    });
});
