import React from 'react';

const Item = ({item}) => (
  <div className="item">
    <p>{item.description}</p>
    <p>Qty: {item.quantity}</p>
    <img src={item.imageUrl} />
  </div>
);

export default Item;
