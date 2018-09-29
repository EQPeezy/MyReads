import React, { Component } from "react";
import Book from "../book/Book";

class Read extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter(book => book.shelf === "read")
              .map(book => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Read;