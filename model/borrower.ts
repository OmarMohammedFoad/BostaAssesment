import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
import Book from "./book";

class Borrower extends Model {
  public borrowerID!: number;
  public name!: string;
  public email!: string;
  public registeredDate!: Date;
}

export default Borrower.init(
  {
    borrowerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Assuming email should be unique
    },

    registeredDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Borrower",
  }
);
