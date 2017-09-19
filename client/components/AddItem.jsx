// Functional Component Syntax:
import React from 'react';

const AddItem = ({handleSubmit}) => {
  return (
    <div>
      <h4>Post an Item</h4>
      <form onSubmit={handleSubmit}>
        <label>Item Description: </label><br/>
        <input type="text" name="description" />

        <div className="radioGroup">
          <label>
            <input id="radio1" type="radio" name="drugType" value="pill" />
            Pills
          </label>

          <label>
            <input id="radio2" type="radio" name="drugType" value="powder" />
            Powder
          </label>

          <label>
            <input id="radio3" type="radio" name="drugType" value="liquid" />
            Liquid
          </label>
        </div>

        <label> Quantity Available: </label><br/>
        <input type="text" name="quantity" /><br/>
        <label>Comments: </label><br/>
        <input type="text" name="comments" /><br/>
        <input type="submit" value="Post Item" />
      </form>
    </div>
  )
}

export default AddItem;
