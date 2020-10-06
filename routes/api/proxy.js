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
    `http://api.sportradar.us/${keys.MLBTrial}/trial/v7/en/games/${date}/schedule.json?api_key=${keys.MLBkey}`
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
    `http://api.sportradar.us/${keys.NBATrial}/trial/v7/en/games/${date}/schedule.json?api_key=${keys.NBAkey}`
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
    `http://api.sportradar.us/${keys.NHLTrial}/trial/v7/en/games/${date}/schedule.json?api_key=${keys.NHLkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});



module.exports = router;
