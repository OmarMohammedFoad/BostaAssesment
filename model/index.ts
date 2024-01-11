import { Sequelize } from "sequelize";

const connection = new Sequelize({
  username: `${process.env.USER_NAME}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.PASSWORD}`,
  host: `${process.env.HOST}`,
  port: 5432,
  dialect: "postgres",
});
export default connection;
