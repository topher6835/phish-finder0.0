const axios = require('axios');

const ROOT_URL = `https://phish.in/api/v1/`;

module.exports = app => {
  app.get(
    "/api/all_years",
    (req, res) => {
      axios.get(`${ROOT_URL}years`)
        .then( resp => {res.send(resp.data.data)} )
    }
  );

  app.get(
    "/api/shows_in_year/:year",
    (req, res) => {
      axios.get(`${ROOT_URL}years/${req.params.year}`)
        .then( resp => {res.send(resp.data)} )
    }
  );
};
