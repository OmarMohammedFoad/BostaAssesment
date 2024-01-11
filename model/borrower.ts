import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

class Borrower extends Model {
  public borrowerID!: number;
  public name!: string;
  public email!: string;
  public registeredDate!: Date;
}

export default Borrower.init(
  {
    borrowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
