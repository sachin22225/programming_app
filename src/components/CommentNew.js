import React, { Component } from 'react'
import UserImg from './media/UserImg.svg'
import "./styles/CommentNew.css"
import heartUnlike from "./media/heartUnlike.svg";
import heartLike from "./media/heartLike.svg";
export class CommentNew extends Component {

    handleLikeButtonClick = (e) => {
        let operation;
        if (this.props.isLiked === false)
            operation = "+";

        else
            operation = "-";

        let index = parseInt(e.target.getAttribute("index"));
        this.props.updateLikeCount(index, operation);
    }

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

                    <div className="commentText">{this.props.text}</div>

                    <div className="commentFooter">
                        <span
                            index={this.props.index}
                            onClick={this.handleLikeButtonClick}
                            style={{ fontWeight: this.props.isLiked ? 700 : null }}
                        >
                            {this.props.likes === 0 ? null : this.props.likes}

                        </span>

                        <img index={this.props.index} onClick={this.handleLikeButtonClick}
                            src={this.props.isLiked ? heartLike : heartUnlike} alt="unlike-icon" />
                    </div>

                </div>
            </div >
        );
    }
}

export default CommentNew
