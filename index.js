const { Pool } = require("pg");
const connectionString = `postgres://postgres:${process.env.DBPASS}@localhost:5432/movies`;
const pool = new Pool({
  connectionString,
});
const query = "SELECT * from movies";
pool
  .query(query)
  .then((result) => {
    for (row of result.rows) {
      console.log(row);
    }
  })
  .catch((err) => console.log(err));
