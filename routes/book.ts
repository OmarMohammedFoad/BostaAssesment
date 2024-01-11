import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  searchBook,
  updateBook,
} from "../controller/book";
const router = Router();

router.get("/list", getAllBooks);
router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
router.get("/search", searchBook);

export default router;
