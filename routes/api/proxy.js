const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const fetch = require('node-fetch');

// Get Scheduled Games
router.get('/:sport/:year/:month/:day', (req, res) => {
  fetch(
    `http://api.sportradar.us/${req.params.sport}/trial/v7/en/games/${
      req.params.year
    }/${req.params.month}/${req.params.day}/schedule.json?api_key=${
      req.params.sport === 'nba'
        ? keys.NBAkey
        : req.params.sport === 'mlb'
        ? keys.MLBkey
        : req.params.sport === 'nhl'
        ? keys.NHLkey
        : ''
    }`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.get('/nfl/:year/:month/:day', (req, res) => {
  fetch(
    // temporary solution until sportsRadar fixes their code to take in req.params.year
    `http://api.sportradar.us/nfl/official/trial/v6/en/games/2020/PST/schedule.json?api_key=${keys.NFLkey}`
  )
    // `http://api.sportradar.us/nfl/official/trial/v6/en/games/${req.params.year}/REG/schedule.json?api_key=${keys.NFLkey}`

    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get Articles
router.get('/articles', (req, res) => {
  fetch(
    `https://gnews.io/api/v4/top-headlines?token=${keys.articleKey}&topic=sports&country=US&lang=en&q=NBA%20OR%20NHL%20OR%20MLB%20OR%20NFL`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get Individual Game Scores
router.get(`/scores/:sport/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/${req.params.sport}/trial/v7/en/games/${
      req.params.id
    }/boxscore.json?api_key=${
      req.params.sport === 'nba'
        ? keys.NBAkey
        : req.params.sport === 'mlb'
        ? keys.MLBkey
        : req.params.sport === 'nhl'
        ? keys.NHLkey
        : ''
    }`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.get(`/scores/nfl/:id`, (req, res) => {
  fetch(
    `http://api.sportradar.us/nfl/official/trial/v6/en/games/${req.params.id}/boxscore.json?api_key=${keys.NFLkey}`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get Team Profiles
router.get(`/teams/:sport/:teamId`, (req, res) => {
  fetch(
    `http://api.sportradar.us/${req.params.sport}/trial/v7/en/teams/${
      req.params.teamId
    }/profile.json?api_key=${
      req.params.sport === 'nba'
        ? keys.NBAkey
        : req.params.sport === 'mlb'
        ? keys.MLBkey
        : req.params.sport === 'nhl'
        ? keys.NHLkey
        : ''
    }`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.get(`/teams/nfl/:teamId`, (req, res) => {
  fetch(
    `http://api.sportradar.us/nfl/official/trial/v6/en/teams/${req.params.teamId}/profile.json?api_key=${keys.NFLkey}`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

// Get Player Profile (does not work for NFL at the moment)
router.get(`/:sport/players/:playerId`, (req, res) => {
  fetch(
    `http://api.sportradar.us/${req.params.sport}/trial/v7/en/players/${
      req.params.playerId
    }/profile.json?api_key=${
      req.params.sport === 'nba'
        ? keys.NBAkey
        : req.params.sport === 'mlb'
        ? keys.MLBkey
        : req.params.sport === 'nhl'
        ? keys.NHLkey
        : ''
    }`
  )
    .then(result => {
      if (!result.ok) throw new Error(`${result.status} ${result.statusText}`);
      return result.json();
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

module.exports = router;
