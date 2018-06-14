const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.argv[2] || 8080;
const jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const songs = [{
  name: 'Can\'t Stop the Feeling',
  picture: '/pictures/stop.jpg',
  audio: '/audio/CantStopTheFeeling.mp3',
  id: 0
},
{
  name: "Mirrors",
  picture: "/pictures/mirror.jpg",
  audio: "/audio/Mirrors.mp3",
  id: 1
},
{
  name: "Say Something",
  picture: "/pictures/saysomething.jpg",
  audio: "/audio/SaySomething.mp3",
  id: 2
},
{
  name: "Suit and Tie",
  picture: "/pictures/suitie.png",
  audio: "/audio/suitTie.mp3",
  id: 3
},
{
  name: "That Girl",
  picture: "/pictures/thatgirl.jpg",
  audio: "/audio/ThatGirl.mp3",
  id: 4
},
{
  name: "What Goes Around",
  picture: "/pictures/whatgoesaround.jpg",
  audio: "/audio/WhatGoesAround.mp3",
  id: 5
}
]


app.get("/getsongs", (req, res) => {
  console.log(songs)
  res.json(songs)

})

app.listen(port, () => {
  console.log(`Server started on http://localhost: ${port}`);
  console.log('Press CTRL + C to stop server');
})