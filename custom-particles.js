// custom-particles.js

document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      particles: {
          // Your particle settings
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          size: {
              value: 3
          },
          color: {
              value: "#2e3fff"
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: "#2e3fff",
              opacity: 0.4
          },
          move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
          }
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: false,
                  mode: "grab"
              }
          }
      }
  });

  // Animate project sections on scroll
  const projectSections = document.querySelectorAll('.project');
  window.addEventListener('scroll', animateProjects);

  function animateProjects() {
      projectSections.forEach((section) => {
          if (isElementInViewport(section)) {
              section.classList.add('animated');
          }
      });
  }

  function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});
