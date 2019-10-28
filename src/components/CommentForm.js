import React, {Component} from 'react';
import { Modal, ModalBody, ModalHeader, Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'

export default class CommentForm extends Component{
  constructor(props) {
    super(props);
  }

  state= {
    isModalOpen: false
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit = (values) => {
    alert(`Current state is ${JSON.stringify(values)}`);
  }
  required = val => val;
  minimumLength = len => val => !val || val.length > len;
  maxLength = len => val => !val || val.length < len;
  selected = val => val;

  render() {
    
    return(
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Send a Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label md={10}>Rating</Label>
                <Col md={10}>
                  <Control.select 
                    model=".rating"
                    name='rating'
                    className="form-control"
                    validators={{
                      required: this.required
                    }}
                    >
                    <option selected value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </Control.select>
                </Col>
                
              </Row>
              <Errors
                model='.rating'
                show="touched"
                className="text-danger"
                messages={{required: "Select a rating!"}}
              ></Errors>
              <Row className="form-group">
                <Label for="yourname" md={4}>Your Name</Label>
                <Col md={10}>
                  <Control.text 
                    model=".yourname" 
                    className="form-control" 
                    placeholder="Your Name" 
                    name='yourname' 
                    id="yourname"
                    show="touched"
                    validators={{
                      required: this.required, 
                      minimumLength: this.minimumLength(3), 
                      maxLength: this.maxLength(40)
                    }}
                  >
                  </Control.text>
                </Col>
              </Row>
              <Errors
                  className="text-danger"
                  model=".yourname"
                  show="touched"
                  messages={{
                      required:"Name is Required! ",
                      minimumLength:"Minimum length is 3! ",
                      maxLength:"Maximum length is 40!"
                  }}
              ></Errors>
              <Row className="form-group">
                <Label md={10} for="comment">Write your Comment</Label>
                <Col md={10}>
                  <Control.textarea
                    model=".yourcomment" 
                    className="form-control"
                    placeholder="Your Comment" 
                    name='yourcomment' 
                    id="yourcomment"
                    validators={{
                      required: this.required, 
                      minimumLength: this.minimumLength(5), 
                      maxLength: this.maxLength(40)
                    }}
                    rows={6}
                  >
                  </Control.textarea>
                </Col>
              </Row>
              <Errors
                  className="text-danger"
                  model=".yourcomment"
                  show="touched"
                  messages={{
                    required:"Comment is Required! ",
                    minimumLength:"Minimum length is 5! ",
                    maxLength: "Maximum length is 40!"
                  }}
              ></Errors>
              <Button type="submit" color="primary">Send Comment</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button onClick={this.toggleModal} outline className="fa fa-pencil lg">Send a comment</Button>
      </>
    );
  }
}

