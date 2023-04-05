import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <div>
      {foodItems.map(foodItem => <MenuItem foodItem={foodItem} key={foodItem.itemName} />)}
    </div>
  );
}

export default MenuList;
