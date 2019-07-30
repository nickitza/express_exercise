var express = require('express')
var app = express();

app.get('/', function(req, res){
  res.send("Hi there! Welcome to my assignment!")
})

app.get('/speak/:animal', function(req, res){
  var sounds = {
    pig: "oink",
    dog: "woof",
    cat: "purr",
    sheep: "baa baa",
    cow: "moo"
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal]
      res.send("The " + animal + " says " + sound+"!")
})

app.get('/repeat/:word/:times', function(req, res){
  var word = req.params.word
  var times = Number(req.params.times)
  var result = ""
  console.log(word)
  console.log(times)
  for(var i = 0; i < times; i++){
    result += word + " ";
  }
  res.send(result)
})

app.get('/*', function(req, res){
  res.send("You're lost!")
})


app.listen(3000, function(){
  console.log('Server listening on port 3000!')
})