## Library Management System

## Project Setup

Install Dependencies:
Make sure you have Node.js and npm installed.
Install project dependencies: npm install

## Getting Started

Start the application: npm run dev on port 5000

# API Documentation

## 1. Checkout a Book

**Endpoint:**
POST /api/borrowedbooks/create

**Request:**

```json
{
  "bookid": 2,
  "borrowerID": 1,
  "dueDate": "2023-12-12"
}
Response:


{
  "message": "Checkout created successfully",
  "borrowingRecord": {
    "id": 1,
    "checkoutDate": "2024-01-11T21:24:38.309+02:00",
    "dueDate": "2023-12-30T22:00:00.000+00:00",
    "returnDate": null,
    "BookId": 1,
    "BorrowerId": 1
  }
}

```

## 2. List the Books Borrowed by a Borrower

**Endpoint:**
GET /api/borrowedbooks/list/:id_of_user

**Response:**

```json
{
  "message": "Books borrowed by the borrower",
  "list": [
    {
      "borrowerId": 1,
      "name": "Abdel rahman muhammad",
      "email": "omar@gmail.com",
      "registeredDate": "2023-04-12T22:00:00.000Z",
      "createdAt": "2024-01-11T19:23:15.308Z",
      "updatedAt": "2024-01-12T00:51:59.276Z",
      "Books": [
        {
          "bookId": 1,
          "title": "test1",
          "Author": "test1",
          "ISBN": "781-022-344",
          "available_quantity": 3,
          "ShelfLocation": "D404",
          "createdAt": "2024-01-11T19:22:53.045Z",
          "updatedAt": "2024-01-11T19:29:06.935Z",
          "bookProccesses": {
            "id": 1,
            "checkoutDate": "2024-01-11T19:24:38.309Z",
            "dueDate": "2024-03-11T22:00:00.000Z",
            "returnDate": "2024-01-11T19:29:06.904Z",
            "BookBookId": 1,
            "BorrowerBorrowerId": 1
          }
        }
      ]
    }
  ]
}
```

## 3. Return a Book

**Endpoint:**
POST /api/borrowedbooks/returnbook?borrowerId=1&bookId=1

## Query Params:

**borrowerId=1, bookId=1**

Response:

```json
{
  "message": "Book returned successfully",
  "returnedBook": {
    "id": 1,
    "checkoutDate": "2024-01-11T21:24:38.309+02:00",
    "dueDate": "2023-12-30T22:00:00.000+00:00",
    "returnDate": "2024-01-12T08:00:00.000+00:00",
    "BookId": 1,
    "BorrowerId": 1
  }
}
```

## 4. List Books Overdue and Due

**Endpoint:**
GET /api/borrowedbooks/listBooksOverDueAndDue

```json
Response:

{
"message": "Books overdue and due",
"list": [
{
"id": 2,
"checkoutDate": "2024-01-11T19:36:03.769Z",
"dueDate": "2023-03-11T22:00:00.000Z",
"returnDate": null,
"BookBookId": 2,
"BorrowerBorrowerId": 1
}
]
}
```

## 1. Checkout a Book

**Endpoint**
GET api/book/list

```json
Response:
{
  "record": [
    {
      "bookId": 2,
      "title": "test2",
      "Author": "test2",
      "ISBN": "781-022-144",
      "available_quantity": 2,
      "ShelfLocation": "D404",
      "createdAt": "2024-01-11T19:35:56.234Z",
      "updatedAt": "2024-01-11T19:36:03.785Z"
    },
    {
      "bookId": 1,
      "title": "test1",
      "Author": "test1",
      "ISBN": "781-022-344",
      "available_quantity": 4,
      "ShelfLocation": "D404",
      "createdAt": "2024-01-11T19:22:53.045Z",
      "updatedAt": "2024-01-12T01:06:26.485Z"
    }
  ]
}
```

## create Book

**Endpoint**

Post api/book/create

Request:

```json
{
  "title": "test2",
  "Author": "test2",
  "ISBN": "781-022-144",
  "available_quantity": 3,
  "ShelfLocation": "D404"
}
```

Response :

```json
{
  "message": "book has been created",
  "record": {
    "bookId": 1,
    "title": "test2",
    "Author": "test2",
    "ISBN": "781-022-144",
    "available_quantity": 3,
    "ShelfLocation": "D404",
    "updatedAt": "2024-01-12T00:38:35.582Z",
    "createdAt": "2024-01-12T00:38:35.582Z"
  }
}
```

## Update book

**EndPoints**
Put api/book/update/ id

request for example:

```json
{
  "title": "Harry potter",
  "Author": "",
  "ISBN": "",
  "": ""
}
```

Response:

```json
{
  "message": "Book updated successfully",
  "record": {
    "bookId": 1,
    "title": "Harry potter",
    "Author": "test1",
    "ISBN": "781-022-344",
    "available_quantity": 4,
    "ShelfLocation": "D404",
    "createdAt": "2024-01-11T19:22:53.045Z",
    "updatedAt": "2024-01-12T02:25:48.315Z"
  }
}
```

## Delete Book

**EndPoints**
DELETE api/book/delete/1

response for example:

```json
    "message": "the book deleted successfully"

```

## Search for book

**EndPoints**
GET api/book/search?title=test2

requset
Query params
title =
Author =
and so on

response

```json
{
  "record": {
    "bookId": 2,
    "title": "test2",
    "Author": "test2",
    "ISBN": "781-022-144",
    "available_quantity": 2,
    "ShelfLocation": "D404",
    "createdAt": "2024-01-11T19:35:56.234Z",
    "updatedAt": "2024-01-11T19:36:03.785Z"
  }
}
```

## create Borrower

**Endpoint**

Post /api/borrowers/create

Request:

```json
{
  "name": "omar mohamed",
  "email": "omar@gmail.com",
  "registeredDate": "2023-4-13"
}
```

Response :

```json
{
  "message": "Borrow has been created",
  "record": {
    "borrowerId": 2,
    "name": "omar mohamed",
    "email": "omar@gmail.com",
    "registeredDate": "2023-04-12T22:00:00.000Z",
    "updatedAt": "2024-01-12T02:31:54.789Z",
    "createdAt": "2024-01-12T02:31:54.789Z"
  }
}
```

## List Borrowers

**Endpoint**

Post api/borrowers/list

Response:

```json
{
  "record": [
    {
      "borrowerId": 2,
      "name": "omar mohamed",
      "email": "omar@gmail.com",
      "registeredDate": "2023-04-12T22:00:00.000Z",
      "createdAt": "2024-01-12T02:31:54.789Z",
      "updatedAt": "2024-01-12T02:31:54.789Z"
    }
  ]
}
```

## update Borrowers

**Endpoint**

PUT api/borrowers/update/1
Request:

```json
{
  "name": "Abdel rahman muhammad"
}
```

Response:

```json
{
  "message": "Borrower updated successfully",
  "record": {
    "borrowerId": 1,
    "name": "Abdel rahman muhammad",
    "email": "omar@gmail.com",
    "registeredDate": "2023-04-12T22:00:00.000Z",
    "createdAt": "2024-01-11T19:23:15.308Z",
    "updatedAt": "2024-01-12T00:51:59.276Z"
  }
}
```

## DELETE Borrowers

**Endpoint**

DELET api/borrowers/delete/1

Response:

```json
{
  "message": "the Borrower deleted successfully"
}
```

## docker image

**the url**
https://hub.docker.com/repository/docker/omarfoaudx/bosta_library_management_system/general
