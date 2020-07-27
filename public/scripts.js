const cards = document.querySelectorAll('.card')
const informationLink = document.querySelector('.show-information')
const information = document.querySelector('.information')
const preparationLink = document.querySelector('.show-preparation')
const preparation = document.querySelector('.preparation')
const ingredientsLink = document.querySelector('.show-ingredients')
const ingredients = document.querySelector('.ingredients')
const linkAbout = document.querySelector('#about')
const linkRecipes = document.querySelector('#recipes')

let showIngredients = true
let showPreparation = true
let showInformation = true
let pathURL = window.location.pathname

console.log(pathURL)

if (pathURL == '/about') {
    linkAbout.classList.add('menu-active')
} else if (pathURL == '/') {
    linkRecipes.classList.remove('menu-active')
    linkAbout.classList.remove('menu-active')
} else {
    linkRecipes.classList.add('menu-active')
}

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
        if (pathURL == `/recipe/${cardId}`) {
            linkRecipes.classList.add('menu-active')
        }
        window.location.href = `/recipe/${cardId}`
    })
}

ingredientsLink.addEventListener('click', function() {
    showIngredients = show(showIngredients, ingredientsLink)
    ingredients.classList.toggle('active')
})

preparationLink.addEventListener('click', function() {
    showPreparation = show(showPreparation, preparationLink)
    preparation.classList.toggle('active')
})

informationLink.addEventListener('click', function() {
    showInformation = show(showInformation, informationLink)
    information.classList.toggle('active')
})

show = (show, element) => {
    if (show) {
        element.innerHTML = "(mostrar)"

    } else {
        element.innerHTML = "(ocultar)"
    }
    return !show
}