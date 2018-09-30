import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";
import Book from "../book/Book";

class SearchPage extends Component {
  state = {
    bookSearch: "",
    searchedBooks: []
  };

  handleChange = query => {
    this.setState({
      bookSearch: query
    });
    this.getSearchedBooks(query)
  };
  // handleChange(event) {
  //   this.setState({ bookSearch: event.target.value });
  // }

  getSearchedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(searchedBooks => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
          console.log('Error Triggered')
        } else {
        this.setState({ searchedBooks: searchedBooks });
          console.log('error not triggered')
        }
      });
    } else {
      this.setState({searchedBooks: []});
    }
    
  };

  render() {
    console.log('render')
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            // onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.bookSearch}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              
              this.state.searchedBooks.map(book => (
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

export default SearchPage;
