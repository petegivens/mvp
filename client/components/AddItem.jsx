// Functional Component Syntax:
import React from 'react';

const AddItem = ({handleSubmit}) => {
  return (
    <div>
      <h4>Post an Item</h4>
      <form onSubmit={handleSubmit}>
        <label>Item Description: </label>
        <input type="text" name="description" />
        <label> Quantity Available: </label>
        <input type="text" name="quantity" />
        <label>Comments: </label>
        <input type="textarea" name="comments" />
        <input type="submit" value="Post Item" />
      </form>
    </div>
  )
}

export default AddItem;
