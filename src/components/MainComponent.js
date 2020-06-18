import React, { Component } from 'react';
import Header from './HeaderComponent';
import List from './ListComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['item1', 'item2', 'item3'],
    }
  }

  items: ['item1', 'item2', 'item3'];

  render() {
    return (
      <div>
        <Header items={this.state.items} />
        <List items={this.state.items} />
      </div>
    )
  }
}

export default Main
