const express = require('express')
const app = express()
const comidaApi = require('./food.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Api")
})

app.get('/comidas/foods', (req, res) => {
    res.send(comidaApi)
})

app.listen(port, () => {
    console.log(`App  listening to port ${port}`)
})