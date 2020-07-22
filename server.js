const express = require('express')
const { static } = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(static("public"))
server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

server.get('/', function(request, response) {
    return response.render('index')
})

server.listen(5000, function() {
    console.log('Server is running')
})