import React, { Component } from "react";

export default class Book extends Component {
  render() {
    let booksList = this.props.data;
    
    return (
      <li >
        <div>
          {booksList.map(book => (
            <div className="book" key={book.id}>
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.coverArtURL})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
            </div>
          ))}
        </div>
      </li>
    );
  }
}
