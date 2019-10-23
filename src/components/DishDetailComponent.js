import React from 'react';
import getDateFormatted from '../services/getDateFormatted'

export default function DishDetails({Dish}) {
  if(!Dish) {
    return(
      <div>
      </div>
    );
  }
  return(
    <div>
      <h2>Comments</h2>
      {Dish.comments.map( comm => {
        return(
            <div key={comm.id}>
              <p>{comm.comment}</p>
              <p>{comm.author}, {getDateFormatted(comm.date)}</p>
            </div>
        );
      })}
    </div>
  );
}
