// Functional Component Syntax:
import React from 'react';

const AddItem = ({handleSubmit, signedIn}) => {
  if (signedIn) {
    return (
      <div className="well">
        <h4>Post an Item</h4>
        <form onSubmit={handleSubmit}>
          <select name="type">
          <option value="pill">Pills</option>
          <option value="powder">Powder</option>
          <option value="liquid">Liquid</option>
          </select><br/>
          <label>Item Description: </label><br/>
          <input type="text" name="description" /><br/>


          <label> Quantity Available: </label><br/>
          <input type="text" name="quantity" /><br/>
          <label>Comments: </label><br/>
          <input type="text" name="comments" /><br/>
          <input type="submit" value="Post Item" />
        </form>
      </div>
    )
  } else {
    return (
      <div className="well">
        <h4>Please sign in to sell drugs!</h4>
      </div>
    )
  }
}

export default AddItem;
