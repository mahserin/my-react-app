import React, { useState, useEffect } from "react";
import bookData from "./data.json";
import "./BookComponent.css";

const BookComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData.cd);
  }, []);

  return (
    <div>
      <br></br>
      <h1 style={{ textAlign: "center", fontFamily: "Open sans", fontSize: 40}}>Recently Books Added</h1>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <ul style={{ textAlign: "center", fontSize: 16}}className="book-info">
              <li> Title: {book.title}</li>
              <li>Author: {book.artist}</li>
              <li>Price: {book.price} $</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookComponent;
