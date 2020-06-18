import React, { Component } from 'react';
import { Table } from 'reactstrap';

function RenderList({ items }) {
  const itemList = items.map((item, index) => {
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td className="fs">{item}</td>
        <td><span className="fa fa-plus fa-lg"></span>Edit</td>
        <td><span className="fa fa-plus fa-lg"></span>Delete</td>
        <td className="cr"><input id="checked" type="checkbox" name="checked" /></td>
      </tr>
    )
  })
  return itemList;
}

class List extends Component {

  constructor(props) {
    super(props);
    this.state= {
      items: this.props.items
    }
  }

  render() {
    return (
      <div>
        <Table hover>
          <tbody>
            <tr>
              <th className="nh" colSpan="4"></th>
              <th colSpan="1">Complete?</th>
            </tr>
            <RenderList items={this.state.items} />
          </tbody>
        </Table>
      </div>
    )
  }
}

export default List
