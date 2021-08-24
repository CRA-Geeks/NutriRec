import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
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

    const config = {
      method: "put",
      baseURL: `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`,
      data: {
        tags: array,
      },
    };
    // @ts-ignore
    axios(config)
      .then((res) => {
        Swal.fire("Good job!", "Your Preferences are saved ", "success");
        this.props.handleClose();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Food Tags</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body id="chech">
            <Form.Check inline value="Pork-Free" label="Pork Free" id="pork" />
            <Form.Check
              inline
              value="Alcohol-Free"
              label="Alcohol Free"
              id="alcohol"
            />
            <Form.Check inline value="Sugar-Free" label="Sugar Free" />
            <Form.Check inline value="Vegan" label="Vegan" />
            <Form.Check inline value="Vegetarian" label="Vegetarian" />
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
