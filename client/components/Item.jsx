import React from 'react';

const Item = ({item, name}) => (
  <div className="well">
    <div className="row">
      <div className="col-xs-8">
        <h3>{item.description}</h3>
        <p>Qty: {item.quantity}</p>
        <p>Offered by: {item.seller}</p>
        <p>Comments: {item.comments}</p>
      </div>
      <div className="col-xs-4">
        <div className={item.type}></div>
      </div>
    </div>
  </div>
);

export default Item;
