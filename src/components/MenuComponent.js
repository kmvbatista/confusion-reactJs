import React, {useState} from 'react';
import {Card, CardImgOverlay, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

export default function Menu( props ) {
  const [dishes, setDishes] = useState(props.Dishes);
  const [dishSelected, setDishSelected] = useState();

  const menu = dishes.map( dish => {
    return (
      <div 
        key= {dish.id} 
        className= "col-12 col-md-5"
        onClick = {() => {setDishSelected(dish)}}
      >
        <Card >
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
            </CardBody>
        </Card>
      </div>
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
      <div className="row col-12">
        {RenderDish()}
      </div>
    </div>
  );
} 