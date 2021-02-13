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
                    userName: "Abhishek Shukla10",
                    likes: 5,
                    isLiked: false,
                    commnet: "Hello There !"

                },
                {
                    id: 2,
                    datetime: "Jan 10, 2021",
                    userName: "Ankit9",
                    likes: 17,
                    isLiked: true,
                    commnet: "This is a comment box prototype"

                },
                {
                    id: 3,
                    datetime: "Jan 30, 2021",
                    userName: "Rahul Pandey8",
                    likes: 60,
                    isLiked: false,
                    commnet: "Can't find how to put reply feature !! :-("

                },
                {
                    id: 4,
                    datetime: "Feb 5, 2021",
                    userName: "Aditya Pratap Singh7",
                    likes: 200,
                    isLiked: true,
                    commnet: "Whether you’re a product manager innovating within a larger company, or building a brand new early-stage product at a startup, the JTBD framework works to create better, non-obvious insights about your audience. Ultimately, the core value of this framework is that it provides an approach to gathering an understanding of who your user is, and what their motivations and hopes are. You as the founder or product leader are left to determine how to translate this into what matters most for your product — combining great intuition with great information gathering to make better bets on where to invest resources."

                },

                {
                    id: 5,
                    datetime: "Feb 1, 2021",
                    userName: "Rahul Kr.6",
                    likes: 1501,
                    isLiked: false,
                    commnet: "Hi ! Rahul here."

                },
                {
                    id: 6,
                    datetime: "Feb 1, 2021",
                    userName: "Priya Singh5",
                    likes: 0,
                    isLiked: false,
                    commnet: "Useful !!"

                },
                {
                    id: 7,
                    datetime: "Feb 10, 2021",
                    userName: "Rishabh Verma4",
                    likes: 10000000,
                    isLiked: true,
                    commnet: "Uneasy leis the head, that wears the crown !"

                },
                {
                    id: 8,
                    datetime: "Feb 11, 2021",
                    userName: "MVRSVLN Shastry3",
                    likes: 257,
                    isLiked: true,
                    commnet: "Nice work beta !"

                },
                {
                    id: 9,
                    datetime: "Feb 12, 2021",
                    userName: "Vivek2",
                    likes: 123456,
                    isLiked: false,
                    commnet: "Amazing Content..."

                },
                {
                    id: 10,
                    datetime: "Feb 12, 2021",
                    userName: "Abhishek Singh1",
                    likes: 1000,
                    isLiked: false,
                    commnet: "Sunita Mohanty, a Product Lead in Facebook's New Product Experimentation group JTBD is by no means a new way of thinking. But it can be confusing to get started with, since it’s heavy on the corporate strategy jargon and has been reinvented many times over. A quick Google search reveals a bevy of confusing terms, from the debate over jobs-as-progress and jobs-as-activities, or the competing visualizations of maps and hierarchies. I’ve also found that JTBD has a bit of a consulting-esque vibe and seems less vision-driven, which can be off-putting to many product-driven founders. If you’re looking for a deep-dive into the jobs-to-be-done theory and how others apply it, I recommend reading through this primer from The Christensen Institute, this article from Harvard Business Review, Alan Klement’s overview of two different interpretations and Intercom’s guide. But if you’re looking for something a bit more lightweight and accessible for startup product teams, read on for my simplified approach to JTBD."

                }
            ],

            modelShow: false,
            noOfCommentsDisplayed: 3

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

    loadMoreComments = () => {
        this.setState({
            noOfCommentsDisplayed: this.state.noOfCommentsDisplayed + 3
        })
    }

    printALLComments = () => {
        let temp = [];
        let count = 0;

        for (let i = this.state.allComments.length - 1; i >= 0; i--, count++) {
            if (this.state.noOfCommentsDisplayed === count)
                break;
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
        }


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

                    <Button
                        className="loadMoreButton"
                        variant="primary"
                        size="lg"
                        onClick={this.loadMoreComments}
                        style={{
                            display:
                                this.state.noOfCommentsDisplayed >= this.state.allComments.length
                                    ? "none"
                                    : "block"
                        }}
                    >
                        Load More</Button>
                </div>

            </Container>
        )
    }
}

export default CommentBox
