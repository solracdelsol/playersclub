const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

const users = require('./routes/api/users');

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose 
.connect(db, { useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));




app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);

// app.get("/proxy/mlb/", (req, res) => {

//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, "0");
//     var mm = String(today.getMonth() + 1).padStart(2, "0");
//     var yyyy = today.getFullYear();
//     var date = yyyy + "/" + mm + "/" + dd;


//   fetch(`http://api.sportradar.us/${keys.MLBTrial}/en/games/${date}/schedule.json?api_key=${keys.MLBkey}`)
//     .then(result => result.json()).then(result => (res.send(result))).catch(err => console.log(err));
// })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))