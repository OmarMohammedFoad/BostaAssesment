import { Router } from "express";
import {
  checkoutBook,
  listBooksBorrowerHas,
  listBooksOverDueAndDue,
  returnBook,
} from "../controller/borrowedbooks";

const router = Router();

router.post("/create", checkoutBook);
router.get("/list/:id", listBooksBorrowerHas);
router.post("/returnbook", returnBook);
router.post("/listBooksOverDueAndDue", listBooksOverDueAndDue);
export default router;
