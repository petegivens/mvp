import React from 'react';
import Item from './Item.jsx';

const ItemList = ({items}) => (
  <div id="itemList">
    <h3>Items Available:</h3>
    {items.map((item, index) =>
      <Item item={item} key={index} />
    )}
  </div>
);

export default ItemList;
