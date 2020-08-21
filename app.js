let hamburger = document.querySelector('.bars')
let navBar = document.querySelector('nav')
hamburger.onclick = function () {
    navBar.classList.toggle('active')
}