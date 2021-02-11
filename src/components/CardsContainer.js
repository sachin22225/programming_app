import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNew from "./CardNew";
import "./styles/CardsContainer.css";
import { Carousel } from 'react-bootstrap';
import BlogThumbnail from "./media/BlogThumbnail.jpg"

export class CardsContainer extends Component {
    constructor() {
        super();
        this.state = {
            windowWidth: window.innerWidth
        }
    }



    handleResize = () => {
        //using  callback fun to make sure if is execuetd after state is set
        this.setState({ windowWidth: window.innerWidth }, () => {
            // console.log(this.state.windowWidth);
        });

    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }


    // componentWillUnmount() {
    //     document.removeEventListener("resize", this.handleResize);
    // }

    getCarouselOfCard = () => {
        return (
            //interval=null is for stopping the autoplay
            <Carousel interval={null}>
                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CardNew
                            // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                            ImgSrc={<BlogThumbnail />}
                            Text={"How we started the organization Programming Pathshala.1"}
                            CardLink={"#Card1"}

                        />
                        <br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CardNew
                            // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                            ImgSrc={<BlogThumbnail />}
                            Text={"How we started the organization Programming Pathshala.2"}
                            CardLink={"#Card2"}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CardNew
                            // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                            ImgSrc={<BlogThumbnail />}
                            Text={"How we started the organization Programming Pathshala.3"}
                            CardLink={"#Card3"}
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CardNew
                            // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                            ImgSrc={<BlogThumbnail />}
                            Text={"How we started the organization Programming Pathshala.4"}
                            CardLink={"#Card4"}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    }

    getNormalListOfCards = () => {
        return (
            <div className="cardsContainer">
                <CardNew
                    // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala.1"}
                    CardLink={"#Card1"}
                />

                <CardNew
                    // ImgSrc={"https://probella.com/wp-content/uploads/2018/03/React-JS.png"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala.2"}
                    CardLink={"#Card2"}
                />
                <CardNew
                    // ImgSrc={"https://themetechmount.com/wp-content/uploads/2020/07/reactnative.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala.3"}
                    CardLink={"#Card3"}
                />
                <CardNew
                    // ImgSrc={"https://www.colocationamerica.com/wp-content/uploads/2020/02/ethical-hacking.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala.4"}
                    CardLink={"#Card4"}
                />
            </div>

        )
    }
    render() {
        if (this.state.windowWidth <= 575)
            return (this.getCarouselOfCard())
        else
            return (this.getNormalListOfCards())
    }
}

export default CardsContainer;
