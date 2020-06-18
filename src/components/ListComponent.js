import React, { Component } from 'react';
import { Table } from 'reactstrap';


class List extends Component {
  render() {
    return (
      <div>
        <Table hover>
          <tbody>
            <tr>
              <th className="nh" colspan="4"></th>
              <th colspan="1">Complete?</th>
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
