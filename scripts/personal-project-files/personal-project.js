// ╔════════════════════════════╗
// ║   Variable Declarations    ║
// ╚════════════════════════════╝

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const bgImage = new Image()
const spriteSheet = new Image()
const collisionsMap = []
const boundaries = []

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

bgImage.src = '/images/personal-project-images/Game assets/tokyoStreets.png'
spriteSheet.src =
  '/images/personal-project-images/Game assets/Sailor Moon_scaled_2x_pngcrushed (1).png'

class Boundary {
  static width = 80
  static height = 80
  constructor({ position }) {
    ;(this.position = position), (this.width = 80), (this.height = 80)
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const offset = {
  x: -50,
  y: -700,
}

for (let i = 0; i < collisions.length; i += 140) {
  collisionsMap.push(collisions.slice(i, 140 + i))
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 2521 || symbol === 2522)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      )
  })
})

class Sprite {
  constructor({ position, velocity, image, frames = { max: 1 } }) {
    ;(this.position = position),
      (this.image = image),
      (this.frames = frames),
      (this.image.onload = () => {
        this.width = this.image.width / this.frames.max
        this.height = this.image.height
        console.log(this.width)
        console.log(this.height)
      })
  }
  draw() {
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    )
  }
}

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 545 / 8,
    y: canvas.height / 2 - 110,
  },
  image: spriteSheet,
  frames: {
    max: 8,
  },
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: bgImage,
})

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
}

const movables = [background, ...boundaries]
function rectCollision({ rect1, rect2 }) {
  return (
    rect1.position.x + rect1.width / 1.5 >= rect2.position.x &&
    rect1.position.x <= rect2.position.x + rect2.width / 1.5 &&
    rect1.position.y + rect1.height / 1.1 >= rect2.position.y &&
    rect1.position.y <= rect2.position.y + rect2.height / 1.3
  )
}

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  player.draw()
  boundaries.forEach((Boundary) => {
    Boundary.draw()
  })

  let moving = true
  if (keys.w.pressed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectCollision({
          rect1: player,
          rect2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 15,
            },
          },
        })
      ) {
        console.log('what???')
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 15
      })
  } else if (keys.a.pressed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectCollision({
          rect1: player,
          rect2: {
            ...boundary,
            position: {
              x: boundary.position.x + 15,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log('what???')
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 15
      })
  } else if (keys.s.pressed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectCollision({
          rect1: player,
          rect2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 15,
            },
          },
        })
      ) {
        console.log('what???')
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 15
      })
  } else if (keys.d.pressed) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectCollision({
          rect1: player,
          rect2: {
            ...boundary,
            position: {
              x: boundary.position.x - 15,
              y: boundary.position.y,
            },
          },
        })
      ) {
        console.log('what???')
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 15
      })
  }
}
animate()

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break
    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})
