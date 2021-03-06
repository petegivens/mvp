import React from 'react';
import Item from './Item.jsx';

const ItemList = ({items}) => (
  <div id="itemList">

    {items.map((item, index) =>
      <Item item={item} key={index} />
    ).reverse()}
  </div>
);

export default ItemList;
