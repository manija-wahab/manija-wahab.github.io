import gsap from 'https://cdn.skypack.dev/gsap'

// Import individual plugins
import ScrollTrigger from 'https://cdn.skypack.dev/gsap/ScrollTrigger'
import Flip from 'https://cdn.skypack.dev/gsap/Flip'
import Draggable from 'https://cdn.skypack.dev/gsap/Draggable'
import MotionPathPlugin from 'https://cdn.skypack.dev/gsap/MotionPathPlugin'

import TextPlugin from 'https://cdn.skypack.dev/gsap/TextPlugin'

// Register the plugins
gsap.registerPlugin(
  ScrollTrigger,
  Flip,
  Draggable,
  MotionPathPlugin,
  TextPlugin
)

gsap.from('.question', {
  x: -300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.gifWrapper', {
  x: 500,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.answer', {
  x: 300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

// For Section 2
gsap.from('.question2', {
  x: -300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.gifWrapper2', {
  x: 500,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.answer2', {
  x: 300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.question3', {
  x: -300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section3',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.gifWrapper3', {
  x: 500,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section3',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.answer3', {
  x: 300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section3',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.question4', {
  x: -300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section4',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.gifWrapper4', {
  x: 500,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section4',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})

gsap.from('.answer4', {
  x: 300,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section4',
    start: 'top 90%',
    end: 'bottom bottom',
    scrub: 2,
    markers: false,
    anticipatePin: 1,
  },
})
