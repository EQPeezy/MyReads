import React, { Component } from "react";
import Book from "../book/Book";

class WantToRead extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter(book => book.shelf === "wantToRead")
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                    shelf={this.props.books.shelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default WantToRead;
