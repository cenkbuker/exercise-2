// let first = document.getElementById('container')
// let second = document.querySelector('#container')
// let third = document.querySelectorAll('.second')
// let fourth = document.querySelector('ol .third')
// let fifth = document.querySelector('#container')
// fifth.innerHTML = 'Hello!'
// let sixth = document.querySelector('.footer')
// sixth.classList.add('main')
// sixth.classList.remove('main')
// let eighth = document.createElement('li')
// eighth.innerHTML=('four')
// let tenth = document.querySelector('ul')
// tenth.appendChild(eighth)
let eleventh = document.querySelectorAll('ol li')
for(let i of eleventh){
    i.style.backgroundColor = "green";
}
let twelveth = document.querySelector('.footer')
twelveth.remove()