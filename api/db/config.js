const dotenv = require("dotenv");
dotenv.config();
// const databaseConn = {
//   url: `postgres://${process.env.RDSUSER}:${process.env.RDSPASSWORD}@${process.env.RDSHOST}:${process.env.PGPORT}/${process.env.RDSDATABASE}`,
// };

const databaseConn = {
  host: process.env.RDSHOST,
  port: process.env.PGPORT,
  database: process.env.RDSDATABASE,
  user: process.env.RDSUSER,
  password: process.env.RDSPASSWORD,
};
module.exports = databaseConn;
