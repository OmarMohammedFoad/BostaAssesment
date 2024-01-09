import book from "./book";
import borrower from "./borrower";
import borrowedbooks from "./borrowedbooks";

borrowedbooks.belongsTo(book, { foreignKey: "ISBN" });
borrowedbooks.belongsTo(borrower, { foreignKey: "BorrowerID" });

book.hasMany(borrowedbooks, { foreignKey: "ISBN" });
borrower.hasMany(borrowedbooks, { foreignKey: "BorrowerID" });
