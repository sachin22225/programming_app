import React, { Component } from "react";
import NavBar from "./NavBar";
import "./styles/Home.css";
import Topics from "./Topics";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Content } from "antd/lib/layout/layout";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.setTopics = this.setTopics.bind(this);
  }
  handleSearchText(event) {
    const value = event.target.value;
    this.setState({
      searchText: value,
    });
  }
  setTopics() {}
  render() {
    return (
      <div className="Home">
        <NavBar />
        <div className="Search">
          <Input.Search
            size="large"
            placeholder="Search for blogs"
          ></Input.Search>
        </div>
        <div>
          <Topics />
        </div>
      </div>
    );
  }
}

export default Home;
