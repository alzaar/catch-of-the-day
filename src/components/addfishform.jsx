import React from 'react';

class AddFishForm extends React.Component {
  constructor(props) {
    super(props);
    this.createFish = this.createFish.bind(this);
    this.nameRef = React.createRef();
    this.priceRef = React.createRef();
    this.statusRef = React.createRef();
    this.descRef = React.createRef();
    this.imageRef = React.createRef();
  }

  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addFish(fish);
    event.currentTarget.reset();
  }

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} placeholder="Name" type="text"/>
          <input name="price" ref={this.priceRef} placeholder="Price" type="text"/>
          <select name="status" ref={this.statusRef} placeholder="Status" >
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
          <input name="image" ref={this.imageRef} placeholder="I mage" type="text"/>
          <button type="submit">Add Fish</button>
        </form>
      </div>
    );
  }
}


export default AddFishForm;
