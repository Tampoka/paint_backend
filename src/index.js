const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');


const cors = require('cors');

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors(), (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
app.use("/", routes);

app.get("*", function (req, res) {
    res.sendStatus(404);
});

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})