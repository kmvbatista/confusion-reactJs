import React, {useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Col, Label,
     Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [telNumber, setTelNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isAgreeChecked, setIsAgreeChecked] = useState(false);
    const [message, setMessage] = useState("");
    let [errorsState, setErrors] = useState({
        firstName: '',
        telNumber: '',
        email:''
    });
    let [touched, setTouched] = useState({
        firstName: false,
        telNumber: false,
        email:false
    });

    const handleBlur = (field) => (evt) => {
        setTouched(
            {...touched, [field]: true}
        );
    }

    const validate = () => {
        const errors = {
            firstName:'',
            telNumber:'',
            email:''
        }
        if(touched.firstName && firstName.length <=2){
            errors.firstName = 'firstname should be greater than 2 characters'
        }
        const reg = /^\d+$/;
        if(touched.telNumber && !reg.test(telNumber)){
            errors.telNumber = 'tel number should only have numbers'
        }
        if(touched.email && email.split('').filter(x => x ==='@').length!==1){
            errors.email = 'invalid email'
        }
        return errors;
    }

    const errors = validate();

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
                                    valid= {errors.firstName ===''}
                                    invalid = {errors.firstName !==''}
                                    onChange={(event)=> {setFirstName(event.target.value)}}
                                    onBlur={handleBlur('firstName')}
                                >
                                </Input>
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Label for="telNumber" md={2}>Telefone Number</Label>
                            <Col md={10}>
                                <Input 
                                    type="tel" 
                                    id="telNumber"
                                    name="telNumber"
                                    placeholder="Tel. Number"
                                    value={telNumber}
                                    valid= {errors.telNumber ===''}
                                    invalid = {errors.telNumber !==''}
                                    onChange={(event)=> {setTelNumber(event.target.value)}}
                                    onBlur={handleBlur('telNumber')}
                                >
                                </Input>
                                <FormFeedback>{errors.telNumber}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup  row>
                            <Label for="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input 
                                    type="email" 
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    valid= {errors.email ===''}
                                    invalid = {errors.email !==''}
                                    onChange={(event)=> {setEmail(event.target.value)}}
                                    onBlur={handleBlur('email')}
                                >
                                </Input>
                                <FormFeedback>{errors.email}</FormFeedback>
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
                                    onChange={(event, value)=> {setMessage(value)}}
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