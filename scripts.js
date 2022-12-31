const await = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

const getRandomValueBetween = (min = 10, max = 100, randomNumber = Math.random) => {
  return Math.floor(randomNumber * (max - min) + min);
}

function draw(element) {
  console.log(element);
}

const els = document.querySelectorAll('[data-type]').forEach(draw);