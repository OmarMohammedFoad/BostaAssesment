import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

class borrowedBooks extends Model {
  public borrowingID!: number;
  public borrowerID!: number;
  public ISBM!: number;
  public checkoutDate!: Date;
  public returnDate!: Date;
}

export default borrowedBooks.init(
  {
    borrowingID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    borrowerID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Borrower",
        key: "borrowerID",
      },
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.INTEGER,
      references: {
        model: "Book",
        key: "ISBN",
      },
      allowNull: false,
    },
    checkoutDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "bookProccess",
  }
);
