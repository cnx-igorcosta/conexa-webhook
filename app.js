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
    const { page, pageSize } = req.query

    let articles
    if (page === 1) {
        articles =[
            { thumbnail: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/11/13/thumbs_b_c_1bf94b5f3b77b2dc7c0a19c3b39d798a.jpg?v=121023', url: 'https://www.aa.com.tr/en/asia-pacific/infections-peak-as-virus-rears-head-in-pakistan-again/2042493', title: 'Infections peak as virus rears head in Pakistan again', content: 'Governments "undue" claim of victory against COVID-19 made people, authorities careless, says health expert', created_date: '13/11/2020', active: true },
            { thumbnail: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/11/13/thumbs_b_c_8daa0f794f72645a5141a1805e1b8d17.jpg?v=183012', url: 'https://www.aa.com.tr/en/health/football-irish-midfielder-browne-contracts-coronavirus/2043036', title: 'Football: Irish midfielder Browne contracts coronavirus', content: 'Alan Browne tests positive for COVID-19 after playing against England on Thursdays friendly game', created_date: '13/11/2020', active: true },
            { thumbnail: '', url: '', title: '', content: '', created_date: '10/10/2020', active: false },
        ]
    } if (page === 2) {
        articles = [
            { thumbnail: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/06/thumbs_b_c_92e236aad4c37f8608e737e545b15133.jpg?v=162956', title: 'South Africa to examine Madagascar’s COVID-19 drug', content: 'At the request of Madagascar, South Africa will assist in the scientific analysis of herbal potion COVID Organics', created_date: '06/05/2020', active: true },
            { thumbnail: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/11/13/thumbs_b_c_689fa6b18e0fc7be5a369501f724db9a.jpg?v=191759', url: 'https://www.aa.com.tr/en/americas/us-over-130-secret-service-officers-got-covid-19/2043073', title: 'US: Over 130 Secret Service officers got COVID-19', content: 'Officers believed to contract virus during Trumps rallies before election where many attendees did not wear masks', created_date: '13/11/2020', active: true },
        ]
    }

    res.json({
        articles,
        actualPage: 1, 
        totalPage: 2
    })
})

module.exports = app