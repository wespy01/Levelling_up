const nameTag = document.querySelector('.name-tag')
const ageTag = document.querySelector('.age-tag')

const nameInput = document.querySelector('.name')
const ageInput = document.querySelector('.age')


nameTag.innerText = localStorage.getItem('myName') || 'light yagami'
ageTag.innerText = localStorage.getItem('myAge') || 19

nameInput.addEventListener('input', (e) => {
    const nameVal = e.target.value.toUpperCase()
    nameTag.innerText = localStorage.setItem('myName', nameVal)
    nameTag.innerText = localStorage.getItem('myName')
})


ageInput.addEventListener('input', (e) => {
    const ageVal = e.target.value
    ageTag.innerText = localStorage.setItem('myAge', ageVal)
    ageTag.innerText = localStorage.getItem('myAge')
})

