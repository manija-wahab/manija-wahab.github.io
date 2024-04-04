console.log('Welcome to Tic-Tac-Toe! Enjoy!')

import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

let cells = document.querySelectorAll('td')
let rows = document.querySelectorAll('tr')

const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')

const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')

const subtitle = document.getElementById('subtitle')
const newSub = document.getElementById('resetContain')
const winText = document.getElementById('winText')
const loseText = document.getElementById('loseText')

const win = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
win.forEach((cell) => (cell.available = true))

function restartGame() {
  newSub.addEventListener('click', () => window.location.reload())
}

let winner = false

function youWin() {
  if (
    (a1.innerHTML === 'X' && a2.innerHTML === 'X' && a3.innerHTML === 'X') ||
    (b1.innerHTML === 'X' && b2.innerHTML === 'X' && b3.innerHTML === 'X') ||
    (c1.innerHTML === 'X' && c2.innerHTML === 'X' && c3.innerHTML === 'X') ||
    (a1.innerHTML === 'X' && b1.innerHTML === 'X' && c1.innerHTML === 'X') ||
    (a2.innerHTML === 'X' && b2.innerHTML === 'X' && c2.innerHTML === 'X') ||
    (a3.innerHTML === 'X' && b3.innerHTML === 'X' && c3.innerHTML === 'X') ||
    (a1.innerHTML === 'X' && b2.innerHTML === 'X' && c3.innerHTML === 'X') ||
    (a3.innerHTML === 'X' && b2.innerHTML === 'X' && c1.innerHTML === 'X')
  ) {
    winner = true
    subtitle.style.display = 'none'
    newSub.style.display = 'inline-block'
    restartGame()
    canvasConfetti()
  }
}
function youLose() {
  if (
    (a1.innerHTML === 'O' && a2.innerHTML === 'O' && a3.innerHTML === 'O') ||
    (b1.innerHTML === 'O' && b2.innerHTML === 'O' && b3.innerHTML === 'O') ||
    (c1.innerHTML === 'O' && c2.innerHTML === 'O' && c3.innerHTML === 'O') ||
    (a1.innerHTML === 'O' && b1.innerHTML === 'O' && c1.innerHTML === 'O') ||
    (a2.innerHTML === 'O' && b2.innerHTML === 'O' && c2.innerHTML === 'O') ||
    (a3.innerHTML === 'O' && b3.innerHTML === 'O' && c3.innerHTML === 'O') ||
    (a1.innerHTML === 'O' && b2.innerHTML === 'O' && c3.innerHTML === 'O') ||
    (a3.innerHTML === 'O' && b2.innerHTML === 'O' && c1.innerHTML === 'O')
  ) {
    winner = true
    subtitle.style.display = 'none'
    newSub.style.display = 'inline-block'
    winText.style.display = 'none'
    loseText.style.display = 'inline-block'
    restartGame()
    console.log('You Looooose!!!')
    return
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const minNumber = 0
const maxNumber = 8

function start() {
  if (win.every((cell) => cell.innerHTML === 'X' || cell.innerHTML === 'O')) {
    console.log('finished')
  }
}

function drawO() {
  let availableCells = win.filter((cell) => cell.available === true)
  if (availableCells.length === 0) {
    return
  }

  let randomNumber = getRandomNumber(0, availableCells.length - 1)
  const randomCell = availableCells[randomNumber]
  setTimeout(() => {
    randomCell.classList.add('textAni')
    ;(randomCell.innerHTML = 'O'),
      ((randomCell.style.boxShadow = 'rgb(152, 233, 255) 0px 0px 30px'),
      (randomCell.style.textShadow = 'rgb(152, 233, 255) 0px 0px 15px')),
      (randomCell.available = false),
      youLose()
  }, 500)
}

function drawx() {
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.available === true && winner !== true) {
        cell.classList.add('textAni')
        ;(cell.innerHTML = 'X'),
          ((cell.style.boxShadow = 'rgb(255, 142, 242) 0px 0px 30px'),
          (cell.style.textShadow = 'rgb(255, 142, 242) 0px 0px 15px')),
          (cell.available = false),
          youWin()
        if (winner !== true) {
          drawO()
        }

        start()
      }
    })
  })
}

drawx()

// function drawO() {
//   for (let i = 0; i <= win.length; i++) {
//     if (win[i] === a1 && win[i].avaliable === true) {
//       ;(win[i].innerHTML = 'O'), (win[i].avaliable = false)
//     }
//   }
// }

// a1 a2 a3 // b1 b2 b3 // c1 c2 c3
// a1 b1 c1 // a2 b2 c2 // a3 b3 c3
// a1 b2 c3 //a3 b2 c1
