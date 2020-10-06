const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const fetch = require("node-fetch");


router.get("/mlb", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var date = yyyy + "/" + mm + "/" + dd;

  fetch(
    `http://api.sportradar.us/mlb/trial/v7/en/games/${date}/schedule.json?api_key=${keys.MLBkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/nba", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var date = yyyy + "/" + mm + "/" + dd;

  fetch(
    `http://api.sportradar.us/nba/trial/v7/en/games/${date}/schedule.json?api_key=${keys.NBAkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


router.get("/nhl", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var date = yyyy + "/" + mm + "/" + dd;

  fetch(
    `http://api.sportradar.us/nhl/trial/v7/en/games/${date}/schedule.json?api_key=${keys.NHLkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/articles", (req, res) => {

  fetch(
    `https://gnews.io/api/v4/top-headlines?token=${keys.articleKey}&topic=sports&country=US&lang=en&q=NBA%20OR%20NHL%20OR%20MLB`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


module.exports = router;
