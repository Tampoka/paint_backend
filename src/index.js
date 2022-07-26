const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const routes = require("/routes")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors(), (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
app.use('/', routes);

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})