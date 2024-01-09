import borrowedbooks from "../model/borrowedbooks";
import { Op, where } from "sequelize";

import { Request, Response } from "express";

export const checkoutBook = async (req: Request, res: Response) => {
  try {
    const { borrowedID, ISBN, returnDate } = req.body;
    const borrowedBook = await borrowedbooks.create({
      borrowedID: borrowedID,
      ISBN: ISBN,
      checkoutDate: new Date(),
      returnDate: returnDate,
    });

    res
      .send(200)
      .json({ message: "checkout created successfulyy", borrowedBook });
  } catch (error) {
    res.send(500).json({ message: "error creating checkout", error });
  }
};

export const listBooksBorrowerHas = async (req: Request, res: Response) => {
  try {
    const list = await borrowedbooks.findAll({
      where: {
        returnDate: null,
        borrowerID: req.params.id,
      },
    });
    if (list.length === 0) {
      return res
        .status(404)
        .json({ message: "No books currently borrowed by the borrower" });
    }
    res.status(200).json({ message: "the returned books", list });
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
export const listBooksOverDueAndDue = async (req: Request, res: Response) => {
  try {
    const list = await borrowedbooks.findAll({
      where: {
        returnDate: null,
        dueDate: { [Op.lt]: new Date() },
      },
    });
    if (list.length === 0) {
      return res.status(404).json({ message: "No books currently " });
    }
    res.status(200).json({ message: "the returned books", list });
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { borrowerID, ISBN } = req.params;
    const [numUpdated, return_book] = await borrowedbooks.update(
      { returnDate: new Date() },
      {
        where: {
          borrowerID: borrowerID,
          ISBN: ISBN,
          returnDate: null,
        },
        returning: true,
      }
    );
    if (numUpdated === 0) {
      return res
        .status(404)
        .json({ message: "Borrowed book not found or already returned" });
    }

    res.status(200).json({
      message: "Book returned successfully",
      returnedBook: return_book[0],
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
