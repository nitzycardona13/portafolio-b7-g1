var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Nitzy Cardona')
  .pauseFor(300)
  .deleteAll(10)
  .typeString('Desarrolladora <strong><span style="color: #2C9CFF;">Frontend</span></strong> Junior')
  .pauseFor(1000)
  .start();





document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".container2");
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add(`bg-change-${index + 1}`);
    } else {
      section.classList.remove(`bg-change-${index + 1}`);
    }
  });
});


var app2 = document.getElementById('app2');

var typewriter = new Typewriter(app2, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('La práctica hace la perfección, pero la perseverancia hace el <strong>éxito</strong>.')
  .pauseFor(400)
  .deleteAll(10)
  .pauseFor(1000)
  .start();


document.addEventListener('DOMContentLoaded', function () {
  const section = document.getElementById('habilidades');
  const features = section.querySelectorAll('.feature');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        section.classList.add('bg-animate');
      }
    });
  }, { threshold: 0.5 });

  features.forEach(feature => {
    observer.observe(feature);
  });
});

