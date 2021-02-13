import React, { Component } from 'react'
import UserImg from './media/UserImg.svg'
import "./styles/CommentNew.css"
import heartUnlike from "./media/heartUnlike.svg";
import heartLike from "./media/heartLike.svg";
import { Overlay, Tooltip } from 'react-bootstrap';

export class CommentNew extends Component {
    constructor() {
        super();
        this.likeRef = React.createRef();
        this.state = {
            showToolTip: false,
            windowWidth: window.innerWidth
        }

    }

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    handleHoverOnLikes = () => {
        this.setState({
            showToolTip: true
        })
    }

    handleHoverAwayFromLikes = () => {
        this.setState({
            showToolTip: false
        })
    }

    handleLikeButtonClick = (e) => {
        let operation;
        if (this.props.isLiked === false)
            operation = "+";

        else
            operation = "-";

        let index = parseInt(e.target.getAttribute("index"));
        this.props.updateLikeCount(index, operation);
    }

    formattLikesCount = (num) => {
        let digits = 2;//no of digits after decimal

        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "K" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
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
                            onMouseEnter={this.handleHoverOnLikes}
                            onMouseLeave={this.handleHoverAwayFromLikes}
                            ref={this.likeRef}
                            index={this.props.index}
                            onClick={this.handleLikeButtonClick}
                            style={{ fontWeight: this.props.isLiked ? 700 : null }}
                        >
                            {this.props.likes === 0 ? null : this.formattLikesCount(this.props.likes)}

                        </span>
                        <Overlay
                            target={this.likeRef.current}
                            show={this.state.showToolTip}
                            placement={this.state.windowWidth <= 575 ? "top" : "left"}
                        >
                            <Tooltip>{this.props.likes}</Tooltip>
                        </Overlay>

                        <img index={this.props.index} onClick={this.handleLikeButtonClick}
                            style={{ marginLeft: this.props.likes === 0 ? 0 : "5px" }}
                            src={this.props.isLiked ? heartLike : heartUnlike} alt="unlike-icon" />
                    </div>

                </div>
            </div >
        );
    }
}

export default CommentNew
