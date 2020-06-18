import React, { Component } from 'react';
import Header from './HeaderComponent';
import List from './ListComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3'],
      added: 0
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem = (item) => {
    this.setState({
      added: this.state.items.push(item)
    })
  }

  deleteItem = (index) => {
    this.state.items.splice(index, 1)
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
      <div>
        <Header items={this.state.items} addItem={this.addItem} />
        <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default Main
