import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import AllCards from "./AllCards";
import "./styles/Topics.css";

const { TabPane } = Tabs;

export class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [
        "DS & Algos",
        "Frontend Dev",
        "Android Dev",
        "Backend Dev",
        "ML/AI",
        "Designing",
        "Marketing",
      ],
    };
  }
  /*componentDidMount() {
        fetch("./staticjson.json/items")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      } */
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Topics">
          <Tabs defaultActiveKey="2" centered>
            {items.map((item) => (
              <TabPane tab={item} key={item}>
                <AllCards />
              </TabPane>
            ))}
          </Tabs>
        </div>
      );
    }
  }
}

export default Topics;
