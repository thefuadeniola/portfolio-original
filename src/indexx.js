window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        document.getElementById('nav').style.background = '#fff'
        document.getElementById('nav').style.color = 'blueviolet'
    } else {
        document.getElementById('nav').style.background = 'none'
        document.getElementById('nav').style.color = 'white'
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        document.getElementById('nav2').style.background = '#fff'
        document.getElementById('nav2').style.color = 'blueviolet'
    } else {
        document.getElementById('nav2').style.background = 'none'
        document.getElementById('nav2').style.color = 'white'
    }
})

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
})
