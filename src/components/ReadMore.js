import React, { Component } from 'react'
import CardsContainer from './CardsContainer'
import "./styles/ReadMore.css";

export class ReadMore extends Component {
    render() {
        return (
            <div className="readMore">
                <div className="heading"><span>Read more</span></div>
                <CardsContainer />
            </div>
        )
    }
}

export default ReadMore
