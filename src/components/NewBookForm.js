import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.titleValue = this.titleValue.bind(this);
    this.authorValue = this.authorValue.bind(this);

  }

  submitHandler(event) {

    event.preventDefault();

    this.props.addBook( {
      title: this.state.title,
      author: this.state.author
    } );

    this.setState( {
      title: '',
      author: ''
    } );
  }

  titleValue(event) {
    this.setState( {
      title: event.target.value
    });
  }

  authorValue(event) {
    this.setState( {
      author: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.titleValue} />
        </div>
        <div>
          <input type="text" placeholder="Author" value={this.state.author} onChange={this.authorValue} />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    );
  }

}

export default NewBookForm;