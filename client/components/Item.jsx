import React from 'react';

const Item = ({item, name}) => (
  <div className="row">
    <div className="col-xs-8">
      <h3>{item.description}</h3>
      <p>Qty: {item.quantity}</p>
      <p>Offered by: {item.seller}</p>
    </div>
    <div className="col-xs-4">
      <img src='https://www.picpng.com/uploads/small/Pills_PNG_40947.png' />
    </div>
  </div>
);

export default Item;
