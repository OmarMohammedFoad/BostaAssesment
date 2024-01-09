import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
class Book extends Model {
  public bookID!: number;
  public title!: string;
  public Author!: string;
  public ISBN!: string;
  public available_quantity!: number;
  public ShelfLocation!: string;
}

export default Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    ISBNavailable_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ShelfLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Book",
  }
);
