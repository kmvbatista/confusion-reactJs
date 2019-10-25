import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [telNumber, setTelNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isAgreeChecked, setIsAgreeChecked] = useState(false);
    const [message, setMessage] = useState("");

  return (
    <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form>
                        <FormGroup  row>
                            <Label for="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input 
                                    type="text" 
                                    id="firstname"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={setFirstName}
                                >
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Label for="telnum" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input 
                                    type="tel" 
                                    id="telnum"
                                    placeholder="Tel. Number"
                                    value={telNumber}
                                    onChange={setTelNumber}
                                >
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Label for="telnum" md={2}>Email</Label>
                            <Col md={10}>
                                <Input 
                                    type="email" 
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={setEmail}
                                >
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Col md={{size:6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                            type="checkbox"
                                            nam="agree"
                                            checked={isAgreeChecked}
                                            onChange={() => setIsAgreeChecked(!isAgreeChecked)}
                                        />
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="message" md="2">Your feedback</Label>
                            <Col md={10}>
                                <Input 
                                    type="textarea"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={setMessage}
                                ></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
  ); 
}