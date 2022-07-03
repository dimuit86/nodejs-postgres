const { Pool } = require("pg");
require("dotenv").config(); //get environment vars.
const connectionString = process.env.POSTGRES_URL;
const pool = new Pool({
  connectionString,
});

//export query function
module.exports = {
  query: (text, params) => pool.query(text, params),
};