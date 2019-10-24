import React, {useState} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';


export default function Menu( {Dishes} ) {
  const [dishes, setDishes] = useState(Dishes);
  const [dishSelected, setDishSelected] = useState();

  const menu = dishes.map( dish => {
    return (
      <>
        <div 
          key= {dish.id} 
          className= "col-12 col-md-5"
        >
          <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
              </CardBody>
          </Card>
        </div>
        <DishDetail></DishDetail>
      </>
    );
  });

  const RenderDish = () => {
    if(dishSelected) {
      return(
        <Card>
          <CardImg width="100%" src={dishSelected.image} alt={dishSelected.name}></CardImg>
          <CardBody>
            <CardTitle>{dishSelected.name}</CardTitle>
            <CardText>{dishSelected.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  return(
    <div className="container">
      <div className= "row">
        {menu}
      </div>
      <div className="row">
        <div className= "col-12 col-md-5">
          {RenderDish()}
        </div>
      </div>
    </div>
  );
} 