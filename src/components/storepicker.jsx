import React, { Component } from 'react';
import { Fragment } from 'react';
import '../css/style.css';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
    this.myInput = React.createRef();
  }



  goToStore(event) {
    event.preventDefault();
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.goToStore} className='store-selector' >
          <h2>Please enter a store!</h2>
          <input ref={this.myInput} type='text' placeholder='Store Name' defaultValue={ getFunName() } />
          <button type='submit'>Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
