import { Router } from "express";
import {
  createBorrower,
  deleteBorrower,
  getAllBorrowers,
  updateBorrower,
} from "../controller/borrow";

const router = Router();

router.get("/list", getAllBorrowers);
router.post("/create", createBorrower);
router.put("/update/:id", updateBorrower);
router.delete("/delete/:id", deleteBorrower);

export default router;
