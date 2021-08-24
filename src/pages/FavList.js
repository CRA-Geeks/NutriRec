
import React, { Component } from 'react'
import axios from "axios"
import { Card, Row, Col, Button } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withAuth0 } from "@auth0/auth0-react";


export class FavList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favArr: []
    }
  }
  componentDidMount = () => {
    console.log("hello")
    if(this.props.auth0.isAuthenticated){ 
    let url = `http://localhost:8080/user/${this.props.auth0.user.email}`
    axios.get(url).then(res => {
    this.setState({
        favArr: res.data.favorite,
      })
    }).catch((error)=>{console.error(error)})
  }
  }

  render() {
    return (
      <>
      <Header/>
        <h1>Fav List</h1>
        <Row>
          {this.state.favArr.length > 0 &&
            this.state.favArr.map((item) => {
              return (
                <Col lg={3} md={6} sm={12}>
                  <Card style={{ width: "18rem", height: "33rem" }}>
                    <Card.Img variant="top" src={item.image} alt = ".." />
                    <Card.Body>
                      <Card.Title>{item.label}</Card.Title>
                      <a href={item.url}>
                        <Button variant="primary">
                          Know More About Recipe
                        </Button>
                      </a>
                      <Button>Delete</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Footer/>



      </>
    )
  }
}

export default withAuth0(FavList)
