const users = require("./db.json");
const tweets = require("./tweets.json");
// Something more

module.exports = () => ({
  users: users,
  tweets: tweets,
  // Something more
});
