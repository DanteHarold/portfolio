// gsap.from("#name", {
//   x: -150,
//   ease: "back",
// });

// gsap.from("#btn-name", {
//   x: 150,
//   opacity: "0",
//   ease: "back",
// });

let t1 = gsap.timeline({ repeat: 0, yoyo: false });

t1.from("#name-title", {
  duration: 0.5,
  x: -150,
  ease: "back",
});

t1.from("#btn-name", {
  duration: 0.5,
  x: 150,
  opacity: "0",
  ease: "back",
});

let t2 = gsap.timeline({ repeat: 0, yoyo: false });

t2.from("#shape-img", {
  duration: 1,
  rotation: 180,
  x: -750,
  ease: "ease",
});
t2.from("#about-title", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});
t2.from("#about-bottom", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});

ScrollTrigger.create({
  animation: t2,
  trigger: "#about",
  start: "top center",
  // end: "+=0",
  scrub: false,
  pin: false,
  // markers: true,
});
let t3 = gsap.timeline({ repeat: 0, yoyo: false });
t3.from("#about-paragraph", {
  opacity: "0",
  duration: 2.5,
  // y: -150,
  ease: "ease",
});
ScrollTrigger.create({
  animation: t3,
  trigger: "#about",
  start: "top center",
  // end: "+=0",
  scrub: false,
  pin: false,
  // markers: true,
});
let t4 = gsap.timeline({ repeat: 0, yoyo: false });
t4.from("#portfolio-title", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});
t4.from("#portfolio-bottom", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});
gsap.registerPlugin(MotionPathPlugin);

ScrollTrigger.create({
  animation: t4,
  trigger: "#portfolio",
  start: "top center",
  // end: "+=0",
  scrub: false,
  pin: false,
  // markers: true,
});

let t5 = gsap.timeline({ repeat: 0, yoyo: false });
t5.from("#contact-title", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});
t5.from("#contact-bottom", {
  opacity: "0",
  duration: 0.5,
  // rotation: 180,
  x: 50,
  ease: "ease",
});
t5.from("#contact-subtitle", {
  opacity: "0",
  duration: 1.5,
  // rotation: 180,
  // x: 50,
  ease: "ease",
});

ScrollTrigger.create({
  animation: t5,
  trigger: "#contact",
  start: "top center",
  // end: "+=0",
  scrub: false,
  pin: false,
  // markers: true,
});

gsap.to("#title", {
  duration: 3.5,
  text: "DanteHarold",
  delay: 1,
});

((d) => {
  const $form = d.getElementById("contact-form"),
    $loader = d.getElementById("contact-form-loader"),
    $final = d.getElementById("mensaje-final"),
    myModal = new bootstrap.Modal($final);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.style = "display :block !important";
    fetch("https://formsubmit.co/ajax/danteharold.dev@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.style = "display : none !important";
        console.log($final);

        myModal.show();
        $form.reset();
      })
      .catch((err) => {
        let message =
          "Ocurrió un Error al Enviar el Formulario, Intentalo Nuevamente";
        $final.querySelector(".mensaje-final_text").innerHTML = message;
        $loader.style = "display : none !important";
      })
      .finally(() => {
        $loader.style = "display : none !important";
        setTimeout(() => {
          myModal.hide();
        }, 3000);
      });
  });
})(document);
