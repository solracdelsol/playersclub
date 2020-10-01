let keys;

if (process.env.NODE_ENV === "production") {
  keys = require("./src_keys_prod");
} else {
  keys = require("./src_keys_dev");
}

export default keys;
