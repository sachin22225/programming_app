import React, { Component } from 'react'
import "./styles/IconContainer.css";
import BlueCircleIcon from './media/BlueCircleIcon.svg'
import ShareIcon from './media/ShareIcon.svg'
import BookmarkIcon from './media/BookmarkIcon.svg'
export class IconFloating extends Component {
    render() {
        return (
            <div className="iconContainer">
                <div className="ShareIcon">
                    <img src={BlueCircleIcon} alt="Float Icon" />
                    <img className="circleContent" src={ShareIcon} alt="" />
                </div>

                <div className="BookmarkIcon">
                    <img src={BlueCircleIcon} alt="Float Icon" />
                    <img className="circleContent" src={BookmarkIcon} alt="" />
                </div>
            </div>
        )
    }
}

export default IconFloating
