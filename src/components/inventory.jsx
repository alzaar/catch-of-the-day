import React from 'react';
import AddFishForm from './addfishform';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.fishInven = this.fishInven.bind(this);
  }

  fishInven(fish) {
    this.props.addFish(fish)
  }

  render() {
    return (
      <div className='inventory' >
        <p>Inventory Please!</p>
        <AddFishForm addFish={this.fishInven} />
        <button onClick={this.props.loadSampleFishes}>Load Sample of Fishes</button>
      </div>
    );
  }
}

export default Inventory;
