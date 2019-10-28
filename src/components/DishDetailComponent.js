import React, {Component} from 'react';
import getDateFormatted from '../services/getDateFormatted';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
  Modal, ModalBody, ModalHeader, Button, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'

export default function DishDetails(props) {
  if(!props.dish) {
    return(
      <div>
      </div>
    );
  }

  function RenderDish() {
    if(props.dish) {
      return(
        <Card>
          <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
          <CardBody>
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  function RenderComments(){
    return(
      <>
      <h2>Comments</h2>
      {props.comments.map( comm => {
        return(
          <div key={comm.id}>
            <p>{comm.comment}</p>
            <p>-- {comm.author}, {getDateFormatted(comm.date)}</p>
          </div>
        );
      })}
      </>
      
    );
  }

  return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish></RenderDish>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments></RenderComments>
            <CommentForm dishId= {props.dish.id} addComment={props.addComment}></CommentForm>
          </div>
        </div>
      </div>
  );
}

class CommentForm extends Component{
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
    debugger;
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }
  required = val => val;
  minimumLength = len => val => !val || val.length > len;
  maxLength = len => val => !val || val.length < len;
  selected = val => val;

  render() {
    
    return(
      <>
        <Button onClick={this.toggleModal} outline className="fa fa-pencil lg">Send a comment</Button>
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
                <Label for="author" md={4}>Your Name</Label>
                <Col md={10}>
                  <Control.text 
                    model=".author" 
                    className="form-control" 
                    placeholder="Your Name" 
                    name='author' 
                    id="author"
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
                  model=".author"
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
                    model=".comment" 
                    className="form-control"
                    placeholder="Your Comment" 
                    name='comment' 
                    id="comment"
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
                  model=".comment"
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
      </>
    );
  }
}
