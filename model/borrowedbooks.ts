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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    borrowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "bookProccesses",
  }
);
sequelize.sync();
