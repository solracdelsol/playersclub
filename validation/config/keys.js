// module.exports = {
//   mongoURI: "mongodb+srv://dev:tDfjr8n2aqi7zod6@cluster0.rcgf4.mongodb.net/MERN?retryWrites=true&w=majority",
//   secretOrKey: "naxgjxLzgHJkJBz8PFqfD5ma"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}