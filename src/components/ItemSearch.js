import axios from "axios";
import {
  Modal,
  FormControl,
  Button,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

import React, { Component } from "react";

export default class ItemSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: {},
      searchText: "",
    };
  }

  handleFoodInfo = (e) => {
    e.preventDefault();

    let url = `http://localhost:8080/nuteri?food=${this.state.searchText}`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data;

        this.setState({
          foodInfo: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Search For Specific item (like beef,Tomato,Nutella ..... etc)</p>
          <FormControl
            id="food"
            type="text"
            className="mb-2"
            placeholder="Search for food"
            onChange={(e) =>
              this.setState({
                searchText: e.target.value,
              })
            }
          />
          {this.state.foodInfo.calories === 0 && (
            <div className="alert alert-danger" role="alert">
              there is no data matching your search
            </div>
          )}
          <ListGroup>
            <ListGroupItem>
              <span>Calories : {this.state.foodInfo.calories}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Weight : {this.state.foodInfo.weight}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Glucose sugar :{this.state.foodInfo.suger}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Vegetarian : {this.state.foodInfo.vegetarian}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Peanut : {this.state.foodInfo.peanut}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Pork : {this.state.foodInfo.pork}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Al-cohol : {this.state.foodInfo.alcohol}</span>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleFoodInfo}>Search</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

/*<div className="container">
          <h4 className="neonText">
            If you are looking for the characteristics of a specific ingredient
            such as tomato or cheese,
          </h4>
          <h5 className="neonText">just search for it:</h5>
        </div>
        <form
        // onSubmit={(e) => this.handleFoodInfo(e)}
        >
          <InputGroup className="mb-3">
            <FormControl
              name="food"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
        </form>
        {this.state.foodInfo == 0 && (
          <div className="alert alert-danger" role="alert">
            there is no data matching your search
          </div>
        )}
        <ListGroup>
          <ListGroupItem>
            <span>Calories : {this.state.foodInfo.calories}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Weight : {this.state.foodInfo.weight}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Glucose sugar :{this.state.foodInfo.suger}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Vegetarian : {this.state.foodInfo.vegetarian}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Peanut : {this.state.foodInfo.peanut}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Pork : {this.state.foodInfo.pork}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span>Al-cohol : {this.state.foodInfo.alcohol}</span>
          </ListGroupItem>
        </ListGroup> */
