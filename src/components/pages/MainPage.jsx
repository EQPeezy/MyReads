import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CurrentlyReading from "../shelves/CurrentlyReading";
import WantToRead from "../shelves/WantToRead";
import Read from "../shelves/Read";


class MainPage extends Component {
  render() {
    
    return (
      
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Library</h1>
        </div>
        <div className="list-books-content">
          <CurrentlyReading 
            books={this.props.books} 
            changeShelf={this.props.changeShelf}
            shelf={this.props.books.shelf}
          />
          <WantToRead 
            books={this.props.books} 
            changeShelf={this.props.changeShelf}
            shelf={this.props.books.shelf}
          />
          <Read 
            books={this.props.books} 
            changeShelf={this.props.changeShelf}
            shelf={this.props.books.shelf}
          />
        </div>
        <div className="open-search">
          {/* <a onClick={() => this.props.history.push("/search")}>
            Add a book
          </a> */}
          <NavLink to="/search">
            Add a book
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MainPage;
