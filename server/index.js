const express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'hbs');
app.use(bodyParser.json())
const port = 3000

// mongoose connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));



const myRoute = require('./routers/router');
app.use(myRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})