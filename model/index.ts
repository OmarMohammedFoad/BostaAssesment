import { Sequelize } from "sequelize";

const connection = new Sequelize({
  username: `postgres`,
  database: `Library_Management_System`,
  password: `omar`,
  host: `localhost`,
  port: 5432,
  dialect: "postgres",
});
export default connection;
