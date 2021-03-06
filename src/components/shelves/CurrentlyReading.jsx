import React, { Component } from "react";
import Book from "../book/Book";

class CurrentlyReading extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books" />
        <ol className="books-grid">
          {this.props.books
            .filter(book => book.shelf === "currentlyReading")
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
    );
  }
}

export default CurrentlyReading;
