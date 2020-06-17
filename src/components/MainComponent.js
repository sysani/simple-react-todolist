import React, { Component } from 'react';
import Header from './HeaderComponent';
import List from './ListComponent';


class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    )
  }
}

export default Main
