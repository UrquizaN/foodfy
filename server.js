const express = require('express')
const { static } = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.use(static("public"))
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

server.get('/', function(request, response) {
    return response.render('index', { recipes })
})

server.get('/about', function(request, response) {
    return response.render('about')
})

server.get('/recipes', function(request, response) {
    return response.render('recipes', { recipes })
})

server.get('/recipe/:id', function(request, response) {
    const id = request.params.id

    const recipe = recipes.find(recipe => recipe.id == id)

    if (!recipe) {
        return response.render("not-found")
    }

    return response.render('recipe', { recipe })
})

server.listen(5000, function() {
    console.log('Server is running')
})