const heroTitle = document.querySelector(".title");

function init() {
  function splitWord(container, text) {
    const splitText = text.split(" ").map((word, i) => {
      return `<span class="o-hidden hero__word-container"><span class="hero__word">${word}&nbsp;</span></span>`;
    });

    container.innerHTML = splitText.join("");

    // Added offset class in order ot check if words are wrapped
    let x = 0;

    document.querySelectorAll(".hero__word").forEach((el, i) => {
      x = el;
      if (x === el) el.classList.add(`offsettop-${el.offsetTop}`);
    });
  }

  splitWord(heroTitle, heroTitle.textContent);

  splitWord(
    document.querySelector(".title--about"),
    document.querySelector(".title--about").textContent
  );
  splitWord(
    document.querySelector(".title--another"),
    document.querySelector(".title--another").textContent
  );

  gsap.set(".title--about .hero__word", {
    x: "-105%",
    y: 0,
  });
  gsap.set(".title--another .hero__word", {
    x: "0",
    y: "-100%",
  });
  // gsap.to(".offsettop-274", {
  //   delay: 0.3,
  //   y: 0,
  //   ease: Power4.easeOut,
  //   duration: 0.5,
  //   stagger: 0.1,
  // });
  // gsap.to(".offsettop-361", {
  //   delay: 0.3,
  //   y: 0,
  //   ease: Power4.easeOut,
  //   duration: 0.5,
  //   stagger: 0.1,
  // });

  gsap.set(".hero__word", { autoAlpha: 0 });

  let startCounting = 0;
  const timeline = gsap.timeline({ smoothChildTiming: true });
  timeline
    .to(".hero-container .hero__word", {
      delay: 0.3,
      y: 0,
      ease: Power4.easeOut,
      duration: 0.5,
      stagger: 0.1,
      onUpdate: () => {
        startCounting += 1;
      },
    })
    .to(
      ".hero-container .hero__word",
      {
        delay: 0.3,
        autoAlpha: 1,
        ease: Power4.easeOut,
        duration: 3,
        stagger: 0.1,
        onStart: () => {
          startCounting += 1;
        },
        onUpdate: () => {
          // console.log(startCounting.toFixed(2));
          if (startCounting === 25) console.log("reached");
          // for (let i = 0; i < startCounting; i++) console.log("dsadsadsa");
        },
        onUpdate: () => {
          // console.log(startCounting.toFixed(2));
          if (startCounting === 75) console.log("REACHED");
          // for (let i = 0; i < startCounting; i++) console.log("dsadsadsa");
        },
      },
      "-=100%"
    )
    .to(".hero-container", {
      x: "-100%",
      duration: 1,
    })
    .to(".about-container", { x: 0, duration: 1 }, "<")
    .to(
      ".title--about .hero__word",
      {
        delay: 0.3,
        x: 0,
        ease: Power4.easeOut,
        duration: 0.5,
        stagger: 0.1,
      },
      "<"
    )
    .to(
      ".title--about .hero__word",
      {
        delay: 0.3,
        autoAlpha: 1,
        ease: Power4.easeOut,
        duration: 3,
        stagger: 0.1,
      },
      "-=75%"
    )
    .to(".about-container", {
      y: "-100%",
      duration: 1,
    })
    .to(
      ".another-container",
      {
        y: 0,
        duration: 1,
      },
      "<"
    )
    .to(".title--another .hero__word", {
      delay: 0.3,
      y: 0,
      ease: Power4.easeOut,
      duration: 0.5,
      stagger: 0.1,
    })
    .to(
      ".title--another .hero__word",
      {
        delay: 0.3,
        autoAlpha: 1,
        ease: Power4.easeOut,
        duration: 3,
        stagger: 0.1,
      },
      "-=100%"
    )
    .to(".hero-container", {
      x: "-100%",
      duration: 1,
    });
  console.log(timeline.duration());
}

window.addEventListener("load", function () {
  init();
});
