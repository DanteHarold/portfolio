let t1 = gsap.timeline({ repeat: 0, yoyo: false });

t1.from("#name-title", {
  duration: 0.5,
  x: -50,
});
t1.from("#btn-name", {
  duration: 0.5,
  x: 50,
  opacity: "0",
});
t1.to("#title", {
  duration: 3.5,
  text: "DanteHarold",
});

let t2 = gsap.timeline({ repeat: 0, yoyo: false });

t2.from("#shape-img", {
  duration: 0.8,
  rotation: 180,
  x: -650,
});
t2.from("#about-title", {
  duration: 0.8,
  opacity: "0",
  // x: 20,
});
t2.from("#about-bottom", {
  opacity: "0",
  duration: 0.5,
  // x: 20,
});

t2.from("#about-paragraph", {
  duration: 0.5,
  opacity: "0",
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

let t4 = gsap.timeline({ repeat: 0, yoyo: false });
t4.from("#portfolio-title", {
  duration: 0.8,
  opacity: "0",
  // x: 20,
});
t4.from("#portfolio-bottom", {
  duration: 0.5,
  opacity: "0",
  // x: 20,
});

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
  duration: 0.8,
  opacity: "0",
  // x: 20,
});
t5.from("#contact-bottom", {
  duration: 0.5,
  opacity: "0",
  // x: 20,
});
t5.from("#contact-subtitle", {
  opacity: "0",
  duration: 1,
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
