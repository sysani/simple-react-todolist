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
    this.props.addItem({checked:false, complete:'', task:event.target.item.value});
    this.toggleModal();
    this.props.toggleLbl(this.props.items)
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
                  <span className="fa fa-plus fa-lg"></span> Add Task
                </Button>
              </NavItem>
            </Nav>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add a Task:</ModalHeader>
          <ModalBody>

            <Form onSubmit={this.handleAdd}>
              <FormGroup>
                <Input type="text" name="item" placeholder="I need to..." />
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
