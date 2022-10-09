const box = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');
let play = 'O'

let divs = []

box.forEach(item => {
    item.addEventListener('click', () => {
        if (item.childNodes.length != 1) {
            if (play === 'O') {
                item.innerHTML = 'X'
                play = 'X'
            } else {
                item.innerHTML = 'O'
                play = 'O'
            }
        }
        // console.log(item.innerHTML)
        // console.log(item.getAttribute('id'))

        // divs.push(item.getAttribute('id') + "=" + item.innerHTML)       
    })
})


btn.addEventListener('click', () => {
    box.forEach(item => {
        item.innerHTML = ""
        divs = []
    })
})
