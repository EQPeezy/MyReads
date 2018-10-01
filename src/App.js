import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/pages/SearchPage";
import MainPage from "./components/pages/MainPage";
import createBrowserHistory from "history/createBrowserHistory";


const history = createBrowserHistory();

class BooksApp extends React.Component {
  state = {
    books: [],
    shelf: "none"
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
      <BrowserRouter>
        <div className="app">
          {/* <Route exact path="/" component={Home}/> */}
          <Route
          exact
            path="/"
            render={props => (
              <MainPage
                books={this.state.books}
                changeShelf={this.changeShelf}
                history={history}
              />
            )}
          />
          <Route
            path="/search"
            render={props => (
              <SearchPage
                books={this.state.books}
                changeShelf={this.changeShelf}
                history={history}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
