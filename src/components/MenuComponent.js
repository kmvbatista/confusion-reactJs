import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';

export default function Menu({ dishes }) {

  const menu = dishes.dishes.map(dish => {
    return (
      <>
        <div
          key={dish.id}
          className="col-12 col-md-5"
        >
          <Link to={`/menu/${dish.id}`} key={dish.id}>
            <Card key={dish.id}>
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

  if (dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>
    );
  }

  if (dishes.errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{dishes.errorMessage}</h4>
        </div>
      </div>
    );
  }

  return (
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
        <hr />
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
} 