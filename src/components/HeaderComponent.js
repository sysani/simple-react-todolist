import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state= {
      isModalOpen: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    alert(event.target.item.value);
    this.props.addItem(event.target.item.value);
    this.toggleModal();
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <Nav navbar>
              <NavItem>
                <h1>To Do List</h1>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-plus fa-lg"></span> Add Item
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add Item to To-Do List</ModalHeader>
          <ModalBody>

            <Form onSubmit={this.handleAdd}>
              <FormGroup>
                <Label htmlFor="item">I need to...</Label>
                <Input type="text" name="item" />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Add It!</Button>
            </Form>

          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header
