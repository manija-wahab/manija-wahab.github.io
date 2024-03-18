// function color() {
//   var console = document.querySelectorAll('p')

//   if (console.innerHTML === 'console.log') {
//     console.forEach(function (consoles) {
//       consoles.style.color = 'red'
//     })
//   }
// }

// color()

function color() {
  var paragraphs = document.querySelectorAll('p')

  paragraphs.forEach(function (paragraph) {
    var content = paragraph.innerHTML
    var parts = content.split('console.log')

    // Reconstruct the content with the parts and apply color to the matched part
    paragraph.innerHTML = parts.join(
      '<span style="color: red;">console.log</span>'
    )
  })
}

color()
