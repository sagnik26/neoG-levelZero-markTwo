let score = 0;
let flag = 0
let color = "blue"

let markings = ["one", "two", "three", "four", "five"]

// array of answers
var answers = [ "Narendra Modi", "Subrahmanyam Jaishankar", "tiger", "Lotus", "Peacock" ];


function welcome() {
  document.getElementById("btn--name")
  .addEventListener('click', () => {
    const x = document.getElementById("name").value
    const nameInput = document.querySelector('.name-input')
    const node = document.createElement("h4");
    const textnode = document.createTextNode(`Hello ${x} :)`);
    node.appendChild(textnode);
    if(x == "") {
      alert("Please enter your name")
    }
    else {
      nameInput.classList.add('hidden')
      document.getElementById('name-label').classList.add('hidden')
      document.getElementById("greet").appendChild(node)

      markings.forEach(val => {
        document.querySelector(`.label_${val}`).classList.remove('hidden')
        document.querySelector(`.input_${val}`).classList.remove('hidden')
        document.querySelector(`.btn_${val}`).classList.remove('hidden')
      })
    }

  })
}

function game() {
   document.getElementById("btn--live")
   .addEventListener('click', () => {
    const val = document.getElementById("live").value
    flag++
    if(flag === 5) {
      document.getElementById('head').textContent = "GAME OVER"
      document.body.style.backgroundColor = `${color}`;
    }
    if (val.toUpperCase() === answers[0].toUpperCase()){
      score++
      document.querySelector(".score").textContent = score
      document.getElementById("btn--live").classList.add('hidden')
      document.querySelector(".btn-g1").classList.remove('hidden')
    }
    else {
      document.getElementById("btn--live").classList.add('hidden')
      document.querySelector(".btn-r1").classList.remove('hidden')
    }
   })

   document.getElementById("btn--color")
   .addEventListener('click', () => {
    flag++
    if(flag === 5) {
      document.getElementById('head').textContent = "GAME OVER"
      document.body.style.backgroundColor = `${color}`;
    }
    const val = document.getElementById("color").value
    if (val.toUpperCase() === answers[1].toUpperCase()){
      score++
      document.querySelector(".score").textContent = score
      document.getElementById("btn--color").classList.add('hidden')
      document.querySelector(".btn-g2").classList.remove('hidden')
    }
    else {
      document.getElementById("btn--color").classList.add('hidden')
      document.querySelector(".btn-r2").classList.remove('hidden')
    }
   })

   document.getElementById("btn--fan")
   .addEventListener('click', () => {
    flag++
    if(flag === 5) {
      document.getElementById('head').textContent = "GAME OVER"
      document.body.style.backgroundColor = `${color}`;
    }
    const val = document.getElementById("fan").value
    if (val.toUpperCase() === answers[2].toUpperCase()) {
      score++
      document.querySelector(".score").textContent = score
      document.getElementById("btn--fan").classList.add('hidden')
      document.querySelector(".btn-g3").classList.remove('hidden')
    }
    else {
      document.getElementById("btn--fan").classList.add('hidden')
      document.querySelector(".btn-r3").classList.remove('hidden')
    }
   })

   document.getElementById("btn--biriyani")
   .addEventListener('click', () => {
    flag++
    if(flag === 5) {
      document.getElementById('head').textContent = "GAME OVER"
      document.body.style.backgroundColor = `${color}`;
    }
    const val = document.getElementById("biriyani").value
    if (val.toUpperCase() === answers[3].toUpperCase()) {
      score++
      document.querySelector(".score").textContent = score
      document.getElementById("btn--biriyani").classList.add('hidden')
      document.querySelector(".btn-g4").classList.remove('hidden')
    }  
    else {
      document.getElementById("btn--biriyani").classList.add('hidden')
      document.querySelector(".btn-r4").classList.remove('hidden')
    }
   })

   document.getElementById("btn--cars")
   .addEventListener('click', () => {
    flag++
    if(flag === 5) {
      document.getElementById('head').textContent = "GAME OVER"
      document.body.style.backgroundColor = `${color}`;
    }
    const val = document.getElementById("cars").value
    if (val.toUpperCase() === answers[4].toUpperCase()){
      score++
      document.querySelector(".score").textContent = score
      document.getElementById("btn--cars").classList.add('hidden')
      document.querySelector(".btn-g5").classList.remove('hidden')
    }
    else {
      document.getElementById("btn--cars").classList.add('hidden')
      document.querySelector(".btn-r5").classList.remove('hidden')
    }
   })
}

// function playAgain() {
//   document.querySelector('.again').addEventListener('click', () => {
//     score = 0
//     document.querySelector('.score').textContent = 0
//     document.getElementById('greet').classList.add('hidden')
//     document.querySelector('.name-input').classList.remove('hidden')
//     document.getElementById('name').value = " "
//     document.getElementById('name-label').classList.remove('hidden')

//     document.body.style.backgroundColor = "#222"

//     document.getElementById('live').value = " "
//     document.getElementById('color').value = " "
//     document.getElementById('fan').value = " "
//     document.getElementById('biriyani').value = " "
//     document.getElementById('cars').value = " "

//     document.querySelector('.btn-g1').classList.add('hidden')
//     document.querySelector('.btn-r1').classList.add('hidden')
//     document.getElementById('btn--live').classList.remove('hidden')
//   })
// }

welcome();
game()
// playAgain()
