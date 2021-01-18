const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const fetch = require("node-fetch");

router.get("/mlb/:year/:month/:day", (req, res) => {
  fetch(
    `http://api.sportradar.us/mlb/trial/v7/en/games/${req.params.year}/${req.params.month}/${req.params.day}/schedule.json?api_key=${keys.MLBkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/nba/:year/:month/:day", (req, res) => {
  fetch(
    `http://api.sportradar.us/nba/trial/v7/en/games/${req.params.year}/${req.params.month}/${req.params.day}/schedule.json?api_key=${keys.NBAkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/nhl/:year/:month/:day", (req, res) => {
  fetch(
    `http://api.sportradar.us/nhl/trial/v7/en/games/${req.params.year}/${req.params.month}/${req.params.day}/schedule.json?api_key=${keys.NHLkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/nfl/:year/:month/:day", (req, res) => {
  fetch(
    // temporary solution until sportsRadar fixes their code to take in req.params.year
    `http://api.sportradar.us/nfl/official/trial/v6/en/games/2020/PST/schedule.json?api_key=${keys.NFLkey}`
  )
    // `http://api.sportradar.us/nfl/official/trial/v6/en/games/${req.params.year}/REG/schedule.json?api_key=${keys.NFLkey}`

    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/articles", (req, res) => {
  fetch(
    `https://gnews.io/api/v4/top-headlines?token=${keys.articleKey}&topic=sports&country=US&lang=en&q=NBA%20OR%20NHL%20OR%20MLB%20OR%20NFL`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get(`/scores/mlb/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/mlb/trial/v7/en/games/${req.params.id}/boxscore.json?api_key=${keys.MLBkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get(`/scores/nfl/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/nfl/official/trial/v6/en/games/${req.params.id}/boxscore.json?api_key=${keys.NFLkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get(`/scores/nhl/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/nhl/trial/v7/en/games/${req.params.id}/boxscore.json?api_key=${keys.NHLkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get(`/scores/nba/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/nba/trial/v7/en/games/${req.params.id}/boxscore.json?api_key=${keys.NBAkey}`
  )
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = router;
