import React, {useState} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom'


export default function Menu( {Dishes} ) {

  const menu = Dishes.map( dish => {
    return (
      <>
        <div 
          key= {dish.id} 
          className= "col-12 col-md-5"
        >
          <Link to={`/menu/${dish.id }`}>
            <Card >
              <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                </CardBody>
            </Card>
          </Link>
        </div>
        <DishDetail></DishDetail>
      </>
    );
  });

  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>Menu</h3>
        <hr/>
      </div>
      <div className= "row">
        {menu}
      </div>
    </div>
  );
} 