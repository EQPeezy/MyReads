import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/pages/SearchPage";
import MainPage from "./components/pages/MainPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        {/* <MainPage books={this.state.books} changeShelf={this.changeShelf} /> */}
        <SearchPage books={this.state.books}/>
      </div>
    );
  }
}

export default BooksApp;
