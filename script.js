const containers = document.querySelectorAll(".slider-container");

containers.forEach(container => {

    const slider = container.querySelector(".slider");
    const next = container.querySelector(".next");
    const prev = container.querySelector(".prev");

    const cards = slider.querySelectorAll(".card");
    const cardWidth = cards[0].offsetWidth + 20;

    next.addEventListener("click", () => {

        slider.style.transition = "transform 0.5s ease";
        slider.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            slider.appendChild(slider.firstElementChild);

            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
        }, 500);

    });

    prev.addEventListener("click", () => {

        slider.style.transition = "none";

        slider.prepend(slider.lastElementChild);

        slider.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            slider.style.transition = "transform 0.5s ease";
            slider.style.transform = "translateX(0)";
        }, 10);

    });

});