const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{//creating a server
    console.log("Sever is now listening at port 3000");
})

client.connect(); // conneceting the client to thee server

const bodyParser = require("body-parser");
app.use(body-Parser.json());

