import Borrower from "../model/borrower";
import { Request, Response } from "express";

// create Borrow
export const createBorrower = async (req: Request, res: Response) => {
  try {
    const borrower = await Borrower.create(req.body);
    res
      .status(200)
      .json({ message: "Borrow has been created", record: borrower });
  } catch (error) {
    // console.log(error);

    res.status(500).json({ message: "there is error", error: error });
  }
};
// get all boooks
export const getAllBorrowers = async (req: Request, res: Response) => {
  try {
    const borrowers = await Borrower.findAll();
    res.status(200).json({ record: borrowers });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
// update
export const updateBorrower = async (req: Request, res: Response) => {
  try {
    const [rowsAffected, [updatedBorrower]] = await Borrower.update(req.body, {
      where: {
        borrowerId: req.params.id,
      },
      returning: true,
    });
    if (rowsAffected > 0) {
      res.status(200).json({
        message: "Borrower updated successfully",
        record: updatedBorrower,
      });
    } else {
      res.status(404).json({ message: "Borrower not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

// delete one Borrow
export const deleteBorrower = async (req: Request, res: Response) => {
  try {
    await Borrower.destroy({
      where: {
        borrowerId: req.params.id,
      },
    });
    res.status(200).json({ message: "the Borrower deleted successfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "there is error", error: error });
  }
};
