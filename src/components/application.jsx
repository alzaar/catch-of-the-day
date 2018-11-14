import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import fishes from '../sample-fishes.js';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: {},
      order: {}
    }
    this.addFish = this.addFish.bind(this);
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    })

  }

  loadSampleFishes = () => {
    this.setState({fishes: fishes})
    console.log(this.state.fishes)
  }

  render() {
    return (
      <Fragment>
        <div className="catch-of-the-day">
          <div className="main">
            <Header tagline='Daily Fresh in the World'/>
          </div>
          <Order />
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        </div>
      </Fragment>
    );
  }
}

export default Application;
