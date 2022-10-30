const { Pool } = require("pg");
const databaseConn = require("./config");
console.log(databaseConn);
// const pool = new Pool({
//   DATABASE_URL: databaseConn.url,
// });

const pool = new Pool({
  host: databaseConn.host,
  user: databaseConn.user,
  database: databaseConn.database,
  password: databaseConn.password,
  port: databaseConn.port,
});
 pool.connect((err, client, release) => {
  if (err) {
    console.log(err);
  } else {
    return console.log("connected successfully ");
  }
});
module.exports = {
  async query(text, params) {
    // invocation timestamp for the query method
    const start = Date.now();
    try {
      const res = await pool.query(text, params);
      // time elapsed since invocation to execution
      const duration = Date.now() - start;
      console.log("executed query", { text, duration, rows: res.rowCount });
      return res;
    } catch (error) {
      console.log(error.message);
      console.log("error in query", { text });
      throw error;
    }
  },
};
// text will be something like 'SELECT * FROM $1'
// params something like this array: ['users'] i.e. the table name
// $1 => replaced by users in final query
