import { Model, DataTypes } from "sequelize";
import sequelize from "./index";
class Books extends Model {
  public title!: string;
  public Author!: string;
  public ISBN!: string;
  public available_quantity!: number;
  public ShelfLocation!: string;
}

Books.init(
  {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
      allowNull: false,
    },
    available_quantity: {
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
export default Books;
