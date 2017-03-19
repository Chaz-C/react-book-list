import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import InitialBookList from '../../components/InitialBookList.js';
import BookList from '../../components/BookList.js';
import NewBookForm from '../../components/NewBookForm.js';
import BookSearchInput from '../../components/BookSearchInput.js';

// import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.title = 'Book List App';

    this.state = {
      books : [],
      filter : ''
    };

    this.addBook = this.addBook.bind(this);
    this.searchFilterState = this.searchFilterState.bind(this);
  }

  componentWillMount = () => {
    this.setState( { books : InitialBookList });
  }

  addBook(book) {
    InitialBookList.push(book);
    this.setState( { books : InitialBookList });
  }

  searchFilterState(event) {
    const values = event.target.value;
    this.setState( {
      filter : values
    })
  }

  render() {
    return (
      <div className="App">

        <BookListAppTitle
        title={this.title}
        />

        <BookSearchInput setFilter={ this.searchFilterState } />

        <BookList
        books={this.state.books}
        searchFilter={ this.state.filter }
        />

        <NewBookForm
        addBook={this.addBook}
        />

      </div>
    );
  }
}



export default App;
