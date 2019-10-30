import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';

function RenderCard({item, errorMessage}) {
  if(errorMessage) {
    return(
      <div>
        <h4>
          {errorMessage}
        </h4>
      </div>
    );
  }
  return(
    <Card>
      <CardImg src={item.image} alt={item.name}></CardImg>
      <CardBody>
        <CardTitle>
          {item.name}
        </CardTitle>
        {item.designation && <CardSubtitle>{item.designation}</CardSubtitle>}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default function Home(props) {
  if(props.dishesLoading || props.promotionsLoading || props.leadersLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            errorMessage= {props.dishesErrorMessage}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard 
            item = {props.leader}
            errorMessage= {props.leadersErrorMessage}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard 
            item={props.promotion}
            errorMessage={props.promotionsErrorMessage}
          ></RenderCard>
        </div>
      </div>
    </div>
  );
}