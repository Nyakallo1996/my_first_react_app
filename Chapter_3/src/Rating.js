import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

class Rating extends Component {
  render() {
    return (
      <div>
        <h1>Rating: {this.props.rating}</h1>
        {this.props.rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />}
      </div>
    );
  }
}
export default Rating;
