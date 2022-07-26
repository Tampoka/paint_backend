const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();


const cors = require('cors');

const app = express()
const port = process.env.PORT || 4000
mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors(), (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
app.use("/projects", routes);

app.get("*", function (req, res) {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})