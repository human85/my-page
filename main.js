const btn = document.querySelector('button')
const icecream = document.querySelector('.icecream')

btn.addEventListener('click', () => {
  icecream.insertAdjacentHTML('afterend', '🥗')
})
