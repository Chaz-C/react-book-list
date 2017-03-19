import React, { Component } from 'react';

class BookSearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" placeholder="Search" onChange={ this.props.setFilter } />
    );
  }

}

export default BookSearchInput;