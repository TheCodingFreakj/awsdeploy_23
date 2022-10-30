const db = require("../db");
//User constructor
class User {
  constructor({ username, email, password, bio = `Hi, I am ${username}` }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.bio = bio;
  }
  async createUser() {
    try {
      const { rows } = await db.query(
        `INSERT INTO users(username, email, password, bio)
             VALUES ($1, $2, $3, $4)`,
        [this.username, this.email, this.password, this.bio]
      );
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  }
}


getUsers = async function () {
  try {
    const { rows } = await db.query(`SELECT * FROM users`);
    console.log("rowsGotten", rows);
    return rows;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = { User, getUsers };

// connection = psycopg2.connect(
//     host='customers.mydomain.com',  # host on which the database is running
//     database='database_name',  # name of the database to connect to
//     user='username',  # username to connect with
//     password='password'  # password associated with your username
// )
// db.query: the query method we exported earlier from db/index.js
// # PGUSER='postgres'
// # PGHOST='localhost'
// # PGDATABASE='pallavipriya-devdb'
// # PGPASSWORD=''