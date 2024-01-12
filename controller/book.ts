import { Op } from "sequelize";
import Book from "../model/book";
import { Request, Response } from "express";

// create book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json({ message: "book has been created", record: book });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "there is error", error: error });
  }
};
// get all boooks
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ record: books });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
// get one book
export const searchBook = async (req: Request, res: Response) => {
  try {
    const book: any = await Book.findOne({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${req.query.title}%` } },
          { Author: { [Op.iLike]: `%${req.query.Author}%` } },
          { ISBN: { [Op.iLike]: `%${req.query.ISBN}%` } },
        ],
      },
    });

    if (book) {
      res.status(200).json({ record: book });
    } else {
      res.status(404).json({ message: "no books " });
    }
  } catch (error) {
    res.status(500).json({ message: "please enter right query", error: error });
  }
};
// delete one book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    await Book.destroy({
      where: {
        bookId: req.params.id,
      },
    });
    res.status(200).json({ message: "the book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "there is error", error: error });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const [rowsAffected, [updatedBook]] = await Book.update(req.body, {
      where: {
        bookId: req.params.id,
      },
      returning: true,
    });

    if (rowsAffected > 0) {
      res.status(200).json({
        message: "Book updated successfully",
        record: updatedBook,
      });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
