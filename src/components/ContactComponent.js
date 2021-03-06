import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Label, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

export default function Contact(props) {

    const handleSubmit = (values) => {
        props.postFeedback(values);
        props.resetFeedbackForm();
    }

    const required = val => val && val.length;
    const maxLength = len => val => !(val) || val.length <= len;
    const minLength = len => val => (val && val.length > len);
    const isNumber = val => !isNaN(Number(val));
    const validEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.*-]+\.[A-Z]{2,4}$/i.test(value);

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
                    <Form model="feedback" onSubmit={(values) => { handleSubmit(values) }}>
                        <Row className="form-group">
                            <Label for="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".firstname"
                                    name="firstname"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="First Name"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                >
                                </Control.text>
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required! ',
                                        minLength: 'Minimum length is 3! ',
                                        maxLength: 'Maximum length is 15! '
                                    }}
                                ></Errors>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label for="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".lastname"
                                    name="lastname"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Last Name"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                >
                                </Control.text>
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required! ',
                                        minLength: 'Minimum length is 3! ',
                                        maxLength: 'Maximum length is 15! '
                                    }}
                                ></Errors>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label for="telNumber" md={2}>Telefone Number</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".telNumber"
                                    id="telNumber"
                                    name="telNumber"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(8),
                                        maxLength: maxLength(13),
                                        isNumber
                                    }}
                                >
                                </Control.text>
                                <Errors
                                    show="touched"
                                    className="text-danger"
                                    model=".telNumber"
                                    messages={{
                                        required: 'Required! ',
                                        minLength: 'Must be greateer than 8 characters! ',
                                        maxLength: 'Must be lower than 15 characters! ',
                                        isNumber: 'Must be a number! '
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label for="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="form-control"
                                    validators={{ validEmail }}
                                >
                                </Control.text>
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".email"
                                    messages={{
                                        validEmail: 'Invalid email!'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox
                                            name="agree"
                                            model=".agree"
                                            className="form-check-input"
                                        />
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Label
                                model=".contactType"
                                md={2}
                                for="contactType"
                            >
                                <strong>Contact Type</strong>
                            </Label>
                            <Col md={2}>
                                <Control.select
                                    model=".contactType"
                                    name='contactType'
                                    id="contactType"
                                    className="form-control"
                                    validators={{
                                        required: required
                                    }}
                                >
                                    <option selected value={'Tel.'}>Tel</option>
                                    <option value={'email'}>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Errors
                            model='.rating'
                            show="touched"
                            className="text-danger"
                            messages={{ required: "Select a rating!" }}
                        ></Errors>
                        <Row className="form-group">
                            <Label for="message" md="2">Your feedback</Label>
                            <Col md={10}>
                                <Control.textarea
                                    className="form-control"
                                    model=".message"
                                    id="message"
                                    name="message"
                                ></Control.textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}