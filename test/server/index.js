const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const homeRoute = require("./routes/home")
const userRoute = require("./routes/user")
const arr = []

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.use(cors())
app.post('/', (req, res) => {
    arr.push(req.body.user)
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json(arr);
});
app.listen(5000)