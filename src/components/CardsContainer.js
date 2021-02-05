import React, { Component } from 'react'
import CardNew from "./CardNew";
import "./styles/CardsContainer.css";
import BlogThumbnail from "./media/BlogThumbnail.jpg"

export class CardsContainer extends Component {
    render() {
        return (
            <div className="cardsContainer">
                <CardNew
                    // ImgSrc={"https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg-1024x512.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala."}
                    CardLink={"#Card1"}
                />

                <CardNew
                    // ImgSrc={"https://probella.com/wp-content/uploads/2018/03/React-JS.png"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala."}
                    CardLink={"#Card2"}
                />
                <CardNew
                    // ImgSrc={"https://themetechmount.com/wp-content/uploads/2020/07/reactnative.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala."}
                    CardLink={"#Card3"}
                />
                <CardNew
                    // ImgSrc={"https://www.colocationamerica.com/wp-content/uploads/2020/02/ethical-hacking.jpg"}
                    ImgSrc={<BlogThumbnail />}
                    Text={"How we started the organization Programming Pathshala."}
                    CardLink={"#Card4"}
                />
            </div>
        )
    }
}

export default CardsContainer;
