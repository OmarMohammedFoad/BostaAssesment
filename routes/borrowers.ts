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
router.put("/update/:d", updateBorrower);
router.delete("/delete/:id", deleteBorrower);

export default router;
