const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/callback', (req, res) => {
    const { body, query } = req
    console.log(JSON.stringify(body))
    console.log(JSON.stringify(query))
    return res.end()
})

app.post('/incident', (req, res) => {
    const { body } = req
    console.log(JSON.stringify(body))
    return res.end()
})

app.get('/blog', (req, res) => {
    res.json([
        { title: 'teste tintim', description: 'descricao blog' },
        { title: 'Exame de próstata', description: 'Novembro azul' },
        { title: 'Alimentação saudável', description: 'teste teste teste' },
    ]).end()
})

module.exports = app