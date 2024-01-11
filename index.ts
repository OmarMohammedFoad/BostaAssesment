import express from "express";
import Book from "./routes/book";
import borrowers from "./routes/borrowers";
import borrowersRoute from "./routes/borrowingbooks";
import Books from "./model/book";
import borrower from "./model/borrower";
import borrowedbooks from "./model/borrowedbooks";

const app = express();
app.use(express.json());
borrowedbooks.belongsTo(Books, { foreignKey: "bookId" });
borrowedbooks.belongsTo(borrower, { foreignKey: "borrowerId" });

const PORT = 5000;
app.use("/api/book", Book);
app.use("/api/borrowers", borrowers);
app.use("/api/borrowedbooks", borrowersRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
