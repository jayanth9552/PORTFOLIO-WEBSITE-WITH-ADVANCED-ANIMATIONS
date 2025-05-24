gsap.from(".title", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".intro", {
  delay: 0.5,
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power1.out",
  });
});
