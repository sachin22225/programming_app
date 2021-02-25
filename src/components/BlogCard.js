import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import "./styles/BlogCard.css";

export class BlogCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        <img src={`images/${this.props.image}`} />
        <div className="content">
          <h6>{this.props.heading}</h6>
          <p>{this.props.introduction}</p>
          <div>
            <Button type="primary" size="small">
              Read Blog
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
