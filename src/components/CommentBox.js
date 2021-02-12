import React, { Component } from 'react'
import "./styles/CommentBox.css"
import { Container, Form, Button, Modal } from 'react-bootstrap';
import CommentNew from "./CommentNew"


export class CommentBox extends Component {
    constructor() {
        super();
        //input textBox ref
        this.inputTBCommentRef = React.createRef();

        this.state = {
            allComments: [
                {
                    id: 1,
                    datetime: "Dec 30, 2020",
                    userName: "Abhishek Shukla",
                    likes: 5,
                    isLiked: false,
                    commnet: "Hello There !"

                },
                {
                    id: 2,
                    datetime: "Jan 10, 2021",
                    userName: "Ankit",
                    likes: 50,
                    isLiked: true,
                    commnet: "This is a comment box prototype"

                },
                {
                    id: 3,
                    datetime: "Jan 30, 2021",
                    userName: "Rahul Pandey",
                    likes: 60,
                    isLiked: false,
                    commnet: "Can't find how to put reply feature !! :-("

                },
                {
                    id: 4,
                    datetime: "Feb 5, 2021",
                    userName: "Aditya Pratap Singh",
                    likes: 200,
                    isLiked: true,
                    commnet: "Whether you’re a product manager innovating within a larger company, or building a brand new early-stage product at a startup, the JTBD framework works to create better, non-obvious insights about your audience. Ultimately, the core value of this framework is that it provides an approach to gathering an understanding of who your user is, and what their motivations and hopes are. You as the founder or product leader are left to determine how to translate this into what matters most for your product — combining great intuition with great information gathering to make better bets on where to invest resources."

                }
            ],

            modelShow: false
        }
    }

    // updateLikeCount = (index) => {
    //     var tempComment = this.state.allComments;//shallow copy
    //     tempComment[index].likes++;

    //     this.setState({
    //         allComments: tempComment
    //     })
    // }

    updateLikeCount = (index, operation) => {
        let currentLikes = this.state.allComments[index].likes; //deep copy


        let tempCommentObj = {
            id: this.state.allComments[index].id,
            datetime: this.state.allComments[index].datetime,
            userName: this.state.allComments[index].userName,
            likes: currentLikes,
            isLiked: this.state.allComments[index].isLiked,
            commnet: this.state.allComments[index].commnet
        }

        if (operation === "+") {
            tempCommentObj.likes++;
            tempCommentObj.isLiked = true;
        }

        else {
            tempCommentObj.likes--;
            tempCommentObj.isLiked = false;
        }

        this.setState({
            allComments: [...this.state.allComments.slice(0, index),
                tempCommentObj,
            ...this.state.allComments.slice(index + 1)]
        })
    }

    // updateLikeCount = (index) => {
    //The spread operator makes deep copies of data if the data is not nested.
    //     let tempComment = [...this.state.allComments];//shallow copy
    //     tempComment[index].likes++;
    //     this.setState({ tempComment });
    // }


    handleShowModal = () => {
        this.setState({
            modelShow: true
        })

        setTimeout(this.handleCloseModal, 1000);
    }

    handleCloseModal = () => {
        this.setState({
            modelShow: false
        })
    }

    getModal = () => {
        return (
            <Modal className="modelCommentBox"
                size="sm"
                /*centered*/
                show={this.state.modelShow}
                onHide={this.handleCloseModal}
            >
                <Modal.Header className="modelHeader" closeButton>
                    <Modal.Body className="modalText">Comment added !</Modal.Body>
                </Modal.Header>

            </Modal>
        )

    }


    printALLComments = () => {
        let temp = [];
        for (var i = this.state.allComments.length - 1; i >= 0; i--)
            temp.push(
                <CommentNew key={i}
                    index={i}
                    text={this.state.allComments[i].commnet}
                    userName={this.state.allComments[i].userName}
                    datetime={this.state.allComments[i].datetime}
                    likes={this.state.allComments[i].likes}
                    isLiked={this.state.allComments[i].isLiked}
                    updateLikeCount={this.updateLikeCount}
                />
            );

        // temp = this.state.allComments.map((ele, index) => {
        //     return (<GetComment key={index} text={ele} />);
        // })

        if (temp.length === 0)
            return <i>No comments to display...</i>


        return temp;
    }

    getDateTime = () => {
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var today = new Date();
        return today.toLocaleDateString("en-US", options);
        // var dateWithoutSecond = new Date();
        // var options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        // return dateWithoutSecond.toLocaleTimeString([], options)
    }

    getUserName = () => {
        return "Current User";
    }

    handleClick = () => {
        if (this.inputTBCommentRef.current.value !== "" && this.inputTBCommentRef.current.value !== null && this.inputTBCommentRef.current.value.trim() !== "") {
            var tempComment = {
                id: 100,
                datetime: this.getDateTime(),
                userName: this.getUserName(),
                likes: 0,
                isLiked: false,
                commnet: this.inputTBCommentRef.current.value
            }

            this.setState({
                allComments: this.state.allComments.concat(tempComment)
            })
            this.handleShowModal();
        }

        this.inputTBCommentRef.current.value = "";
        this.inputTBCommentRef.current.focus();
    }


    render() {
        return (

            <Container>
                <div className="commmentBoxContainer">
                    <div className="commentBoxHeading"><span>Comments</span></div>

                    <Form.Control ref={this.inputTBCommentRef} placeholder="New Comment !" as="textarea" rows={4} cols={20} />
                    {this.getModal()}

                    <Button onClick={this.handleClick} variant="primary" size="lg">Post Comment</Button>

                    <div className="allPostedComment">
                        {this.printALLComments()}
                    </div>

                </div>

            </Container>
        )
    }
}

export default CommentBox
