let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('.ul .li')

let active = 0
let firstposition = 0
let lastposition = items.length - 1


nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastposition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active') + 1

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)
}


prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstposition ? lastposition : active - 1
    items[active].classList.add('active')
}












