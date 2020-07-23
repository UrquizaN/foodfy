const cards = document.querySelectorAll('.card')
const informationLink = document.querySelector('.show-information')
const information = document.querySelector('.information')
const preparationLink = document.querySelector('.show-preparation')
const preparation = document.querySelector('.preparation')
const ingredientsLink = document.querySelector('.show-ingredients')
const ingredients = document.querySelector('.ingredients')

let showIngredients = true
let showPreparation = true
let showInformation = true

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
            // modal.classList.add('active')
        console.log('oi')

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