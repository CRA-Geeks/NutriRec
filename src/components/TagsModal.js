import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

class TagsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  handleTags = () => {
    let array = [];
    let checkboxes = document.getElementsByTagName("input");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
        array.push(checkboxes[i].value);
      }
    }
    console.log(array);
    const config = {
      method: "put",
      baseURL: `http://localhost:8080/${this.props.auth0.user.email}`,
      data: {
        tags: array,
      },
    };
    // @ts-ignore
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Food Tags</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body id="chech">
            <Form.Check inline value="pork" label="Pork Free" id="pork" />
            <Form.Check
              inline
              value="alcohol"
              label="Alcohol Free"
              id="alcohol"
            />
            <Form.Check inline value="sugar" label="Sugar Free" />
            <Form.Check inline value="vegan" label="Vegan" />
            <Form.Check inline value="vegetarian" label="Vegetarian" />
            <Form.Check inline value="gluten" label="Gluten Free" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.handleClose}>
              Discard
            </Button>
            <Button variant="primary" onClick={this.handleTags}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default withAuth0(TagsModal);
