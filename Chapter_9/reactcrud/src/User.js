import React, { Component } from "react";
//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { Table, Button } from 'react-bootstrap';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {}
    };
    this.add = this.add.bind(this);
  }

  add(e) { 
    this.props.history.push("/add");   
    } 

  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        let returnArr = [];
        snapshot.forEach((data) => {
          var user = data.val();
          user["key"] = data.key;
          returnArr.push(user);
        });
        this.setState({
          users: returnArr,
        });
        console.log(snapshot.val());
      });
  }
  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Edit</td>
        <td>Remove</td>
      </tr>
    ));

    return (
      <div>
        <Button variant="primary" onClick={this.add}>Add</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
      </div>
    );
  }
}
export default User;
