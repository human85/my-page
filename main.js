const btn = document.querySelector('button')
const icecream = document.querySelector('.icecream')

function reset() {
  icecream.innerHTML = ''
}

icecream.addEventListener('click', reset)

btn.addEventListener('click', () => {
  icecream.insertAdjacentHTML('afterbegin', '🥗')
})
