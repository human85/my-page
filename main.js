const btn = document.querySelector('button')
const icecream = document.querySelector('.icecream')

function reset() {
  icecream.innerHTML = ''
}

btn.addEventListener('click', () => {
  icecream.insertAdjacentHTML('afterend', '🥗')
})
