import React, { Component } from 'react'
import "./styles/CardNew.css";
// import { Card } from 'react-bootstrap';

export class CardNew extends Component {
    render() {
        return (
            <div className="card">
                <a href={this.props.CardLink}>
                    {/* Note: ImgSrc.type */}

                    <img className="cardImg" src={this.props.ImgSrc.type} alt="card_Image" />
                    {/* <img className="cardImg" src={this.props.ImgSrc} alt="card_Image" /> */}
                    <div className="cardText">{this.props.Text}</div>

                </a>
            </div >
        )
    }
}

export default CardNew
