import React from 'react';
import getDateFormatted from '../services/getDateFormatted';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';


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
            <p>{comm.author}, {getDateFormatted(comm.date)}</p>
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
          </div>
        </div>
        
      </div>
  );
}
