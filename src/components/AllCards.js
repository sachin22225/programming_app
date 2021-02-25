import React, { Component } from "react";
import BlogCard from "./BlogCard";
import { Pagination } from "antd";
import "./styles/AllCards.css";

export class AllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 2,
      error: null,
      isLoaded: true,
      items: [
        {
          id: "1",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 1",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "2",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 2",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "3",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 3",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "4",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 4",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "5",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 5",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "6",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 6",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
        {
          id: "7",
          image: "Rectangle12.jpeg",
          heading: "How to make career in web development 7",
          introduction:
            "In my role leading product teams as a part of Facebook's New Product Experimentation, we’re focused on that hazy “0 to 1” stage of building, where ideas are unproven and products are in their most nascent stages.",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (value) => {
    this.setState({
      minValue: (value - 1) * 2,
      maxValue:
        value * 2 < this.state.items.length
          ? value * 2
          : this.state.items.length,
    });
  };
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="AllCards">
          {items &&
            items.length > 0 &&
            items
              .slice(this.state.minValue, this.state.maxValue)
              .map((item) => (
                <BlogCard
                  image={item.image}
                  heading={item.heading}
                  introduction={item.introduction}
                />
              ))}
          <div className="Pagination">
            <Pagination
              defaultCurrent={1}
              defaultPageSize={2}
              onChange={this.handleChange}
              total={items.length}
            />
          </div>
        </div>
      );
    }
  }
}

export default AllCards;
