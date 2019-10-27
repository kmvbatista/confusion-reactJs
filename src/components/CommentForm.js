import React, {Component} from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap'
export default class CommentForm extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <Modal>
          <ModalHeader>Send a Comment</ModalHeader>
          <ModalBody></ModalBody>
        </Modal>
        <Button outline className="fa fa-pen lg">Send a comment</Button>
      </>
    );
  }
}

