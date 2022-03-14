const { Pool } = require("pg"); // to import Postgre SQL npm package
const url = `postgres://postgres:root@localhost:5432/movies`;
const client = new Pool({
  connectionString: url,
}); // Connect to PSQL DB using URL

const query = "SELECT * from movies;"; // Writing the query to be executedd
client
  .query(query)
  .then((result) => {
    for (row of result.rows) {
      console.log(row);
    }
  })
  .catch((err) => console.log(err)); // Handling Errors if occurs
