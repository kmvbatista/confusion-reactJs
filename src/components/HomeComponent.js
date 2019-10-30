import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';

function RenderCard({item}) {
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
  if(props.dishesLoading || props.promotionsLoading) {
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
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item = {props.leader}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion}></RenderCard>
        </div>
      </div>
    </div>
  );
}