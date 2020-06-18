import React, { Component } from 'react';
import { Table } from 'reactstrap';

function RenderList({ items }) {
  const itemList = items.map((item) => {
    return (
      <tr>
        <th scope="row">{items.length}</th>
        <td className="fs">item[items.length-1]</td>
        <td><span className="fa fa-plus fa-lg"></span>Edit</td>
        <td><span className="fa fa-plus fa-lg"></span>Delete</td>
        <td className="cr"><input id="checked" type="checkbox" name="checked" /></td>
      </tr>
    )
  })
  return (
    {itemList}
  );
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
            <tr>
              <th scope="row">1</th>
              <td className="fs">Item One</td>
              <td><span className="fa fa-plus fa-lg"></span>Edit</td>
              <td><span className="fa fa-plus fa-lg"></span>Delete</td>
              <td className="cr"><input id="checked" type="checkbox" name="checked" /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Item Two</td>
              <td><span className="fa fa-icon-edit fa-lg"></span>Edit</td>
              <td><span className="fa fa-plus fa-lg"></span>Delete</td>
              <td className="cr"><input id="checked" type="checkbox" name="checked" /></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Item Three</td>
              <td><span className="fa fa-icon-edit fa-lg"></span>Edit</td>
              <td><span className="fa fa-plus fa-lg"></span>Delete</td>
              <td className="cr"><input id="checked" type="checkbox" name="checked" /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default List
