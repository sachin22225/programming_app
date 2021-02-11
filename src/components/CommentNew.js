import React, { Component } from 'react'
import UserImg from './media/UserImg.svg'
import "./styles/CommentNew.css"

export class CommentNew extends Component {

    // getDateTime = () => {
    //     var options = { year: 'numeric', month: 'short', day: 'numeric' };
    //     var today = new Date();
    //     return today.toLocaleDateString("en-US", options);
    //     // var dateWithoutSecond = new Date();
    //     // var options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    //     // return dateWithoutSecond.toLocaleTimeString([], options)
    // }

    // getUserName = () => {
    //     return "Abhishek Shukla";
    // }

    render() {
        return (
            <div className="newComment">
                <div className="commentUserImg">
                    <img src={UserImg} alt="userDP" />
                </div>

                <div className="commentContent">
                    <div className="commentHeader">
                        <div className="userName">{this.props.userName}</div>
                        <div className="commentDate">{this.props.datetime}</div>
                    </div>

                    <div>{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default CommentNew
