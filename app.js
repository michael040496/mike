const express = require('express');
var app = express();
var path = require('path');

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}
   

var ant = new pet(
    "Anty",
    5,
    "Anteater");

    var bunny = new pet(
        "thugz bunny",
        12,
        "pimp");
        
        var data = [bunny, ant];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))

});

app.get('/data', (req, res) => {
    res.json(data)

});



app.listen(process.env.PORT || 8080)

