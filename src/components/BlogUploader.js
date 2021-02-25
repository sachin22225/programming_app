import React, { Component } from "react";
import NavBar from "./NavBar";
import "./styles/BlogUploader.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";

export class BlogUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
      paragraph: "",
      showImageUploadModal: false,
      selectedImageToUpload: null,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleHeadingChange = this.handleHeadingChange.bind(this);
    this.handleParagraphChange = this.handleParagraphChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeImageUploadModal = this.closeImageUploadModal.bind(this);
    /*this.onFileChange =this.onFileChange.bind(this);*/
  }
  handleImageUpload() {
    console.log("Clicked");
    this.setState({
      showImageUploadModal: true,
    });
  }
  closeImageUploadModal() {
    this.setState({
      showImageUploadModal: false,
    });
  }
  onFileChange = (event) => {
    event.preventDefault();
    if (event.target.files[0].size > 2097152) {
      this.setState({
        selectedImageToUpload: "",
      });
      console.log("in if");
    }
    /*else{
            this.setState({
                selectedImageToUpload:event.target.files[0]
            });
            console.log("in else");
        }; */
  };
  handleHeadingChange(event) {
    const value = event.target.value;
    this.setState({
      heading: value,
    });
  }
  handleParagraphChange(event) {
    const value = event.target.value;
    this.setState({
      paragraph: value,
    });
  }
  handleSubmit(event) {
    console.log(this.state.heading);
    console.log(this.state.paragraph);
    event.preventDefault();
  }

  render() {
    return (
      <div className="BlogUploader">
        <Modal
          show={this.state.showImageUploadModal}
          onHide={this.closeImageUploadModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input id="file" type="file" onChange={this.onFileChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeImageUploadModal}>
              Close
            </Button>
            <Button variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
        <NavBar />
        <div className="ImageUploader">
          <p id="heading">Upload Blog hero image</p>
          <div className="ImageArea">
            <CloudUploadOutlinedIcon
              color="primary"
              fontSize="large"
              onClick={this.handleImageUpload}
            />
          </div>
          <p id="text">Image should not be greater than 2MB</p>
        </div>
        <input
          type="text"
          value={this.state.heading}
          placeholder="Put your heading here"
          onChange={this.handleHeadingChange}
        />
        <textarea
          type="text"
          value={this.state.paragraph}
          placeholder="Put your paragraph here"
          onChange={this.handleParagraphChange}
        />
        <button className="button" onClick={this.handleSubmit}>
          Submit for review
        </button>
      </div>
    );
  }
}
export default BlogUploader;
