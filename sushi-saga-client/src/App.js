import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = `http://localhost:3000/sushis`

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    money: 100,
    displayIndex: 0
  }

  componentDidMount = async() => {
    await fetch(API)
    .then((resp) => resp.json())
    .then((data) => this.setState({sushis: data}));
  }

  renderFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  more = () => {
    let newDisplayIndex = this.state.displayIndex+4
    newDisplayIndex >= this.state.sushis.length ? newDisplayIndex = 0 : this.setState({displayIndex: newDisplayIndex})
  }

  eatSushi = (sushi) => {
    let newMoney = this.state.money - sushi.price
    if(!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({eaten: [...this.state.eaten, sushi], money: newMoney}) 
    } else if (this.state.money < sushi.price) {
      window.alert(`not enough money for this sushi. money: $${this.state.money}`)
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} eatSushi={this.eatSushi} sushis={this.renderFourSushis()} more={this.more} />
        <Table eaten={this.state.eaten} money={this.state.money} />
      </div>
    );
  }
}

export default App;