//require packages axios. dotenv
// refer to github documentaion to grab badges, email, profile pic
// use axios to call githup api
// dotenv hides api key
// cliet id and secret for api, pass into line 13 as paramaters
var axios = require("axios");
//var dotenv = require("dotenv");
//dotenv.config();
require("dotenv").config();

function api(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .catch(function(error) {
      console.log(error);
    });
}
module.exports = api;
