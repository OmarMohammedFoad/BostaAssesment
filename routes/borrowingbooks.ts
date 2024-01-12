import { Router } from "express";
import {
  checkoutBook,
  listBooksBorrowerHas,
  listBooksOverDueAndDue,
  listOverdueBorrowsLastMonth,
  returnBook,
} from "../controller/borrowedbooks";

const router = Router();

router.post("/create", checkoutBook);
router.get("/list/:id", listBooksBorrowerHas);
router.post("/returnbook", returnBook);
router.post("/listBooksOverDueAndDue", listBooksOverDueAndDue);
router.post("/listOverdueBorrowsLastMonth", listOverdueBorrowsLastMonth);
export default router;
