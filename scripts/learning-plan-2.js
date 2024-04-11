import gsap from 'https://cdn.skypack.dev/gsap'

// Import individual plugins
import ScrollTrigger from 'https://cdn.skypack.dev/gsap/ScrollTrigger'

import TextPlugin from 'https://cdn.skypack.dev/gsap/TextPlugin'

// Register the plugins
gsap.registerPlugin(ScrollTrigger)

// ╔═════════════════════╗
// ║   GSAP ANIMATIONS   ║
// ╚═════════════════════╝

document.querySelectorAll('.section').forEach((section) => {
  const question = section.querySelector('.question')
  const button = section.querySelector('.questionButton')

  gsap.from([question, button], {
    x: 1000,
    rotation: 90,
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom 80%',
      scrub: 3,
      markers: false,
      anticipatePin: 1,
    },
  })
})

gsap.from(body, {
  x: 1000,
  rotation: 90,
  scrollTrigger: {
    trigger: section,
    start: 'top bottom',
    end: 'bottom 80%',
    scrub: 3,
    markers: false,
    anticipatePin: 1,
  },
})
