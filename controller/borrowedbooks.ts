import borrowedbooks from "../model/borrowedbooks";
import { Op, where } from "sequelize";

import { Request, Response } from "express";
import borrower from "../model/borrower";
import Books from "../model/book";

export const checkoutBook = async (req: Request, res: Response) => {
  try {
    // user book
    // check if there is user with this id or not
    // check if there is book with this id or not
    /**
     *
     */
    const { borrowerID, bookid, dueDate } = req.body;
    const userBorrower = await borrower.findByPk(borrowerID);

    if (!userBorrower) {
      res.status(400).json({ message: "userBorrower is not found" });
    } else {
      const book: any = await Books.findByPk(bookid);
      if (!book || book.available_quantity <= 0) {
        res
          .status(400)
          .json({ message: "book is not availavle for checkout !" });
      } else {
        const created = await borrowedbooks.create({
          BookBookId: bookid,
          BorrowerBorrowerId: borrowerID,
          checkoutDate: new Date(),
          returnDate: null,
          dueDate: dueDate,
        });

        if (created) {
          await Books.update(
            { available_quantity: book.available_quantity - 1 },
            {
              where: { bookId: bookid },
            }
          );
        }

        res
          .status(200)
          .json({ message: "checkout created successfulyy", created });
      }
    }
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ message: "error creating checkout" });
  }
};

export const listBooksBorrowerHas = async (req: Request, res: Response) => {
  try {
    const list: any = await borrower.findAll({
      where: { borrowerId: req.params.id },
      include: Books,
    });

    if (!list) {
      return res
        .status(404)
        .json({ message: "No books currently borrowed by the borrower" });
    }
    res.status(200).json({ message: "the returned books", list });
  } catch (error) {
    console.log(error);

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
    // give the id of book and borrower
    // check if the borrower has the book or not
    // get the borrower and make the checkoutretrun data new date
    // available quantity increased by one
    //
    const { bookId, borrowerId } = req.body;
    console.log(bookId, borrowerId);

    const borrowingRecord: any = await borrowedbooks.findOne({
      where: {
        BookBookId: bookId,
        BorrowerBorrowerId: borrowerId,
        returnDate: null,
      },
    });
    if (!borrowingRecord) {
      return res.status(400).json({
        error: "Book is not currently borrowed by the specified borrower",
      });
    } else {
      console.log(`borrowingRecord`, borrowingRecord);

      const [numUpdated, return_book] = await borrowedbooks.update(
        { returnDate: new Date() },
        {
          where: {
            BorrowerBorrowerId: borrowingRecord.dataValues.BorrowerBorrowerId,
            BookBookId: bookId,
          },
          returning: true,
        }
      );

      const book: any = await Books.findByPk(bookId);
      console.log(`book.available_quantity`, book.available_quantity);

      await Books.update(
        { available_quantity: book.available_quantity + 1 },
        { where: { bookId: bookId } }
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
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
