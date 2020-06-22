import React, { Component } from 'react';
import { Table } from 'reactstrap';

class RenderList extends Component {

  constructor(props) {
    super(props);
    this.state= {
      items: this.props.items,
    }
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck = (item) => {
    item['checked'] = !item['checked'];
    if (item['checked']) {
      item['complete'] = 'greyOut';
    }
    else {
      item['complete'] = '';
    }
    this.props.toggleLbl(this.state.items);
  }

  render() {
    const itemList = this.state.items.map((item, index) => {
      return (
        <tr>
          <td className="cr"><input id="checked" type="checkbox" name="checked" checked={item['checked']}
          onClick={() => this.toggleCheck(item) } /></td>
          <th scope="row">{index+1}</th>
          <td className={item['complete']+' fs'}>{item['task']}</td>
          <td><button className="fa fa-times fa-lg" onClick={() => this.props.deleteItem(index)}></button></td>
        </tr>
      )
    })

    return (
      <>
        <tr>
          <th className="thead" colspan="4">{this.props.lbl}</th>
        </tr>
        {itemList}
      </>
    )
  }
}

const List = (props) => {
  return (
    <div>
      <Table hover>
        <tbody>
          <RenderList items={props.items} deleteItem={props.deleteItem} lbl={props.lbl} toggleLbl={props.toggleLbl} />
        </tbody>
      </Table>
    </div>
  );
}

export default List
