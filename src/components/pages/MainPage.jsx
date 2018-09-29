import React, { Component } from "react";
import CurrentlyReading from "../shelves/CurrentlyReading";
import WantToRead from "../shelves/WantToRead";
import Read from "../shelves/Read";

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <CurrentlyReading books={this.props.books} />
          <WantToRead books={this.props.books} />
          <Read books={this.props.books} />
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </a>
        </div>
      </div>
    );
  }
}

export default MainPage;
