import React, { Component } from 'react';

const Book = ( { title, author } ) => (
  <li>
    <h2>{ title }</h2>
    <p>{ author }</p>
  </li>
);

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.books
            .filter( ( { title, author } ) =>
              title.indexOf(this.props.searchFilter) > -1 ||
              author.indexOf(this.props.searchFilter) > -1
            )
            .map( ( { title, author } ) =>
              <Book title={ title } author={ author } />
            )
        }
      </ul>
    );
  }
}

export default BookList;