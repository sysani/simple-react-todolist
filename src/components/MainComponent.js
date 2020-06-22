import React, { Component } from 'react';
import Header from './HeaderComponent';
import List from './ListComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          checked: false,
          complete: '',
          task: 'Click Add Task to add a new item and X to delete!',
        }
      ],
      added: 0,
      lbl: 'Complete?'
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleLbl = this.toggleLbl.bind(this);
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
    this.toggleLbl(this.state.items)
  }

  toggleLbl = (items) => {
    const tasksComplete = items.filter(task => task['checked'] == true);
    if (items.length == 0 || tasksComplete.length == items.length) {
      this.setState({
        lbl: 'All Tasks Complete!'
      })
    }
    else {
      this.setState({
        lbl: 'Complete?'
      })
    }
  }

  render() {
    return (
      <div>
        <Header items={this.state.items} addItem={this.addItem} toggleLbl={this.toggleLbl} />
        <List items={this.state.items} lbl={this.state.lbl} deleteItem={this.deleteItem} toggleLbl={this.toggleLbl} />
      </div>
    )
  }
}

export default Main
